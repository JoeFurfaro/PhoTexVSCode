import Fill from "../Fill";
import Item from "../Item";
import Stroke from "../Stroke";
import Vector2 from "../util/Vector2";

interface Shape extends Item {
  clipped: boolean;
  center: Vector2;
  stroke: Stroke | null;
  fill: Fill | null;
  getHeight(): number;
  getWidth(): number;
  getDefs(): string;
}

export default Shape;
