import Block from './Block';

function isEqual(lhs: string, rhs: string): boolean {
  return lhs === rhs;
}

function render(query: string, block: Block) {
  const root = document.querySelector(query);

  if (root === null) {
    throw new Error(`root not found by selector "${query}"`);
  }

  root.innerHTML = '';

  root.append(block.getContent()!);

  return root;
}

export class Route {
  private block: Block | null = null;

  // eslint-disable-next-line no-useless-constructor
  constructor(
    private pathname: string,
    private readonly BlockClass: typeof Block,
    private readonly query: string
    // eslint-disable-next-line no-empty-function
  ) {}

  leave() {
    this.block = null;
  }

  match(pathname: string) {
    return isEqual(pathname, this.pathname);
  }

  render() {
    if (!this.block) {
      this.block = new this.BlockClass({});

      render(this.query, this.block!);
    }
  }
}
