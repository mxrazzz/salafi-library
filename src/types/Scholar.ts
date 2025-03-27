export interface Scholar {
    id: string;
    name: string;
    biography: string;
    imageUrl?: string;
    works: string[];
    birthDate?: string;
    deathDate?: string;
}