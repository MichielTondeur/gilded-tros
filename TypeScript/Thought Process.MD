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

07/08/2023 - 20:44
Add commonItems test case
Group the items together in their own array for now, still not great since the results are not grouped together with the actual test case.

07/08/2023 - 20:44
Add keyChain test case
I need to check the sell date doesn't lower for the Keychain, so I need to add this field in my expect somehow.
I'll spend some time finding a proper solution to group everything properly, since my current approach won't continue to work.

07/08/2023 - 21:25
Grouped the tests a bit better so I'm able to match the testcases with the expected results.
Still messy imho but for now it works.
I'm now able to also check for the updated sellIn field.
When adding some other tests, saw some tests failing already, where `sellIn` date could become `-1`.
While I want to avoid working on the actual implementation code, I needed to add a `not smaller than 0` check for the tests to run succesfully again.
Let's hope I don't encounter more of these until after all tests have been written.

07/08/2023 - 21:57
Reversed the `sellIn` date 0 check since that date could actualy become negative upon rereading the assignment.
Added all tests for the backstage passes, had to make small changes to the actual implementation so it could take the HAXX conference into account.
This time I'm pretty sure if was needed and the logic was faulty.

07/08/2023 - 22:07
Added the smelly test cases.
The tests are failing, as to be expected since this code is not implemented yet.
Will continue tomorrow.

---

08/08/2023 - 19:24
Resumed work.
Tests are written so I'll commence refactoring.
Clearest solution seems like a switch case, since it makes sense every single item has it's own logic.
I'll try extracting the first case, maybe backstage passes.

08/08/2023 - 19:30
Turn off smelly test cases for now.
Extract old updateDetails to it's own separate method and have it be the default switch case.
Test still run fine.

08/08/2023 - 19:49
Good wine logic extracted.
Created a private updateWine method.
Logic inside maybe could be it's own small mini method?
Let's extract the rest first and let's see which operations are common enough.
I'm not allowed to edit Item, but a decreaseQuality and decreaseSellIn could make sense to add there.
I might just do it still.

08/08/2023 - 19:54
Easy extraction of KeyChain logic

08/08/2023 - 20:14
Extracted the Backstage Pass logic.
I had to change my switch case to be a boolean that checks the name matches a certain condition.
I needed this to use a regex to match all strings matching `Backstage Passes`.
Old logic is pretty much cleaned up and only still has the default common item cases.

08/08/2023 - 20:20
Extracted the common item default logic.
Next up is cleaning up the code some more.

08/08/2023 - 20:25
Small update to clean up some conditions.
Could still be smaller or needs some JSdocs to explain properly, this is some code you don't get at first sight if you were to repeat it in x amount of time.
