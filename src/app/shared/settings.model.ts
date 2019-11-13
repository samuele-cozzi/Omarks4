import { Timestamp } from '@firebase/firestore-types';

export class Settings {
    id?: string;
    dark: boolean;
    createdAt: Timestamp;
    modifiedAt: Timestamp;
}
