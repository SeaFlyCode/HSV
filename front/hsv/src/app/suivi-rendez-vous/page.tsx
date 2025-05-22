"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Reservation {
    id: string;
    date: string;
    place: string;
    nameDoctor: string;
    speciality: string;
    status: string;
    patient: {
        nom: string;
        prenom: string;
        email: string;
        telephone: string;
    };
}

const SuiviRendezVous = () => {
    const [nom, setNom] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSearch = async () => {
        // Validation des champs
        if (!nom.trim() || !email.trim()) {
            setError('Veuillez remplir tous les champs');
            return;
        }
        
        setError('');
        setLoading(true);
        
        try {
            const response = await fetch(`http://localhost:3000/api/search-resa?nom=${encodeURIComponent(nom)}&email=${encodeURIComponent(email)}`);
            
            if (!response.ok) {
                if (response.status === 404) {
                    // Stocker un tableau vide dans localStorage
                    localStorage.setItem('reservations', JSON.stringify([]));
                    localStorage.setItem('searchInfo', JSON.stringify({ nom, email }));
                    router.push('/suivi-prochain-rendez-vous');
                } else {
                    throw new Error('Erreur lors de la recherche');
                }
            } else {
                const data = await response.json();
                // Stocker les résultats dans localStorage
                localStorage.setItem('reservations', JSON.stringify(data));
                localStorage.setItem('searchInfo', JSON.stringify({ nom, email }));
                // Rediriger vers la page d'affichage des rendez-vous
                router.push('/suivi-prochain-rendez-vous');
            }
        } catch (err) {
            console.error(err);
            setError('Une erreur est survenue lors de la recherche');
        } finally {
            setLoading(false);
        }
    };

    // Fonction pour formater la date
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('fr-FR');
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
                                NOM <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                value={nom}
                                onChange={(e) => setNom(e.target.value)}
                                className="self-stretch h-[30px] opacity-80 bg-neutral-200 rounded-[5px] border border-black/30 px-2 text-black"
                                required
                            />
                        </div>
                        
                        <div className="self-stretch flex flex-col justify-center items-center gap-[5px]">
                            <label className="self-stretch text-black text-xl font-medium font-['Work_Sans']">
                                EMAIL <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="self-stretch h-[30px] opacity-80 bg-neutral-200 rounded-[5px] border border-black/30 px-2 text-black"
                                required
                            />
                        </div>
                        
                        {error && (
                            <div className="text-red-500 text-sm mt-1 self-center">{error}</div>
                        )}
                    </div>                    <button 
                        onClick={handleSearch}
                        disabled={loading}
                        className="w-[408px] p-2.5 bg-[#4976ff] rounded-[27px] shadow-[0px_0px_4px_2px_rgba(0,0,0,0.25)] hover:bg-[#3960d8] transition-colors disabled:bg-gray-400"
                    >
                        <span className="text-center text-white text-3xl font-bold font-ubuntu">
                            {loading ? 'RECHERCHE EN COURS...' : 'RECHERCHER'}
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SuiviRendezVous;