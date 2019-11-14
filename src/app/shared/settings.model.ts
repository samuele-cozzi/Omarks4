import { Timestamp } from '@firebase/firestore-types';

export class Settings {
    id?: string;
    dark: boolean;
    text: string;
    createdAt: Timestamp;
    modifiedAt: Timestamp;
}
