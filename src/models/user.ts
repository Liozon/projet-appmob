import { DateTime } from "ionic-angular";

export class User {
    id: string;
    href: string;
    name: string;
    password: string;
    tripsCount: Number;
    createdAt: DateTime;
    updatedAt: DateTime;
}