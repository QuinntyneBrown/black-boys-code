import { Donor } from "./donor.model";

export class Donation { 

    public id:any;
    
    public amount: string;

    public donor: Partial<Donor>;
}
