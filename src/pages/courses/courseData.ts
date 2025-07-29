import img1 from "../../assets/courses/artificial insamination.webp";
import img2 from "../../assets/courses/dairy enterpreneurship.webp";
const img3 = "https://www.goatfarming.in/wp-content/uploads/2023/05/Goat-Farming-Advantages2.jpg";
import img4 from "../../assets/courses/refreshre training on ai.webp";
import img5 from "../../assets/courses/animal health worker.webp";

export type ICourse = {
  id: string;
  title: string;
  status: "Ongoing" | 'Finished';
  shortDescription: string;
  fullDescription: string;
  image?: string; // Optional image URL or path
  totalFee?: string;
  duration? : string;
  approvedBy?: string;
};


export const courseData:Array<ICourse> = [
  {
    id: "maitri-training",
    title: "Artificial Insemination Training",
    status: "Ongoing",
    image : img1,
    totalFee: "40000 + HOSTEL",
    duration: "3 MONTHS",
    approvedBy: "DEPARTMENT OF ANIMAL HUSBANDRY, GOV. OF INDIA",
    shortDescription:
      "Specialized training under MAITRI to equip individuals with hands-on skills in artificial insemination techniques for improving livestock reproductive efficiency.",
    fullDescription: `
### What is Artificial Insemination Training?

In artificial insemination, high quality male semen is tested and preserved in frozen form using liquid nitrogen. When a female comes into heat, the semen is thawed and inserted into the female's reproductive tract using a specialized device. It is a scientific breeding technique considered the most efficient for livestock development.

**कृत्रिम गर्भाधान क्या है?**  
उच्च गुणवत्ता वाला नर वीर्य तरल नाइट्रोजन में संग्रहीत किया जाता है। जब मादा पशु गर्मी में आती है, तो यह वीर्य गर्भाधान उपकरण द्वारा जननांगों में डाला जाता है। यह नस्ल सुधार के लिए अत्यंत उपयोगी तकनीक है।

### Why Artificial Insemination?

It eliminates the need for keeping bulls and allows for quality testing of progeny through controlled breeding.

**कृत्रिम गर्भाधान क्यों?**  
झोटा/सांड की गुणवत्ता की जांच संतति परीक्षण से की जा सकती है, जो केवल कृत्रिम गर्भाधान से संभव है।

### Where to Get Training?

Only certified institutes (approved by the Ministry of Agriculture, Government of India) can provide this training. One such institute is the **Innovation Artificial Insemination Training Institute**, which provides 90 days of practical training.

**प्रशिक्षण कहाँ से प्राप्त करें?**  
भारत सरकार से मान्यता प्राप्त संस्थानों से ही प्रशिक्षण प्राप्त करें, जैसे कि **इनोवेशन कृत्रिम गर्भाधान प्रशिक्षण संस्थान**।

### Who Should Perform AI?

Only certified MAITRI technicians should perform AI as per the **National Animal Wealth Policy 2013**.

**कृत्रिम गर्भाधान किससे करवाएं?**  
हमेशा प्रमाणित MAITRI तकनीशियन से ही करवाएं।
    `,
  },

{
  id: "dairy-entrepreneurship",
  title: "Dairy Entrepreneurship Training",
  status: "Ongoing",
  "totalFee": "6000 + HOSTEL",
  "duration": "21 DAYS",
  image : img2,
  "approvedBy": "DEPARTMENT OF ANIMAL HUSBANDRY, GOV. OF INDIA",
  shortDescription:
  "Comprehensive training focused on establishing modern dairy farms, enhancing milk processing, and promoting rural self-employment through dairy entrepreneurship.",
  fullDescription: `
### Objectives of Dairy Entrepreneurship

This training is designed to equip participants with practical knowledge to start and manage dairy-based ventures successfully.

1. **Generate self-employment** and provide essential infrastructure for the dairy sector.
2. **Establishment of modern dairy farms** for production of clean milk.
3. **Encourage heifer calf rearing** to conserve and develop high-quality breeding stock.
4. **Bring structural changes** in the unorganized sector to enable milk processing at the village level.
5. **Upgrade traditional milk handling technologies** to a commercial scale.
6. **Add value to milk** through processing and production of milk-based products.

---

### डेयरी उद्यमिता के उद्देश्य

यह प्रशिक्षण कार्यक्रम प्रतिभागियों को डेयरी आधारित व्यवसायों को शुरू करने और सफलतापूर्वक संचालित करने के लिए व्यावहारिक ज्ञान प्रदान करता है।

1. **स्वरोजगार सृजित करना** और डेयरी क्षेत्र के लिए बुनियादी ढांचा उपलब्ध कराना।
2. **स्वच्छ दूध के उत्पादन** के लिए आधुनिक डेयरी फार्मों की स्थापना।
3. **अच्छे प्रजनन स्टॉक के संरक्षण और विकास** के लिए बछिया पालन को प्रोत्साहित करना।
4. **असंगठित क्षेत्र में संरचनात्मक परिवर्तन लाना** ताकि दूध का प्रारंभिक प्रसंस्करण ग्राम स्तर पर किया जा सके।
5. **पारंपरिक तकनीक का उन्नयन**, ताकि दूध को व्यावसायिक स्तर पर संभाला जा सके।
6. **दुग्ध उत्पादों के प्रसंस्करण और उत्पादन** के माध्यम से दूध को अतिरिक्त मूल्य प्रदान करना।
  `,
},
{
  id: "goat-farming-training",
  title: "Goat Farming Training",
  status: "Ongoing",
  image : img3,
  "totalFee": "8,000",
  "duration": "7 DAYS",
  "approvedBy": "DEPARTMENT OF ANIMAL HUSBANDRY, GOV. OF INDIA",
  shortDescription:
    "Seven-day hands-on training for farmers and youth in goat breeding, healthcare, and marketing by Innovation AI Training Institute.",
  fullDescription: `
### Goat Farming Training

This seven-day Goat Farming Training, organized by the Innovation Artificial Insemination Training Institute, empowers farmers and unemployed youth with practical knowledge for self-employment in goat farming.

### Three Key Focus Areas:

**1. Breeding and Farm Setup:**  
- Breeding goats for improved milk and meat production  
- Eid market goat preparation  
- Achieving zero mortality maintenance  
- Low-cost goat shed construction using scientific methods

**2. Goat Health:**  
- Complete disease management and prevention  
- Training in the use of vaccine and medicine kits  
- Enabling farmers to self-treat their goats

**3. Marketing:**  
- Proper goat evaluation before purchase (10-point inspection)  
- Reliable selling techniques to avoid exploitation  
- Awareness against market scams (e.g., artificially inflated weight)

In the end, valid certificates are provided to support applications for loans and further opportunities.

---

### बकरी पालन प्रशिक्षण

**सात दिवसीय बकरी पालन प्रशिक्षण** किसान भाइयों और बेरोजगार युवाओं को **त्रिपक्षीय स्वरोजगार** का व्यावहारिक प्रशिक्षण प्रदान करता है।

### मुख्य बिंदु:

**1. नस्ल और शेड निर्माण:**  
- उन्नत नस्ल के दूध एवं मांस हेतु बकरी तैयार करना  
- ईद के लिए ब्रीडर बकरी तैयार करना  
- जीरो प्रतिशत मृत्यु दर बनाए रखना  
- वैज्ञानिक पद्धति से कम लागत में बकरी शेड निर्माण

**2. बकरी स्वास्थ्य देखभाल:**  
- बकरी के सभी रोगों की पहचान और रोकथाम  
- वैक्सीन किट और दवा किट की जानकारी  
- किसान स्वयं बकरियों का इलाज कर सकें

**3. विपणन प्रशिक्षण:**  
- बकरी खरीदने से पहले 10 बिंदुओं पर मूल्यांकन  
- विश्वसनीय बिक्री उपायों की जानकारी  
- बाजार धोखाधड़ी (केला खिलाकर वजन बढ़ाना आदि) से बचाव

**प्रशिक्षण के अंत में** ऋण आदि के लिए वैध प्रमाण पत्र प्रदान किए जाते हैं।
  `,
},
{
  id: "refresher-ai-training",
  title: "Refresher Artificial Insemination (AI) Training",
  status: "Ongoing",
  image : img4,
  shortDescription:
    "Five-day refresher training program for existing AI technicians to enhance knowledge and skills in artificial insemination techniques.",
  fullDescription: `
### Refresher Training on Artificial Insemination (AI)

We offer refresher training on Artificial Insemination for existing AI workers such as Paravets, Pasu Maitra, and other livestock service providers.

### Objective:
To refresh existing knowledge and enhance practical skills in AI techniques, thereby improving the efficiency and success rate of artificial insemination services.

### Duration:
- **5 days** of comprehensive training (including theory and hands-on practical sessions)
- Each batch undergoes structured learning under expert guidance

At the end of the training, valid certificates are awarded to all successful technicians.

---


### रिफ्रेशर कृत्रिम गर्भाधान (एआई) प्रशिक्षण

हम मौजूदा एआई वर्कर्स, पैरावेट्स, पशु मित्र, गोपाल कार्यकर्ता आदि के लिए रिफ्रेशर कृत्रिम गर्भाधान (AI) प्रशिक्षण प्रदान करते हैं।

### उद्देश्य:
उनके मौजूदा ज्ञान को ताज़ा करना और एआई तकनीक में कौशल प्रदान करना ताकि कार्य में गुणवत्ता और प्रदर्शन में सुधार हो सके।

### प्रशिक्षण अवधि:
- **5 दिन** का सैद्धांतिक और प्रायोगिक प्रशिक्षण  
- प्रत्येक बैच को विशेषज्ञों द्वारा मार्गदर्शन प्रदान किया जाता है

प्रशिक्षण के अंत में सभी सफल तकनीशियनों को **वैध प्रमाण पत्र** प्रदान किया जाता है।
  `,
},
{
  id: "maitri-worker-training",
  title: "Maitri Worker / Animal Health Worker (AHW) Training",
  status: "Ongoing",
    image : img5,
  shortDescription:
    "Certified 3-month training program under the Government of India to create rural animal health professionals for artificial insemination and primary veterinary services.",
  fullDescription: `
### Maitri Worker / Animal Health Worker (AHW) Training

This national-level program provides 3-month training to unemployed rural youth (minimum 10th pass), certified by the Government of India, to become **Maitri Workers / Animal Health Workers**. They are trained to run **animal service centers** or offer doorstep AI and basic veterinary care, creating sustainable rural self-employment.

---

### प्रशिक्षण केंद्र:
The only authorized training center by the **Department of Animal Husbandry & Agriculture Ministry, Government of India**, is located in **Hisar, Haryana**, with a branch in **Bathinda, Punjab**.

>  Before enrolling, verify the institute on the official government portal: [epashuhaat](https://epashuhaat.gov.in), as several fake centers use misleading names.

---

### योग्यता:
Minimum qualification is **10th pass** from any recognized board/institute in India.

---

### आवेदन का तरीका:
- ₹2000 Registration Fee
- ₹30,000 Training Fee
- Submit application with fees to the office or apply online at **[www.aitiindia.com](https://www.aitiindia.com)**

Training duration: **3 months** (including practical and theoretical learning)

---

### मासिक वेतन:
After completing the course, a certified Maitri Worker can easily earn ₹2000–₹3000 per day or ₹40,000–₹50,000 per month by providing AI and basic treatment services locally.

---

### सरकारी नियुक्ति एवं चयन का आधार:
Under government schemes like **Rashtriya Gokul Mission**, one Maitri Worker is appointed per 1000 animals. Many states have already implemented this, and candidates can apply when positions are announced.
  `,
},
  {
    "id": "veterinary-field-assistant",
    "title": "VETERINARY FIELD ASSISTANT",
    "totalFee": "80,000",
    "duration": "2 YEARS",
    image : "https://careertraining.mcneese.edu/common/images/1/16540/veterinary-assistant.jpg",
    "approvedBy": "SKILL INDIA , NSDC",
    "status": "Ongoing",
    "shortDescription": "Care for animals ➤ Assist veterinary doctors ➤ Learn treatment, vaccination & livestock care ➤ NSDC-certified ➤ Build a career in animal healthcare.",
    "fullDescription": `### What is a Veterinary Field Assistant?  
A Veterinary Field Assistant (VFA) supports veterinary doctors in treating and caring for animals. VFAs are trained in animal anatomy, basic treatment, vaccination, disease prevention, and livestock management. They work in animal hospitals, veterinary clinics, dairy farms, and government livestock departments.

### वेटरनरी फील्ड असिस्टेंट क्या होता है?  
वेटरनरी फील्ड असिस्टेंट (VFA) पशु चिकित्सकों की सहायता करता है और पशुओं की देखभाल, उपचार और टीकाकरण में प्रशिक्षित होता है। यह कोर्स पशु विज्ञान, सामान्य उपचार और पशुपालन प्रबंधन की जानकारी देता है। VFA पशु अस्पतालों, क्लीनिकों, डेयरी फार्म और सरकारी पशुपालन विभागों में कार्य करते हैं।

---

### Course Benefits  
- Learn animal healthcare, vaccination, and first aid  
- Training in livestock and poultry management  
- Field experience with real animals  
- Opportunities in public and private animal care sectors  
- Certified under Skill India and NSDC

### कोर्स के लाभ  
- पशुओं की देखभाल, टीकाकरण और प्राथमिक उपचार सीखें  
- पशुपालन और मुर्गी पालन प्रबंधन का प्रशिक्षण  
- असली पशुओं के साथ प्रैक्टिकल अनुभव  
- सरकारी व निजी क्षेत्रों में नौकरी के अवसर  
- स्किल इंडिया और NSDC से प्रमाणित कोर्स

---

### Duration and Fee  
- **Duration:** 2 Years  
- **Total Fee:** ₹80,000  

### अवधि और शुल्क  
- **अवधि:** 2 वर्ष  
- **कुल शुल्क:** ₹80,000  

---

### Eligibility Criteria  
- Minimum age: 17 years  
- Minimum qualification: 10th pass (12th preferred)  
- Students passionate about animals and rural development benefit most

### पात्रता मानदंड  
- न्यूनतम आयु: 17 वर्ष  
- न्यूनतम योग्यता: 10वीं पास (12वीं वरीयता प्राप्त)  
- पशुओं और ग्रामीण विकास में रुचि रखने वाले छात्रों के लिए उपयुक्त

---

### Career Opportunities After VFA  
After completing the course, students can work as animal care assistants in veterinary hospitals, dairy farms, NGOs, animal shelters, and livestock departments. They may also assist in vaccination drives and government animal welfare programs.

### VFA के बाद करियर के अवसर  
कोर्स के बाद छात्र पशु अस्पतालों, डेयरी फार्म, एनजीओ, पशु शरणालयों और पशुपालन विभागों में कार्य कर सकते हैं। वे टीकाकरण अभियानों और सरकारी पशु कल्याण कार्यक्रमों में भी योगदान दे सकते हैं।
`
  },
  {
    "id": "drone-pilot",
    "title": "DRONE PILOT",
    "totalFee": "36,500",
    image : "https://images.unsplash.com/photo-1506947411487-a56738267384?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHJvbmUlMjBwaWxvdHxlbnwwfHwwfHx8MA%3D%3D",
    "duration": "3 DAYS",
    "approvedBy": "OVCT VENTURE, DGCA CERTIFIED",
    "status": "Ongoing",
  shortDescription: "Learn the essential rules ➤ Fly a drone ➤ Get certified ➤ Complete process ➤ Fly with license.",
  fullDescription: `
## What is a Drone Pilot?
A drone pilot is a person who controls, navigates, and flies drones. Such pilots use drones for agriculture, surveying, photography, and surveillance. Drone pilots need technical knowledge, an understanding of flight rules, and proper training.  
After training from the institute, students are assisted in obtaining a license as per DGCA guidelines.  
After training, students gain detailed knowledge of drone operation, enabling them to work in various fields.  
Drone piloting is an emerging career with great employment opportunities.

### ड्रोन पायलट क्या होता है?
ड्रोन पायलट वह व्यक्ति होता है जो ड्रोन को नियंत्रित करता है, उसे निर्देशित करता है, और उड़ाता है। ऐसे पायलट कृषि, सर्वेक्षण, फोटोग्राफी और निगरानी जैसे कार्यों के लिए ड्रोन का उपयोग करते हैं। ड्रोन पायलट्स को तकनीकी ज्ञान, उड़ान नियमों की जानकारी और सही प्रशिक्षण की आवश्यकता होती है।  
संस्थान से प्रशिक्षण प्राप्त करने के बाद, छात्रों को DGCA के निर्देशों के अनुसार लाइसेंस प्राप्त करने में सहायता की जाती है।  
प्रशिक्षण के उपरांत छात्र को ड्रोन उड़ाने और संचालन की विशेष जानकारी दी जाती है, जिससे वह विभिन्न क्षेत्रों में कार्य कर सके।  
ड्रोन पायलटिंग एक उभरता हुआ करियर है, जिससे रोजगार के अच्छे अवसर मिलते हैं।

---

### What is the future of drone pilots in India?
The Government of India aims to make India a global drone hub by 2030. Under this plan, thousands of youth are being trained and made self-reliant through technical and professional education. The demand for drone pilots is increasing rapidly in agriculture, surveying, security, and other sectors.

### भारत में ड्रोन पायलटों का भविष्य क्या है?
भारत सरकार ने लक्ष्य निर्धारित किया है कि वर्ष 2030 तक भारत को ग्लोबल ड्रोन हब बनाया जाए। इस योजना के तहत हजारों युवाओं को प्रशिक्षित किया जा रहा है और तकनीकी एवं व्यावसायिक प्रशिक्षण देकर उन्हें आत्मनिर्भर बनाया जा रहा है। कृषि, सर्वेक्षण, सुरक्षा और अन्य क्षेत्रों में ड्रोन पायलटों की मांग तेजी से बढ़ रही है।

---

### How to Get a Drone Flying License in India: Registration Process
The Government of India mandates that every drone pilot must register on the Digital Sky platform. After training, the institute helps students complete the entire registration process. Once this process is complete, the student becomes eligible to fly drones and is awarded a DGCA-authorized certificate.

### भारत में ड्रोन उड़ाने का लाइसेंस कैसे प्राप्त करें: पंजीकरण प्रक्रिया
भारत सरकार द्वारा अनिवार्य किया गया है कि प्रत्येक ड्रोन पायलट को डिजिटल स्काई प्लेटफॉर्म पर पंजीकरण कराना आवश्यक है। प्रशिक्षण के पश्चात संस्थान छात्रों को पंजीकरण की पूरी प्रक्रिया सिखाता है। प्रक्रिया पूरी होने पर छात्र ड्रोन उड़ाने के लिए पात्र बन जाता है और डीजीसीए द्वारा अधिकृत प्रमाणपत्र प्राप्त करता है।

---

### Training Process:
Students are trained on specific rules to follow while flying drones. Expert trainers provide theoretical and practical sessions. After training, students can participate in competitions, projects, and assessments to gain professional experience. Upon successful completion, students receive a certificate.

### प्रशिक्षण प्रक्रिया:
छात्रों को ड्रोन उड़ाने के दौरान पालन करने वाले विशेष नियमों पर प्रशिक्षित किया जाता है। विशेषज्ञ प्रशिक्षक सैद्धांतिक और प्रायोगिक सत्र प्रदान करते हैं। प्रशिक्षण के बाद छात्र प्रतियोगिताओं, परियोजनाओं और परीक्षणों में भाग लेकर व्यावसायिक अनुभव प्राप्त करते हैं। सफलतापूर्वक प्रशिक्षण पूर्ण होने पर छात्रों को प्रमाण पत्र प्रदान किया जाता है।

---

### Eligibility Criteria:
- Student must be 18 years or older  
- Must have passed at least Class 10  
- Students interested in technology will benefit immediately from the training process

### पात्रता मानदंड:
- छात्र की आयु 18 वर्ष या उससे अधिक होनी चाहिए  
- न्यूनतम 10वीं कक्षा उत्तीर्ण होना अनिवार्य है  
- तकनीकी में रुचि रखने वाले छात्रों को प्रशिक्षण प्रक्रिया में तत्काल लाभ होगा

---

### Train Only Through DGCA Certified Institutes:
Only DGCA-certified institutes train pilots with over 200 hours of flying experience. Training from such institutes ensures easier license procurement as per prescribed standards. Institutes follow a curriculum set by certified trainers.

### केवल डीजीसीए प्रमाणित संस्थानों से ही प्रशिक्षण लें:
केवल डीजीसीए प्रमाणित संस्थान ही 200 घंटे से अधिक उड़ान अनुभव वाले प्रशिक्षित पायलट तैयार करते हैं। ऐसे संस्थानों से प्रशिक्षण लेने पर निर्धारित मानकों के अनुसार लाइसेंस प्राप्त करना आसान हो जाता है। संस्थान प्रमाणित प्रशिक्षकों द्वारा निर्धारित पाठ्यक्रम का पालन करते हैं।

---

### Employment Opportunities Through Drone Piloting:
With the growing use of drone technology, India’s drone industry is estimated to exceed ₹20,000 crore by 2030. There are immense job opportunities in agriculture spraying, surveying, photography, filmmaking, surveillance, and more. Students also receive financial assistance under government schemes to start their own drone ventures. Demand for drone pilots in India will multiply by 2025.

### ड्रोन पायलट के माध्यम से रोजगार के अपार अवसर:
ड्रोन तकनीक के बढ़ते उपयोग को ध्यान में रखते हुए अनुमान है कि भारत में वर्ष 2030 तक ड्रोन इंडस्ट्री ₹20,000 करोड़ से अधिक की हो जाएगी।  
कृषि में स्प्रे ड्रोन संचालन, सर्वेक्षण, फोटोग्राफी, फिल्म निर्माण, निगरानी और अन्य क्षेत्रों में रोजगार की अपार संभावनाएं हैं।  
छात्रों को विभिन्न सरकारी योजनाओं के अंतर्गत आर्थिक सहायता भी दी जाती है, जिससे वे अपने ड्रोन व्यवसाय शुरू कर सकें।  
2025 तक भारत में ड्रोन पायलटों की मांग कई गुना बढ़ जाएगी।
  `,
  },
  {
    "id": "cmsed-emt",
    "title": "CMS-ED + EMT",
    "totalFee": "15,000",
    "duration": "2 YEARS",
    image: "https://www.govtresult.in.net/wp-content/uploads/2022/08/cms-ed.webp",
    "approvedBy": "PARAMEDICAL COUNCIL, NEW DELHI",
    "status": "Ongoing",
    "shortDescription": "Become a certified healthcare professional ➤ Learn emergency medical skills ➤ Work in clinics, hospitals & ambulances ➤ Government-recognized ➤ Start your medical career.",
    "fullDescription": `### What is CMS-ED + EMT?  
CMS-ED (Community Medical Services and Essential Drugs) + EMT (Emergency Medical Technician) is a dual healthcare program designed to equip students with essential medical knowledge and emergency response skills. This course enables students to work in clinics, primary health centers, and ambulance services under certified supervision.

### CMS-ED + EMT क्या है?  
CMS-ED (कम्युनिटी मेडिकल सर्विसेज एंड एसेंशियल ड्रग्स) + EMT (इमरजेंसी मेडिकल टेक्नीशियन) एक संयुक्त स्वास्थ्य प्रशिक्षण पाठ्यक्रम है, जो छात्रों को प्राथमिक चिकित्सा और आपातकालीन सेवाओं में कार्य करने के लिए प्रशिक्षित करता है। इस कोर्स के माध्यम से छात्र क्लीनिक, अस्पताल और एम्बुलेंस सेवाओं में कार्य कर सकते हैं।

---

### Course Benefits  
- Learn to diagnose common illnesses and provide emergency care  
- Training in medical equipment handling, patient transport & CPR  
- Opportunity to work as medical assistant in rural or urban areas  
- Recognized by Paramedical Council, New Delhi  
- Ideal for starting a career in healthcare without MBBS

### कोर्स के लाभ  
- सामान्य बीमारियों की पहचान और प्राथमिक उपचार करना सीखें  
- मेडिकल उपकरणों का उपयोग, रोगी स्थानांतरण और CPR का प्रशिक्षण  
- ग्रामीण या शहरी क्षेत्रों में मेडिकल असिस्टेंट के रूप में कार्य का अवसर  
- पैरामेडिकल काउंसिल, नई दिल्ली द्वारा मान्यता प्राप्त  
- बिना एमबीबीएस के हेल्थकेयर क्षेत्र में करियर शुरू करने का सुनहरा मौका

---

### Duration and Fee  
- **Duration:** 2 Years  
- **Total Fee:** ₹15,000  

### अवधि और शुल्क  
- **अवधि:** 2 वर्ष  
- **कुल शुल्क:** ₹15,000  

---

### Eligibility Criteria  
- Minimum age: 17 years  
- Minimum qualification: 10th pass  
- Passion for serving in the healthcare sector is beneficial

### पात्रता मानदंड  
- न्यूनतम आयु: 17 वर्ष  
- न्यूनतम योग्यता: 10वीं पास  
- स्वास्थ्य सेवा में रुचि रखने वाले छात्रों को विशेष लाभ मिलेगा

---

### Career Opportunities After CMS-ED + EMT  
Students can work in clinics, rural hospitals, ambulance services, nursing homes, pathology labs, and first-aid centers. This course opens opportunities in private medical practice under supervision, and eligibility for registration as a paramedical practitioner in various states.

### CMS-ED + EMT के बाद करियर के अवसर  
छात्र क्लीनिक, ग्रामीण अस्पतालों, एम्बुलेंस सेवाओं, नर्सिंग होम्स, पैथोलॉजी लैब्स और प्राथमिक चिकित्सा केंद्रों में कार्य कर सकते हैं। यह कोर्स निजी चिकित्सा प्रैक्टिस और विभिन्न राज्यों में पैरामेडिकल पंजीकरण के लिए भी पात्रता प्रदान करता है।
`
  },
  {
    "id": "medical-laboratory-technician",
    "title": "MEDICAL LABORATORY TECHNICIAN",
    "totalFee": "30,000",
    "duration": "2 YEARS",
    image : " https://plus.unsplash.com/premium_photo-1661668908629-93e712f0d551?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "approvedBy": "PARAMEDICAL COUNCIL, NEW DELHI",
    "status": "Ongoing",
    "shortDescription": "Work in diagnostic labs ➤ Learn blood, urine & sample testing ➤ Gain hospital lab skills ➤ 2-year certified course ➤ Govt-recognized qualification.",
    "fullDescription": `### What is a Medical Laboratory Technician?  
A Medical Laboratory Technician (MLT) is trained to conduct diagnostic tests on blood, urine, stool, and other body samples. MLTs play a critical role in the detection, diagnosis, and treatment of diseases. They work in diagnostic labs, hospitals, clinics, and pathology centers, using advanced medical equipment and following proper safety protocols.

### मेडिकल लैबोरेटरी टेक्नीशियन क्या होता है?  
मेडिकल लैबोरेटरी टेक्नीशियन (MLT) वह व्यक्ति होता है जो खून, मूत्र, मल और अन्य जैविक नमूनों की जांच करता है। यह भूमिका रोगों की पहचान, निदान और उपचार में महत्वपूर्ण होती है। MLT अस्पतालों, डायग्नोस्टिक लैब्स और क्लीनिकों में अत्याधुनिक उपकरणों के साथ कार्य करते हैं।

---

### Course Benefits  
- Learn to perform laboratory tests accurately  
- Understand pathology, biochemistry, microbiology, and hematology  
- Gain hands-on training with real medical samples  
- Work opportunities in private and government labs  
- Approved by Paramedical Council, New Delhi

### कोर्स के लाभ  
- लैब परीक्षणों को सटीक रूप से करना सीखें  
- पैथोलॉजी, बायोकैमिस्ट्री, माइक्रोबायोलॉजी और हेमेटोलॉजी का ज्ञान  
- असली मेडिकल सैंपल्स के साथ प्रैक्टिकल ट्रेनिंग  
- निजी और सरकारी लैब्स में नौकरी के अवसर  
- पैरामेडिकल काउंसिल, नई दिल्ली द्वारा मान्यता प्राप्त

---

### Duration and Fee  
- **Duration:** 2 Years  
- **Total Fee:** ₹30,000  

### अवधि और शुल्क  
- **अवधि:** 2 वर्ष  
- **कुल शुल्क:** ₹30,000  

---

### Eligibility Criteria  
- Minimum age: 17 years  
- Minimum qualification: 10th pass (12th with science preferred)  
- Interest in biology and healthcare is beneficial

### पात्रता मानदंड  
- न्यूनतम आयु: 17 वर्ष  
- न्यूनतम योग्यता: 10वीं पास (विज्ञान विषय के साथ 12वीं वरीयता प्राप्त)  
- जीवविज्ञान और स्वास्थ्य सेवा में रुचि होना फायदेमंद है

---

### Career Opportunities After MLT  
After completing the course, students can work as lab technicians in diagnostic centers, pathology labs, hospitals, research labs, and blood banks. Opportunities also exist in pharmaceutical companies and public health departments.

### MLT के बाद करियर के अवसर  
कोर्स पूरा करने के बाद छात्र डायग्नोस्टिक सेंटर्स, पैथोलॉजी लैब्स, अस्पतालों, रिसर्च लैब्स और ब्लड बैंकों में कार्य कर सकते हैं। फार्मास्युटिकल कंपनियों और पब्लिक हेल्थ विभागों में भी अवसर उपलब्ध हैं।
`
  },
  {
    "id": "diploma-in-medical-laboratory-technician",
    "title": "DIPLOMA IN MEDICAL LABORATORY TECHNICIAN",
    "totalFee": "50,000",
    "duration": "2 YEARS",
    image : "https://scopecollege.co.in/wp-content/uploads/2017/10/Diploma-course-in-Medical-Laboratory-Technology.jpg",
    "approvedBy": "PARAMEDICAL COUNCIL, NEW DELHI",
    "status": "Ongoing",
    "shortDescription": "Master lab testing skills ➤ Learn pathology, microbiology & biochemistry ➤ Work in hospitals & diagnostic labs ➤ Govt-recognized diploma ➤ Launch a career in diagnostics.",
    "fullDescription": `### What is a Diploma in Medical Laboratory Technician?  
This diploma course trains students to work as skilled lab technicians who analyze blood, urine, tissue, and other body samples. Students learn to use medical lab equipment and follow diagnostic procedures used in hospitals, clinics, and pathology labs. The course is recognized by the Paramedical Council, New Delhi.

### डिप्लोमा इन मेडिकल लैबोरेटरी टेक्नीशियन क्या है?  
यह डिप्लोमा कोर्स छात्रों को प्रशिक्षित करता है ताकि वे कुशल लैब तकनीशियन बन सकें और खून, मूत्र, ऊतक और अन्य जैविक नमूनों का परीक्षण कर सकें। छात्र मेडिकल उपकरणों के उपयोग और निदान प्रक्रिया को सीखते हैं। यह कोर्स पैरामेडिकल काउंसिल, नई दिल्ली द्वारा मान्यता प्राप्त है।

---

### Course Benefits  
- Hands-on training in pathology, biochemistry, microbiology & hematology  
- Learn accurate testing, sample handling, and lab safety  
- Practical sessions with lab tools and diagnostic machines  
- Open career paths in private and government healthcare sectors  
- Recognized diploma improves employability

### कोर्स के लाभ  
- पैथोलॉजी, बायोकैमिस्ट्री, माइक्रोबायोलॉजी और हेमेटोलॉजी में प्रशिक्षण  
- सैंपल की जांच, संग्रह और लैब सुरक्षा का ज्ञान  
- मेडिकल लैब उपकरणों के साथ प्रैक्टिकल सत्र  
- सरकारी और निजी स्वास्थ्य क्षेत्र में करियर के अवसर  
- मान्यता प्राप्त डिप्लोमा से रोजगार की संभावनाएं बढ़ेंगी

---

### Duration and Fee  
- **Duration:** 2 Years  
- **Total Fee:** ₹50,000  

### अवधि और शुल्क  
- **अवधि:** 2 वर्ष  
- **कुल शुल्क:** ₹50,000  

---

### Eligibility Criteria  
- Minimum age: 17 years  
- Minimum qualification: 10th pass (12th with Science preferred)  
- Ideal for students interested in biology and medical diagnostics

### पात्रता मानदंड  
- न्यूनतम आयु: 17 वर्ष  
- न्यूनतम योग्यता: 10वीं पास (विज्ञान के साथ 12वीं वरीयता प्राप्त)  
- जीवविज्ञान और निदान प्रक्रियाओं में रुचि रखने वाले छात्रों के लिए उपयुक्त

---

### Career Opportunities After Diploma  
Diploma holders can work in hospitals, diagnostic labs, blood banks, pathology centers, and research labs. They can assist doctors in performing tests and contribute to early diagnosis and treatment planning.

### डिप्लोमा के बाद करियर के अवसर  
डिप्लोमा पूरा करने के बाद छात्र अस्पतालों, डायग्नोस्टिक लैब्स, ब्लड बैंकों, पैथोलॉजी सेंटर्स और रिसर्च लैब्स में कार्य कर सकते हैं। वे परीक्षण करने में डॉक्टरों की सहायता कर सकते हैं और शीघ्र निदान में योगदान दे सकते हैं।
`
  },
  {
    "id": "medical-dresser",
    "title": "MEDICAL DRESSER",
    "totalFee": "30,000",
    "duration": "2 YEARS",
    image : "https://lh3.googleusercontent.com/rGRcZeZI6Mix-iwoKfYfgoIq2JHvMpy7NatYFf1kqkFLP_evGwxH6dgCBuAqNwFiUAJwtNl8fEfhThfos2-9TZ7mSdDB6HPjKznW0cHfUltyZ6wYCIR0rrWUqk6TC3HlM1CtU0hhnVfFCqdqER0k7Qfd0Q2TWVACjEDDNz6sSrqU-6ja-i4",
    "approvedBy": "PARAMEDICAL COUNCIL, NEW DELHI",
    "status": "Ongoing",
    "shortDescription": "Assist doctors in wound care ➤ Learn bandaging, first aid & minor procedures ➤ Work in clinics & hospitals ➤ Govt-recognized ➤ Start a career in patient care.",
    "fullDescription": `### What is a Medical Dresser?  
A Medical Dresser is trained to assist in basic medical care, especially in dressing wounds, applying bandages, giving first aid, and supporting minor medical procedures. They work alongside doctors and nurses in clinics, hospitals, and emergency care units, ensuring patients receive proper wound care.

### मेडिकल ड्रेसर क्या होता है?  
मेडिकल ड्रेसर वह व्यक्ति होता है जो घावों की सफाई, पट्टी बांधने, प्राथमिक उपचार देने और छोटे-मोटे चिकित्सीय कार्यों में डॉक्टरों की सहायता करता है। मेडिकल ड्रेसर क्लीनिक, अस्पताल और इमरजेंसी सेवाओं में मरीजों की देखभाल में महत्वपूर्ण भूमिका निभाते हैं।

---

### Course Benefits  
- Training in wound care, sterilization, and dressing techniques  
- Learn to assist in minor surgical procedures and emergencies  
- Gain practical experience in hospital environments  
- High demand in rural and urban health centers  
- Approved by Paramedical Council, New Delhi

### कोर्स के लाभ  
- घावों की देखभाल, सफाई और ड्रेसिंग की तकनीकों का प्रशिक्षण  
- छोटे ऑपरेशन और आपातकालीन सेवाओं में सहायता करना सीखें  
- अस्पतालों में प्रैक्टिकल अनुभव  
- ग्रामीण और शहरी दोनों क्षेत्रों में अधिक मांग  
- पैरामेडिकल काउंसिल, नई दिल्ली द्वारा मान्यता प्राप्त

---

### Duration and Fee  
- **Duration:** 2 Years  
- **Total Fee:** ₹30,000  

### अवधि और शुल्क  
- **अवधि:** 2 वर्ष  
- **कुल शुल्क:** ₹30,000  

---

### Eligibility Criteria  
- Minimum age: 17 years  
- Minimum qualification: 10th pass  
- Suitable for students interested in patient care and emergency services

### पात्रता मानदंड  
- न्यूनतम आयु: 17 वर्ष  
- न्यूनतम योग्यता: 10वीं पास  
- रोगी सेवा और प्राथमिक उपचार में रुचि रखने वाले छात्रों के लिए उपयुक्त

---

### Career Opportunities After Medical Dresser Course  
After completing the course, students can work in hospitals, clinics, trauma centers, and first-aid departments. Medical dressers are in demand in both private and government healthcare facilities, especially in rural healthcare settings.

### कोर्स के बाद करियर के अवसर  
कोर्स पूरा करने के बाद छात्र अस्पतालों, क्लीनिकों, ट्रॉमा सेंटर्स और प्राथमिक उपचार केंद्रों में कार्य कर सकते हैं। मेडिकल ड्रेसर्स की मांग निजी और सरकारी दोनों स्वास्थ्य संस्थानों में होती है, विशेष रूप से ग्रामीण क्षेत्रों में।
`
  },
 {
  "id": "bems-electro-homopathy",
  "title": "BEMS Bachelor in electro homopathy",
  "totalFee": "50,000",
  "duration": "4 YEARS",
  "image": "https://dimtcollege.org/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-16-at-5.55.10-PM-1.jpeg",
  "approvedBy": "PARAMEDICAL COUNCIL, NEW DELHI",
  "status": "Ongoing",
  "shortDescription": "Study electro homoeopathy ➤ Learn herbal & natural treatment methods ➤ Govt-recognized degree ➤ 4-year program ➤ Build a career in alternative medicine.",
  "fullDescription": `
### What is BEMS (Bachelor in Electro Homopathy)?
BEMS is a 4-year undergraduate degree focusing on Electro Homopathy, a system of alternative medicine that uses natural and herbal remedies combined with electrotherapy principles to treat various ailments.

### बीईएमएस (बैचलर इन इलेक्ट्रो होम्योपैथी) क्या है?
बीईएमएस एक 4 वर्षीय स्नातक डिग्री है जो इलेक्ट्रो होम्योपैथी पर केंद्रित है, जो प्राकृतिक और हर्बल उपचारों को इलेक्ट्रोथेरेपी के सिद्धांतों के साथ मिलाकर विभिन्न बीमारियों का उपचार करता है।

---

### Course Overview
The program covers subjects like herbal pharmacology, electrotherapy techniques, anatomy, pathology, clinical practice, and patient care. Students gain practical training in diagnosing and treating patients using natural methods.

### कोर्स का अवलोकन
यह कार्यक्रम हर्बल फार्माकोलॉजी, इलेक्ट्रोथेरेपी तकनीकें, शरीर रचना, रोग विज्ञान, क्लिनिकल अभ्यास, और रोगी देखभाल जैसे विषयों को शामिल करता है। छात्र प्राकृतिक तरीकों से निदान और उपचार का व्यावहारिक प्रशिक्षण प्राप्त करते हैं।

---

### Eligibility Criteria
- Completion of 12th standard (Science stream preferred)  
- Interest in alternative medicine and natural therapies

### पात्रता मानदंड
- 12वीं कक्षा उत्तीर्ण (विज्ञान स्ट्रीम को प्राथमिकता)  
- वैकल्पिक चिकित्सा और प्राकृतिक उपचार में रुचि

---

### Training and Certification
Students undergo theoretical learning and clinical internships at affiliated centers. On successful completion, a government-recognized degree is awarded by the Paramedical Council, New Delhi.

### प्रशिक्षण और प्रमाणपत्र
छात्र सैद्धांतिक शिक्षा और संबद्ध केंद्रों में क्लिनिकल इंटर्नशिप करते हैं। सफलतापूर्वक पूरा करने पर, पैरामेडिकल काउंसिल, नई दिल्ली द्वारा मान्यता प्राप्त डिग्री प्रदान की जाती है।

---

### Career Opportunities
Graduates can work as Electro Homopathy practitioners, consultants in alternative medicine clinics, or start their own herbal treatment centers.

### रोजगार के अवसर
स्नातक इलेक्ट्रो होम्योपैथी प्रैक्टिशनर, वैकल्पिक चिकित्सा क्लीनिक के सलाहकार या अपने हर्बल उपचार केंद्र शुरू कर सकते हैं।
`
}
,
{
  "id": "ott-operation-theatre-technician",
  "title": "OTT OPERATION THEATRE TECHNICIAN",
  "totalFee": "30,000",
  "duration": "2 YEARS",
  "image": "https://ospmi.in/wp-content/uploads/2017/05/Diploma-of-Operation-Theatre-Technician.jpg",
  "approvedBy": "PARAMEDICAL COUNCIL, NEW DELHI",
  "status": "Ongoing",
  "shortDescription": "Learn operation theatre procedures ➤ Assist surgeons & staff ➤ Get certified ➤ Hands-on practical training ➤ Build career in surgical support.",
  "fullDescription": `
### What is an Operation Theatre Technician (OTT)?
An Operation Theatre Technician is a trained professional who assists surgeons, nurses, and anesthetists in the operation theatre by preparing equipment, maintaining sterile environments, and ensuring smooth surgical procedures.

### ऑपरेशन थियेटर तकनीशियन क्या है?
ऑपरेशन थियेटर तकनीशियन वह प्रशिक्षित पेशेवर होता है जो सर्जन, नर्स और एनेस्थेटिस्ट की सहायता करता है, उपकरण तैयार करता है, स्वच्छ वातावरण बनाए रखता है, और सर्जिकल प्रक्रियाओं को सुचारू बनाता है।

---

### Course Overview
This 2-year course covers anatomy, surgical instruments, sterilization techniques, patient care, and operation theatre management with extensive practical training.

### कोर्स का अवलोकन
यह 2 वर्षीय कोर्स शरीर रचना, सर्जिकल उपकरण, स्टेरिलाइजेशन तकनीक, रोगी देखभाल, और ऑपरेशन थियेटर प्रबंधन को व्यापक व्यावहारिक प्रशिक्षण के साथ शामिल करता है।

---

### Eligibility Criteria
- Minimum 10+2 pass or equivalent  
- Interest in healthcare and surgery assistance

### पात्रता मानदंड
- न्यूनतम 10+2 या समकक्ष उत्तीर्ण  
- स्वास्थ्य सेवा और शल्य सहायता में रुचि

---

### Training and Certification
Training includes theory and hands-on sessions in hospitals and operation theatres. Certification is awarded by the Paramedical Council, New Delhi.

### प्रशिक्षण और प्रमाणपत्र
प्रशिक्षण में अस्पतालों और ऑपरेशन थियेटरों में सैद्धांतिक और व्यावहारिक सत्र शामिल होते हैं। प्रमाणपत्र पैरामेडिकल काउंसिल, नई दिल्ली द्वारा प्रदान किया जाता है।

---

### Career Opportunities
Graduates can work as operation theatre technicians in hospitals, clinics, and surgical centers with growing demand for skilled OTT professionals.

### रोजगार के अवसर
ग्रेजुएट अस्पतालों, क्लीनिकों, और सर्जिकल केंद्रों में ऑपरेशन थियेटर तकनीशियन के रूप में कार्य कर सकते हैं। कुशल OTT पेशेवरों की मांग बढ़ रही है।
`
}
,
  {
    "id": "ntt-nursery-teacher-training",
    "title": "NTT NURSERY TEACHER TRAINING",
    "totalFee": "12,000",
    "duration": "2 YEARS",
    image : "https://teachertrainingmumbai.com/blog/wp-content/uploads/2022/02/613.webp",
    "approvedBy": "LAKSHAY GROUP OF EDUCATION",
    "status": "Ongoing",
    "shortDescription": "",
    "fullDescription": `### What is BEMS – Bachelor in Electro Homoeopathy?  
BEMS (Bachelor in Electro Homoeopathy Medicine and Surgery) is a 4-year undergraduate program focused on electro homoeopathy – a natural, herbal-based medical system. The course provides deep knowledge of plant-based remedies and non-toxic treatments, aiming to restore balance in the body’s systems without side effects.

### BEMS – बैचलर इन इलेक्ट्रो होम्योपैथी क्या है?  
BEMS (बैचलर इन इलेक्ट्रो होम्योपैथी मेडिसिन एंड सर्जरी) एक 4 वर्षीय स्नातक कोर्स है, जो इलेक्ट्रो होम्योपैथी पर आधारित है – यह एक प्राकृतिक और हर्बल चिकित्सा प्रणाली है। इस कोर्स में हर्बल दवाओं के प्रयोग द्वारा बिना किसी दुष्प्रभाव के शरीर में संतुलन स्थापित करने का ज्ञान दिया जाता है।

---

### Course Benefits  
- Learn herbal-based non-toxic treatments  
- In-depth study of electro homoeopathy principles  
- Holistic, side-effect-free medical approach  
- Opportunities in private practice and alternative healthcare centers  
- Approved by Paramedical Council, New Delhi

### कोर्स के लाभ  
- बिना साइड इफेक्ट वाली हर्बल चिकित्सा पद्धति सीखें  
- इलेक्ट्रो होम्योपैथी के सिद्धांतों का गहन अध्ययन  
- सम्पूर्ण और प्राकृतिक इलाज की विधि  
- निजी प्रैक्टिस और आयुर्वेदिक/वैकल्पिक चिकित्सा केंद्रों में अवसर  
- पैरामेडिकल काउंसिल, नई दिल्ली द्वारा मान्यता प्राप्त

---

### Duration and Fee  
- **Duration:** 4 Years  
- **Total Fee:** ₹50,000  

### अवधि और शुल्क  
- **अवधि:** 4 वर्ष  
- **कुल शुल्क:** ₹50,000  

---

### Eligibility Criteria  
- Minimum age: 17 years  
- Qualification: 12th pass (Science stream preferred)  
- Interest in alternative and herbal medicine

### पात्रता मानदंड  
- न्यूनतम आयु: 17 वर्ष  
- योग्यता: 12वीं पास (विज्ञान विषय वरीयता प्राप्त)  
- वैकल्पिक और हर्बल चिकित्सा में रुचि होनी चाहिए

---

### Career Opportunities After BEMS  
Graduates can work as electro homoeopathy practitioners, health consultants, or set up their own clinics. They can also collaborate with wellness centers, naturopathy clinics, and herbal medicine manufacturers. BEMS offers a sustainable and growing career path in natural healing.

### BEMS के बाद करियर के अवसर  
पाठ्यक्रम पूर्ण करने के बाद छात्र इलेक्ट्रो होम्योपैथी चिकित्सक, स्वास्थ्य सलाहकार के रूप में कार्य कर सकते हैं या स्वयं का क्लिनिक शुरू कर सकते हैं। वे वेलनेस सेंटर्स, नेचुरोपैथी क्लीनिक्स और हर्बल दवा उद्योग से भी जुड़ सकते हैं। यह कोर्स प्राकृतिक चिकित्सा में एक स्थायी और उभरता हुआ करियर विकल्प प्रदान करता है।
`
  },
  {
  "id": "dental-hygiene",
  "title": "DENTAL HYGIENE",
  "totalFee": "35,000",
  "duration": "2 YEARS",
  "image": "https://middlesexcollege.edu/academics/wp-content/uploads/sites/8/2022/06/dental-hygeine-1.jpg",
  "approvedBy": "PARAMEDICAL COUNCIL, NEW DELHI",
  "status": "Ongoing",
  "shortDescription": "Learn oral care basics ➤ Develop clinical skills ➤ Get certified ➤ Practical training ➤ Start your dental hygiene career.",
  "fullDescription": `
### What is Dental Hygiene?
Dental hygiene involves the prevention and treatment of oral diseases, promoting oral health through cleaning, education, and clinical care. Dental hygienists work alongside dentists to improve patient oral health.

### डेंटल हाइजीन क्या है?
डेंटल हाइजीन में मुँह की बीमारियों की रोकथाम और उपचार शामिल है। यह सफाई, शिक्षा और क्लिनिकल देखभाल के माध्यम से मौखिक स्वास्थ्य को बढ़ावा देता है। डेंटल हाइजिनिस्ट दंत चिकित्सकों के साथ मिलकर काम करते हैं।

---

### Course Overview
This 2-year program covers oral anatomy, preventive dentistry, clinical techniques, and patient education. Students receive both theoretical knowledge and hands-on training to excel in dental hygiene practice.

### कोर्स का अवलोकन
यह 2 वर्षीय कार्यक्रम मौखिक संरचना, रोकथाम, क्लिनिकल तकनीक और रोगी शिक्षा को शामिल करता है। छात्रों को सैद्धांतिक और व्यावहारिक प्रशिक्षण दिया जाता है।

---

### Eligibility Criteria
- Minimum 10th pass  
- Good communication skills  
- Interest in healthcare and patient care

### पात्रता मानदंड
- कम से कम 10वीं पास  
- अच्छी संचार क्षमता  
- स्वास्थ्य सेवा में रुचि

---

### Training and Certification
Students undergo practical sessions in clinical settings and learn sterilization, scaling, and oral hygiene techniques. Upon completion, certification is awarded by the Paramedical Council, New Delhi.

### प्रशिक्षण और प्रमाणपत्र
छात्रों को क्लिनिकल प्रशिक्षण के दौरान सफाई, स्केलिंग और मौखिक हाइजीन तकनीकें सिखाई जाती हैं। पूरा करने पर पैरामेडिकल काउंसिल, नई दिल्ली से प्रमाणपत्र मिलता है।

---

### Career Opportunities
Graduates can work in dental clinics, hospitals, community health centers, and dental research. Growing awareness of oral health is increasing demand for qualified dental hygienists.

### रोजगार के अवसर
ग्रेजुएट दंत क्लीनिक, अस्पताल, सामुदायिक स्वास्थ्य केंद्र और दंत अनुसंधान में कार्य कर सकते हैं। मौखिक स्वास्थ्य जागरूकता के कारण मांग बढ़ रही है।
`
},
{
  "id": "diploma-in-physiotherapist",
  "title": "DIPLOMA IN PHYSIOTHERAPIST",
  "totalFee": "50,000",
  "duration": "2 YEARS",
  "image": "https://www.maagangeinstitute.com/assets/img/Diploma%20In%20Physiotherapy%20(DPT)/Physiotherapy.jpg",
  "approvedBy": "PARAMEDICAL COUNCIL, NEW DELHI",
  "status": "Ongoing",
  "shortDescription": "Learn rehabilitation techniques ➤ Develop therapeutic skills ➤ Get certified ➤ Practical training ➤ Build physiotherapy career.",
  "fullDescription": `
### What is Physiotherapy?
Physiotherapy focuses on restoring and maintaining physical function and mobility through exercises, manual therapy, and rehabilitation techniques. Physiotherapists help patients recover from injuries, surgeries, and chronic conditions.

### फिजियोथेरेपी क्या है?
फिजियोथेरेपी शारीरिक कार्य और गतिशीलता को पुनर्स्थापित करने और बनाए रखने पर केंद्रित है। इसमें व्यायाम, मैनुअल थेरेपी और पुनर्वास तकनीकें शामिल हैं। फिजियोथेरेपिस्ट चोटों, सर्जरी और पुरानी बीमारियों से ठीक होने में मदद करते हैं।

---

### Course Overview
This 2-year diploma program covers anatomy, physiology, therapeutic exercises, electrotherapy, and patient management. Students receive both theoretical instruction and hands-on clinical training.

### कोर्स का अवलोकन
यह 2 वर्षीय डिप्लोमा कार्यक्रम शरीर रचना, शरीर क्रिया विज्ञान, चिकित्सा व्यायाम, इलेक्ट्रोथेरेपी और रोगी प्रबंधन को शामिल करता है। छात्रों को सैद्धांतिक और क्लिनिकल प्रशिक्षण दिया जाता है।

---

### Eligibility Criteria
- Minimum 10th pass  
- Basic understanding of biology preferred  
- Interest in healthcare and rehabilitation

### पात्रता मानदंड
- कम से कम 10वीं पास  
- जीव विज्ञान की मूल समझ लाभकारी  
- स्वास्थ्य देखभाल और पुनर्वास में रुचि

---

### Training and Certification
Students undergo clinical internships and practical sessions in hospitals and rehabilitation centers. On successful completion, they receive certification from the Paramedical Council, New Delhi.

### प्रशिक्षण और प्रमाणपत्र
छात्र अस्पतालों और पुनर्वास केंद्रों में क्लिनिकल इंटर्नशिप और व्यावहारिक प्रशिक्षण लेते हैं। सफलतापूर्वक पूरा करने पर पैरामेडिकल काउंसिल, नई दिल्ली से प्रमाणपत्र मिलता है।

---

### Career Opportunities
Graduates can work in hospitals, rehabilitation centers, sports clinics, and wellness centers. Growing awareness of physical therapy is increasing demand for trained physiotherapists.

### रोजगार के अवसर
ग्रेजुएट अस्पतालों, पुनर्वास केंद्रों, खेल क्लीनिक और वेलनेस केंद्रों में काम कर सकते हैं। फिजियोथेरेपी की बढ़ती मांग है।
`
}
,
  {
  "id": "ccch-child-care-health",
  "title": "CCCH CERTIFICATE IN CHILD CARE HEALTH",
  "totalFee": "30,000",
  "duration": "2 YEARS",
  "image": "https://emediskill-prod-v2.s3.ap-south-1.amazonaws.com/courseRectangleThumbnails/64e2045a961ec06e241703d4.jpg",
  "approvedBy": "PARAMEDICAL COUNCIL, NEW DELHI",
  "status": "Ongoing",
  "shortDescription": "Learn child care basics ➤ Health and nutrition ➤ Get certified ➤ Practical training ➤ Build a career in child health.",
  "fullDescription": `
### What is Child Care Health?
Child Care Health focuses on the physical, mental, and emotional wellbeing of children. Professionals in this field promote healthy growth, disease prevention, and proper nutrition.

### चाइल्ड केयर हेल्थ क्या है?
चाइल्ड केयर हेल्थ बच्चों के शारीरिक, मानसिक और भावनात्मक स्वास्थ्य पर केंद्रित है। इस क्षेत्र के विशेषज्ञ स्वस्थ विकास, रोग निवारण और सही पोषण को बढ़ावा देते हैं।

---

### Course Overview
This 2-year certificate program covers child development, nutrition, immunization, hygiene, and first aid. Students gain theoretical knowledge along with hands-on experience in child care settings.

### कोर्स का अवलोकन
यह 2 वर्षीय सर्टिफिकेट कार्यक्रम बाल विकास, पोषण, टीकाकरण, स्वच्छता और प्राथमिक चिकित्सा को शामिल करता है। छात्रों को सैद्धांतिक और व्यावहारिक प्रशिक्षण दिया जाता है।

---

### Eligibility Criteria
- Minimum 10th pass  
- Compassion and interest in child care  
- Basic communication skills

### पात्रता मानदंड
- कम से कम 10वीं उत्तीर्ण  
- बच्चों की देखभाल में रुचि और सहानुभूति  
- बुनियादी संचार कौशल

---

### Training and Certification
Students undergo practical training in childcare centers and hospitals. After successful completion, certification is awarded by the Paramedical Council, New Delhi.

### प्रशिक्षण और प्रमाणपत्र
छात्र बच्चों के देखभाल केंद्रों और अस्पतालों में व्यावहारिक प्रशिक्षण लेते हैं। पूरा होने पर पैरामेडिकल काउंसिल, नई दिल्ली से प्रमाणपत्र मिलता है।

---

### Career Opportunities
Graduates can work in hospitals, daycare centers, schools, and NGOs focusing on child health. Growing awareness is increasing demand for qualified child care professionals.

### रोजगार के अवसर
ग्रेजुएट अस्पताल, डेकेयर केंद्र, स्कूल और बाल स्वास्थ्य से जुड़े एनजीओ में काम कर सकते हैं। योग्य पेशेवरों की मांग बढ़ रही है।
`
}
,
 {
  "id": "x-ray-technician",
  "title": "X- RAY TECHNICIAN",
  "totalFee": "40,000",
  "duration": "2 YEARS",
  "image": "https://nctaindia.in/images/course/image_73ba4d29-c064-4751-8fc3-16fd7c0a0c2d.jpg",
  "approvedBy": "PARAMEDICAL COUNCIL, NEW DELHI",
  "status": "Ongoing",
  "shortDescription": "Learn radiology basics ➤ Operate X-ray machines ➤ Get certified ➤ Practical training ➤ Build a career in diagnostic imaging.",
  "fullDescription": `
### What is an X-Ray Technician?
An X-Ray Technician operates radiographic equipment to produce images of the body’s internal structures. These images assist doctors in diagnosing and treating medical conditions.

### एक्स-रे तकनीशियन क्या है?
एक्स-रे तकनीशियन रेडियोग्राफिक उपकरण चलाता है जो शरीर के अंदरूनी अंगों की तस्वीरें लेता है। ये तस्वीरें डॉक्टरों को बीमारी की पहचान और उपचार में मदद करती हैं।

---

### Course Overview
This 2-year program covers anatomy, radiographic techniques, safety protocols, and image processing. Students gain both theoretical knowledge and hands-on experience with X-ray equipment.

### कोर्स का अवलोकन
यह 2 वर्षीय कार्यक्रम शरीर रचना, रेडियोग्राफिक तकनीक, सुरक्षा नियम और इमेज प्रोसेसिंग पर आधारित है। छात्रों को सैद्धांतिक और व्यावहारिक प्रशिक्षण मिलता है।

---

### Eligibility Criteria
- Minimum 10th pass  
- Basic science knowledge preferred  
- Interest in healthcare technology

### पात्रता मानदंड
- कम से कम 10वीं उत्तीर्ण  
- बुनियादी विज्ञान ज्ञान लाभकारी  
- हेल्थकेयर तकनीक में रुचि

---

### Training and Certification
Practical training is conducted in hospitals and diagnostic centers. Successful candidates receive certification from the Paramedical Council, New Delhi.

### प्रशिक्षण और प्रमाणपत्र
प्रशिक्षण अस्पतालों और डायग्नोस्टिक केंद्रों में दिया जाता है। सफल छात्रों को पैरामेडिकल काउंसिल, नई दिल्ली से प्रमाणपत्र मिलता है।

---

### Career Opportunities
Graduates can work in hospitals, clinics, diagnostic labs, and imaging centers. The increasing use of imaging technology is driving demand for skilled X-ray technicians.

### रोजगार के अवसर
ग्रेजुएट अस्पतालों, क्लीनिकों, डायग्नोस्टिक लैब और इमेजिंग सेंटर में कार्य कर सकते हैं। इमेजिंग तकनीक के बढ़ते उपयोग से मांग बढ़ रही है।
`
}
,
  {
  "id": "only-cmsed-emt",
  "title": "ONLY CMSED OR ONLY EMT",
  "totalFee": "10000 EACH",
  "duration": "2YRS, 1 YR",
  "image": "https://thewarhorse.org/wp-content/uploads/2024/03/Back-of-Amublance-main-feature.jpg",
  "approvedBy": "PARAMEDICAL COUNCIL, NEW DELHI",
  "status": "Ongoing",
  "shortDescription": "Learn emergency care ➤ Develop life-saving skills ➤ Get certified ➤ Practical training ➤ Build career in emergency medical services.",
  "fullDescription": `
### What is CMSED and EMT?
CMSED (Certified Medical Services Emergency Dispatcher) and EMT (Emergency Medical Technician) are essential roles in emergency medical response. These professionals provide urgent care and coordinate emergency services.

### CMSED और EMT क्या हैं?
CMSED (सर्टिफाइड मेडिकल सर्विसेज इमरजेंसी डिस्पैचर) और EMT (इमरजेंसी मेडिकल टेक्नीशियन) आपातकालीन चिकित्सा प्रतिक्रिया में महत्वपूर्ण भूमिका निभाते हैं। ये पेशेवर तात्कालिक देखभाल प्रदान करते हैं और आपातकालीन सेवाओं का समन्वय करते हैं।

---

### Course Overview
The CMSED course lasts 2 years focusing on emergency dispatch protocols, communication, and coordination. The EMT course is 1 year covering patient assessment, trauma care, and basic life support.

### कोर्स का अवलोकन
CMSED कोर्स 2 वर्ष का होता है जिसमें आपातकालीन डिस्पैच प्रोटोकॉल, संचार और समन्वय सिखाया जाता है। EMT कोर्स 1 वर्ष का है जिसमें रोगी मूल्यांकन, ट्रॉमा देखभाल और बेसिक लाइफ सपोर्ट शामिल है।

---

### Eligibility Criteria
- Minimum 10th pass  
- Good communication skills  
- Interest in emergency medical services

### पात्रता मानदंड
- कम से कम 10वीं उत्तीर्ण  
- अच्छी संचार क्षमता  
- आपातकालीन चिकित्सा सेवा में रुचि

---

### Training and Certification
Training includes practical sessions in emergency scenarios and ambulance services. Certification is awarded by the Paramedical Council, New Delhi upon successful completion.

### प्रशिक्षण और प्रमाणपत्र
प्रशिक्षण में आपातकालीन स्थितियों और एम्बुलेंस सेवा में व्यावहारिक सत्र शामिल हैं। सफलतापूर्वक पूरा करने पर पैरामेडिकल काउंसिल, नई दिल्ली से प्रमाणपत्र मिलता है।

---

### Career Opportunities
Graduates can work with ambulance services, hospitals, disaster management teams, and emergency response units. Growing healthcare demands increase need for trained CMSED and EMT professionals.

### रोजगार के अवसर
ग्रेजुएट एम्बुलेंस सेवा, अस्पताल, आपदा प्रबंधन टीम और आपातकालीन प्रतिक्रिया इकाइयों में काम कर सकते हैं। बढ़ती स्वास्थ्य सेवा मांग के कारण प्रशिक्षित CMSED और EMT पेशेवरों की आवश्यकता बढ़ रही है।
`
}
,
 {
  "id": "optometrist",
  "title": "OPTOMETRIST",
  "totalFee": "35,000",
  "duration": "2 YEARS",
  "image": "https://collegeoptom.on.ca/wp-content/uploads/iStock-2176631642-OD-Using-Phoropter.jpg",
  "approvedBy": "PARAMEDICAL COUNCIL, NEW DELHI",
  "status": "Ongoing",
  "shortDescription": "Learn eye care basics ➤ Perform vision tests ➤ Get certified ➤ Practical training ➤ Build career in optometry.",
  "fullDescription": `
### What is an Optometrist?
An Optometrist specializes in examining eyes, diagnosing vision problems, and prescribing corrective lenses. They play a key role in maintaining eye health and detecting eye diseases.

### ऑप्टोमेट्रिस्ट क्या है?
ऑप्टोमेट्रिस्ट नेत्रों की जांच करता है, दृष्टि समस्याओं का निदान करता है, और सुधारात्मक लेंस लिखता है। वे नेत्र स्वास्थ्य बनाए रखने और नेत्र रोगों का पता लगाने में महत्वपूर्ण भूमिका निभाते हैं।

---

### Course Overview
This 2-year program covers anatomy of the eye, vision testing, contact lens fitting, and basic eye care treatments. Students receive both theoretical knowledge and clinical training.

### कोर्स का अवलोकन
यह 2 वर्षीय कार्यक्रम नेत्र शरीर रचना, दृष्टि परीक्षण, कॉन्टैक्ट लेंस फिटिंग और बुनियादी नेत्र देखभाल उपचार शामिल करता है। छात्रों को सैद्धांतिक और क्लिनिकल प्रशिक्षण दिया जाता है।

---

### Eligibility Criteria
- Minimum 10th pass  
- Interest in healthcare and eye care  
- Basic understanding of biology preferred

### पात्रता मानदंड
- कम से कम 10वीं उत्तीर्ण  
- स्वास्थ्य सेवा और नेत्र देखभाल में रुचि  
- जीव विज्ञान की मूल समझ लाभकारी

---

### Training and Certification
Practical training is provided in eye clinics and hospitals. Successful students are awarded certification by the Paramedical Council, New Delhi.

### प्रशिक्षण और प्रमाणपत्र
नेत्र क्लीनिक और अस्पतालों में व्यावहारिक प्रशिक्षण दिया जाता है। सफल छात्रों को पैरामेडिकल काउंसिल, नई दिल्ली से प्रमाणपत्र मिलता है।

---

### Career Opportunities
Graduates can work in eye hospitals, optical stores, clinics, and community health centers. Increasing awareness of eye care is driving demand for qualified optometrists.

### रोजगार के अवसर
ग्रेजुएट नेत्र अस्पताल, ऑप्टिकल स्टोर, क्लीनिक और सामुदायिक स्वास्थ्य केंद्रों में काम कर सकते हैं। नेत्र देखभाल के प्रति जागरूकता बढ़ने से योग्य ऑप्टोमेट्रिस्टों की मांग बढ़ रही है।
`
}
,
  {
  "id": "dialysis-technician",
  "title": "DIALYSIS TECHNICIAN",
  "totalFee": "35,000",
  "duration": "2 YEARS",
  "image": "https://college.mayo.edu/media/mccms/content-assets/academics/explore-health-care-careers/clinical-hemodialysis-technician-career-3540546-0012-hero-tablet.jpg",
  "approvedBy": "PARAMEDICAL COUNCIL, NEW DELHI",
  "status": "Ongoing",
  "shortDescription": "Learn dialysis procedures ➤ Operate hemodialysis machines ➤ Get certified ➤ Practical training ➤ Build career in kidney care.",
  "fullDescription": `
### What is a Dialysis Technician?
A Dialysis Technician operates and maintains dialysis machines to treat patients with kidney failure. They monitor patients during treatments and ensure machine safety.

### डायलिसिस तकनीशियन क्या है?
डायलिसिस तकनीशियन किडनी फेल्योर वाले मरीजों के इलाज के लिए डायलिसिस मशीन चलाता और रखरखाव करता है। वे उपचार के दौरान मरीजों की निगरानी करते हैं और मशीन की सुरक्षा सुनिश्चित करते हैं।

---

### Course Overview
This 2-year program covers renal anatomy, dialysis technology, machine operation, infection control, and patient care. Students gain theoretical knowledge and hands-on clinical experience.

### कोर्स का अवलोकन
यह 2 वर्षीय कार्यक्रम गुर्दे की शरीर रचना, डायलिसिस तकनीक, मशीन संचालन, संक्रमण नियंत्रण और रोगी देखभाल पर केंद्रित है। छात्रों को सैद्धांतिक और व्यावहारिक प्रशिक्षण दिया जाता है।

---

### Eligibility Criteria
- Minimum 10th pass  
- Basic knowledge of biology preferred  
- Interest in healthcare technology

### पात्रता मानदंड
- कम से कम 10वीं उत्तीर्ण  
- जीव विज्ञान का बुनियादी ज्ञान लाभकारी  
- स्वास्थ्य सेवा तकनीक में रुचि

---

### Training and Certification
Training includes practical sessions in hospitals with dialysis units. Certification is awarded by the Paramedical Council, New Delhi upon successful completion.

### प्रशिक्षण और प्रमाणपत्र
प्रशिक्षण अस्पतालों के डायलिसिस यूनिट में व्यावहारिक सत्रों के साथ होता है। सफलतापूर्वक पूरा करने पर पैरामेडिकल काउंसिल, नई दिल्ली से प्रमाणपत्र मिलता है।

---

### Career Opportunities
Graduates can work in hospitals, dialysis centers, kidney care clinics, and healthcare institutions. Rising kidney disease rates increase demand for skilled dialysis technicians.

### रोजगार के अवसर
ग्रेजुएट अस्पतालों, डायलिसिस सेंटर, किडनी केयर क्लीनिक और स्वास्थ्य संस्थानों में कार्य कर सकते हैं। बढ़ती किडनी बीमारी की वजह से प्रशिक्षित तकनीशियनों की मांग बढ़ रही है।
`
}
,
 {
  "id": "dnys-neuropathy-yogic-sci",
  "title": "DNYS DIPLOMA IN NEUROPATHY & YOGIC SCI",
  "totalFee": "45,000",
  "duration": "4 YEARS",
  "image": "https://www.sampoornayoga.com/wp-content/uploads/2024/02/200-hour-hatha-yin-yoga-teacher-training-course-details-1.jpg",
  "approvedBy": "PARAMEDICAL COUNCIL, NEW DELHI",
  "status": "Ongoing",
  "shortDescription": "Study neuropathy and yoga science ➤ Learn healing therapies ➤ Get certified ➤ Hands-on training ➤ Build holistic health career.",
  "fullDescription": `
### What is DNYS (Diploma in Neuropathy & Yogic Science)?
DNYS integrates neuropathy techniques with yogic science to promote healing and wellness. Graduates learn therapeutic methods to treat neurological and lifestyle disorders using natural approaches.

### DNYS (न्यूरोपैथी और योगिक विज्ञान डिप्लोमा) क्या है?
DNYS न्यूरोपैथी तकनीकों को योगिक विज्ञान के साथ जोड़ता है ताकि उपचार और स्वास्थ्य को बढ़ावा दिया जा सके। छात्र प्राकृतिक तरीकों से न्यूरोलॉजिकल और जीवनशैली संबंधी विकारों का इलाज सीखते हैं।

---

### Course Overview
This 4-year course covers neuropathy diagnosis, yoga therapy, naturopathy, anatomy, and patient care. Training combines theory, practical sessions, and clinical exposure.

### कोर्स का अवलोकन
यह 4 वर्षीय कोर्स न्यूरोपैथी निदान, योग चिकित्सा, प्राकृतिक चिकित्सा, शरीर रचना और रोगी देखभाल पर आधारित है। प्रशिक्षण में सैद्धांतिक, व्यावहारिक और क्लिनिकल अनुभव शामिल हैं।

---

### Eligibility Criteria
- Minimum 10th pass  
- Interest in alternative medicine and wellness  
- Commitment to long-term study

### पात्रता मानदंड
- कम से कम 10वीं उत्तीर्ण  
- वैकल्पिक चिकित्सा और स्वास्थ्य में रुचि  
- दीर्घकालिक अध्ययन के लिए प्रतिबद्धता

---

### Training and Certification
Students receive hands-on training in therapeutic techniques and yoga practices. Certification is granted by the Paramedical Council, New Delhi on course completion.

### प्रशिक्षण और प्रमाणपत्र
छात्रों को चिकित्सीय तकनीकों और योग अभ्यास में व्यावहारिक प्रशिक्षण दिया जाता है। कोर्स पूरा करने पर पैरामेडिकल काउंसिल, नई दिल्ली से प्रमाणपत्र मिलता है।

---

### Career Opportunities
Graduates can work in wellness centers, yoga institutes, rehabilitation clinics, and alternative therapy clinics. The rising demand for holistic health professionals opens many opportunities.

### रोजगार के अवसर
ग्रेजुएट वेलनेस सेंटर, योग संस्थान, पुनर्वास क्लीनिक और वैकल्पिक चिकित्सा क्लीनिक में काम कर सकते हैं। समग्र स्वास्थ्य पेशेवरों की बढ़ती मांग से अवसर बढ़ रहे हैं।
`
}
,
 {
  "id": "dpharma",
  "title": "D.PHARMA",
  "totalFee": "1,80,000",
  "duration": "2 YEARS",
  "image": "https://www.doonbusinessschool.com/images/23/bandphar1.jpg",
  "approvedBy": "KESHAV COLLEGE OF PHARMACY, BHIWANI",
  "status": "Ongoing",
  "shortDescription": "Learn pharmaceutical sciences ➤ Understand drug formulation ➤ Get certified ➤ Practical lab training ➤ Build career in pharmacy.",
  "fullDescription": `
### What is D.PHARMA?
D.Pharm (Diploma in Pharmacy) is a professional course focusing on the preparation, dispensing, and proper use of medications. It trains students to become licensed pharmacists.

### D.PHARMA क्या है?
D.Pharm (डिप्लोमा इन फार्मेसी) एक व्यावसायिक कोर्स है जो दवाओं के निर्माण, वितरण और सही उपयोग पर केंद्रित है। यह छात्रों को लाइसेंस प्राप्त फार्मासिस्ट बनने के लिए तैयार करता है।

---

### Course Overview
This 2-year program covers pharmaceutical chemistry, pharmacology, drug store management, and pharmacy law. Students receive theoretical knowledge along with hands-on training in labs and pharmacies.

### कोर्स का अवलोकन
यह 2 वर्षीय कार्यक्रम फार्मास्यूटिकल केमिस्ट्री, फार्माकोलॉजी, दवा स्टोर प्रबंधन और फार्मेसी कानून शामिल करता है। छात्रों को सैद्धांतिक ज्ञान के साथ-साथ लैब और फार्मेसी में व्यावहारिक प्रशिक्षण दिया जाता है।

---

### Eligibility Criteria
- Minimum 10+2 with Science (Physics, Chemistry, Biology/Maths)  
- Interest in healthcare and pharmaceuticals

### पात्रता मानदंड
- कम से कम 10+2 विज्ञान (फिजिक्स, केमिस्ट्री, जीव विज्ञान/गणित) के साथ  
- स्वास्थ्य सेवा और फार्मास्यूटिकल्स में रुचि

---

### Training and Certification
Practical training is conducted in pharmacy stores and pharmaceutical labs. After successful completion, certification is awarded by Keshav College of Pharmacy, Bhiwani.

### प्रशिक्षण और प्रमाणपत्र
प्रशिक्षण फार्मेसी स्टोर्स और फार्मास्यूटिकल लैब में किया जाता है। सफलतापूर्वक पूरा करने पर केशव कॉलेज ऑफ फार्मेसी, भिवानी से प्रमाणपत्र मिलता है।

---

### Career Opportunities
Graduates can work as pharmacists, pharmacy technicians, medical representatives, or start their own pharmacies. The pharmaceutical industry continues to grow, providing many job options.

### रोजगार के अवसर
ग्रेजुएट फार्मासिस्ट, फार्मेसी तकनीशियन, मेडिकल प्रतिनिधि के रूप में काम कर सकते हैं या अपनी खुद की फार्मेसी शुरू कर सकते हैं। फार्मास्यूटिकल उद्योग में निरंतर वृद्धि रोजगार के अवसर बढ़ा रही है।
`
}
,
 {
  "id": "bpharma",
  "title": "B.PHARMA",
  "totalFee": "3,20,000",
  "duration": "4 YEARS",
  "image": "https://hcp.ac.in/img/pham%20(1).jpg",
  "approvedBy": "KESHAV COLLEGE OF PHARMACY, BHIWANI",
  "status": "Ongoing",
  "shortDescription": "Study pharmaceutical sciences deeply ➤ Learn drug development ➤ Get certified ➤ Extensive lab & clinical training ➤ Launch pharmacy career.",
  "fullDescription": `
### What is B.PHARMA?
B.Pharma (Bachelor of Pharmacy) is an undergraduate degree that provides comprehensive knowledge of pharmaceutical sciences including drug formulation, development, and patient care.

### B.PHARMA क्या है?
B.Pharma (बैचलर ऑफ फार्मेसी) एक स्नातक डिग्री है जो फार्मास्यूटिकल विज्ञान, दवा निर्माण, विकास और रोगी देखभाल का व्यापक ज्ञान प्रदान करती है।

---

### Course Overview
This 4-year program includes subjects like pharmaceutical chemistry, pharmacology, pharmaceutics, pharmacognosy, and clinical pharmacy. It combines theoretical studies with practical lab and internship training.

### कोर्स का अवलोकन
यह 4 वर्षीय कार्यक्रम फार्मास्यूटिकल केमिस्ट्री, फार्माकोलॉजी, फार्मास्यूटिक्स, फार्माकोग्नोसी और क्लिनिकल फार्मेसी जैसे विषय शामिल करता है। यह सैद्धांतिक अध्ययन को व्यावहारिक लैब और इंटर्नशिप प्रशिक्षण के साथ जोड़ता है।

---

### Eligibility Criteria
- 10+2 with Science (Physics, Chemistry, Biology/Maths)  
- Must have good academic record and interest in pharmacy

### पात्रता मानदंड
- 10+2 विज्ञान (फिजिक्स, केमिस्ट्री, जीव विज्ञान/गणित) के साथ  
- अच्छा शैक्षणिक रिकॉर्ड और फार्मेसी में रुचि आवश्यक

---

### Training and Certification
Students undergo laboratory work, industrial training, and internships in hospitals and pharmaceutical companies. Certification is granted by Keshav College of Pharmacy, Bhiwani.

### प्रशिक्षण और प्रमाणपत्र
छात्र लैब कार्य, औद्योगिक प्रशिक्षण और अस्पतालों तथा फार्मास्यूटिकल कंपनियों में इंटर्नशिप करते हैं। प्रमाणपत्र केशव कॉलेज ऑफ फार्मेसी, भिवानी द्वारा प्रदान किया जाता है।

---

### Career Opportunities
Graduates can work as pharmacists, researchers, quality controllers, medical representatives, or pursue higher studies. The pharmaceutical sector offers diverse career paths.

### रोजगार के अवसर
ग्रेजुएट फार्मासिस्ट, शोधकर्ता, गुणवत्ता नियंत्रक, मेडिकल प्रतिनिधि के रूप में कार्य कर सकते हैं या उच्च शिक्षा कर सकते हैं। फार्मास्यूटिकल क्षेत्र में विविध करियर विकल्प उपलब्ध हैं।
`
}
,
 {
  "id": "anm",
  "title": "ANM",
  "totalFee": "1,20,000",
  "duration": "2 YEARS",
  "image": "https://srirajnursing.com/wp-content/uploads/2024/04/ANM-NUrsing.jpg",
  "approvedBy": "KARNATAKA UNIVERSITY, INC APPROVED",
  "status": "Ongoing",
  "shortDescription": "Learn nursing & midwifery skills ➤ Community health focus ➤ Get certified ➤ Practical clinical training ➤ Build healthcare career.",
  "fullDescription": `
### What is ANM (Auxiliary Nurse Midwifery)?
ANM is a diploma course designed to train students in basic nursing and midwifery care, focusing on community health and maternal-child care.

### ANM (सहायक नर्स मिडवाइफरी) क्या है?
ANM एक डिप्लोमा कोर्स है जो छात्रों को बुनियादी नर्सिंग और मिडवाइफरी देखभाल में प्रशिक्षित करता है, विशेष रूप से सामुदायिक स्वास्थ्य और मातृ-शिशु देखभाल पर केंद्रित है।

---

### Course Overview
This 2-year program covers nursing fundamentals, midwifery, community health, first aid, and health education. Training includes theoretical lessons and hands-on clinical practice.

### कोर्स का अवलोकन
यह 2 वर्षीय कार्यक्रम नर्सिंग के मूल सिद्धांत, मिडवाइफरी, सामुदायिक स्वास्थ्य, प्राथमिक चिकित्सा, और स्वास्थ्य शिक्षा को शामिल करता है। प्रशिक्षण में सैद्धांतिक पाठ और व्यावहारिक क्लिनिकल अभ्यास शामिल हैं।

---

### Eligibility Criteria
- Minimum 10th pass  
- Interest in healthcare and community service

### पात्रता मानदंड
- न्यूनतम 10वीं पास  
- स्वास्थ्य सेवा और सामुदायिक सेवा में रुचि

---

### Training and Certification
Students receive clinical training in hospitals and community health centers. Certification is awarded by Karnataka University, recognized by INC.

### प्रशिक्षण और प्रमाणपत्र
छात्रों को अस्पतालों और सामुदायिक स्वास्थ्य केंद्रों में क्लिनिकल प्रशिक्षण दिया जाता है। प्रमाणपत्र कर्नाटक विश्वविद्यालय द्वारा प्रदान किया जाता है और यह INC द्वारा मान्यता प्राप्त है।

---

### Career Opportunities
Graduates can work as ANMs in hospitals, primary health centers, NGOs, and government health programs. There is growing demand for skilled nursing professionals.

### रोजगार के अवसर
ग्रेजुएट अस्पतालों, प्राथमिक स्वास्थ्य केंद्रों, गैर-सरकारी संगठनों और सरकारी स्वास्थ्य कार्यक्रमों में ANM के रूप में कार्य कर सकते हैं। कुशल नर्सिंग पेशेवरों की मांग बढ़ रही है।
`
}
,
  {
  "id": "gnm",
  "title": "GNM",
  "totalFee": "2,30,000",
  "duration": "3 YEARS",
  "image": "https://paruluniversity.ac.in/app/202404/images/course/366579General%20Nursing%20Midwifery%20(GNM).jpg",
  "approvedBy": "KARNATAKA UNIVERSITY, INC APPROVED",
  "status": "Ongoing",
  "shortDescription": "Comprehensive nursing training ➤ Patient care skills ➤ Certified diploma ➤ Clinical & community practice ➤ Advance your nursing career.",
  "fullDescription": `
### What is GNM (General Nursing and Midwifery)?
GNM is a diploma course aimed at training students in nursing and midwifery, preparing them for professional healthcare roles in hospitals and community settings.

### GNM (जनरल नर्सिंग और मिडवाइफरी) क्या है?
GNM एक डिप्लोमा कोर्स है जो छात्रों को नर्सिंग और मिडवाइफरी में प्रशिक्षित करता है, ताकि वे अस्पतालों और सामुदायिक स्वास्थ्य केंद्रों में पेशेवर स्वास्थ्य सेवा प्रदान कर सकें।

---

### Course Overview
This 3-year program covers nursing theory, midwifery, anatomy, physiology, pharmacology, and community health nursing. Students gain hands-on experience through clinical postings.

### कोर्स का अवलोकन
यह 3 वर्षीय कार्यक्रम नर्सिंग सिद्धांत, मिडवाइफरी, शरीर रचना विज्ञान, शरीर क्रिया विज्ञान, फार्माकोलॉजी, और सामुदायिक स्वास्थ्य नर्सिंग शामिल करता है। छात्र क्लिनिकल पोस्टिंग के माध्यम से व्यावहारिक अनुभव प्राप्त करते हैं।

---

### Eligibility Criteria
- Minimum 10+2 pass or equivalent  
- Interested in healthcare and patient support

### पात्रता मानदंड
- न्यूनतम 10+2 या समकक्ष उत्तीर्ण  
- स्वास्थ्य सेवा और रोगी सहायता में रुचि

---

### Training and Certification
Students receive training in hospitals and community health centers. After successful completion, they get a diploma recognized by Karnataka University and INC.

### प्रशिक्षण और प्रमाणपत्र
छात्रों को अस्पतालों और सामुदायिक स्वास्थ्य केंद्रों में प्रशिक्षण दिया जाता है। सफलतापूर्वक पूरा करने पर कर्नाटक विश्वविद्यालय और INC द्वारा मान्यता प्राप्त डिप्लोमा दिया जाता है।

---

### Career Opportunities
Graduates can work as staff nurses, community health nurses, or pursue higher studies like B.Sc Nursing. Nursing is a growing field with strong demand worldwide.

### रोजगार के अवसर
ग्रेजुएट स्टाफ नर्स, सामुदायिक स्वास्थ्य नर्स के रूप में कार्य कर सकते हैं या B.Sc नर्सिंग जैसे उच्च अध्ययन कर सकते हैं। नर्सिंग एक तेजी से बढ़ता हुआ क्षेत्र है जहाँ विश्वव्यापी मांग है।
`
}
,
  {
  "id": "drt-radiographer",
  "title": "DRT (RADIOGRAPHER)",
  "totalFee": "1,08,000",
  "duration": "2 YEARS",
  "image": "https://64.media.tumblr.com/bf4241057c9ca0fb4140aa46a952647a/8a39e37ec7e04112-bf/s1280x1920/97ade4bb7db6adc8a0e086456d46e435d835c7e4.jpg",
  "approvedBy": "NCVT APPROVED ITI",
  "status": "Ongoing",
  "shortDescription": "Learn to operate X-ray & imaging equipment ➤ Understand radiographic techniques ➤ Get certified ➤ Gain clinical experience ➤ Start radiography career.",
  "fullDescription": `
### What is DRT (Radiographer)?
DRT (Diploma in Radiography Technology) trains students to operate diagnostic imaging equipment such as X-rays, CT scans, and MRI to assist medical professionals in diagnosing diseases.

### DRT (रेडियोग्राफर) क्या है?
DRT (डिप्लोमा इन रेडियोग्राफी टेक्नोलॉजी) छात्रों को एक्स-रे, सीटी स्कैन और एमआरआई जैसी डायग्नोस्टिक इमेजिंग उपकरणों को संचालित करना सिखाता है, ताकि वे चिकित्सीय निदान में सहायता कर सकें।

---

### Course Overview
This 2-year program covers radiographic procedures, anatomy, patient care, radiation safety, and imaging techniques. Training includes both theoretical lessons and hands-on clinical practice.

### कोर्स का अवलोकन
यह 2 वर्षीय कार्यक्रम रेडियोग्राफिक प्रक्रियाएं, शरीर रचना विज्ञान, रोगी देखभाल, विकिरण सुरक्षा, और इमेजिंग तकनीकों को शामिल करता है। प्रशिक्षण में सैद्धांतिक कक्षाएं और व्यावहारिक क्लिनिकल अभ्यास शामिल हैं।

---

### Eligibility Criteria
- Minimum 10th pass  
- Interest in medical imaging and technology

### पात्रता मानदंड
- न्यूनतम 10वीं उत्तीर्ण  
- मेडिकल इमेजिंग और तकनीक में रुचि

---

### Training and Certification
Students receive clinical training in hospitals under expert supervision. Certification is awarded by NCVT, recognized nationally.

### प्रशिक्षण और प्रमाणपत्र
छात्रों को विशेषज्ञ पर्यवेक्षण में अस्पतालों में क्लिनिकल प्रशिक्षण दिया जाता है। प्रमाणपत्र NCVT द्वारा प्रदान किया जाता है, जो राष्ट्रीय स्तर पर मान्यता प्राप्त है।

---

### Career Opportunities
Graduates can work as radiographers in hospitals, diagnostic labs, clinics, and healthcare centers. The demand for skilled radiographers is steadily increasing.

### रोजगार के अवसर
ग्रेजुएट अस्पतालों, डायग्नोस्टिक लैब, क्लीनिक, और स्वास्थ्य केंद्रों में रेडियोग्राफर के रूप में कार्य कर सकते हैं। कुशल रेडियोग्राफरों की मांग निरंतर बढ़ रही है।
`
}
,
 {
  "id": "health-sanitary-inspector",
  "title": "HEALTH SANITARY INSPECTOR",
  "totalFee": "25,000",
  "duration": "1 YEAR",
  "image": "https://www.aptkhordacollege.org/wp-content/uploads/2023/08/diploma-in-health-sanitary-inspector.jpg",
  "approvedBy": "NCVT APPROVED ITI",
  "status": "Ongoing",
  "shortDescription": "Learn hygiene & sanitation protocols ➤ Monitor public health standards ➤ Get certified ➤ Practical field training ➤ Build career in health inspection.",
  "fullDescription": `
### What is a Health Sanitary Inspector?
A Health Sanitary Inspector is responsible for ensuring public health and hygiene by inspecting sanitation standards in communities, public places, and industries to prevent disease outbreaks.

### स्वास्थ्य एवं स्वच्छता निरीक्षक क्या होता है?
स्वास्थ्य एवं स्वच्छता निरीक्षक समुदायों, सार्वजनिक स्थानों और उद्योगों में स्वच्छता मानकों का निरीक्षण कर जन स्वास्थ्य और स्वच्छता सुनिश्चित करता है ताकि रोग फैलने से रोका जा सके।

---

### Course Overview
This 1-year program covers sanitation laws, public health management, hygiene practices, waste management, and inspection techniques with practical field training.

### कोर्स का अवलोकन
यह 1 वर्षीय कार्यक्रम स्वच्छता कानून, जन स्वास्थ्य प्रबंधन, स्वच्छता अभ्यास, कचरा प्रबंधन, और निरीक्षण तकनीकों को व्यावहारिक प्रशिक्षण के साथ शामिल करता है।

---

### Eligibility Criteria
- Minimum 10th pass  
- Interest in public health and sanitation

### पात्रता मानदंड
- न्यूनतम 10वीं उत्तीर्ण  
- जन स्वास्थ्य और स्वच्छता में रुचि

---

### Training and Certification
Students receive classroom and field training supervised by experts. Certification is provided by NCVT with national recognition.

### प्रशिक्षण और प्रमाणपत्र
छात्रों को विशेषज्ञों के निर्देशन में कक्षा एवं क्षेत्र प्रशिक्षण दिया जाता है। प्रमाणपत्र NCVT द्वारा प्रदान किया जाता है, जो राष्ट्रीय स्तर पर मान्यता प्राप्त है।

---

### Career Opportunities
Graduates can work in municipal corporations, health departments, industries, and NGOs focused on public health and sanitation.

### रोजगार के अवसर
ग्रेजुएट नगर निगम, स्वास्थ्य विभाग, उद्योगों, और जन स्वास्थ्य एवं स्वच्छता से संबंधित गैर-सरकारी संगठनों में कार्य कर सकते हैं।
`
}


];

