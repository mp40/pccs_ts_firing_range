export const targetSizeHeadings: { [key: string]: string } = {
  standing: 'Standing Exposed',
  kneeling: 'Kneeling Exposed',
  prone: 'Prone / Crawl',
  lookOver: 'Look Over/Around',
  fireOver: 'Fire Over/Around',
  running: 'Running',
  crouch: 'Low Crouch',
  handsKnees: 'Hands and Knees',
  lowProne: 'Low Prone'
};

export const targetSizeModifiers: { [key: string]: number } = {
  standing: 7,
  kneeling: 6,
  prone: 2,
  lookOver: -4,
  fireOver: 0,
  running: 8,
  crouch: 7,
  handsKnees: 6,
  lowProne: 1
};
