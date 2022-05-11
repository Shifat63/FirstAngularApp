//tsc -t es5 Class.ts to transpile
export class Point{
  private _x: number;
  private _y: number;

  constructor(_x: number, _y: number) {
    this._x = _x;
    this._y = _y;
  }

  get Y(): number {
    return this._y;
  }

  set Y(value: number) {
    this._y = value;
  }
  get X(): number {
    return this._x;
  }

  set X(value: number) {
    this._x = value;
  }

  pointPrint(): void {
    console.log("x="+this._x+" y="+this._y);
  }
}
