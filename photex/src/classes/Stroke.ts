class Stroke {
  color: string;
  width: number | null;
  opacity: number | null;

  /**
   * @description Create the Stroke object with properties for Item
   * @param {string} color The color of the stroke, represented as a hexadecimal string.
   * @param {number | null} width The width of the stroke, in pixels.
   * @param {number | null} opacity  The opacity of the stroke, represented as a number between 0 and 1.
   */
  constructor(
    color: string,
    width: number | null = null,
    opacity: number | null = 1
  ) {
    this.color = color;
    this.width = width;
    this.opacity = opacity;
  }

  /**
   * @description Returns the Stroke object as a string to be added to Item's render output.
   * @returns {string} The Stroke object as a string to be added to Item's render output.
   */
  render(): string {
    let s: string = `stroke="${this.color}" `;
    if (this.width !== null) {
      s += `stroke-width="${this.width}" `;
    }
    if (this.opacity !== null) {
      s += `stroke-opacity="${this.opacity}" `;
    }
    return s.trimEnd();
  }
}

export default Stroke;
