import Image from "next/image";
import "./globals.css";
import Navbar from "./Components/Navabr/Navbar.jsx";
// import FirstSection from "./Components/FirstSection/FirstSection.jsx";
import SecorndSection from "./Components/SecorndSection/SecorndSection.jsx";
import ThirdSection from "./Components/ThirdSection/ThirdSection.jsx";
import FourthSection from "./Components/FourthSection/FourthSection.jsx";
import Firstsection from "./Components/FirstSection/Firstsection";
import Footer from "./Components/Footer/Footer.jsx";
import ContactSection from "./Components/ContactSection/ContactSection.jsx";



export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Background Image */}
      <main className="">
        <Navbar/>
        <Firstsection/>
        {/* <FirstSection/> */}
         <SecorndSection/>
         <FourthSection/>
         <ThirdSection/>
         <ContactSection/>
         <Footer/>
      </main>
    </div>
  );
}