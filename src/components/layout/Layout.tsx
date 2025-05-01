import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import TopBar from '../TopBar';
import WhatsAppButton from '../WhatsAppButton';

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-brainy-gray text-brainy-blue">
      <TopBar />
      <Header />
      <main className="flex-grow w-full ">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Layout;
