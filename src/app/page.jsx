import Image from "next/image";
import "./globals.css";
import Navbar from "./Components/Navabr/Navbar.jsx";
// import FirstSection from "./Components/FirstSection/FirstSection.jsx";
import SecorndSection from "./Components/SecorndSection/SecorndSection.jsx";
import ThirdSection from "./Components/ThirdSection/ThirdSection.jsx";
import FourthSection from "./Components/FourthSection/FourthSection.jsx";
import Firstsection from "./Components/FirstSection/Firstsection";
import Footer from "./Components/Footer/Footer.jsx";


export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/colors.avif" // Your image in public folder
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div> {/* Optional overlay */}
      </div>
      
      <main className="">
        <Navbar/>
        <Firstsection/>
        {/* <FirstSection/> */}
         <SecorndSection/>
         <ThirdSection/>
         <FourthSection/>
         <Footer/>
      </main>
    </div>
  );
}