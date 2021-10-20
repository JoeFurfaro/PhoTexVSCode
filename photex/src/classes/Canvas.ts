import Item from "./Item";
import { v4 as uuidv4 } from "uuid";
import Vector2 from "./util/Vector2";

class Canvas implements Item {
  rotation: number = 0;
  parent: Item | null = null; // nothing is higher then a canvas
  children: Item[] = [];
  depth: number = 0;
  id: string = uuidv4();
  fileName: string;
  fileFormat: string;
  size: Vector2;

  /**
   * @description Constructor for the Canvas class
   * @param {string} fileName The name of the output file
   * @param {string} fileFormat The format of the output file
   * @param {Vector2} size The size of the output file as a Vector2
   * @param {Item[]} children The children of the canvas as an array of Items
   * @param {number} rotation The rotation of the canvas in degrees, if any
   */
  constructor(
    fileName: string,
    fileFormat: string,
    size: Vector2,
    children: Item[] = [],
    rotation: number = 0
  ) {
    this.fileName = fileName;
    this.fileFormat = fileFormat;
    this.size = size;
    this.children = children;
    this.rotation = rotation;
  }

  /**
   * @description Adds a child to the canvas
   * @param {Item} child The child to add to the canvas
   * @returns {Canvas} The canvas with the child added
   */
  addChild(child: Item): void {}

  /**
   * @description Renders the canvas to an SVG string
   * @returns {string} The SVG string
   */
  render(): string {
    return "";
  }

  /**
   * @description Renders the children of the canvas to an SVG string
   * @returns {string} The SVG string
   */
  renderChildren(): string {
    return "";
  }
}

export default Canvas;
