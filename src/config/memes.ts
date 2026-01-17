export interface MemeOverride {
  emptyLines?: number[];
  disableImages?: boolean;
}

export const memes: Record<string, MemeOverride> = {
  exit: {
    emptyLines: [0],
  },
  pigeon: {
    emptyLines: [1],
  },
  cryingfloor: {
    emptyLines: [0],
  },
  'sad-biden': {
    emptyLines: [1],
    disableImages: true,
  },
  'sad-boehner': {
    emptyLines: [1],
    disableImages: true,
  },
  handshake: {
    emptyLines: [2],
  },
  pooh: {
    emptyLines: [0],
  },
  reveal: {
    emptyLines: [0, 2],
  },
};
