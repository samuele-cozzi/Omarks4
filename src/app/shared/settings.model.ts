import { Timestamp } from '@firebase/firestore-types';

export class Settings {
    id?: string;
    dark: boolean;
    city: string;
    text: string;
    algoliaApiKey: string;
    algoliaApplicationId: string;
    algoliaIndex: string;
    algoliaEditIndex: boolean;
    enableReorder: boolean;
    createdAt: Timestamp;
    modifiedAt: Timestamp;
}
