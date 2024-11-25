export const range = (length: number, start = 0, step = 1) => [...Array<undefined>(length)].map((_, i) => i * step + start)