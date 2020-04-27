let parkingSpace =[];
//initialize parking lot size
const createParkingLot = (initSize) =>{
    
    if (isNaN(initSize) || initSize==="" ||isNaN(escape(initSize))) {
        return "Please insert number for parking lot size";
    }else{
        for(let i = 0; i<parseInt(initSize); i++){
            parkingSpace[i]="";
        }
        return `Created a parking lot with ${parkingSpace.length} slots`
    }
    
}
//register car to parking slot
const park =  (regNumber) => {
    if(regNumber==="" || typeof(regNumber) == 'undefined' || regNumber === null){
        return "Registration No. cannot be Empty";
    }else{
        let flag=0;
        let number;
        if(parkingSpace.length==0){
            return "There is no parking lot"
        }else{
            for(let i=0; i<=parkingSpace.length; i++){
                if(parkingSpace[i]===""){
                    parkingSpace[i]=escape(regNumber);
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
    
    
}
//free parking space and calculate fee
const leave =  (regNumber,hour) => {
    if (regNumber==="" || typeof(regNumber) == 'undefined' || regNumber === null) {
        return "Registry No. cannot be empty"
    }else{
        if (isNaN(hour) || hour==="" || isNaN(escape(hour))) {
            return "hour must be a number"
        }else{
            if(hour<0){
                return "hour must be a positive number"
            }else{
                if(parkingSpace.length===0){
                    return "There is no parking lot";
                }else{
                    if(parkingSpace.indexOf(escape(regNumber))==-1){
                        return `there is no car with registry no : ${escape(regNumber)}`;
                    }else{
                        let slot= parkingSpace.indexOf(escape(regNumber))+1;
                        parkingSpace[parseInt(slot)-1]="";
                        let charge =10;
                        if(hour>2){
                            charge+= (10*(hour-2)) 
                        }
                        
                        return `Registration number ${escape(regNumber)} Slot Number ${slot} is free with Charge ${charge} `
                    }
                }
            }
            
        }
    }

}
//return content of parking lot
const status =  () => {
    if(parkingSpace.length==0){
        return "there is no parking lot"
    }else{
        let statusPrint="Slot No. Registration No.\n";
        for(let i=0; i< parkingSpace.length; i++){
            if(parkingSpace[i]!=""){
                let slot=i+1;
                statusPrint+=slot+" ";
                statusPrint+=parkingSpace[i]+"\n";
            }
        }
        return statusPrint;
    }

}
// reset parking lot
const resetParking = () =>{
    parkingSpace =[];
}



module.exports = {
    createParkingLot,
    park,
    leave,
    status,
    resetParking
  }