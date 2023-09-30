import { Column, Entity } from "typeorm";

@Entity({ name: 'urlmapper' })
export class UrlMapper{
    @Column()
    shortCode: string;

    @Column()
    originalURL: string;
}