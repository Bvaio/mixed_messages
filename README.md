# The Message Generator  (subject to change :expressionless:)

## **Table of Contents**

1. Objective

2. Materials Used

3. Thought Process

4. Try to Make?

## Objective

+ The purpose of this project is to create a message generator program using JavaScript.

+ There should be at least 3 different messages concated together

+ Each time a User runs the program a new message should be randomly given to the user.

## Materials Used

+ Text Editor / IDE : Visual Studio Code by Microsoft

+ Javascript ES6+

+ Terminal: zsh  \
```cd .../yourJavascriptFileLocation```  \
```node mixedMessages.js```

## Thought Process

+ ~~Make an hash table (??) that has key value pairs with the key being the number we're going to randomize to, and the value being the message~~

+ ~~Create a function that takes the HashTable, and when called will:~~
    1. ~~Generate value that will Math.random()*hash.length~~
    2. ~~If that number in Hash.keys()~~
    3. ~~return the Hash\[key] value as console.log(func)~~

+ Make an object with an array of words to use

+ Create a function that will:
    1. Generate a random index number for each message to input

    2. return a message with the help of [string formating](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

+ A good way to think of this the Hunter title you make in the "Monster Hunter" series
    1. Three messages to concat into one tag

    2. 1, and 3 are from the same data-set/array

    3. 2 connects them towards one another

    4. Example:

        + "Lone Wolf" "of" "Tomato Plant"

        + "Tomato Plant" "of" "Lone Wolf" etc

## Try to Make?

+ Make this a Spy Game, where the game gives the message, and if the user answer right, they'll catch the agent?

+ Make it a Fortune Teller Machine?

+ Make that Hunter title idea you took from Monster Hunter :upside_down_face:?
