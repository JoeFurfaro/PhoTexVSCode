class Vector2 {
    x: number;
    y: number;
    /**
     * @description Build a vector from polar coordinates
     * @param {number} x X coordinate
     * @param {number} y Y coordinate
     */
    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }
    /**
     * @description Check if 2 Vector2 instances are equal
     * @param {Vector2} v Vector2 to compare
     * @returns {Boolean} True if equal, false otherwise
     */
    equals(v: Vector2): Boolean {
        return this.x === v.x && this.y === v.y;
    }
    /**
     * @description Check inequalities between two Vector2 instances
     * @param {Vector2} v Vector2 to compare
     * @returns {Boolean} True if inequal, false otherwise
     */
    notEquals(v: Vector2): Boolean {
        return this.x !== v.x || this.y !== v.y;
    }
    /**
     * @description Add two Vector2 instances
     * @param {Vector2} v Vector2 to add
     * @returns {Vector2} New Vector2 instance
     */
    add(v: Vector2): Vector2 {
        return new Vector2(this.x + v.x, this.y + v.y);
    }
    /**
     * @description Subtract a Vector2 instance from this
     * @param {Vector2} v Vector2 to subtract
     * @returns {Vector2} New Vector2 instance
     */
    subtract(v: Vector2): Vector2 {
        return new Vector2(this.x - v.x, this.y - v.y);
    }
    /**
     * @description Multiplies this Vector2 by a scalar
     * @param {number} s Scalar to multiply by
     * @returns {Vector2} New Vector2 instance
     */
    multiply(s: number): Vector2 {
        return new Vector2(this.x * s, this.y * s);
    }
    /**
     * @description Divides this Vector2 by a scalar
     * @param {number} s Scalar to divide by
     * @returns {Vector2} New Vector2 instance
     */
    divide(s: number): Vector2 {
        return new Vector2(this.x / s, this.y / s);
    }
    /**
     * @description Get the length of the Vector2
     * @returns {number} Length of the Vector2
     */
    length(): number {
        return Math.sqrt(this.lengthSquared());
    }
    /**
     * @description Get the length of the Vector2 squared
     * @returns {number} Length of the Vector2 squared
     */
    lengthSquared(): number {
        return this.x * this.x + this.y * this.y;
    }
    /**
     * @description Get the unit vector of this Vector2
     * @returns {Vector2} A new unit Vector2 with the same direction as this one
     */
    normalize(): Vector2 {
        let len = this.length();
        return new Vector2(this.x / len, this.y / len);
    }
    /**
     * @description Get the dot product of this Vector2 and another
     * @param {Vector2} v Vector2 to dot product with
     * @returns {number} Dot product result
     */
    dot(v: Vector2): number {
        return this.x * v.x + this.y * v.y;
    }
    /**
     * @description Get the cross product of this Vector2 and another
     * @param {Vector2} v Vector2 to cross product with
     * @returns {number} Cross product result
     */
    cross(v: Vector2): number {
        return this.x * v.y - this.y * v.x;
    }
    /**
     * @description Get the angle between this Vector2 and another
     * @param {Vector2} v Vector2 to get angle to
     * @returns {number} Angle in radians
     */
    angle(v: Vector2): number {
        return Math.acos(this.dot(v) / (this.length() * v.length()));
    }
    /**
     * @description Get the distance between this Vector2 and another
     * @param {Vector2} v Vector2 to get distance to
     * @returns {number} Distance
     */
    distance(v: Vector2): number {
        return Math.sqrt(this.distanceSquared(v));
    }
    /**
     * @description Get the distance squared between this Vector2 and another
     * @param {Vector2} v Vector2 to get distance to squared
     * @returns {number} Distance squared
     */
    distanceSquared(v: Vector2): number {
        let dx = this.x - v.x;
        let dy = this.y - v.y;
        return dx * dx + dy * dy;
    }
}

// Overload operators
/**
 * @description Add two Vector2 instances
 * @param {Vector2} v Vector2 to add
 * @returns {Vector2} New Vector2 instance
*/
Vector2.prototype.add = function (v: Vector2): Vector2 {
    return new Vector2(this.x + v.x, this.y + v.y);
};
/**
 * @description Subtract a Vector2 instance from this
 * @param {Vector2} v Vector2 to subtract
 * @returns {Vector2} New Vector2 instance
 */
Vector2.prototype.subtract = function (v: Vector2): Vector2 {
    return new Vector2(this.x - v.x, this.y - v.y);
};
/**
 * @description Multiply this Vector2 by a scalar
 * @param {number} s Scalar to multiply by
 * @returns {Vector2} New Vector2 instance
 */
Vector2.prototype.multiply = function (s: number): Vector2 {
    return new Vector2(this.x * s, this.y * s);
};
/**
 * @description Divides this Vector2 by a scalar
 * @param {number} s Scalar to divide by
 * @returns {Vector2} New Vector2 instance
 */
Vector2.prototype.divide = function (s: number): Vector2 {
    return new Vector2(this.x / s, this.y / s);
};

export default Vector2;