const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const startProcess = () =>{
    rl.on('line', async (input) => {
        console.log(input);
    })
}
startProcess();