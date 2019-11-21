import { Timestamp } from '@firebase/firestore-types';

export class Settings {
    id?: string;
    dark: boolean;
    text: string;
    algoliaApiKey: string;
    algoliaApplicationId: string;
    algoliaIndex: string;
    createdAt: Timestamp;
    modifiedAt: Timestamp;
}
