const fs = require('fs');
const readline = require('readline');
const parkingLot = require('./parkingLot')
let source;
if (process.argv[2]) {
    if(fs.existsSync('./input/'+process.argv[2])){
        source=fs.createReadStream('./input/'+process.argv[2]);
    }else{
        console.log("file not found\n You can check the file at input directory");
        process.exit();
    }
}else{
    source=process.stdin;
}
const rl = readline.createInterface({
    input: source,
    output: process.stdout
   
});
const startProcess = () =>{
    rl.on('line', async (input) => {
        let line = input.split(" ");
        let result;
        switch (line[0]) {
            case "create_parking_lot":
                 result = parkingLot.createParkingLot(line[1]);
                console.log(result);
                break;
            case "park":
                 result = parkingLot.park(line[1]);
                console.log(result);
                break;
            case "leave":
                 result =parkingLot.leave(line[1],line[2]);
                console.log(result);
                break;
            case "status":
                 result =parkingLot.status();
                console.log(result);
                break;
            case "help":
                console.log("");
                console.log("List of Function :")
                console.log("--create_parking_lot <Number>");
                console.log("--park <String>");
                console.log("--leave <String> <Number>");
                console.log("--status");
                break;
            
        
            default:
                console.log("check your input format\n You can check available function by typing help")
                break;
        }
    })
}
startProcess();