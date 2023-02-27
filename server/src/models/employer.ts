import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Employer{
    @PrimaryGeneratedColumn()
    idEmployer : number;
    @Column()
    employerName : string;
    @Column({nullable:true})
    employerPassword : string;
    @Column({nullable:true})
    address : string;
    @Column({nullable:true})
    description :string;
    @Column({nullable:true})
    staffNumber: number;
    @Column({nullable:true})
    brand : string;
}
