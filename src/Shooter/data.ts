export const m1Carbine = {
  name: 'M1 Carbine',
  list: 'rifles',
  calibre: '.30 Carbine',
  qty: 1,
  length: 36,
  weight: 5.9,
  rt: 8,
  rof: '*',
  mag: [
    { type: 'Mag', weight: 0.77, cap: 15, qty: 0 },
    { type: 'Mag', weight: 1.5, cap: 30, qty: 0 }
  ],
  kd: 5,
  sab: 4,
  aim: {
    ac: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    mod: [-21, -11, -9, -7, -6, -4, -3, -2, -2, -1, 0]
  },
  projectiles: [
    {
      type: 'FMJ',
      pen: [6.8, 6.4, 5.8, 4.9, 4.2, 2.4, 1.4, 0.8],
      dc: [6, 6, 5, 5, 4, 2, 1, 1]
    }
  ],
  ma: null,
  ba: [55, 46, 37, 29, 24, 14, 8, 5],
  tof: [0, 1, 1, 2, 3, 8, 13, 18],
  offical: true
};

export const salMod: { [key: number]: number } = {
  0: 0,
  1: 5,
  2: 7,
  3: 9,
  4: 10,
  5: 11
};
