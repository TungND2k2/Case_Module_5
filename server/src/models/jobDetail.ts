import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
@Entity()
export class JobDetail{
    @PrimaryGeneratedColumn()
    id : number;
    @Column()
    postId : number;
    @Column()
    jobId : number;
}
