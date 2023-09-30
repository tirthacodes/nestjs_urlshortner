import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'urlmapper' })
export class UrlMapper{

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    shortCode: string;

    @Column()
    originalURL: string;
}