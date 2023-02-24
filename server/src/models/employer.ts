import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Employer{
    @PrimaryGeneratedColumn()
    idEmployer : number;
    @Column()
    employerName : string;
    @Column()
    employerPassword : string;
    @Column()
    address : string;
    @Column({nullable:true})
    description :string;
    @Column({nullable:true})
    staffNumber: number;
    @Column({nullable:true})
    brand : string;
}
