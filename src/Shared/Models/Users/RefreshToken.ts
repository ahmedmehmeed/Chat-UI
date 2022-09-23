
export interface RefreshToken {
    token: string;
    expiresOn: string;
    createdon: string;
    revokedOn?: any;
    isEXpired: boolean;
    isActive: boolean;
}
