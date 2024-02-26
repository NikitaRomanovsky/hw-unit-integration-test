export function getRectanglePerimeter(length: number, width: number) {
    return 2 * (length + width)
}

export function getRectangleArea(length: number, width: number) {
    return length * width
}

export function getRectangleInfo(length: number, width: number) {
    const area = getRectangleArea(length, width)
    const perimeter = getRectanglePerimeter(length, width)
    return console.log(`The perimeter of a rectangle is ${perimeter} and the area is ${area}`);
}