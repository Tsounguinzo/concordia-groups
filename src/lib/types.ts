export type Course = {
        ID: string;
        title: string;
        subject: string;
        catalog: number|string;
        career: string;
        classUnit: number;
        prerequisites: string;
        crosslisted: string;
        description: string;
        whatsappLink: string;
        discordLink: string;
    };

export interface SearchStoreModel<T extends Record<PropertyKey, any>> {
    data: T[]
    filtered: T[]
    search: string
}