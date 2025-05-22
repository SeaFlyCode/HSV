export interface Patient {
    nom: string;
    prenom: string;
    email: string;
    telephone: string;
}

export default class Reservation {
    constructor(
        public id: string,
        public date: string,  // Changé à string pour faciliter la manipulation des dates
        public place: string,
        public nameDoctor: string,
        public speciality: string,
        public status: string,
        public patient?: Patient // Information du patient (optionnelle pour la rétrocompatibilité)
     ) {}
        
}