import { Timestamp } from '@firebase/firestore-types';

export class Weather {
    id?: string;
    temp_max: bigint;
    temp_min: bigint;
    city: string;
    icon: string;
}
