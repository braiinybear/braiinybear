import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

interface FormData {
    name: string;
    motherName: string;
    fatherName: string;
    courseName: string;
    email: string;
    phoneNo: string;
    address: string;
    aadharCardNo: string;
    userImage: File | null;
    aadharFront: File | null;
    aadharBack: File | null;
    marksheets: File[];
}

interface UploadedImage {
    url: string;
    name: string;
}

interface UploadedMarksheet {
    url: string;
    name: string;
}

interface ICourse {
    id: string;
    title: string;
}

const Registration: React.FC = () => {
    const location = useLocation();
    const [courses, setCourses] = useState<ICourse[]>([]);
    const [loadingCourses, setLoadingCourses] = useState(true);

    const [formData, setFormData] = useState<FormData>({
        name: "",
        motherName: "",
        fatherName: "",
        courseName: location.state?.courseName || "",
        email: "",
        phoneNo: "",
        address: "",
        aadharCardNo: "",
        userImage: null,
        aadharFront: null,
        aadharBack: null,
        marksheets: [],
    });

    const [uploadedImages, setUploadedImages] = useState<{
        userImage?: UploadedImage;
        aadharFront?: UploadedImage;
        aadharBack?: UploadedImage;
        marksheets: UploadedMarksheet[];
    }>({
        marksheets: [],
    });

    const [fieldUploadStatus, setFieldUploadStatus] = useState<{
        userImage: boolean;
        aadharFront: boolean;
        aadharBack: boolean;
        marksheets: boolean;
    }>({
        userImage: false,
        aadharFront: false,
        aadharBack: false,
        marksheets: false,
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState("");
    const [submitStatus, setSubmitStatus] = useState<{
        type: "success" | "error" | null;
        message: string;
    }>({ type: null, message: "" });

    // Fetch courses on component mount
    useEffect(() => {
        const fetchCourses = async () => {
            try {
                setLoadingCourses(true);
                const response = await fetch("https://braiinybear-admin.vercel.app/api/courses");
                // const response = await fetch("http://localhost:3000/api/courses");

                if (response.ok) {
                    const data = await response.json();
                    setCourses(data.courses || []);
                }
            } catch (error) {
                console.error("Error fetching courses:", error);
                // Keep courses as empty array on error
            } finally {
                setLoadingCourses(false);
            }
        };

        fetchCourses();
    }, []);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleAutoUpload = async (name: string, files: FileList) => {
        // Set loading status for the specific field
        setFieldUploadStatus((prev) => ({
            ...prev,
            [name as keyof typeof fieldUploadStatus]: true,
        }));

        try {
            if (name === 'marksheets') {
                const marksheetResults: UploadedMarksheet[] = [];
                for (let i = 0; i < files.length; i++) {
                    const file = files[i];
                    // Cloudinary handles naming automatically with unsigned uploads usually
                    const result = await uploadToCloudinary(file);
                    marksheetResults.push(result);
                }
                setUploadedImages((prev) => ({
                    ...prev,
                    marksheets: marksheetResults,
                }));
            } else {
                // Single file upload (Aadhar Front/Back)
                const file = files[0];
                const result = await uploadToCloudinary(file);
                setUploadedImages((prev) => ({
                    ...prev,
                    [name]: result,
                }));
            }
        } catch (error) {
            console.error(`Error auto-uploading ${name}:`, error);
            setSubmitStatus({
                type: 'error',
                message: `Failed to upload ${name}. Please try again.`,
            });
        } finally {
            setFieldUploadStatus((prev) => ({
                ...prev,
                [name as keyof typeof fieldUploadStatus]: false,
            }));
        }
    };

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, files } = e.target;
        if (files && files.length > 0) {
            if (name === 'marksheets') {
                // Handle multiple files for marksheets
                setFormData((prev) => ({
                    ...prev,
                    marksheets: Array.from(files),
                }));
            } else {
                // Handle single file for other inputs
                setFormData((prev) => ({
                    ...prev,
                    [name]: files[0],
                }));
            }

            // Trigger auto-upload
            await handleAutoUpload(name, files);
        }
    };

    const uploadToCloudinary = async (
        file: File
    ): Promise<UploadedImage> => {
        const uploadFormData = new FormData();
        uploadFormData.append('file', file);
        uploadFormData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET || '');

        const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
        if (!cloudName) {
            throw new Error("VITE_CLOUDINARY_CLOUD_NAME is not defined in .env");
        }

        const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`, {
            method: 'POST',
            body: uploadFormData,
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Cloudinary upload error:', errorData);
            throw new Error(errorData.message || 'Upload failed');
        }

        const result = await response.json();

        return {
            url: result.secure_url,
            name: result.original_filename,
        };
    };

    const validateForm = (): boolean => {
        // Check required fields
        if (!formData.name.trim()) {
            setSubmitStatus({ type: "error", message: "Name is required" });
            return false;
        }
        if (!formData.motherName.trim()) {
            setSubmitStatus({ type: "error", message: "Mother's name is required" });
            return false;
        }
        if (!formData.fatherName.trim()) {
            setSubmitStatus({ type: "error", message: "Father's name is required" });
            return false;
        }
        if (!formData.courseName.trim()) {
            setSubmitStatus({ type: "error", message: "Course name is required" });
            return false;
        }
        if (!formData.phoneNo.trim()) {
            setSubmitStatus({ type: "error", message: "Phone number is required" });
            return false;
        }
        if (!formData.address.trim()) {
            setSubmitStatus({ type: "error", message: "Address is required" });
            return false;
        }
        if (!formData.aadharCardNo.trim()) {
            setSubmitStatus({ type: "error", message: "Aadhar card number is required" });
            return false;
        }

        // Validate Aadhar card number (12 digits)
        if (!/^\d{12}$/.test(formData.aadharCardNo)) {
            setSubmitStatus({
                type: "error",
                message: "Aadhar card number must be 12 digits",
            });
            return false;
        }

        // Validate phone number (10 digits)
        if (!/^\d{10}$/.test(formData.phoneNo)) {
            setSubmitStatus({
                type: "error",
                message: "Phone number must be 10 digits",
            });
            return false;
        }

        // Validate email if provided
        if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            setSubmitStatus({
                type: "error",
                message: "Please enter a valid email address",
            });
            return false;
        }

        // Check required files
        if (!formData.userImage) {
            setSubmitStatus({
                type: "error",
                message: "User photo (passport size) is required",
            });
            return false;
        }
        if (!formData.aadharFront) {
            setSubmitStatus({
                type: "error",
                message: "Aadhar card front image is required",
            });
            return false;
        }
        if (!formData.aadharBack) {
            setSubmitStatus({
                type: "error",
                message: "Aadhar card back image is required",
            });
            return false;
        }
        if (formData.marksheets.length === 0) {
            setSubmitStatus({
                type: "error",
                message: "At least one marksheet (10th or 12th) is required",
            });
            return false;
        }

        return true;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitStatus({ type: null, message: "" });

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setIsUploading(true);

        try {
            // Upload files to Cloudinary (if not already uploaded)
            let userImageResult = uploadedImages.userImage;
            let aadharFrontResult = uploadedImages.aadharFront;
            let aadharBackResult = uploadedImages.aadharBack;
            let marksheetResults = uploadedImages.marksheets;

            if (!userImageResult && formData.userImage) {
                setUploadProgress("Uploading user photo...");
                userImageResult = await uploadToCloudinary(formData.userImage);
                setUploadedImages((prev) => ({ ...prev, userImage: userImageResult }));
            }

            if (!aadharFrontResult && formData.aadharFront) {
                setUploadProgress("Uploading Aadhar front image...");
                aadharFrontResult = await uploadToCloudinary(formData.aadharFront);
                setUploadedImages((prev) => ({ ...prev, aadharFront: aadharFrontResult }));
            }

            if (!aadharBackResult && formData.aadharBack) {
                setUploadProgress("Uploading Aadhar back image...");
                aadharBackResult = await uploadToCloudinary(formData.aadharBack);
                setUploadedImages((prev) => ({ ...prev, aadharBack: aadharBackResult }));
            }

            if (marksheetResults.length === 0 && formData.marksheets.length > 0) {
                setUploadProgress("Uploading marksheets...");
                for (let i = 0; i < formData.marksheets.length; i++) {
                    const marksheet = formData.marksheets[i];
                    setUploadProgress(`Uploading marksheet ${i + 1} of ${formData.marksheets.length}...`);
                    const result = await uploadToCloudinary(marksheet);
                    marksheetResults.push(result);
                }
                setUploadedImages((prev) => ({ ...prev, marksheets: marksheetResults }));
            }

            if (!userImageResult || !aadharFrontResult || !aadharBackResult || marksheetResults.length === 0) {
                throw new Error("Some files failed to upload. Please try again.");
            }

            setIsUploading(false);
            setUploadProgress("Submitting registration...");

            // Submit form data with Cloudinary URLs
            const registrationData = {
                name: formData.name,
                motherName: formData.motherName,
                fatherName: formData.fatherName,
                courseName: formData.courseName,
                email: formData.email,
                phoneNo: formData.phoneNo,
                address: formData.address,
                aadharCardNo: formData.aadharCardNo,
                userImg: userImageResult.url,
                aadharFront: aadharFrontResult.url,
                aadharBack: aadharBackResult.url,
                marksheets: marksheetResults.map(m => m.url),
            };

            // const response = await fetch("http://localhost:3000/api/online-registration", {
            const response = await fetch("https://braiinybear-admin.vercel.app/api/online-registration", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(registrationData),
            });

            if (response.ok) {
                setSubmitStatus({
                    type: "success",
                    message: "Registration submitted successfully!",
                });
                // Reset form
                setFormData({
                    name: "",
                    motherName: "",
                    fatherName: "",
                    courseName: "",
                    email: "",
                    phoneNo: "",
                    address: "",
                    aadharCardNo: "",
                    userImage: null,
                    aadharFront: null,
                    aadharBack: null,
                    marksheets: [],
                });
                // Reset file inputs
                const fileInputs = document.querySelectorAll('input[type="file"]');
                fileInputs.forEach((input) => {
                    (input as HTMLInputElement).value = "";
                });
                // Keep uploaded images visible for a moment, then clear
                setTimeout(() => {
                    setUploadedImages({
                        marksheets: [],
                    });
                }, 5000);
            } else {
                setSubmitStatus({
                    type: "error",
                    message: "Registration failed. Please try again.",
                });
            }
        } catch (error) {
            setSubmitStatus({
                type: "error",
                message: `Upload error: ${error instanceof Error ? error.message : 'Please check your ImageKit configuration'}`,
            });
            console.error("Registration error:", error);
        } finally {
            setIsSubmitting(false);
            setIsUploading(false);
            setUploadProgress("");
        }
    };

    return (
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <Helmet>
                <title>Online Registration | BraiinyBear Educational and Training Society</title>
                <meta
                    name="description"
                    content="Register for courses at BraiinyBear Educational and Training Society. Fill out the online registration form to enroll."
                />
            </Helmet>

            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-8 py-10 text-center">
                        <h1 className="text-4xl font-bold text-white mb-2">
                            Online Registration
                        </h1>
                        <p className="text-blue-100 text-lg">
                            Join BraiinyBear Educational and Training Society
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="px-8 py-10">
                        {/* Status Messages */}
                        {submitStatus.type && (
                            <div
                                className={`mb-6 p-4 rounded-lg ${submitStatus.type === "success"
                                    ? "bg-green-50 border border-green-200 text-green-800"
                                    : "bg-red-50 border border-red-200 text-red-800"
                                    }`}
                            >
                                {submitStatus.message}
                            </div>
                        )}

                        {/* Upload Progress */}
                        {isUploading && uploadProgress && (
                            <div className="mb-6 p-4 rounded-lg bg-blue-50 border border-blue-200 text-blue-800">
                                <div className="flex items-center">
                                    <svg
                                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-800"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        ></circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        ></path>
                                    </svg>
                                    {uploadProgress}
                                </div>
                            </div>
                        )}

                        <div className="space-y-6">
                            {/* Personal Information Section */}
                            <div>
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">
                                    Personal Information
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Name */}
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                        >
                                            Full Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                            placeholder="Enter your full name"
                                            required
                                        />
                                    </div>

                                    {/* Mother's Name */}
                                    <div>
                                        <label
                                            htmlFor="motherName"
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                        >
                                            Mother's Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="motherName"
                                            name="motherName"
                                            value={formData.motherName}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                            placeholder="Enter mother's name"
                                            required
                                        />
                                    </div>

                                    {/* Father's Name */}
                                    <div>
                                        <label
                                            htmlFor="fatherName"
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                        >
                                            Father's Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="fatherName"
                                            name="fatherName"
                                            value={formData.fatherName}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                            placeholder="Enter father's name"
                                            required
                                        />
                                    </div>

                                    {/* Course Name */}
                                    <div>
                                        <label
                                            htmlFor="courseName"
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                        >
                                            Course Name <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            id="courseName"
                                            name="courseName"
                                            value={formData.courseName}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                            required
                                            disabled={loadingCourses}
                                        >
                                            <option value="">
                                                {loadingCourses ? "Loading courses..." : "Select a course"}
                                            </option>
                                            {courses.map((course) => (
                                                <option key={course.id} value={course.title}>
                                                    {course.title}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Information Section */}
                            <div>
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">
                                    Contact Information
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Phone Number */}
                                    <div>
                                        <label
                                            htmlFor="phoneNo"
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                        >
                                            Phone Number <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            id="phoneNo"
                                            name="phoneNo"
                                            value={formData.phoneNo}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                            placeholder="10-digit phone number"
                                            maxLength={10}
                                            required
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                        >
                                            Email <span className="text-gray-400">(Optional)</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>

                                    {/* Address */}
                                    <div className="md:col-span-2">
                                        <label
                                            htmlFor="address"
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                        >
                                            Address <span className="text-red-500">*</span>
                                        </label>
                                        <textarea
                                            id="address"
                                            name="address"
                                            value={formData.address}
                                            onChange={handleInputChange}
                                            rows={3}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                            placeholder="Enter your complete address"
                                            required
                                        />
                                    </div>

                                    {/* Aadhar Card Number */}
                                    <div className="md:col-span-2">
                                        <label
                                            htmlFor="aadharCardNo"
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                        >
                                            Aadhar Card Number <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="aadharCardNo"
                                            name="aadharCardNo"
                                            value={formData.aadharCardNo}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                            placeholder="12-digit Aadhar number"
                                            maxLength={12}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Document Upload Section */}
                            <div>
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">
                                    Document Upload
                                </h2>

                                <div className="space-y-6">
                                    {/* User Photo */}
                                    <div>
                                        <label
                                            htmlFor="userImage"
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                        >
                                            User Photo (Passport Size) <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="file"
                                                id="userImage"
                                                name="userImage"
                                                onChange={handleFileChange}
                                                accept="image/*"
                                                className="w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                                required
                                            />
                                        </div>
                                        {fieldUploadStatus.userImage && (
                                            <div className="mt-2 flex items-center text-blue-600 text-sm">
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Uploading to Cloud...
                                            </div>
                                        )}
                                        {formData.userImage && !fieldUploadStatus.userImage && (
                                            <p className="mt-2 text-sm text-green-600">
                                                ✓ {formData.userImage.name}
                                            </p>
                                        )}
                                        {uploadedImages.userImage && (
                                            <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                                                <p className="text-sm text-green-700 font-medium mb-2">✓ Uploaded to Cloud</p>
                                                <img
                                                    src={uploadedImages.userImage.url}
                                                    alt="User Photo"
                                                    className="w-full max-w-md rounded-lg shadow-md"
                                                />
                                            </div>
                                        )}
                                    </div>

                                    {/* Aadhar Front */}
                                    <div>
                                        <label
                                            htmlFor="aadharFront"
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                        >
                                            Aadhar Card (Front) <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="file"
                                                id="aadharFront"
                                                name="aadharFront"
                                                onChange={handleFileChange}
                                                accept="image/*"
                                                className="w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                                required
                                            />
                                        </div>
                                        {fieldUploadStatus.aadharFront && (
                                            <div className="mt-2 flex items-center text-blue-600 text-sm">
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Uploading to Cloudinary...
                                            </div>
                                        )}
                                        {formData.aadharFront && !fieldUploadStatus.aadharFront && (
                                            <p className="mt-2 text-sm text-green-600">
                                                ✓ {formData.aadharFront.name}
                                            </p>
                                        )}
                                        {uploadedImages.aadharFront && (
                                            <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                                                <p className="text-sm text-green-700 font-medium mb-2">✓ Uploaded to Cloudinary</p>
                                                <img
                                                    src={uploadedImages.aadharFront.url}
                                                    alt="Aadhar Front"
                                                    className="w-full max-w-md rounded-lg shadow-md"
                                                />
                                            </div>
                                        )}
                                    </div>

                                    {/* Aadhar Back */}
                                    <div>
                                        <label
                                            htmlFor="aadharBack"
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                        >
                                            Aadhar Card (Back) <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="file"
                                                id="aadharBack"
                                                name="aadharBack"
                                                onChange={handleFileChange}
                                                accept="image/*"
                                                className="w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                                required
                                            />
                                        </div>
                                        {fieldUploadStatus.aadharBack && (
                                            <div className="mt-2 flex items-center text-blue-600 text-sm">
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Uploading to Cloudinary...
                                            </div>
                                        )}
                                        {formData.aadharBack && !fieldUploadStatus.aadharBack && (
                                            <p className="mt-2 text-sm text-green-600">
                                                ✓ {formData.aadharBack.name}
                                            </p>
                                        )}
                                        {uploadedImages.aadharBack && (
                                            <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                                                <p className="text-sm text-green-700 font-medium mb-2">✓ Uploaded to Cloudinary</p>
                                                <img
                                                    src={uploadedImages.aadharBack.url}
                                                    alt="Aadhar Back"
                                                    className="w-full max-w-md rounded-lg shadow-md"
                                                />
                                            </div>
                                        )}
                                    </div>

                                    {/* Marksheets */}
                                    <div>
                                        <label
                                            htmlFor="marksheets"
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                        >
                                            10th or 12th Marksheets <span className="text-red-500">*</span>
                                            <span className="text-gray-500 text-xs ml-2">(You can select multiple files)</span>
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="file"
                                                id="marksheets"
                                                name="marksheets"
                                                onChange={handleFileChange}
                                                accept="image/*,application/pdf"
                                                multiple
                                                className="w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                                required
                                            />
                                        </div>
                                        {fieldUploadStatus.marksheets && (
                                            <div className="mt-2 flex items-center text-blue-600 text-sm">
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Uploading marksheets to Cloudinary...
                                            </div>
                                        )}
                                        {formData.marksheets.length > 0 && !fieldUploadStatus.marksheets && (
                                            <div className="mt-2">
                                                {formData.marksheets.map((file, index) => (
                                                    <p key={index} className="text-sm text-green-600">
                                                        ✓ {file.name}
                                                    </p>
                                                ))}
                                            </div>
                                        )}
                                        {uploadedImages.marksheets.length > 0 && (
                                            <div className="mt-3 space-y-3">
                                                {uploadedImages.marksheets.map((marksheet, index) => (
                                                    <div key={index} className="p-3 bg-green-50 border border-green-200 rounded-lg">
                                                        <p className="text-sm text-green-700 font-medium mb-2">
                                                            ✓ Marksheet {index + 1} uploaded to Cloudinary
                                                        </p>
                                                        {formData.marksheets[index]?.type === 'application/pdf' ? (
                                                            <a
                                                                href={marksheet.url}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="text-blue-600 hover:text-blue-800 underline"
                                                            >
                                                                View PDF: {marksheet.name}
                                                            </a>
                                                        ) : (
                                                            <img
                                                                src={marksheet.url}
                                                                alt={`Marksheet ${index + 1}`}
                                                                className="w-full max-w-md rounded-lg shadow-md"
                                                            />
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="pt-6">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center justify-center">
                                            <svg
                                                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <circle
                                                    className="opacity-25"
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                ></circle>
                                                <path
                                                    className="opacity-75"
                                                    fill="currentColor"
                                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                ></path>
                                            </svg>
                                            {isUploading ? "Uploading files..." : "Submitting..."}
                                        </span>
                                    ) : (
                                        "Submit Registration"
                                    )}
                                </button>
                            </div>
                        </div>
                    </form>

                    {/* Footer Note */}
                    <div className="bg-gray-50 px-8 py-4 border-t border-gray-200">
                        <p className="text-sm text-gray-600 text-center">
                            <span className="text-red-500">*</span> All fields marked with an
                            asterisk are required
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;
