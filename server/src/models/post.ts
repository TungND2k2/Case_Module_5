import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Post{
    @PrimaryGeneratedColumn()
    idPost : number;
    @Column({nullable:true})
    idEmployer : number;
    @Column({nullable:true})
    title : string;
    @Column({nullable:true})
    salary : number;
    @Column({nullable:true})
    workLocation : string;
    @Column({nullable:true})
    position : string;
    @Column({nullable:true})
    experience: string;
    @Column({nullable:true})
    workTime : string;
    @Column({type : "date",nullable:true})
    endTime : string;
    @Column({nullable:true})
    description : string;
    @Column({nullable:true})
    recruitmentsNumber : number;
    @Column({nullable:true})
    status : string;
    @Column({nullable:true})
    image : string;
}
