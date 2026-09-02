export interface ContextImage {
    readonly messageId: string;
    readonly channelId: string;
    readonly imageUrl: string;
    readonly source: "attachment" | "gif" | "avatar";
    readonly timestamp: Date;
    readonly expiresAt?: Date;
}
