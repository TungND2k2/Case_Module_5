import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Employer {
    @PrimaryGeneratedColumn()
    idEmployer: number;
    @Column()
    employerName: string;
    @Column()
    employerPassword: string;
    @Column({nullable: true})
    address: string;
    @Column({nullable: true})
    description: number;
    @Column({nullable: true})
    staffNumber: string;
    @Column({nullable: true})
    brand: string;
}
