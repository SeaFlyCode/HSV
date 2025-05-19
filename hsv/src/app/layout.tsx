import "../styles/globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Mon site",
  description: "Description de mon site",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="h-screen">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;700&display=swap" rel="stylesheet"/>
      </head>
      <body className="h-screen flex flex-col">
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
