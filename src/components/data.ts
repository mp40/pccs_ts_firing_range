interface HeadingType {
  [key: string]: string;
}

const buttonHeadings: { [key: string]: HeadingType } = {
  stance: {
    standing: 'Standing',
    kneeling: 'Kneeling',
    prone: 'Prone'
  },
  targetSize: {
    standing: 'Standing Exposed',
    kneeling: 'Kneeling Exposed',
    prone: 'Prone / Crawl',
    lookOver: 'Look Over/Around',
    fireOver: 'Fire Over/Around',
    running: 'Running',
    crouch: 'Low Crouch',
    handsKnees: 'Hands and Knees',
    lowProne: 'Low Prone'
  }
};

const getButtonHeading = (component: string, value: string): string => {
  return buttonHeadings[component][value];
};

export default getButtonHeading;
