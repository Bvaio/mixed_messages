# The Message Generator  (subject to change :expressionless:)

## **Table of Contents**

1. Objective

2. Materials

3. Thought Process

4. Try to Make?

## Objective

+ The purpose of this project is to create a message generator program using JavaScript.

+ There should be at least 3 different messages concated together

+ Each time a User runs the program a new message should be randomly given to the user.

## Materials

+ Text Editor / IDE : Visual Studio Code

+ EsLint

+ Prettier

## Thought Process

+ Make an hash table (??) that has key value pairs with the key being the number we're going to randomize to, and the value being the message

+ Create a function that takes the HashTable, and when called will:
    1. Generate value that will Math.random()*hash.length
    2. If that number in Hash.keys()
    3. return the Hash\[key] value as console.log(func)

+ A good way think of this a using the Guild Character tag you get in the "Monster Hunter" series
    1. Three messages to concat into one tag

    2. 1, and 3 are from the same data-set/array

    3. 2 connects them towards one another

    4. Example:

        + "Lone Wolf" "of" "Tomato Plant"

        + "Tomato Plant" "of" "Lone Wolf" etc

## Try to Make?

+ Make this a Spy Game, where the game gives the message, and if the user answer right, they will catch the agent?

+ Make it a Fortune Teller Machine?
