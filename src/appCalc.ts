import { m1Carbine, salMod } from './Shooter/data';
import rangeTable from './Range/data';
import stanceModifiers from './Stance/data';
import situationModifiers from './Situation/data';
import { targetSizeModifiers } from './TargetSize/data';

export const calculateLevelAndAimTime = (
  level: number,
  aims: number
): number => {
  const aimMods = m1Carbine.aim.mod[m1Carbine.aim.ac.indexOf(aims)];
  const salMods = salMod[level];
  return aimMods + salMods;
};

export const getRangeModifier = (rng: number): number => {
  return rangeTable[rng];
};

export const calculateStanceModifiers = (
  stance: string,
  braced: boolean
): number => {
  const bracedStance = braced ? `${stance}Braced` : stance;
  return stanceModifiers[bracedStance];
};

export const calculateSituationModifiers = (situations: boolean[]): number => {
  const keys = Object.keys(situationModifiers);
  return situations.reduce((acc: number, bool: boolean, dex: number) => {
    if (bool) {
      return acc + situationModifiers[keys[dex]].mod;
    }
    return acc;
  }, 0);
};

export const getTargetSizeModifier = (size: string): number => {
  return targetSizeModifiers[size];
};
