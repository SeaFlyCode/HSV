import { Request, Response } from 'express';
import { getAllReservations, createReservation, deleteReservation } from '../config/database';

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

// Ajouter une nouvelle réservation
export const handlecreateReservation = (req: Request, res: Response) => {
    console.log('Données reçues:', req.body);
    const { nom, prenom, email, telephone, specialite, date } = req.body;
      // Création d'une réservation avec les champs du formulaire
    const newReservation = {
        id: Date.now().toString(), // Génère un id unique basé sur le timestamp
        date,
        place: 'La Pitié Salpêtrière', // Valeur par défaut
        nameDoctor: 'À assigner', // Valeur par défaut
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