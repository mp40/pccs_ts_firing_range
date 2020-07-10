import {
  calculateLevelAndAimTime,
  getRangeModifier,
  calculateStanceModifiers,
  calculateSituationModifiers,
  getTargetSizeModifier,
} from './appCalc';

describe('calculating ALM', () => {
  describe('weapon, level and aim-time calculation', () => {
    let lvl = 0;
    let aims = 1;
    beforeEach(() => {
      lvl = 0;
      aims = 1;
    });
    it('should return return correct result for starting defaults', () => {
      expect(calculateLevelAndAimTime(lvl, aims)).toBe(-21);
    });
    it('should return return correct result for default level and max aims', () => {
      aims = 11;
      expect(calculateLevelAndAimTime(lvl, aims)).toBe(0);
    });
    it('should return return correct result for default aims and max level five', () => {
      lvl = 5;
      expect(calculateLevelAndAimTime(lvl, aims)).toBe(-21 + 11);
    });
    it('should return return correct result for six aims and max level three', () => {
      lvl = 3;
      aims = 6;
      expect(calculateLevelAndAimTime(lvl, aims)).toBe(-4 + 9);
    });
  });
  describe('getting range modifier', () => {
    it('should return correct value for default range of 1', () => {
      expect(getRangeModifier(1)).toBe(33);
    });
    it('should return correct value for maximum range of 700', () => {
      expect(getRangeModifier(700)).toBe(-14);
    });
    it('should return correct value for mid range of 50', () => {
      expect(getRangeModifier(50)).toBe(5);
    });
  });
  describe('calculating stance modifiers', () => {
    let stance;
    let braced;
    beforeEach(() => {
      stance = 'standing';
      braced = false;
    });
    it('should return correct value for default standing not braced', () => {
      expect(calculateStanceModifiers(stance, braced)).toBe(0);
    });
    it('should return correct value for prone not braced', () => {
      stance = 'prone';
      expect(calculateStanceModifiers(stance, braced)).toBe(6);
    });
    it('should return correct value for kneeling braced', () => {
      stance = 'kneeling';
      braced = true;
      expect(calculateStanceModifiers(stance, braced)).toBe(5);
    });
    it('should return correct value for prone braced', () => {
      stance = 'prone';
      braced = true;
      expect(calculateStanceModifiers(stance, braced)).toBe(7);
    });
  });
  describe('situation modifiers', () => {
    let hipFire = false;
    let rifleOneHand = false;
    let pistolOneHand = false;
    let foldedStock = false;
    let bipodNotBraced = false;
    let bipodMount = false;
    beforeEach(() => {
      hipFire = false;
      rifleOneHand = false;
      pistolOneHand = false;
      foldedStock = false;
      bipodNotBraced = false;
      bipodMount = false;
    });
    it('should return correct value with default situations', () => {
      expect(
        calculateSituationModifiers([
          hipFire,
          rifleOneHand,
          pistolOneHand,
          foldedStock,
          bipodNotBraced,
          bipodMount,
        ])
      ).toBe(0);
    });
    it('should return correct value with hipFire true', () => {
      hipFire = true;
      expect(
        calculateSituationModifiers([
          hipFire,
          rifleOneHand,
          pistolOneHand,
          foldedStock,
          bipodNotBraced,
          bipodMount,
        ])
      ).toBe(-6);
    });
    it('should return correct value with pistolOneHand true', () => {
      pistolOneHand = true;
      expect(
        calculateSituationModifiers([
          hipFire,
          rifleOneHand,
          pistolOneHand,
          foldedStock,
          bipodNotBraced,
          bipodMount,
        ])
      ).toBe(-4);
    });
    it('should return correct value with bipodMount true', () => {
      bipodMount = true;
      expect(
        calculateSituationModifiers([
          hipFire,
          rifleOneHand,
          pistolOneHand,
          foldedStock,
          bipodNotBraced,
          bipodMount,
        ])
      ).toBe(3);
    });
    it('should return correct value with rifleOneHand and foldedStock true', () => {
      rifleOneHand = true;
      foldedStock = true;
      expect(
        calculateSituationModifiers([
          hipFire,
          rifleOneHand,
          pistolOneHand,
          foldedStock,
          bipodNotBraced,
          bipodMount,
        ])
      ).toBe(-7 + -4);
    });
    it('should return correct value with all values true', () => {
      hipFire = true;
      rifleOneHand = true;
      pistolOneHand = true;
      foldedStock = true;
      bipodNotBraced = true;
      bipodMount = true;
      expect(
        calculateSituationModifiers([
          hipFire,
          rifleOneHand,
          pistolOneHand,
          foldedStock,
          bipodNotBraced,
          bipodMount,
        ])
      ).toBe(-6 + -7 + -4 + -4 + -2 + 3);
    });
  });
  describe('target size modifiers', () => {
    it('should return correct value for default standing exposed', () => {
      expect(getTargetSizeModifier('standing')).toBe(7);
    });
    it('should return correct value for low prone', () => {
      expect(getTargetSizeModifier('lowProne')).toBe(1);
    });
    it('should return correct value for fire over/around cover', () => {
      expect(getTargetSizeModifier('fireOver')).toBe(0);
    });
  });
});
