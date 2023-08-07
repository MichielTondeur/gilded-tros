import { Item } from "../src/item";
import { GildedTros } from "../src/gilded-tros";
describe("GildedTros", () => {
  // Common Item
  // Gets worse when getting older, so minus 1
  // Gets even worse when expired, so minus 2
  // Can't get worse than 0
  const commonTestCases: [Item, number, number][] = [
    [new Item("Common Item", 2, 3), 1, 2],
    [new Item("Common Item", 2, 0), 1, 0],
    [new Item("Common Item", 0, 3), 0, 2],
    [new Item("Common Item", 0, 1), 0, 0],
    [new Item("Common Item", 0, 0), 0, 0],
  ];

  // Good Wine
  // Gets better when getting older, so plus 1
  // Gets better when expired, so plus 1
  // Can't get better than 50
  const wineTestCases: [Item, number, number][] = [
    [new Item("Good Wine", 2, 3), 1, 4],
    [new Item("Good Wine", 0, 3), 0, 4],
    [new Item("Good Wine", 2, 50), 1, 50],
    [new Item("Good Wine", 0, 50), 0, 50],
  ];

  // B-DAWG Keychain
  // Sell date never lowers
  // Never gets better or worse
  const keyChainTestCases: [Item, number, number][] = [
    [new Item("B-DAWG Keychain", 2, 3), 2, 3],
  ];

  //   const items = [
  // new Item("Ring of Cleansening Code", 10, 20)],
  // new Item("Elixir of the SOLID", 5, 7)
  // new Item("B-DAWG Keychain", 0, 80)
  // new Item("B-DAWG Keychain", -1, 80)
  // new Item("Backstage passes for Re:Factor", 15, 20)
  // new Item("Backstage passes for Re:Factor", 10, 49)
  // new Item("Backstage passes for HAXX", 5, 49)
  // new Item("Duplicate Code", 3, 6)
  // new Item("Long Methods", 3, 6)
  // new Item("Ugly Variable Names", 3, 6)
  //   ];

  const testCases = [
    ...commonTestCases,
    ...wineTestCases,
    ...keyChainTestCases,
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
