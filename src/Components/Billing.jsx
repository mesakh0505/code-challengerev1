import styles, { layout } from "../app/style";
import Image from "next/image";


const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src="header_carousel_bluloyalty_ea16629356.webp" alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
        
      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Blue by BCA Digital <br className="sm:block hidden" /> Mulai Langkahmu
        
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Beban hidup jadi ringan mulai saja Langkahmu
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src="apple.svg"alt="apple" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src="google-play.png" alt="google_play" className="w-[120.17px] h-[43.08px] object-contain cursor-pointer" />
      </div>
    </div>
  </section>
);

export default Billing;
