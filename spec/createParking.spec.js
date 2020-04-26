const parking = require("../parkingLot.js");

describe("check create parking lot function", () =>{
    it("Invalid number input", ()=>{
        expect(parking.createParkingLot("asdaasdasd")).toBe("Please insert number for parking lot size")
    });
    it("Correct number input", ()=>{
        expect(parking.createParkingLot("11")).toBe("Created a parking lot with 11 slots")
    });
})