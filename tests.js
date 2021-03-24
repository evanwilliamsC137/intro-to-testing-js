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
})
