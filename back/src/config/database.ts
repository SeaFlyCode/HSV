import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";
import Reservation from "../models/reservation";

export const collections: { reservation?: mongoDB.Collection } = {}

dotenv.config();

export async function connectToDatabase () {
    console.log("Connecting to database...");
 
    const dbConnString = process.env.DB_CONN_STRING || "";
    const dbName = process.env.DB_NAME || "";
    const usersCollectionName = process.env.USERS_COLLECTION || "";

    if (!dbConnString || !dbName || !usersCollectionName) {
        throw new Error("Missing required environment variables: DB_CONN_STRING, DB_NAME, or USERS_COLLECTION");
    }

    const client: mongoDB.MongoClient = new mongoDB.MongoClient(dbConnString);
            
    await client.connect();
        
    const db: mongoDB.Db = client.db(dbName);
   
    const gamesCollection: mongoDB.Collection = db.collection(usersCollectionName);
 
    collections.reservation = gamesCollection;
       
    console.log(`Successfully connected to database: ${db.databaseName} and collection: ${gamesCollection.collectionName}`);
 } 

 export async function getAllReservations(): Promise<Reservation[]> {
    if (!collections.reservation) {
        throw new Error("Reservation collection is not initialized");
    }
    const reservations = await collections.reservation.find({}).toArray();
    return reservations.map(reservation => ({
        id: reservation._id.toString(),
        date: reservation.date,
        place: reservation.place,
        nameDoctor: reservation.nameDoctor,
        speciality: reservation.speciality,
        status: reservation.status,
        patient: reservation.patient // Ajout des informations du patient
    }));
    }

 export async function createReservation(reservation: Reservation): Promise<void> {
    if (!collections.reservation) {
        throw new Error("Reservation collection is not initialized");
    }
    const result = await collections.reservation.insertOne(reservation);
    if (!result.acknowledged) {
        throw new Error("Failed to create reservation");
    }
    console.log(`Reservation created with id: ${result.insertedId}`);
 }

 export async function deleteReservation(id: string): Promise<void> {
    if (!collections.reservation) {
        throw new Error("Reservation collection is not initialized");
    }
    const result = await collections.reservation.deleteOne({ _id: new mongoDB.ObjectId(id) });
    if (result.deletedCount === 0) {
        throw new Error(`Failed to delete reservation with id: ${id}`);
    }
    console.log(`Reservation with id: ${id} deleted`);
 }

 export async function searchReservationsByNameAndEmail(nom: string, email: string): Promise<Reservation[]> {
    if (!collections.reservation) {
        throw new Error("Reservation collection is not initialized");
    }
    
    // Recherche des réservations où le nom et l'email correspondent
    const reservations = await collections.reservation.find({
        "patient.nom": { $regex: nom, $options: "i" },     // $options: "i" pour une recherche insensible à la casse
        "patient.email": { $regex: email, $options: "i" }
    }).toArray();
    
    return reservations.map(reservation => ({
        id: reservation._id.toString(),
        date: reservation.date,
        place: reservation.place,
        nameDoctor: reservation.nameDoctor,
        speciality: reservation.speciality,
        status: reservation.status,
        patient: reservation.patient
    }));
}