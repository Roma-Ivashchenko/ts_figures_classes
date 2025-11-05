export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('your error message');
    }

    const sides = [a, b, c].sort((x, y) => y - x);

    if (sides[0] >= sides[1] + sides[2]) {
      throw new Error('your error message');
    }
  }

  shape = 'triangle';

  getArea(): number {
    const parameter = (this.a + this.b + this.c) / 2;

    const triangleArea = Math.sqrt(
      parameter *
        (parameter - this.a) *
        (parameter - this.b) *
        (parameter - this.c),
    );

    return Math.round(triangleArea * 100) / 100;
  }
}

export class Circle implements Figure {
  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('your error message');
    }
  }

  shape = 'circle';

  getArea(): number {
    const areaCircle = Math.PI * this.radius ** 2;

    return Math.floor(areaCircle * 100) / 100;
  }
}

export class Rectangle implements Figure {
  color: string;

  width: number;

  height: number;

  constructor(color: string, width: number, height: number) {
    this.color = color;
    this.width = width;
    this.height = height;

    if (width <= 0 || height <= 0) {
      throw new Error('your error message');
    }
  }

  shape = 'rectangle';

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
