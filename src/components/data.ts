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
  targetSize: targetSizeHeadings
};

const getButtonHeading = (component: string, value: string): string => {
  return buttonHeadings[component][value];
};

export default getButtonHeading;
