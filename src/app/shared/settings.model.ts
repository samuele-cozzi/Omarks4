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
    newsSources: string;
    newsQuery: string;
    refresh_token: string;
    createdAt: Timestamp;
    modifiedAt: Timestamp;
}
