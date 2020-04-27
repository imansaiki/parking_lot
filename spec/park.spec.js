const parking = require("../parkingLot.js");

describe("check park function", () =>{
    afterEach(()=>{
        parking.resetParking();
    });
    it("Empty string input", ()=>{
        expect(parking.park("")).toBe("Registration No. cannot be Empty")
    });
    it("Empty parameter", ()=>{
        expect(parking.park()).toBe("Registration No. cannot be Empty")
    });
    it("escape sequence", ()=>{
        parking.createParkingLot(5);
        expect(parking.park("\n")).toContain("Alocated slot number:")
    });
    it("No Parking Lot", ()=>{
        expect(parking.park("KA-01-HH-1234")).toBe("There is no parking lot")
    });
    it("Correct String input, Full parking", ()=>{
        parking.createParkingLot(2);
        parking.park("KA-01-HH-1231");
        parking.park("KA-01-HH-1232");
        expect(parking.park("KA-01-HH-1234")).toBe("Sorry, parking lot is full")
    });
    it("Correct String input, alocated at slot 1", ()=>{
        parking.createParkingLot(2);
        expect(parking.park("KA-01-HH-1234")).toBe("Alocated slot number: 1")
    });
    it("Correct String input, alocated at slot 2", ()=>{
        parking.createParkingLot(2);
        parking.park("KA-01-HH-1231");
        expect(parking.park("KA-01-HH-1234")).toBe("Alocated slot number: 2")
    });
    it("Correct String input, alocated at slot 2 after slot 2 vacant", ()=>{
        parking.createParkingLot(2);
        parking.park("KA-01-HH-1231");
        parking.park("KA-01-HH-1233");
        parking.leave("KA-01-HH-1233",8);
        expect(parking.park("KA-01-HH-1234")).toBe("Alocated slot number: 2")
    });
})