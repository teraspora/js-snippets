class Line {
    constructor(x0, y0, x1, y1, w, h) {
        this._w = w;
        this._h = h;
        this._x0 = x0;
        this._y0 = y0;
        this._x1 = x1;
        this._y1 = y1;
        this._m = this._x1 == this._x0 ? Infinity : (this._y1 - this._y0) / (this._x1 - this._x0);
    }
    get x0() {
        return this._x0;
    }
    get y0() {
        return this._y0;
    }
    get x1() {
        return this._x1;
    }
    get y1() {
        return this._y1;
    }
    get m() {
        return this._m;
    }
    get y(x) {
        return x1 == x0 ? Infinity : (y1 - y0) / (x1 - x0) * (x - x0) + y0;
    }
    get x(y) {
        if (this._m == Infinity) {
            return this.x0;
        }
        return (y - this._y0 + this._m * this._x0) / this._m;
    }   

    edge_points(x0, y0, x1, y1, w, h) {
        return [[0, this._y(0)], [this._w, this._y(this._w)], [this._x(0), 0], [this._x(this._h)]];
    }
}
