// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe("addOne", function()  {
    it('should be a defined function', function () {
        expect(typeof addOne).toBe("function");
    });
    it('should return a number when called', function () {
        expect(typeof addOne().toBe("number"))
    });
    it('should return the number 3 when passed the argument of 2', function () {
        expect(addOne(2)).toBe(3);
    });
    it('should return the number -43 when passed the argument of the number -44', function () {
        expect(addOne(-44)).toBe(-43);
    });
})

describe("sayHello", function () {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe("function");
    });
    it('should return a string when passed through the function', function () {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return Hello Jane', function () {
        expect(sayHello("Jane")).toBe("Hello Jane")
    });
    it('should return Hello Alex', function () {
        expect(sayHello("Alex")).toBe("Hello Alex")
    });
    it('should return Hello Pat', function () {
        expect(sayHello("Pat")).toBe("Hello Pat")
    });

})

describe("isFive", function () {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe("function");
    });
    it('should return true when input is 5', function () {
        expect(isFive(5)).toBe(true);
    });
})



describe("isEven",function () {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe("function");
    });
})



describe("isVowel", function () {
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe("function");
    });
})


describe("add",function () {
    it('should be a defined function', function () {
        expect(typeof add).toBe("function");
    });
})
