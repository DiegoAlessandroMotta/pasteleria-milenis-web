import cakes from '@/mocks/cakes.json';

export class CakeController {
  static getCakes = async ({ limit = 10 }) => {
    // const response = await fetch("")
    // throw new Error("Cakes'nt")

    if (limit < 1 || limit > 100) {
      return cakes.slice(0, 10);
    }

    return cakes.slice(0, limit);
  }
}