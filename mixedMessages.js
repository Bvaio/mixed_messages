const Messages = {
  subjectWord: ['Lone Wolf', 'Cabbage', 'Big Spider', 'Solid Cheese', 'Rhino', 'Aviation', 'Expert', 'Profit', 'Esteemed', ''],
  centerWord: ['to', 'from', 'the', 'glass', 'titled', 'named', 'fixing', 'mastering', 'finds', 'finding', 'looking', 'vs', '', 'tum tum', 'loop'],
};

const generateMesssage = (objectWithWords) => {
  const randomOne = Math.floor(Math.random() * objectWithWords.subjectWord.length);
  const randomTwo = Math.floor(Math.random() * objectWithWords.centerWord.length);
  const randomThree = Math.floor(Math.random() * objectWithWords.subjectWord.length);

  return console.log(`${objectWithWords.subjectWord[randomOne]} ${objectWithWords.centerWord[randomTwo]} ${objectWithWords.subjectWord[randomThree].toLowerCase()}`);
};

generateMesssage(Messages);
