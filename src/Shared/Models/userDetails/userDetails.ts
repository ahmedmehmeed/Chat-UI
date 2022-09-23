import { PhotoDto } from "./PhotoDto";

    export interface userDetails {
        id: string;
        firstName?: any;
        lastName?: any;
        age: number;
        phoneURL: string;
        birthDate: Date;
        created: Date;
        lastActive: Date;
        knownAs: string;
        email:string;
        gender: string;
        introduction: string;
        lookingFor: string;
        interests: string;
        city: string;
        country: string;
        photoDto: PhotoDto[];
        refreshTokens: any[];
    }



