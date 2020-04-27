const parking = require("../parkingLot.js");

describe("check create parking lot function", () =>{
    afterEach(()=>{
        parking.resetParking();
    });
    it("Invalid number input", ()=>{
        expect(parking.createParkingLot("asdaasdasd")).toBe("Please insert number for parking lot size")
    });
    it("empty string input", ()=>{
        expect(parking.createParkingLot("")).toBe("Please insert number for parking lot size")
    });
    it("empty parameter", ()=>{
        expect(parking.createParkingLot()).toBe("Please insert number for parking lot size")
    });
    it("escape sequence input", ()=>{
        expect(parking.createParkingLot("\n")).toBe("Please insert number for parking lot size")
    });
    it("Correct string number input", ()=>{
        expect(parking.createParkingLot("11")).toBe("Created a parking lot with 11 slots")
    });
    it("Correct number input", ()=>{
        expect(parking.createParkingLot(11)).toBe("Created a parking lot with 11 slots")
    });
})