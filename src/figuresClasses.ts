export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: string = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (b + c <= a || a + c <= b || a + b <= c) {
      throw new Error('Incorrect triangle sides');
    }
  }

  getArea(): number {
    const s = 0.5 * (this.a + this.b + this.c);

    return (
      Math.trunc(
        Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)) * 100,
      ) / 100
    );
  }
}

export class Circle implements Figure {
  public shape: string = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Incorrect value of radius');
    }
  }

  getArea(): number {
    return Math.trunc(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: string = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Incorrect value of sides');
    }
  }

  getArea(): number {
    return Math.trunc(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
