import Navbar from "../components/Navbar";
import Carousel from "../components/carousel";



export default function Home() {
  return (
    <main className="flex-grow flex flex-col items-center justify-center h-full">
      <div className="self-stretch p-10 bg-gradient-to-b from-violet-500 via-fuchsia-400 to-fuchsia-200 inline-flex justify-start items-center gap-10 overflow-hidden h-full mt-20">
    <div className="w-[564px] self-stretch px-7 py-5 bg-white rounded-[20px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] inline-flex flex-col justify-start items-center gap-7 overflow-hidden">
        <div className="justify-start text-black text-2xl font-semibold font-['Work_Sans']">Votre premier rendez-vous chez nous ?</div>
        <div className="self-stretch text-center justify-start text-black/90 text-base font-normal font-['Ubuntu'] leading-tight tracking-tight">Nous vous proposons des soins dentaires, des interventions chirurgicales, ainsi qu’un accompagnement personnalisé, conçu pour répondre à vos besoins spécifiques.</div>
        <div className="self-stretch flex-1 flex flex-col justify-start items-start gap-5">
            <div className="self-stretch bg-white rounded-[20px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] inline-flex justify-start items-start gap-2.5 overflow-hidden">
                <img className="w-72 h-44" src="/soins-dents.jpg" />
                <div className="flex-1 self-stretch py-2.5 inline-flex flex-col justify-start items-center gap-2.5 overflow-hidden">
                    <div className="text-center justify-start text-black text-base font-semibold font-['Work_Sans'] leading-tight">Notre service dentaire</div>
                    <div className="w-56 text-center justify-start text-black/90 text-[10px] font-normal font-['Ubuntu'] leading-3 tracking-tight">Nos professionnelles vous propose des rendez-vous rapidement et selon votre disponibilité.</div>
                    <div className="self-stretch flex-1 px-6 flex flex-col justify-center items-center gap-2.5 overflow-hidden">
                        <div className="px-5 py-2.5 bg-blue-500 rounded-3xl inline-flex justify-center items-center gap-2.5 overflow-hidden">
                            <div className="justify-start text-white text-xs font-bold font-['Ubuntu']">Prendre Rendez-Vous</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="self-stretch bg-white rounded-[20px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] inline-flex justify-start items-start gap-2.5 overflow-hidden">
                <img className="w-72 h-44" src="/aide-soignante-service-chirurgie.jpg" />
                <div className="flex-1 self-stretch py-2.5 inline-flex flex-col justify-start items-center gap-2.5 overflow-hidden">
                    <div className="text-center justify-start text-black text-base font-semibold font-['Work_Sans'] leading-tight">Notre service chirurgie</div>
                    <div className="w-56 text-center justify-start text-black/90 text-[10px] font-normal font-['Ubuntu'] leading-3 tracking-tight">Nos professionnelles vous propose des rendez-vous rapidement et selon votre disponibilité.</div>
                    <div className="self-stretch flex-1 px-6 flex flex-col justify-center items-center gap-2.5 overflow-hidden">
                        <div className="px-5 py-2.5 bg-blue-500 rounded-3xl inline-flex justify-center items-center gap-2.5 overflow-hidden">
                            <div className="justify-start text-white text-xs font-bold font-['Ubuntu']">Prendre Rendez-Vous</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="self-stretch bg-white rounded-[20px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] inline-flex justify-start items-start gap-2.5 overflow-hidden">
                <img className="w-72 h-44" src="/chirurgie-laser.jpg.webp" />
                <div className="flex-1 self-stretch py-2.5 inline-flex flex-col justify-start items-center gap-2.5 overflow-hidden">
                    <div className="text-center justify-start text-black text-base font-semibold font-['Work_Sans'] leading-none">Notre service ophtalmologie</div>
                    <div className="w-56 text-center justify-start text-black/90 text-[10px] font-normal font-['Ubuntu'] leading-3 tracking-tight">Nos professionnelles vous propose des rendez-vous rapidement et selon votre disponibilité.</div>
                    <div className="self-stretch flex-1 px-6 flex flex-col justify-center items-center gap-2.5 overflow-hidden">
                        <div className="px-5 py-2.5 bg-blue-500 rounded-3xl inline-flex justify-center items-center gap-2.5 overflow-hidden">
                            <div className="justify-start text-white text-xs font-bold font-['Ubuntu']">Prendre Rendez-Vous</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="self-stretch bg-white rounded-[20px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] inline-flex justify-start items-start gap-2.5 overflow-hidden">
                <img className="w-72 h-44" src="/couverture-1.jpg" />
                <div className="flex-1 self-stretch py-2.5 inline-flex flex-col justify-start items-center gap-2.5 overflow-hidden">
                    <div className="text-center justify-start text-black text-base font-semibold font-['Work_Sans'] leading-tight">Notre service pédiatrique</div>
                    <div className="w-56 text-center justify-start text-black/90 text-[10px] font-normal font-['Ubuntu'] leading-3 tracking-tight">Nos professionnelles vous propose des rendez-vous rapidement et selon votre disponibilité.</div>
                    <div className="self-stretch flex-1 px-6 flex flex-col justify-center items-center gap-2.5 overflow-hidden">
                        <div className="px-2.5 py-[5px] bg-blue-500 rounded-3xl inline-flex justify-center items-center gap-2.5 overflow-hidden">
                            <div className="justify-start text-white text-xs font-bold font-['Ubuntu']">Prendre Rendez-Vous</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="flex-1 self-stretch inline-flex flex-col justify-start items-center gap-10">
        <div className="self-stretch px-7 py-5 bg-white rounded-[20px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] flex flex-col justify-start items-center gap-2.5 overflow-hidden">
            <div className="justify-start text-black text-2xl font-semibold font-['Work_Sans']">Vos prochains rendez-vous</div>
            <div className="self-stretch h-24 p-2.5 flex flex-col justify-center items-center gap-2.5 overflow-hidden">
                <div className="w-[504px] text-center justify-start text-black/90 text-base font-normal font-['Ubuntu'] leading-tight tracking-tight">Aucun rendez-vous prochainement...</div>
            </div>
        </div>
        <div className="self-stretch flex-1 flex flex-col justify-start items-center gap-2.5 overflow-hidden">
            <div className="self-stretch flex-1 pb-2.5 bg-white rounded-[20px] flex flex-col justify-start items-center gap-2.5 overflow-hidden"> 
                <div className="self-stretch flex-1 px-32 flex flex-col justify-center items-center gap-2.5 overflow-hidden">
                    <Carousel />
                </div>
            </div>
        </div>
    </div>
</div>
    </main>
  );
}