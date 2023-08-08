import { Item } from "./item";

export class GildedTros {
  constructor(public items: Array<Item>) {}

  private updateWine(item: Item) {
    if (item.quality < 50) item.quality = item.quality + 1;

    item.sellIn = item.sellIn - 1;

    if (item.sellIn < 0 && item.quality < 50) item.quality = item.quality + 1;
  }

  private updateBackstagePass(item: Item) {
    if (item.quality < 50) {
      item.quality = item.quality + 1;

      if (item.sellIn < 11 && item.quality < 50)
        item.quality = item.quality + 1;

      if (item.sellIn < 6 && item.quality < 50) item.quality = item.quality + 1;
    }

    item.sellIn = item.sellIn - 1;

    if (item.sellIn < 0) item.quality = item.quality - item.quality;
  }

  private updateCommon(item: Item) {
    if (item.quality > 0) item.quality = item.quality - 1;

    item.sellIn = item.sellIn - 1;

    if (item.sellIn < 0 && item.quality > 0) item.quality = item.quality - 1;
  }

  private isGoodWine(name: string) {
    return name === "Good Wine";
  }

  private isKeyChain(name: string) {
    return name === "B-DAWG Keychain";
  }

  // Match all items beginning with 'Backstage passes'
  private isBackstagePass(name: string) {
    return /^Backstage passes.*$/.test(name);
  }

  public updateQuality(): void {
    for (let i = 0; i < this.items.length; i++) {
      const { name } = this.items[i];

      switch (true) {
        case this.isGoodWine(name):
          this.updateWine(this.items[i]);
          break;
        case this.isBackstagePass(name):
          this.updateBackstagePass(this.items[i]);
          break;
        case this.isKeyChain(name):
          break;
        default:
          this.updateCommon(this.items[i]);
          break;
      }
    }
  }
}
