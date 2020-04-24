import { Timestamp } from '@firebase/firestore-types';

export class Weather {
    id?: string;
    temp_max: number;
    temp_min: number;
    city: string;
    icon: string;
}
