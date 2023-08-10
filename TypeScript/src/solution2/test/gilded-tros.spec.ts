import { GildedTros } from "../gilded-tros";
import {
  BDawgKeychainItem,
  BackstagePassItem,
  CommonItem,
  GoodWineItem,
  SmellyItem,
} from "../items";
describe("GildedTros", () => {
  // Common Item
  // Quality gets worse when getting older, so minus 1
  // Quality gets even worse when expired, so minus 2
  // Quality can't get worse than 0
  const commonTestCases: [CommonItem, number, number][] = [
    [new CommonItem("Common Item", 2, 3), 1, 2],
    [new CommonItem("Common Item", 2, 0), 1, 0],
    [new CommonItem("Common Item", 0, 3), -1, 1],
    [new CommonItem("Common Item", 0, 1), -1, 0],
    [new CommonItem("Common Item", 0, 0), -1, 0],
    [new CommonItem("Common Item", -1, 3), -2, 1],
    [new CommonItem("Common Item", -1, 0), -2, 0],
  ];

  // Good Wine
  // Quality gets better when getting older, so plus 1
  // Quality gets even better when expired, so plus 1
  // Quality can't get better than 50
  const wineTestCases: [GoodWineItem, number, number][] = [
    [new GoodWineItem(2, 3), 1, 4],
    [new GoodWineItem(2, 50), 1, 50],
    [new GoodWineItem(0, 3), -1, 5],
    [new GoodWineItem(0, 50), -1, 50],
    [new GoodWineItem(-1, 3), -2, 5],
    [new GoodWineItem(-1, 50), -2, 50],
  ];

  // B-DAWG Keychain
  // SellIn never gets higher or lower
  // Quality never gets better or worse
  const keyChainTestCases: [BDawgKeychainItem, number, number][] = [
    [new BDawgKeychainItem(2), 2, 80],
    [new BDawgKeychainItem(0), 0, 80],
  ];

  // Backstage Passes
  // Quality gets better when getting older, so plus 1
  // When sellIn lower than 10, quality increases by 2
  // When sellIn lower than 5, quality increases by 3
  // When sellIn goes negative, quality is set to 0
  const backStagePassesTestCases: [BackstagePassItem, number, number][] = [
    [new BackstagePassItem("Backstage passes for Re:Factor", 20, 5), 19, 6],
    [new BackstagePassItem("Backstage passes for Re:Factor", 11, 5), 10, 6],
    [new BackstagePassItem("Backstage passes for Re:Factor", 10, 5), 9, 7],
    [new BackstagePassItem("Backstage passes for Re:Factor", 6, 5), 5, 7],
    [new BackstagePassItem("Backstage passes for Re:Factor", 5, 5), 4, 8],
    [new BackstagePassItem("Backstage passes for Re:Factor", 1, 5), 0, 8],
    [new BackstagePassItem("Backstage passes for Re:Factor", 0, 5), -1, 0],
    [new BackstagePassItem("Backstage passes for Re:Factor", -1, 5), -2, 0],
    [new BackstagePassItem("Backstage passes for HAXX", 20, 5), 19, 6],
    [new BackstagePassItem("Backstage passes for HAXX", 11, 5), 10, 6],
    [new BackstagePassItem("Backstage passes for HAXX", 10, 5), 9, 7],
    [new BackstagePassItem("Backstage passes for HAXX", 6, 5), 5, 7],
    [new BackstagePassItem("Backstage passes for HAXX", 5, 5), 4, 8],
    [new BackstagePassItem("Backstage passes for HAXX", 1, 5), 0, 8],
    [new BackstagePassItem("Backstage passes for HAXX", 0, 5), -1, 0],
    [new BackstagePassItem("Backstage passes for HAXX", -1, 5), -2, 0],
  ];

  // Smelly Items
  // Quality gets worse when getting older, so minus 2
  // Quality gets even worse when expired, so minus 4
  // Quality can't get worse than 0
  const smellyTestCases: [SmellyItem, number, number][] = [
    [new SmellyItem("Duplicate Code", 2, 3), 1, 1],
    [new SmellyItem("Duplicate Code", 2, 0), 1, 0],
    [new SmellyItem("Duplicate Code", 0, 4), -1, 0],
    [new SmellyItem("Duplicate Code", 0, 3), -1, 0],
    [new SmellyItem("Duplicate Code", 0, 1), -1, 0],
    [new SmellyItem("Duplicate Code", 0, 0), -1, 0],
    [new SmellyItem("Duplicate Code", -1, 9), -2, 5],
    [new SmellyItem("Duplicate Code", -1, 3), -2, 0],
    [new SmellyItem("Duplicate Code", -1, 0), -2, 0],

    [new SmellyItem("Long Methods", 2, 3), 1, 1],
    [new SmellyItem("Long Methods", 2, 0), 1, 0],
    [new SmellyItem("Long Methods", 0, 4), -1, 0],
    [new SmellyItem("Long Methods", 0, 3), -1, 0],
    [new SmellyItem("Long Methods", 0, 1), -1, 0],
    [new SmellyItem("Long Methods", 0, 0), -1, 0],
    [new SmellyItem("Long Methods", -1, 9), -2, 5],
    [new SmellyItem("Long Methods", -1, 3), -2, 0],
    [new SmellyItem("Long Methods", -1, 0), -2, 0],

    [new SmellyItem("Ugly Variable Names", 2, 3), 1, 1],
    [new SmellyItem("Ugly Variable Names", 2, 0), 1, 0],
    [new SmellyItem("Ugly Variable Names", 0, 4), -1, 0],
    [new SmellyItem("Ugly Variable Names", 0, 3), -1, 0],
    [new SmellyItem("Ugly Variable Names", 0, 1), -1, 0],
    [new SmellyItem("Ugly Variable Names", 0, 0), -1, 0],
    [new SmellyItem("Ugly Variable Names", -1, 9), -2, 5],
    [new SmellyItem("Ugly Variable Names", -1, 3), -2, 0],
    [new SmellyItem("Ugly Variable Names", -1, 0), -2, 0],
  ];

  const testCases = [
    ...commonTestCases,
    ...wineTestCases,
    ...keyChainTestCases,
    ...backStagePassesTestCases,
    ...smellyTestCases,
  ];

  const testItems = testCases.map((testCase) => testCase[0]);
  const testSellInCorrect = testCases.map((testCase) => testCase[1]);
  const testQualityCorrect = testCases.map((testCase) => testCase[2]);

  describe("updateQuality", () => {
    describe("WHEN calling updateQuality", () => {
      const app: GildedTros = new GildedTros(testItems);

      app.updateQuality();

      let updatedItems: [string, number, number, number, number][] = [];

      for (let i = 0; i < app.items.length; i++) {
        updatedItems.push([
          app.items[i].name,
          app.items[i].sellIn,
          app.items[i].quality,
          testSellInCorrect[i],
          testQualityCorrect[i],
        ]);
      }

      test.each(updatedItems)(
        "%s: THEN %d AND %d should match %d and %d",
        (_name, sellInResult, qualityResult, sellInCorrect, qualityCorrect) => {
          expect(sellInResult).toEqual(sellInCorrect);
          expect(qualityResult).toEqual(qualityCorrect);
        }
      );
    });
  });
});
