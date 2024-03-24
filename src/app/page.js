import Image from "next/image";
import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Stats, Testimonials, Hero } from "../Components"



export default function Home() {
  return (
   <>
   <div className={`bg-primary ${styles.flexStart}`}>
    <div className={`${styles.boxWidth}`}>
      <Hero />
    </div>
  </div>
  
  <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        </div>
  </div>
   </>
       );
}
