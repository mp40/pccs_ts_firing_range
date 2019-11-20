import targetSizeHeadings from '../TargetSize/data';

interface HeadingType {
  [key: string]: string;
}

const buttonHeadings: { [key: string]: HeadingType } = {
  stance: {
    standing: 'Standing',
    kneeling: 'Kneeling',
    prone: 'Prone'
  },
  targetSize: targetSizeHeadings,
  braced: { braced: 'Braced' },
  situation: {
    hipFire: 'Hip Fire',
    rifleOneHand: 'Firing Rifle One Handed',
    pistolOneHand: 'Firing Pistol One Handed',
    foldedStock: 'Folding Stock Not Used',
    bipodNotBraced: 'Bipod Not Braced',
    bipodMount: 'Bipod Mounted Weapon'
  }
};

const getButtonHeading = (component: string, value: string): string => {
  return buttonHeadings[component][value];
};

export default getButtonHeading;
