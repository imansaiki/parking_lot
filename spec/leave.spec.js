const parking = require("../parkingLot.js");

describe("check leave function", () =>{
    afterAll(()=>{
        parking.resetParking();
    });
    it("Empty  slot input", ()=>{
        expect(parking.leave("",10)).toBe("Registry No. cannot be empty")
    });
    it("Empty hour input", ()=>{
        expect(parking.leave(10,"")).not.toBe("hour must be a number")
    });
})