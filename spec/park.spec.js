const parking = require("../parkingLot.js");

describe("check park function", () =>{
    it("Empty string input", ()=>{
        expect(parking.park("")).toBe("Registration No. cannot be Empty")
    });
    it("Correct String input", ()=>{
        expect(parking.park("KA-01-HH-1234")).not.toBe("Registration No. cannot be Empty")
    });
})