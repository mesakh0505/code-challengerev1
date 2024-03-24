import styles from "../app/style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";


const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <img
          src="logo-white.webp"
          alt="BCA Logo"
          className="w-[266px] h-[72.14px] object-contain"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
          BCA Digital berizin dan diawasi oleh Otoritas Jasa Keuangan
          BCA Digital merupakan peserta penjaminan LPS
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright BCA Digital cloned Mesakh
      </p>
      <div className="flex gap-3 justify-center items-center mr-[2%] md:pt-0 pt-[6%]">
                <Link target="_blank" href="https://www.instagram.com/blubybcadigital/" passHref>
                    <FaInstagram className="text-white" size={22} />
                </Link>
                <Link target="_blank" href="https://www.facebook.com/blubybcadigital" passHref>
                    <FaFacebookF className="text-white" size={22} />
                </Link>
                <Link target="_blank" href="https://www.linkedin.com/company/bcadigital/" passHref>
                    <FaLinkedinIn className="text-white" size={22} />
                </Link>
                <Link target="_blank" href="https://www.youtube.com/@blubybcadigital" passHref>
                    <FaYoutube className="text-white" size={22} />
                </Link>
    
            </div>
        </div>

   
  </section>
);

export default Footer;
