const Messages = {
  0: 'No Fear',
  1: 'The world is your oyster',
  2: 'Snow brings the warmth of the suns',
};

const generateMesssage = (HashTable) => {
  let quote = '';

  const hashTableLength = Object.keys(HashTable).length;

  const randomNumber = Math.floor(Math.random() * hashTableLength);

  if (randomNumber in HashTable) {
    quote = HashTable[randomNumber];
  }

  return console.log(quote);
};

generateMesssage(Messages);
