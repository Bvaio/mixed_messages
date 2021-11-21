const Messages = {
  subjectWord: ['Lone Wolf', 'Cabbage', 'Big Spider', 'Solid Cheese', 'Rhino', 'Aviation', 'Expert'],
  centerWord: ['to', 'from', 'the', 'glass', 'titled', 'named', 'fixing', 'mastering', 'finds', 'finding', 'looking', 'vs'],
};

const generateMesssage = (HashTable) => {
  const randomOne = Math.floor(Math.random() * HashTable.subjectWord.length);
  const randomTwo = Math.floor(Math.random() * HashTable.centerWord.length);
  const randomThree = Math.floor(Math.random() * HashTable.subjectWord.length);

  return console.log(`${HashTable.subjectWord[randomOne]} ${HashTable.centerWord[randomTwo]} ${HashTable.subjectWord[randomThree].toLowerCase()}`);
};

generateMesssage(Messages);
