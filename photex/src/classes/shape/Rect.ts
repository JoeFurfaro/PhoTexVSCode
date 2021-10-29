import Item from "../Item";
import Fill from "../Fill";
import Shape from "./Shape";
import Stroke from "../Stroke";
import Vector2 from "../util/Vector2";
import { v4 as uuidv4 } from "uuid";

class Rect implements Shape {
  // Item properties
  rotation: number;
  parent: Item | null = null;
  children: Item[];
  depth: number = 1;
  id: string = uuidv4();
  // Shape properties
  clipped: boolean;
  center: Vector2;
  stroke: Stroke | null;
  fill: Fill | null;
  // Rect properties
  width: number;
  height: number;

  constructor(
    clipped: boolean,
    center: Vector2,
    width: number,
    height: number,
    stroke: Stroke | null = null,
    fill: Fill | null = null,
    children: Item[] = [],
    rotation: number = 0
  ) {
    this.clipped = clipped;
    this.center = center;
    this.width = width;
    this.height = height;
    this.stroke = stroke;
    this.fill = fill;
    this.children = children;
    this.rotation = rotation;
  }

  addChild(child: Item): void {}

  render(): string {
    return "";
  }

  getDefs(): string {
    return "";
  }

  renderChildren(): string {
    return "";
  }

  getHeight(): number {
    return this.height;
  }
  getWidth(): number {
    return this.width;
  }
}

export default Rect;
