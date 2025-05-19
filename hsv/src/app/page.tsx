import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold text-center mt-20">Bienvenue sur le site de l'hôpital HSV</h1>
      <p className="mt-4 text-lg text-center">Votre santé, notre priorité.</p>
    </main>
  );
}