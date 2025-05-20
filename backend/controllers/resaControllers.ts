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
    const { date, place, nameDoctor, speciality, status } = req.body;
    const newReservation = {
        id: Date.now().toString(), // Génère un id unique basé sur le timestamp
        date,
        place,
        nameDoctor,
        speciality,
        status
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