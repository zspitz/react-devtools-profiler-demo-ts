export const range = (length: number, start = 0, step = 1) => [...Array(length)].map((_, i) => i * step + start);