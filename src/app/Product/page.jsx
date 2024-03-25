import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import { FaArrowTurnDown } from "react-icons/fa6";



export default function Products() {
    return (
        <div>
            {/* DIV BANNER */}
            <div className="flex justify-center items-center w-[100%] h-[525px] bg-[url(/Banner.webp)] objec-cover">
                <div className='flex flex-wrap items-center font-bold text-start w-[960px] h-auto  text-[20px]  md:text-[30px] text-whitestyle'>
                   
                </div>
            </div>
            {/* DIV PRODUCTS 1 */}
            <div className='h-auto bg-[#7cbdce] flex'>
                <div className="flex w-[0%] md:w-[60%]">
                    <Image loading="lazy" className="hidden md:block w-[100%] h-auto" sizes="(100vw, 100vh)" src='/BluAccount.webp' width={0} height={0} alt='product1' />
                </div>
                <div className="w-[100%] md:w-[100%] flex flex-col my-[20%] md:my-[5%] mx-[10%] md:mx-[2%]">
                    <div className="flex flex-wrap">
                        <div className='font-extrabold text-center text-white text-[50px]'>
                            BluAccount
                            <div className='flex flex-wrap justify-center md:justify-start pt-[2px] mb-[35px]'>
                                <hr className='text-center text-white h-[5px] w-[78px]' />
                            </div>
                        </div>
                        <div className='mb-[3%] text-[14px]'>
                            <div className='flex flex-wrap font-bold text-justify text-white'>
                            Buka Rekening Semudah Itu!
                            </div>
                        </div>
                        <div className='mb-[10%] md:mb-[1%] text-[20px]'>
                            <div className='flex flex-wrap text-justify text-white'>
                                Blu Account adalah Rekening Utama Kamu.Dengan Menjadi Nasabah Blu,
                                kamu resmi menjadi "sobat Blu!"
                            </div>
                        </div>
                        <div className='flex flex-col mb-[3%] text-[20px]'>
                            <div className='my-[2%] text-[20px]'>
                                <div className='flex flex-wrap text-justify mb-[5%] md:mb-[1%] text-white font-bold text-[40px] md:text-[14px]'>
                                    Keunggulan Blu Account
                                </div>
                                <div className="flex flex-col w-[100%]">
                                    <div className='flex flex-wrap text-center md:text-justify text-white mb-[3%] md:mb-[1%]'>
                                        <GoDotFill className="md:mb-[0%] hidden md:block" /><FaArrowTurnDown className="mb-[5px] block md:hidden" /> Buka Rekening Lebih Mudah
                                    </div>
                                    <div className='flex flex-wrap text-center md:text-justify text-white mb-[3%] md:mb-[1%]'>
                                        <GoDotFill className="md:mb-[0%] hidden md:block" /><FaArrowTurnDown className="mb-[5px] block md:hidden" /> Terkoneksi darimana Saja
                                    </div>
                              
                                </div>
                            </div>
                          
                                  
                                </div>
                            </div>
                        </div>
                    </div >
               
          
            {/* DIV PRODUCTS 2 */}
            <div className='h-[500px]  bg-[#762486] flex'>
                <div className="w-[100%] md:w-[100%] flex flex-col my-[20%] md:my-[5%] mx-[10%] md:mx-[2%]">
                    <div className="flex flex-wrap flex-col">
                        <div className='font-extrabold text-center md:text-end text-white text-[50px]'>
                            Blue Savings
                            <div className='flex flex-wrap justify-center md:justify-end pt-[2px] mb-[35px]'>
                                <hr className='text-center text-white h-[5px] w-[78px]' />
                            </div>
                        </div>
                        <div className='font-semibold flex flex-col mb-[3%] text-[25px] w-[100%]'>
                            <div className='flex flex-col my-[2%] text-[14px] w-[100%] text-center md:text-end'>
                                <div className="flex flex-col">
                                    <div className='text-center md:text-end text-white mb-[3%] md:mb-[1%]'>
                                    Menabung sekaligus atur keuangan
                                    </div>
                                    <div className='text-bold text-[25px]text-center md:text-end text-white mb-[3%] md:mb-[1%]'>
                                    Dengan 20 jenis tabungan berbeda kamu bisa menabung sambil mengatur pos keuangan,
                                     agar pengeluaran bisa lebih hemat dan teratur.  
                                    </div>
                                    <div className='text-center md:text-end text-white mb-[3%] md:mb-[1%]'>
                
                                    bluSaving adalah pemisahan tabungan dalam satu rekening bluAccount. 
                                    </div>
                                    <div className='text-center md:text-end text-white mb-[3%] md:mb-[1%]'>
                                      Capai Semua Finansial Goals  
                                    </div>
                                    <div className='text-center md:text-end text-white mb-[3%] md:mb-[1%]'>
                                    Personalisasi Tujuanmu
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                </div >
                <div className="flex w-[0%] md:w-[60%]">
                    <Image loading="lazy" className="hidden md:block w-[100%] h-[100%]" sizes="(100vw, 100vh)" src='/blu-Savings.jpg' width={0} height={0} alt='product2' />
                </div>
            </div >
            {/* DIV PRODUCTS 3 */}
            <div className='h-[500px] bg-[#202155] flex'>
                <div className="flex w-[0%] md:w-[60%]">
                    <Image loading="lazy" className="hidden md:block w-[100%] h-[100%]" sizes="(100vw, 100vh)" src='/blubisnis.webp' width={0} height={10} alt='product3' />
                </div>
                <div className="w-[100%] md:w-[100%] flex flex-col my-[15%] md:my-[5%] mx-[10%] md:mx-[2%]">
                    <div className="flex flex-wrap flex-col">
                        <div className='font extrabold text-center md:text-start text-white text-[50px]'>
                            Blue Bisnis
                        <p>Rekening Bisnis Untuk Sobat Blue</p>    
                            <div className='flex flex-wrap justify-center md:justify-start pt-[2px] mb-[35px]'>
                                <hr className='text-center text-white h-[5px] w-[78px]' />
                            </div>
                        </div>
                        <div className='flex flex-col mb-[3%] text-[30px]'>
                            <div className='my-[2%] text-[30px]'>
                                <div className="flex flex-col w-[100%]">
                                    <div className='text-center md:text-justify text-white mb-[3%] md:mb-[1%]'>
                                        Pisahkan Dana Bisnis dan Pribadimu
                                    </div>
                                    <div className='text-center md:text-justify text-white mb-[3%] md:mb-[1%]'>
                                        Tersedia Business Kit Untuk Menunjangmu
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                </div >
            </div >
            {/* DIV TESTIMONIALS */}
            <div className="h-auto bg-blue-500 flex flex-wrap justify-center contrast-125">
                <div className="text-center py-10 mx-[10%] md:mx-auto">
                    <div className="text-white">Testimonials</div>
                    <div className="text-[30px] w-[100%] mx-auto leading-normal text-white font-bold mb-[5%]">
                        Apa Kata Mereka Tentang Kami
                    </div>
                    <div className="flex flex-col md:flex-row max-w-5xl gap-8 group">
                        <div className="contrast-150 bg-white/10 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500 cursor-pointer p-8 rounded-xl">
                            <Image loading="lazy" className="mx-auto rounded-full" src='/people01.png' width={100} height={100} alt='testimonee1' />
                            <div className="uppercase text-xl font-bold text-white">Wahyu Indah, Nasabah Setia</div>
                            <div className="text-sm leading-7 my-3 font-medium text-white opacity-50">"Atur Keuangan menjadi lebih Maksimal dengan Fitur blue Rewards di aplikasi Blu"</div>
                        </div>
                        <div className="contrast-150 bg-white/10 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500 cursor-pointer p-8 rounded-xl">
                            <Image loading="lazy" className="mx-auto rounded-full" src='/people02.png' width={100} height={100} alt='testimonee1' />
                            <div className="uppercase text-xl font-bold text-white">Bambang Irwanto,nasabah setia</div>
                            <div className="text-sm leading-7 my-3 font-medium text-white opacity-50">"Kerenya Fitur bluRewards di blu by BCA Digital Wajib dicoba"</div>
                        </div>
                        <div className="contrast-150 bg-white/10 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500 cursor-pointer p-8 rounded-xl">
                            <Image loading="lazy" className="mx-auto rounded-full" src='/people03.png' width={100} height={100} alt='testimonee1' />
                            <div className="uppercase text-xl font-bold text-white">Ira Budianti,nasabah PrioritasBCA</div>
                            <div className="text-sm leading-7 my-3 font-medium text-white opacity-50">"Konvensional plus steroid: canggih,handal,ciamik."</div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}