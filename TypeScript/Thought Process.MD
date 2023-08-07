I'll try to keep track of my thought process in this file.

07/08/2023 - 20:00
Got the project setup after messing around a bit with Github and my WSL setup.

07/08/2023 - 20:05
First step was getting my extensions working, including Prettier which was my first 'real' change.

07/08/2023 - 20:05
Looking at the exercise, it's clear we need to do some reverse TDD approach here.
The code exist, but not tests.
Before we can start refactoring, let's first get some working tests running so we can refactor with confidence.

07/08/2023 - 20:20
Made a very rough working test, just matching names.
Would like to use jest.each, but not sure how to do this with classes, I mostly write functional.
Added jest `describe` and `test` blocks since the test were complaining.
Added `@babel/preset-env` to dev dependencies since the tests were complaining.

07/08/2023 - 20:32
Focus on getting `Good Wine` tests working first.
Still not too happy with the current structure, need a proper way to group items and expected resulsts together.
Not sure if I will need to test the sellIn date at some point as well.

07/08/2023 - 20:36
Take `Can't be more than 50` condition into consideration.
Also noting here for context I'm running jest watch mode to quickly iterate over my tests.
