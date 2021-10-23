export default class Vec3 {
    x: number;
    y: number;
    z: number;
    constructor(x: number, y: number, z: number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    add(v: Vec3): Vec3 {
        return new Vec3(this.x + v.x, this.y + v.y, this.z + v.z);
    }
    sub(v: Vec3): Vec3 {
        return new Vec3(this.x - v.x, this.y - v.y, this.z - v.z);
    }
    mul(v: Vec3): Vec3 {
        return new Vec3(this.x * v.x, this.y * v.y, this.z * v.z);
    }
    div(v: Vec3): Vec3 {
        return new Vec3(this.x / v.x, this.y / v.y, this.z / v.z);
    }
    addScalar(s: number): Vec3 {
        return new Vec3(this.x + s, this.y + s, this.z + s);
    }
    subScalar(s: number): Vec3 {
        return new Vec3(this.x - s, this.y - s, this.z - s);
    }
    mulScalar(s: number): Vec3 {
        return new Vec3(this.x * s, this.y * s, this.z * s);
    }
    divScalar(s: number): Vec3 {
        return new Vec3(this.x / s, this.y / s, this.z / s);
    }
    dot(v: Vec3): number {
        return this.x * v.x + this.y * v.y + this.z * v.z;
    }
    length(): number {
        return Math.sqrt(this.dot(this));
    }
    normalize(): Vec3 {
        return this.divScalar(this.length());
    }
    distance(v: Vec3): number {
        return this.sub(v).length();
    }
    angle(v: Vec3): number {
        return Math.acos(this.dot(v) / (this.length() * v.length()));
    }
    angleDeg(v: Vec3): number {
        return this.angle(v) * 180 / Math.PI;
    }
    rotate(angle: number): Vec3 {
        const x = this.x;
        const y = this.y;
        const z = this.z;
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        return new Vec3(
            x * cos - y * sin,
            x * sin + y * cos,
            z
        );
    }
    rotateDeg(angle: number): Vec3 {
        return this.rotate(angle * Math.PI / 180);
    }
    toString(): string {
        return `(${this.x}, ${this.y}, ${this.z})`;
    }
    static zero = new Vec3(0, 0, 0);
    static one = new Vec3(1, 1, 1);
    static up = new Vec3(0, 1, 0);
    static down = new Vec3(0, -1, 0);
    static left = new Vec3(-1, 0, 0);
    static right = new Vec3(1, 0, 0);
    static front = new Vec3(0, 0, 1);
    static rear = new Vec3(0, 0, -1);
    static add(a: Vec3, b: Vec3): Vec3 {
        return a.add(b);
    }
    static sub(a: Vec3, b: Vec3): Vec3 {
        return a.sub(b);
    }
    static mul(a: Vec3, b: Vec3): Vec3 {
        return a.mul(b);
    }
    static div(a: Vec3, b: Vec3): Vec3 {
        return a.div(b);
    }
    static addScalar(a: Vec3, s: number): Vec3 {
        return a.addScalar(s);
    }
    static subScalar(a: Vec3, s: number): Vec3 {
        return a.subScalar(s);
    }
    static mulScalar(a: Vec3, s: number): Vec3 {
        return a.mulScalar(s);
    }
    static divScalar(a: Vec3, s: number): Vec3 {
        return a.divScalar(s);
    }
    static dot(a: Vec3, b: Vec3): number {
        return a.dot(b);
    }
    static normalize(a: Vec3): Vec3 {
        return a.normalize();
    }
    static distance(a: Vec3, b: Vec3): number {
        return a.distance(b);
    }
    static angle(a: Vec3, b: Vec3): number {
        return a.angle(b);
    }
    static angleDeg(a: Vec3, b: Vec3): number {
        return a.angleDeg(b);
    }
    static rotate(a: Vec3, angle: number): Vec3 {
        return a.rotate(angle);
    }
    static rotateDeg(a: Vec3, angle: number): Vec3 {
        return a.rotateDeg(angle);
    }
}