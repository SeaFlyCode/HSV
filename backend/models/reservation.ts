export default class Reservation {
    constructor(
        public id: string,
        public date: Date,
        public place: string,
        public nameDoctor: string,
        public speciality: string,
        public status: string,
     ) {}
        
}