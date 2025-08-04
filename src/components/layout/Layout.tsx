import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import TopBar from '../TopBar';
import WhatsAppButton from '../WhatsAppButton';
import InstagramButton from '../InstagramButton';
import NoticeSlider from '../../sections/home/NoticeSlider';

interface LayoutProps {
  children: React.ReactNode
}

const messages = ["Join us this 15th August as we proudly celebrate India’s 79th Independence Day. Let’s honor the spirit of freedom, unity, and progress with special events, cultural programs, and inspiring stories that remind us of our incredible journey as a nation. Stay connected for updates and be a part of this patriotic celebration!",]
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-brainy-gray text-brainy-blue">
      <TopBar />
      <NoticeSlider
      texts={messages}
      speed={100}       // pixels per second
      interval={2500}   // pause between messages in ms
      className="bg-blue-50 text-blue-900 px-4 font-semibold"
    />
      <Header />
      <main className="flex-grow w-full ">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
      <InstagramButton />
    </div>
  );
};

export default Layout;
