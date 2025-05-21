import Link from "next/link";

export default function Navbar(){
    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between p-4 bg-white text-black shadow-[0_0_10.8px_0_rgba(0,0,0,0.25)]">
            <Link href="/" className="text-black font-bold text-4xl not-italic leading-normal font-ubuntu">HSV hospital</Link>
            <ul className="flex space-x-4">
                <li><Link href="/suivi-rendez-vous" 
                className="text-black font-bold text-xs not-italic leading-normal font-ubuntu"
                >Suivi de Votre Rendez-Vous</Link></li>
                <li><Link href="/ou-somme-nous" 
                className="text-black font-bold text-xs not-italic leading-normal font-ubuntu"
                >Où sommes nous ?</Link></li>
                <li><Link href="/prendre-rendez-vous" 
                className="bg-[#4977FF] text-white font-bold text-xs not-italic leading-normal font-ubuntu rounded-[25px] px-4 py-2 transition hover:bg-blue-700"
                >Prendre Rendez-Vous</Link></li>
            </ul>
        </nav>
    )
}