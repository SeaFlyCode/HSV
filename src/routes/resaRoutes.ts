import { Router } from 'express';
import * as resaController from '../controllers/resaControllers';

const router = Router();

// Route pour obtenir toutes les réservations
router.get('/resa', resaController.handleGetAllReservations);

// Route pour ajouter une nouvelle réservation
router.post('/resa', resaController.handlecreateReservation);

// Route pour supprimer une réservation
router.delete('/resa/:id', resaController.handledeleteReservation);

export default router;