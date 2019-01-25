import { DateTime } from "ionic-angular";

export class Place {
    id: string;
    href: string;
    name: string;
    description: string;
    location: GeoJsonPoint;
    tripId: string;
    tripHref: string;
    pictureUrl: string;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export class GeoJsonPoint {
    type: string;
    coordinates: number[];
}