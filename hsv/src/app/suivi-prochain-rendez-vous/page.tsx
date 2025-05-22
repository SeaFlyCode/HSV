const SuiviRendezVous = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center min-h-screen pt-24">
        <div className="rounded-[20px] bg-[#F5F5F5] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] flex flex-col justify-center items-center w-[800px] p-[30px] gap-4">
          <h2 className="text-2xl font-bold mb-4 text-black font-ubuntu">Vos Rendez-vous</h2>
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
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-black">22/05/2025</td>
                  <td className="px-6 py-4 text-black">Salle 204</td>
                  <td className="px-6 py-4 text-black">Dr. Martin</td>
                  <td className="px-6 py-4 text-black">Dentiste</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 text-sm text-green-800 bg-green-100 rounded-full">
                      Confirmé
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuiviRendezVous;