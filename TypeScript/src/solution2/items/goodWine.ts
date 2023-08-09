import { Item } from "./item";

type GoodWineItemConstantsType = {
  GOOD_WINE: string;
  MAX_QUALITY: number;
};

export const CONSTANTS = {
  MAX_QUALITY: 50,
  GOOD_WINE: "Good Wine",
} as const satisfies GoodWineItemConstantsType;

const { MAX_QUALITY, GOOD_WINE } = CONSTANTS;

export class GoodWineItem extends Item {
  constructor(sellIn: number, quality: number) {
    super(GOOD_WINE, sellIn, quality);
  }

  private increaseQuality(): void {
    this.quality = this.quality + 1;
  }

  private decreaseSellIn(): void {
    this.sellIn = this.sellIn - 1;
  }

  public update(): void {
    if (this.quality < MAX_QUALITY) this.increaseQuality();

    this.decreaseSellIn();

    if (this.sellIn < 0 && this.quality < MAX_QUALITY) this.increaseQuality();
  }
}
