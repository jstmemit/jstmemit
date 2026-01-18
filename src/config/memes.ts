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
  balloon: {
    emptyLines: [0, 1],
  },
  leo: {
    emptyLines: [0],
  },
  drowning: {
    emptyLines: [1],
  },
  'sad-clinton': {
    disableImages: true,
  },
  dbg: {
    emptyLines: [0],
  },
  spirit: {
    emptyLines: [1, 2],
  },
  doge: {
    disableImages: true,
  },
  happening: {
    emptyLines: [0],
  },
  same: {
    emptyLines: [0, 2],
  },
  kk: {
    disableImages: true,
  },
  both: {
    disableImages: true,
  },
  pool: {
    emptyLines: [0],
  },
  vince: {
    emptyLines: [0],
  },
  'sad-bush': {
    disableImages: true,
  },
};
