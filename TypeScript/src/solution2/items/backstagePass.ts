import { Item } from "./item";

type BackstagePassItemConstantsType = {
  MAX_QUALITY: number;
  BACKSTAGE_PASS_WAVE_1: number;
  BACKSTAGE_PASS_WAVE_2: number;
  BACKSTAGE_PASSES: string;
};

export const CONSTANTS = {
  MAX_QUALITY: 50,
  BACKSTAGE_PASS_WAVE_1: 11,
  BACKSTAGE_PASS_WAVE_2: 6,
  BACKSTAGE_PASSES: "Backstage passes",
} as const satisfies BackstagePassItemConstantsType;

const {
  MAX_QUALITY,
  BACKSTAGE_PASS_WAVE_1,
  BACKSTAGE_PASS_WAVE_2,
  BACKSTAGE_PASSES,
} = CONSTANTS;

type StartsWithBackStagePasses = `${typeof BACKSTAGE_PASSES} ${string}`;

export class BackstagePassItem extends Item {
  constructor(
    name: StartsWithBackStagePasses,
    sellIn: number,
    quality: number
  ) {
    super(name, sellIn, quality);
  }

  private increaseQuality(): void {
    this.quality = this.quality + 1;
  }

  private decreaseSellIn(): void {
    this.sellIn = this.sellIn - 1;
  }

  private resetQuality(): void {
    this.quality = 0;
  }

  public update(): void {
    if (this.quality < MAX_QUALITY) {
      this.increaseQuality();

      if (this.sellIn < BACKSTAGE_PASS_WAVE_1 && this.quality < MAX_QUALITY)
        this.increaseQuality();

      if (this.sellIn < BACKSTAGE_PASS_WAVE_2 && this.quality < MAX_QUALITY)
        this.increaseQuality();
    }

    this.decreaseSellIn();

    if (this.sellIn < 0) this.resetQuality();
  }
}
