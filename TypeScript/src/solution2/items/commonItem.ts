import { Item } from "./item";

export class CommonItem extends Item {
  private decreaseQuality(): void {
    this.quality = this.quality - 1;
  }

  private decreaseSellIn(): void {
    this.sellIn = this.sellIn - 1;
  }

  public update(): void {
    if (this.quality > 0) this.decreaseQuality();

    this.decreaseSellIn();

    if (this.sellIn < 0 && this.quality > 0) this.decreaseQuality();
  }
}
