import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Post{
    @PrimaryGeneratedColumn()

    idPost : number;
    @Column()
    title : string;
    @Column()
    salary : number;
    @Column()
    workLocation : string;
    @Column()
    position : string;
    @Column()
    experience: string;
    @Column()
    workTime : string;
    @Column({type : "datetime"})
    endTime : string;
    @Column()
    description : string;
    @Column()
    recruitmentsNumber : number;
    @Column()
    status : string;
@Column()
    image : string;
}
