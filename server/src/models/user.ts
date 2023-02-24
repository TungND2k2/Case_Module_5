import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    idUser : number;
    @Column()
    username : string;
    @Column()
    userPassword : string;
    @Column()
    address : string;
    @Column()
    age :number;
    @Column()
    gender: string;
    @Column()
    email : string;
    @Column()
    avatar : string;
}
