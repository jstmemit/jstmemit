import { emojis } from '../../config/emojis.js';

export const createProgressBar = (value: number, maxValue: number, segments = 10) => {
  if (!emojis) {
    return '';
  }

  const clampedValue = Math.max(0, Math.min(value, maxValue));

  const percentage = clampedValue / maxValue;

  const filledSegments = Math.floor(percentage * segments);

  let progressBar = '';

  for (let i = 0; i < segments; i++) {
    if (i < filledSegments) {
      if (i === 0) {
        progressBar += emojis.progressBar.fill1;
      } else if (i === segments - 1 || i === filledSegments - 1) {
        progressBar += emojis.progressBar.fill3;
      } else {
        progressBar += emojis.progressBar.fill2;
      }
    } else if (i === 0) {
      progressBar += emojis.progressBar.empty1;
    } else if (i === segments - 1) {
      progressBar += emojis.progressBar.empty3;
    } else {
      progressBar += emojis.progressBar.empty2;
    }
  }

  return progressBar;
};
