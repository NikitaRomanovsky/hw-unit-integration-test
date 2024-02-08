import { getRectangleArea, getRectanglePerimeter, getRectangleInfo } from '../js/rectangle.js'

it('Unit test for validating perimeter calculation', () => {
    const perimeter = getRectanglePerimeter(2, 4)
    expect(perimeter).toBe(12)
})

it('Unit test for validating area calculation', () => {
    const area = getRectangleArea(3, 6)
    expect(area).toBe(18)
})

it('Integration test for validating console output describing perimeter and aread', () => {
    const output = getRectangleInfo(4, 5)
    expect(output).toBe(console.log('The perimeter of a rectangle is 18 and the area is 20'))
})