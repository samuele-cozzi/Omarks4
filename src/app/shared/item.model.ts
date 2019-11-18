import { Timestamp } from '@firebase/firestore-types';

export class Item {
    id?: string;
    given_title: boolean;
    given_url: string;
    image_src: string;
    excerpt: string;
    index: bigint;
    createdAt: Timestamp;
    modifiedAt: Timestamp;
}
