const fs = require('fs');
const readline = require('readline');
let source;
if (process.argv[2]) {
    if(fs.existsSync('./input/'+process.argv[2])){
        source=fs.createReadStream('./input/'+process.argv[2]);
    }else{
        console.log("file not found");
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
        console.log(input);
    })
}
startProcess();