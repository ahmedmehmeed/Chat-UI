import { PhotoDto } from "./PhotoDto";

    export interface userDetails {
        id: string;
        firstName?: string;
        lastName?: string;
        userName?: string;
        age?: number;
        photoURL?: string;
        birthDate: string;
        created: string;
        lastActive: string;
        knownAs: string;
        email:string;
        gender: string;
        introduction: string;
        lookingFor: string;
        interests: string;
        city: string;
        country: string;
        photoDto?: PhotoDto[];
        refreshTokens: any[];
    }



