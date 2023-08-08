import { Item } from "./item";

export class GildedTros {
  constructor(public items: Array<Item>) {}

  private oldUpdateQuality(item: Item): void {
    if (
      item.name != "Backstage passes for Re:Factor" &&
      item.name != "Backstage passes for HAXX"
    ) {
      if (item.quality > 0) {
        if (item.name != "B-DAWG Keychain") {
          item.quality = item.quality - 1;
        }
      }
    } else {
      if (item.quality < 50) {
        item.quality = item.quality + 1;

        if (
          item.name == "Backstage passes for Re:Factor" ||
          item.name == "Backstage passes for HAXX"
        ) {
          if (item.sellIn < 11) {
            if (item.quality < 50) {
              item.quality = item.quality + 1;
            }
          }

          if (item.sellIn < 6) {
            if (item.quality < 50) {
              item.quality = item.quality + 1;
            }
          }
        }
      }
    }

    if (item.name != "B-DAWG Keychain") {
      item.sellIn = item.sellIn - 1;
    }

    if (item.sellIn < 0) {
      if (
        item.name != "Backstage passes for Re:Factor" &&
        item.name != "Backstage passes for HAXX"
      ) {
        if (item.quality > 0) {
          if (item.name != "B-DAWG Keychain") {
            item.quality = item.quality - 1;
          }
        }
      } else {
        item.quality = item.quality - item.quality;
      }
    }
  }

  private updateWine(item: Item) {
    if (item.quality < 50) item.quality = item.quality + 1;

    item.sellIn = item.sellIn - 1;

    if (item.sellIn < 0 && item.quality < 50) item.quality = item.quality + 1;
  }

  public updateQuality(): void {
    for (let i = 0; i < this.items.length; i++) {
      switch (this.items[i].name) {
        case "Good Wine":
          this.updateWine(this.items[i]);
          break;
        default:
          this.oldUpdateQuality(this.items[i]);
          break;
      }
    }
  }
}
