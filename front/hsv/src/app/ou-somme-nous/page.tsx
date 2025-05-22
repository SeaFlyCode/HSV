// filepath: src/app/ou-somme-nous/page.tsx
import Location from "../../components/Location";

const OusommesNous = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-24">
      <div className="bg-white rounded-2xl shadow-lg flex flex-col w-[1400px] max-w-full p-4 gap-6">
        <div className="flex justify-center">
          <Location />
        </div>
        <div className="mt-4 text-center text-black text-lg font-ubuntu">
          <p>
            Retrouvez-nous à l’adresse : 47-83 Bd de l'Hôpital, 75013 Paris.<br />
            Nous sommes ouverts du lundi au vendredi de 8h à 18h.<br />
            Contact : 01 42 16 00 00
          </p>
        </div>
      </div>
    </div>
  );
};

export default OusommesNous;