import "../styles/globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Mon site",
  description: "Description de mon site",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap" rel="stylesheet"/>
      </head>
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
