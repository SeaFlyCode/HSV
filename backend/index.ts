import express, { Request, Response } from 'express';
import resaRoutes from './routes/resaRoutes';
import { connectToDatabase } from './config/database';
const app = express();
const PORT = 3000;

app.use(express.json()); // Pour parser les requêtes JSON
app.use('/api', resaRoutes); // Préfixe pour les routes

// Connexion à la base de données
connectToDatabase();

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});