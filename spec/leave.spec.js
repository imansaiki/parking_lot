const parking = require("../parkingLot.js");

describe("check leave function :\n", () =>{
    afterEach(()=>{
        parking.resetParking();
    });
    //abnormal param registry
    it("Empty parameter", ()=>{
        expect(parking.leave()).toBe("Registry No. cannot be empty")
    });
    it("Empty regitry input", ()=>{
        expect(parking.leave("",10)).toBe("Registry No. cannot be empty")
    });
    it("Escape sequence registy input", ()=>{
        expect(parking.leave("\n",10)).not.toBe(`Registry No. cannot be empty`)
    });
    //test normal value for registry param
    it("no parking lot", ()=>{
        expect(parking.leave("KA-01-HH-1231",10)).toBe(`There is no parking lot`)
    });
    it("found registy input", ()=>{
        parking.createParkingLot(2);
        parking.park("KA-01-HH-1231");
        parking.park("KA-01-HH-1232");
        expect(parking.leave("KA-01-HH-1231",10)).toBe(`Registration number KA-01-HH-1231 Slot Number 1 is free with Charge 90 `)
    });
    it("not found registy input", ()=>{
        parking.createParkingLot(2);
        parking.park("KA-01-HH-1233");
        parking.park("KA-01-HH-1232");
        expect(parking.leave("KA-01-HH-1231",10)).toBe(`there is no car with registry no : KA-01-HH-1231`)
    });
    //abnormal value for param hour
    it("Empty string hour input", ()=>{
        expect(parking.leave("KA-01-HH-1231","")).toBe("hour must be a number")
    });
    it("Empty parameter hour input", ()=>{
        expect(parking.leave("KA-01-HH-1231")).toBe("hour must be a number")
    });
    it("Escape sequence hour input", ()=>{
        expect(parking.leave("KA-01-HH-1231","\n")).toBe("hour must be a number")
    });
    it("Negative hour input", ()=>{
        expect(parking.leave("KA-01-HH-1231",-1)).toBe("hour must be a positive number")
    });
    //test normal value for hour param
    it("zero hour", ()=>{
        parking.createParkingLot(2);
        parking.park("KA-01-HH-1231");
        parking.park("KA-01-HH-1232");
        expect(parking.leave("KA-01-HH-1231",0)).toBe(`Registration number KA-01-HH-1231 Slot Number 1 is free with Charge 10 `)
    });
    it("2 hour", ()=>{
        parking.createParkingLot(2);
        parking.park("KA-01-HH-1231");
        parking.park("KA-01-HH-1232");
        expect(parking.leave("KA-01-HH-1231",2)).toBe(`Registration number KA-01-HH-1231 Slot Number 1 is free with Charge 10 `)
    });
})