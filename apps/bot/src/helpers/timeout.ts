export const timeout = (ms: number): Promise<undefined> =>
    new Promise((resolve) => setTimeout((): void => resolve(undefined), ms));
