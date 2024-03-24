'use client'
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function Teams() {
    const [teams, setTeams] = useState([]);

    const onFetchTeams = async () => {
        const totalRoles = 6
        const response = await axios.get(`https://randomuser.me/api/?results=${totalRoles}`);
        const roles = [
            {
                name : "Lanny Budiati",
                title: "Direktur Utama",
                expertise: "Transactional Banking, Area Manager",
                description: "Commander in Chief mulai dibeberapa cabang BCA dan divisi di Kantor Pusat hingga Kepala Kantor Wilayah I BCA Jawa Barat"
            },
            {
                name : "Iman Sentosa",
                title: "Direktur IT & Operasi",
                expertise: "Operations Management, Teknologi Informasi",
                description: "Supervisi Kegiatan harian dan Penerapan Teknologi Informasi dalam kegiatan hariaan"
            },
            {
                
                name : "Nugroho Budiman",
                title: "Direktur Kepatuhan",
                expertise: "Legal,restrukturisasi",
                description: "Segudang Pengalaman di bidang Legal dan Litigasi dan Special Asset Management"
            },
            {
                name : "Theresia Endang Ratnawati",
                title: "Komisaris Utama",
                expertise: "Financial Management, Litigasi dan Legal",
                description: "Oversee semua kegiataan Perseroan dan Senior Legal advisor serta Dewan Pengawas Dana Pensiun BCA"
            },
            {
                name : "Daniel Gunawan",
                title: "Komisaris Independent",
                expertise: "Marketing Strategy, Operation Management",
                description: "Mengawasi Kinerja Perseroan terutama dalam Customer Service dan Operasional Management"
            },
            {
                name : "Ina Suwandi",
                title: "Komisaris Independen",
                expertise: "Teknologi Informasi,Sistem Pembayaran",
                description: "Meningkatkan Pelayanan Pelanggan dengan teknologi informasi Modern"
            },
            
        ]
        for (let i = 0; i < totalRoles; i++) {
            response.data.results[i].role = roles[i]
        }
        setTeams(response.data.results);
        console.log(response.data.results);
    }

    useEffect(() => {
        onFetchTeams();
    }, [])

    return (
        <div>
            {/* DIV BANNER */}
            <div className='w-[100%] h-auto bg-[#5acafd] flex justify-center pt-[10%] md:pt-[5%]'>
                <div className='flex flex-wrap justify-center py-[10%] px-[20%]  bg-white border'>
                    <div className='text-center text-blue text-[50px] md:text-[70px] font-bold'>
                        Pimpinan Perusahaan
                        <div className='flex flex-wrap justify-center pt-[2px]'>
                            <hr className='text-center text-white h-[5px] w-[78px]' />
                        </div>
                    </div>
                </div>
            </div>
            {/* DIV TEAM MEMBERS */}
            <div className="h-auto bg-[#5acafd] flex justify-center">
                <div className="text-center py-10 mx-[10%] md:mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 max-w-auto gap-[100px]">
                        {teams.map((team, index) => (
                            <div key={index} className="flex h-auto justify-center rounded-xl bg-[#160003] group">
                                <div className="group h-96 w-96">
                                    <div className="relative h-full w-full rounded-xl shadow-2xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                        <div className="absolute inset-0 flex items-center justify-center text-[70px] text-white">
                                            <img loading="lazy" src={team.picture.medium} alt="team image" className="h-full w-full rounded-xl object-cover brightness-90" sizes="100vw" width={0} height={0} style={{ width: '100%', height: '100%' }} />
                                        </div>
                                        <div className="absolute inset-0 h-full w-full rounded-xl bg-[#160003]/80 px-12 text-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                            <div className="flex min-h-full flex-col items-center justify-center gap-2">
                                                <img loading="lazy" src={team.picture.large} alt="team image" className="h-full w-full rounded-xl object-cover" sizes="100vw" width={0} height={0} style={{ width: '120px', height: '120px' }} />
                                                <div className="text-3xl font-bold">
                                                    {team.name.first} - {team.role.title}
                                                </div>
                                                <div className="text-[14px] font-bold">
                                                    {team.role.expertise}
                                                </div>
                                                <div className="text-base">
                                                    {team.phone}
                                                </div>
                                                <div className="text-base">
                                                    {team.email}
                                                </div>
                                                <div className="flex justify-around w-[70%]">
                                                    <FaInstagram className="text-white" size={22} />
                                                    <FaFacebookF className="text-white" size={22} />
                                                    <FaLinkedinIn className="text-white" size={22} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}