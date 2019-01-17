import { DateTime } from "ionic-angular";

export class Trip {
    id: string;
    href: string;
    title: string;
    description: string;
    placesCount: Number;
    userId: string;
    userHref: string;
    createdAt: DateTime;
    updatedAt: DateTime;
}