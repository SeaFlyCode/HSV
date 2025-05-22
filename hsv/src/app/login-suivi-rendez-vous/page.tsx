"use client";

import { useState } from 'react';

const LoginSuiviRendezVous = () => {
    const [nom, setNom] = useState('');
    const [email, setEmail] = useState('');

    const handleSearch = () => {
        console.log("Recherche...", { nom, email });
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen pt-24">
            <div className="py-[30px] bg-[#f4f4f4] rounded-[20px] shadow-[0px_0px_10px_2px_rgba(0,0,0,0.25)] flex flex-col justify-center items-center gap-4 overflow-hidden">
                <h1 className="w-[461px] text-center text-black text-[26px] font-bold font-ubuntu uppercase">
                    Suivi de votre rendez-vous
                </h1>
                
                <div className="flex flex-col justify-start items-center gap-10">
                    <div className="w-[488px] px-[45px] py-2.5 flex flex-col justify-center items-center gap-[30px] overflow-hidden">
                        <div className="self-stretch flex flex-col justify-center items-center gap-[5px]">
                            <label className="self-stretch text-black text-xl font-medium font-['Work_Sans']">
                                NOM
                            </label>
                            <input
                                type="text"
                                value={nom}
                                onChange={(e) => setNom(e.target.value)}
                                className="self-stretch h-[30px] opacity-80 bg-neutral-200 rounded-[5px] border border-black/30 px-2 text-black"
                            />
                        </div>
                        
                        <div className="self-stretch flex flex-col justify-center items-center gap-[5px]">
                            <label className="self-stretch text-black text-xl font-medium font-['Work_Sans']">
                                EMAIL
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="self-stretch h-[30px] opacity-80 bg-neutral-200 rounded-[5px] border border-black/30 px-2 text-black"
                            />
                        </div>
                    </div>

                    <button 
                        onClick={handleSearch}
                        className="w-[408px] p-2.5 bg-[#4976ff] rounded-[27px] shadow-[0px_0px_4px_2px_rgba(0,0,0,0.25)] hover:bg-[#3960d8] transition-colors"
                    >
                        <span className="text-center text-white text-3xl font-bold font-ubuntu">
                            RECHERCHER
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LoginSuiviRendezVous;