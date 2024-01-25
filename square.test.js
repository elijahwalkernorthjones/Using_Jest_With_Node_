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