import { Photo } from "./photo";
import { RefreshToken } from "./RefreshToken";

    export interface User {
        firstName?: any;
        lastName?: any;
        birthDate?: Date;
        created: string;
        lastActive: string;
        knownAs: string;
        gender: string;
        introduction: string;
        lookingFor: string;
        interests: string;
        city: string;
        country: string;
        photos: Photo[];
        refreshTokens: RefreshToken[];
        id: string;
        userName: string;
        normalizedUserName: string;
        email: string;
        normalizedEmail: string;
        emailConfirmed: boolean;
        passwordHash: string;
        securityStamp: string;
        concurrencyStamp: string;
        phoneNumber?: any;
        phoneNumberConfirmed: boolean;
        twoFactorEnabled: boolean;
        lockoutEnd?: any;
        lockoutEnabled: boolean;
        accessFailedCount: number;
    }
   



