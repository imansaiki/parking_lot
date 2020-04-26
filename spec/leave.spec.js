const parking = require("../parkingLot.js");

describe("check leave function", () =>{
    it("Empty  slot input", ()=>{
        expect(parking.leave("",10)).toBe("slot must be a number")
    });
    it("Empty hour input", ()=>{
        expect(parking.leave(10,"")).not.toBe("hour must be a number")
    });
})