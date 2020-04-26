const parking = require("../parkingLot.js");

describe("check status function", () =>{
    it("Empty string input", ()=>{
        expect(parking.status()).toBe("there is no parking lot")
    });

})