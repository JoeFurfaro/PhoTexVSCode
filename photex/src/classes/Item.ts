interface Item {
  rotation: number;
  parent: Item | null;
  children: Item[];
  depth: number;
  id: string;
  addChild(child: Item): void;
  render(): string;
  renderChildren(): string;
}

export default Item;
