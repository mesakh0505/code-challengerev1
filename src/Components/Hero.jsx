import next from "next";
import styles from "../app/style";
import GetStarted from "./GetStarted";
import Image from "next/image";
import Link from "next/link";



const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Ada <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Karenamu</span>{" "}
          </h1>
            <div className="ss:flex hidden md:mr-4 mr-0">
              <GetStarted />
            </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Bank Digital
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lahir Digital.Bank yang selalu ada tanpa jarak.
          Semudah itu,senyaman itu.Kami hadir buat kamu.
          Yuk, Kenalan !
        </p>
        <Link href="/AboutUs">
        <button type="button" className={`py-4 px-6 padding-top 5px font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
            Kenalan Yuk!
        </button>
        </Link>
        
        
      
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src ='LandingPage.webp' alt="Hero" className="w-full h-full relative z-[5]" width= "800" height="400"/>
        


        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
