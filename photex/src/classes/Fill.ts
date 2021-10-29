class Fill {
  color: string;
  opacity: number | null;

  /**
   * @description Creates a new Fill object to define Fill property of other Items.
   * @param {string} color The color of the Fill, represented as a HexCode.
   * @param {number | null} opacity The opacity of the Fill, represented as a number between 0 and 1.
   */
  constructor(color: string, opacity: number | null = 1) {
    this.color = color;
    this.opacity = opacity;
  }

  /**
   * @description Returns the Fill object as a string to be added to Item's render output.
   * @returns {string} The Fill object as a string to be added to Item's render output.
   */
  render(): string {
    let s: string = `fill="${this.color}"`;
    if (this.opacity !== null) {
      s += ` fill-opacity="${this.opacity}"`;
    }
    return s;
  }
}

export default Fill;
