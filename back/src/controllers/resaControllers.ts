import { Request, Response } from 'express';
import { getAllReservations, createReservation, deleteReservation, searchReservationsByNameAndEmail } from '../config/database';

/**
 * Contrôleurs pour la gestion des réservations médicales
 * Fonctionnalités:
 * - Obtention de toutes les réservations
 * - Création d'une nouvelle réservation avec attribution aléatoire d'un médecin par spécialité
 * - Suppression d'une réservation
 * - Recherche de réservations par nom et email du patient
 */

// Obtenir toutes les réservations
export const handleGetAllReservations = (req: Request, res: Response) => {
    getAllReservations()
        .then(reservations => {
            res.status(200).json(reservations);
        })
        .catch(error => {
            console.error('Error fetching reservations:', error);
            res.status(500).send('Erreur lors de la récupération des réservations');
        });
    
};

// Liste des médecins par spécialité
const doctors: Record<string, string[]> = {
    // Médecins généralistes
    "Médecin généraliste": [
        "Dr. Sophie Martin", 
        "Dr. Thomas Dubois", 
        "Dr. Julie Lambert", 
        "Dr. Nicolas Bernard", 
        "Dr. Céline Petit"
    ],
    // Spécialistes
    "Cardiologie": [
        "Dr. Philippe Leroy", 
        "Dr. Isabelle Moreau", 
        "Dr. Laurent Girard"
    ],
    "Dermatologie": [
        "Dr. Caroline Dupont", 
        "Dr. François Legrand", 
        "Dr. Marie Leclerc"
    ],
    "Ophtalmologie": [
        "Dr. Pierre Simon", 
        "Dr. Nathalie Roux", 
        "Dr. Antoine Fournier"
    ],
    "Pédiatrie": [
        "Dr. Émilie Blanc", 
        "Dr. Michel Perrin", 
        "Dr. Sarah Garcia"
    ],
    "Gynécologie": [
        "Dr. Stéphanie Robert", 
        "Dr. David Mercier", 
        "Dr. Claire Fontaine"
    ],
    "Dentiste": [
        "Dr. Julien Rousseau", 
        "Dr. Anne Durand", 
        "Dr. Marc Lefevre"
    ],
    "Orthopédie": [
        "Dr. Christine Bonnet", 
        "Dr. Vincent Muller", 
        "Dr. Hélène Roche"
    ],
    "Neurologie": [
        "Dr. Paul Gauthier", 
        "Dr. Aurélie Chevalier", 
        "Dr. Sébastien Lemoine"
    ],
    "Psychiatrie": [
        "Dr. Catherine Dumas", 
        "Dr. Éric Morel", 
        "Dr. Sandrine Renault"
    ],
    // Docteur par défaut si la spécialité n'existe pas
    "default": [
        "Dr. Jean Dupont", 
        "Dr. Marie Lambert", 
        "Dr. Alexandre Martin"
    ]
};

// Fonction pour obtenir un médecin aléatoire selon la spécialité
const getRandomDoctor = (speciality: string): string => {
    if (doctors[speciality]) {
        const specialityDoctors = doctors[speciality];
        return specialityDoctors[Math.floor(Math.random() * specialityDoctors.length)];
    } else {
        const defaultDoctors = doctors.default;
        return defaultDoctors[Math.floor(Math.random() * defaultDoctors.length)];
    }
};

// Ajouter une nouvelle réservation
export const handlecreateReservation = (req: Request, res: Response) => {
    console.log('Données reçues:', req.body);
    const { nom, prenom, email, telephone, specialite, date } = req.body;
    
    // Sélection d'un médecin aléatoire selon la spécialité
    const selectedDoctor = getRandomDoctor(specialite);
    
    // Création d'une réservation avec les champs du formulaire
    const newReservation = {
        id: Date.now().toString(), // Génère un id unique basé sur le timestamp
        date,
        place: 'La Pitié Salpêtrière', // Valeur par défaut
        nameDoctor: selectedDoctor, // Médecin sélectionné aléatoirement
        speciality: specialite, // Utilise la spécialité du formulaire
        status: 'En attente', // Par défaut, la réservation est en attente
        // Ajout des informations du patient
        patient: {
            nom,
            prenom,
            email,
            telephone
        }
    };

    createReservation(newReservation)
        .then(() => {
            res.status(201).json({ message: 'Réservation créée avec succès' });
        })
        .catch(error => {
            console.error('Error creating reservation:', error);
            res.status(500).json({ error: 'Erreur lors de la création de la réservation' });
        });
};

// Supprimer une réservation
export const handledeleteReservation = (req: Request, res: Response) => {
    const reservationId = req.params.id;

    deleteReservation(reservationId)
        .then(() => {
            res.status(200).json({ message: 'Réservation supprimée avec succès' });
        })
        .catch(error => {
            console.error('Error deleting reservation:', error);
            res.status(500).json({ error: 'Erreur lors de la suppression de la réservation' });
        });
};

// Rechercher des réservations par nom et email
export const handleSearchReservations = (req: Request, res: Response): void => {
    const { nom, email } = req.query;

    if (!nom || !email) {
        res.status(400).json({ error: 'Le nom et l\'email sont requis pour la recherche' });
        return;
    }

    searchReservationsByNameAndEmail(nom.toString(), email.toString())
        .then(reservations => {
            if (reservations.length === 0) {
                res.status(404).json({ message: 'Aucune réservation trouvée avec ces critères' });
                return;
            }
            res.status(200).json(reservations);
        })
        .catch(error => {
            console.error('Error searching reservations:', error);
            res.status(500).json({ error: 'Erreur lors de la recherche de réservations' });
        });
};