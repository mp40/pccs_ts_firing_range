interface SituationShape {
  mod: number;
  heading: string;
}

const situationModifiers: { [key: string]: SituationShape } = {
  hipFire: { mod: -6, heading: 'Hip Fire' },
  rifleOneHand: { mod: -7, heading: 'Firing Rifle One Handed' },
  pistolOneHand: { mod: -4, heading: 'Firing Pistol One Handed' },
  foldedStock: { mod: -4, heading: 'Folding Stock Not Used' },
  bipodNotBraced: { mod: -2, heading: 'Bipod Not Braced' },
  bipodMount: { mod: 3, heading: 'Bipod Mounted Weapon' }
};

export default situationModifiers;
