const {square, cube} = require('./square');





describe('square function', function(){

    test('square should square a number', function(){
        const res = square(3);
        expect(res).toEqual(9);
    })
    
    test('square should square negative numbers', function(){
        const res = square(-9);
        expect(res).toEqual(81);  
    })

})


describe('cube function', function(){

    test('cube should cube a number', function(){
        const res = cube(3);
        expect(res).toEqual(27)
        console.log(`3 cubed is equal to ${res}`)
    })

})

test('using .toContain', function(){
    const colors = ['red', 'orange', 'blue'];
    expect(colors).toContain('red');
    expect('hello').toContain('hell');
})

test('numeric matcher', function(){
    expect(7).toBeGreaterThanOrEqual(2);
    expect(10).toBeGreaterThanOrEqual(4);
})

test('testing using a boolean matcher', function(){
    expect(9).toBeTruthy();
    expect('').toBeFalsy();
})

test('testing using "any"', function(){
    expect('asdjkgh').toEqual(expect.any(String));
    expect(10).toEqual(expect.any(Number));
})

test('testing using the .not matcher', function(){
    expect(10).not.toEqual(11);
})