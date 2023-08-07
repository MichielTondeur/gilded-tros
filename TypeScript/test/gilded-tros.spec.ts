import { Item } from "../src/item";
import { GildedTros } from "../src/gilded-tros";
describe("GildedTros", () => {
  const items = [
    new Item("Ring of Cleansening Code", 10, 20),
    new Item("Good Wine", 2, 0),
    new Item("Elixir of the SOLID", 5, 7),
    new Item("B-DAWG Keychain", 0, 80),
    new Item("B-DAWG Keychain", -1, 80),
    new Item("Backstage passes for Re:Factor", 15, 20),
    new Item("Backstage passes for Re:Factor", 10, 49),
    new Item("Backstage passes for HAXX", 5, 49),
    new Item("Duplicate Code", 3, 6),
    new Item("Long Methods", 3, 6),
    new Item("Ugly Variable Names", 3, 6),
  ];

  const results = [
    "Ring of Cleansening Code",
    "Good Wine",
    "Elixir of the SOLID",
    "B-DAWG Keychain",
    "B-DAWG Keychain",
    "Backstage passes for Re:Factor",
    "Backstage passes for Re:Factor",
    "Backstage passes for HAXX",
    "Duplicate Code",
    "Long Methods",
    "Ugly Variable Names",
  ];

  describe("updateQuality", () => {
    describe("WHEN calling updateQuality", () => {
      test("THEN all items should get updated accordingly", () => {
        const app: GildedTros = new GildedTros(items);

        app.updateQuality();

        for (let i = 0; i < app.items.length; i++) {
          expect(app.items[i].name).toEqual(results[i]);
        }
      });
    });
  });
});
