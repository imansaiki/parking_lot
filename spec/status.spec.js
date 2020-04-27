const parking = require("../parkingLot.js");

describe("check status function :\n", () =>{
    afterEach(()=>{
        parking.resetParking();
    });
    it("Parking lot not initialized", ()=>{
        expect(parking.status()).toBe("there is no parking lot")
    });
    it("Parking lot initialized", ()=>{
        parking.createParkingLot(5);
        expect(parking.status()).not.toBe("there is no parking lot")
    });
  

})