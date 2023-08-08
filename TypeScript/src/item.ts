export class Item {
  constructor(
    public name: string,
    public sellIn: number,
    public quality: number
  ) {}

  public toString(): string {
    return `${this.name}, ${this.sellIn}, ${this.quality}`;
  }

  public increaseQuality(number: number): void {
    this.quality = this.quality + number;
  }

  public decreaseQuality(number: number): void {
    this.quality = this.quality - number;
  }

  public resetQuality(): void {
    this.quality = 0;
  }

  public decreaseSellIn(number: number): void {
    this.sellIn = this.sellIn - number;
  }
}
