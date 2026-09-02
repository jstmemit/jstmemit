export type RequiredBotPermissions = Record<
    "sendMessages" | "attachFiles" | "embedLinks" | "readHistory" | "viewChannel",
    boolean
>;
