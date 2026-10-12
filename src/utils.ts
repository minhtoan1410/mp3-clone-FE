import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function getRandomKElements<T>(arr: T[], k: number): T[] {
  if (k >= arr.length) {
    throw new Error('k nho hon len(arr)')
  }
  if (k < 0) {
    throw new Error('k la so am')
  }
  const copy = [...arr]
  for (let i = 0; i < k; i++) {
    const randIdx = Math.floor(Math.random() * (copy.length - i)) + i
    ;[copy[i], copy[randIdx]] = [copy[randIdx], copy[i]]
  }
  return copy.slice(0, k)
}
