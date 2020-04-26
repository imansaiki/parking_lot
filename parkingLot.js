let parkingSpace =[];
const createParkingLot = (initSize) =>{
    
    if (isNaN(initSize)) {
        return "Please insert number for parking lot size";
    }else{
        for(let i = 0; i<parseInt(initSize); i++){
            parkingSpace[i]="";
        }
        return `Created a parking lot with ${parkingSpace.length} slots`
    }
    
}
const park =  (regNumber) => {
    if(regNumber===""){
        return "Registration No. cannot be Empty";
    }else{
        let flag=0;
        let number;
        for(let i=0; i<=parkingSpace.length; i++){
            if(parkingSpace[i]===""){
                parkingSpace[i]=regNumber;
                flag=1;
                number=i+1; 
                break;
            }
        }
        if (flag===0){
            return "Sorry, parking lot is full";
        }else{
            return `Alocated slot number: ${number}`
        }
    }
    
    
}
const leave =  (slot,hour) => {
    if (isNaN(slot)) {
        return "slot must be a number"
    }else{
        if (isNaN(hour)) {
            return "hour must be a number"
        }else{
            if(parkingSpace[parseInt(slot)-1]===""){
                return `there is no car at slot : ${slot}`;
            }else{
                let leavingCar= parkingSpace[parseInt(slot)-1];
                parkingSpace[parseInt(slot)-1]="";
                let charge =10;
                if(hour>2){
                    charge+= (10*(hour-2)) 
                }
                
                return `Registration number ${leavingCar} Slot Number ${slot} is free with Charge ${charge} `
            }
        }
    }

}
const status =  () => {
    if(parkingSpace.length==0){
        return "there is no parking lot"
    }else{
        let statusPrint="Slot No. Registration No./n";
        for(let i=0; i< parkingSpace.length; i++){
            statusPrint+=i+" ";
            statusPrint+=parkingSpace[i]+"/n";
        }
        return statusPrint;
    }

}



module.exports = {
    createParkingLot,
    park,
    leave,
    status,
  }