'use client';

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

const SuiviProchainRendezVous = () => {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [searchInfo, setSearchInfo] = useState<{ nom: string, email: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Récupération des données du localStorage
    const fetchData = () => {
      try {
        const storedReservations = localStorage.getItem('reservations');
        const storedSearchInfo = localStorage.getItem('searchInfo');
        
        if (storedReservations) {
          setReservations(JSON.parse(storedReservations));
        }
        
        if (storedSearchInfo) {
          setSearchInfo(JSON.parse(storedSearchInfo));
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Fonction pour formater la date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR');
  };

  // Fonction pour retourner à la page de recherche
  const handleReturnToSearch = () => {
    router.push('/suivi-rendez-vous');
  };

  // Style pour les différents statuts
  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Confirmé':
        return 'px-3 py-1 text-sm text-green-800 bg-green-100 rounded-full';
      case 'En attente':
        return 'px-3 py-1 text-sm text-orange-800 bg-orange-100 rounded-full';
      case 'Annulé':
        return 'px-3 py-1 text-sm text-red-800 bg-red-100 rounded-full';
      default:
        return 'px-3 py-1 text-sm text-gray-800 bg-gray-100 rounded-full';
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center min-h-screen pt-24">
        <div className="rounded-[20px] bg-[#F5F5F5] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] flex flex-col justify-center items-center w-[800px] p-[30px] gap-4">
          {loading ? (
            <p className="text-center py-4">Chargement en cours...</p>
          ) : (
            <>
              {searchInfo && (
                <div className="w-full mb-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-700">
                    Résultats pour {searchInfo.nom} ({searchInfo.email})
                  </h3>
                </div>
              )}
              
              <h2 className="text-2xl font-bold mb-4 text-black font-ubuntu">Vos Rendez-vous</h2>
              
              {reservations.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-600 mb-4">Aucun rendez-vous trouvé avec ces informations.</p>
                  <button 
                    onClick={handleReturnToSearch}
                    className="px-4 py-2 bg-[#4976ff] text-white rounded-md hover:bg-[#3960d8] transition-colors"
                  >
                    Retour à la recherche
                  </button>
                </div>
              ) : (
                <div className="w-full overflow-x-auto">
                  <table className="w-full bg-white rounded-lg overflow-hidden font-ubuntu">
                    <thead className="bg-[#4976ff]">
                      <tr>
                        <th className="px-6 py-3 text-left text-white">Date</th>
                        <th className="px-6 py-3 text-left text-white">Lieu</th>
                        <th className="px-6 py-3 text-left text-white">Médecin</th>
                        <th className="px-6 py-3 text-left text-white">Spécialité</th>
                        <th className="px-6 py-3 text-left text-white">Statut</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {reservations.map((reservation) => (
                        <tr key={reservation.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 text-black">{formatDate(reservation.date)}</td>
                          <td className="px-6 py-4 text-black">{reservation.place}</td>
                          <td className="px-6 py-4 text-black">{reservation.nameDoctor}</td>
                          <td className="px-6 py-4 text-black">{reservation.speciality}</td>
                          <td className="px-6 py-4">
                            <span className={getStatusStyle(reservation.status)}>
                              {reservation.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  
                  <div className="mt-6 flex justify-center">
                    <button 
                      onClick={handleReturnToSearch}
                      className="px-4 py-2 bg-[#4976ff] text-white rounded-md hover:bg-[#3960d8] transition-colors"
                    >
                      Nouvelle recherche
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default SuiviProchainRendezVous;