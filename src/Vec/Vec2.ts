export default class Vec2 {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    add(v: Vec2): Vec2 {
        return new Vec2(this.x + v.x, this.y + v.y);
    }
    sub(v: Vec2): Vec2 {
        return new Vec2(this.x - v.x, this.y - v.y);
    }
    mul(v: Vec2): Vec2 {
        return new Vec2(this.x * v.x, this.y * v.y);
    }
    div(v: Vec2): Vec2 {
        return new Vec2(this.x / v.x, this.y / v.y);
    }
    addScalar(s: number): Vec2 {
        return new Vec2(this.x + s, this.y + s);
    }
    subScalar(s: number): Vec2 {
        return new Vec2(this.x - s, this.y - s);
    }
    mulScalar(s: number): Vec2 {
        return new Vec2(this.x * s, this.y * s);
    }
    divScalar(s: number): Vec2 {
        return new Vec2(this.x / s, this.y / s);
    }
    dot(v: Vec2): number {
        return this.x * v.x + this.y * v.y;
    }
    length(): number {
        return Math.sqrt(this.dot(this));
    }
    normalize(): Vec2 {
        return this.divScalar(this.length());
    }
    distance(v: Vec2): number {
        return this.sub(v).length();
    }
    angle(v: Vec2): number {
        return Math.acos(this.dot(v) / (this.length() * v.length()));
    }
    angleDeg(v: Vec2): number {
        return this.angle(v) * 180 / Math.PI;
    }
    rotate(angle: number): Vec2 {
        const s = Math.sin(angle);
        const c = Math.cos(angle);
        return new Vec2(this.x * c - this.y * s, this.x * s + this.y * c);
    }
    rotateDeg(angle: number): Vec2 {
        return this.rotate(angle * Math.PI / 180);
    }
    toString(): string {
        return `(${this.x}, ${this.y})`;
    }
    static zero = new Vec2(0, 0);
    static one = new Vec2(1, 1);
    static up = new Vec2(0, 1);
    static down = new Vec2(0, -1);
    static left = new Vec2(-1, 0);
    static right = new Vec2(1, 0);
    static add(a: Vec2, b: Vec2): Vec2 {
        return a.add(b);
    }
    static sub(a: Vec2, b: Vec2): Vec2 {
        return a.sub(b);
    }
    static mul(a: Vec2, b: Vec2): Vec2 {
        return a.mul(b);
    }
    static div(a: Vec2, b: Vec2): Vec2 {
        return a.div(b);
    }
    static addScalar(a: Vec2, s: number): Vec2 {
        return a.addScalar(s);
    }
    static subScalar(a: Vec2, s: number): Vec2 {
        return a.subScalar(s);
    }
    static mulScalar(a: Vec2, s: number): Vec2 {
        return a.mulScalar(s);
    }
    static divScalar(a: Vec2, s: number): Vec2 {
        return a.divScalar(s);
    }
    static dot(a: Vec2, b: Vec2): number {
        return a.dot(b);
    }
    static normalize(a: Vec2): Vec2 {
        return a.normalize();
    }
    static distance(a: Vec2, b: Vec2): number {
        return a.distance(b);
    }
    static angle(a: Vec2, b: Vec2): number {
        return a.angle(b);
    }
    static angleDeg(a: Vec2, b: Vec2): number {
        return a.angleDeg(b);
    }
    static rotate(a: Vec2, angle: number): Vec2 {
        return a.rotate(angle);
    }
    static rotateDeg(a: Vec2, angle: number): Vec2 {
        return a.rotateDeg(angle);
    }
}