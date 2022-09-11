export interface loginResponse {
    message?: string;
    username: string;
    email: string;
    token: string;
    roles: string[];
    isAuthencated: boolean;
    refreshTokenEXpiration: string;
    isSuccess: boolean;
}