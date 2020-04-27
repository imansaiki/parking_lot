const parking = require("../parkingLot.js");

describe("check leave function", () =>{
    afterEach(()=>{
        parking.resetParking();
    });
    it("Empty parameter", ()=>{
        expect(parking.leave()).toBe("Registry No. cannot be empty")
    });
    it("Empty regitry input", ()=>{
        expect(parking.leave("",10)).toBe("Registry No. cannot be empty")
    });
    it("Escape sequence registy input", ()=>{
        expect(parking.leave("\n",10)).toBe("Registry No. cannot be empty")
    });

    it("Empty string hour input", ()=>{
        expect(parking.leave("KA-01-HH-1231","")).toBe("hour must be a number")
    });
    it("Empty parameter hour input", ()=>{
        expect(parking.leave("KA-01-HH-1231")).toBe("hour must be a number")
    });
    it("Escape sequence hour input", ()=>{
        expect(parking.leave("KA-01-HH-1231","\n")).toBe("hour must be a number")
    });
    
})