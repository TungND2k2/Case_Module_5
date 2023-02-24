import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Job{
    @PrimaryGeneratedColumn()
    jobId : number;
    @Column()
    jobName : string;
}
