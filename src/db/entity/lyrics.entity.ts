import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Lyrics{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    genre: string;

    @Column()
    contents: string;

    @Column({type: "datetime", default: () => "CURRENT_TIMESTAMP"})
    created : Date;
}