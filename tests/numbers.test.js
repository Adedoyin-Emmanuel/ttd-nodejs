const {add, subtract} = require("./../libs/numbers");

describe("numbers", () =>{
    it("should add a number to the other", () =>{
        const result = add(2, 2);
        expect(result).toEqual(4);
    });

    it("should throw an error if argument is not a number", () =>{
     expect(() => {
        add(undefined, undefined)
     }).toThrow();
    });

    it("should subtract a number from the other", () =>{
        const result = subtract(4, 2);
        expect(result).toBe(2);
    });

    it("should throw an error if argument is not a number", ()=>{
        expect(() =>{
            subtract(undefined, undefined);
        }).toThrow();
    });
    
})
