class Font {
  defsMap: Record<string, string | null> = {
    arial: null,
    helvetica: null,
    timesnewroman: null,
    roboto: "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
    wingdings: null,
  };
  family: string;
  size: number | null;
  weight: string | null;

  /**
   * @description Creates a new Font object for Item.
   * @param {string} family The font family item that would be typed in CSS.
   * @param {number | null} size The font size.
   * @param {string | null} weight The font weight.
   */
  constructor(
    family: string,
    size: number | null = null,
    weight: string | null = null
  ) {
    this.family = family;
    this.size = size;
    this.weight = weight;
  }

  /**
   * @description Returns the font string for the SVG.
   * @returns {string} The font string for the SVG.
   */
  render(): string {
    let s: string = `font-family="${this.family}"`;
    if (this.size !== null) {
      s += ` font-size="${this.size}"`;
    }
    if (this.weight !== null) {
      s += ` font-weight="${this.weight}"`;
    }
    return s;
  }
  /**
   * @description Returns the import statement for the font.
   * @returns {string | null} The defs level import statement for the font, if one exists.
   */
  defs(): string | null {
    let filteredFont: string = this.family.replace(/\s/g, "").toLowerCase();
    if (this.defsMap[filteredFont] !== null) {
      return `<style type="text/css">\n\t@import url("${this.defsMap[filteredFont]}");\n</style>`;
    }
    return null;
  }
}

export default Font;
