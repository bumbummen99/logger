import type { InitialOptionsTsJest } from 'ts-jest/dist/types';

// Or async function
export default async (): Promise<InitialOptionsTsJest> => {
  return {
    preset: 'ts-jest/presets/js-with-ts-esm',
    verbose: true,
    extensionsToTreatAsEsm: ['.ts']
  };
};