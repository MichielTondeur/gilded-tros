import { Item } from "../src/item";
import { GildedTros } from "../src/gilded-tros";
describe("GildedTros", () => {
  // Common Item
  // Gets worse when getting older, so minus 1
  // Gets even worse when expired, so minus 2
  // Can't get worse than 0
  const commonItems = [
    new Item("Common Item", 2, 3),
    new Item("Common Item", 0, 3),
    new Item("Common Item", 2, 0),
    new Item("Common Item", 0, 0),
  ];

  const commonResults = [2, 1, 0, 0];

  // Good Wine
  // Gets better when getting older, so plus 1
  // Gets even better when expired, so plus 2
  // Can't get better than 50
  const wineItems = [
    new Item("Good Wine", 2, 3),
    new Item("Good Wine", 0, 3),
    new Item("Good Wine", 2, 50),
    new Item("Good Wine", 0, 50),
  ];

  const wineResults = [4, 5, 50, 50];

  // B-DAWG Keychain
  // Sell date never lowers
  // Never gets better or worse
  const keyChainItems = [new Item("B-DAWG Keychain", 2, 3)];

  const keyChainResults = [3];

  const items = [
    ...commonItems,
    ...wineItems,
    ...keyChainItems,
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
  ];

  const results = [...commonResults, ...wineResults, ...keyChainResults];

  describe("updateQuality", () => {
    describe("WHEN calling updateQuality", () => {
      test("THEN all items should get updated accordingly", () => {
        const app: GildedTros = new GildedTros(items);

        app.updateQuality();

        for (let i = 0; i < app.items.length; i++) {
          expect(app.items[i].quality).toEqual(results[i]);
        }
      });
    });
  });
});
