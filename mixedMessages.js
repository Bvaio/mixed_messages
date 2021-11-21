const generateMesssage = () => {
  const Messages = {
    subjectWord: ['Lone Wolf', 'Cabbage', 'Big Spider', 'Solid Cheese', 'Rhino', 'Aviation', 'Expert', 'Profit', 'Esteemed', ''],
    centerWord: ['to', 'from', 'the', 'glass', 'titled', 'named', 'fixing', 'mastering', 'finds', 'finding', 'looking', 'vs', '', 'tum tum', 'loop'],
    finalWord: ['to the edge!', 'clammed!', 'the flavored meal.', 'watered since Thursday', 'open to negotiations', 'I don\'t know why this is here.', 'out of breath.'],
  };

  const mess = Messages;

  const randomGenerator = (object) => object[Math.floor(Math.random() * object.length)];

  const randomOne = randomGenerator(mess.subjectWord);
  const randomTwo = randomGenerator(mess.centerWord);
  const randomThree = randomGenerator(mess.subjectWord).toLowerCase();
  const randomFour = randomGenerator(mess.finalWord);

  return console.log(`${randomOne} ${randomTwo} ${randomThree} ${randomFour}`);
};

generateMesssage();
