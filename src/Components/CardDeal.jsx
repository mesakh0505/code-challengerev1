import { card } from "../assets";
import styles, { layout } from "../app/style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Promo buat Kamu ! <br className="sm:block hidden" /> 
        Makin Untung Pakai Promo Seru dari Blue
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Temukan Berbagai Promo menarik di mitra merchant pilihanmu
        Tunggu apalagi ?
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src="PromoBca.webp" alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
