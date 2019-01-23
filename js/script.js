var os = require('os');
var GetOSinfo = require("../modules/GetOSinfo");
process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    var input = process.stdin.read().trim();
    console.log(typeof(input));
    console.log('value of input => ',input);
    if(input !== '') {
        switch (input) {
            case '/exit':
                process.stdout.write('Quitting app!\n'); 
                process.exit();
                break;
            case 'show system language':
                process.stdout.write(process.env.LANG.slice(0,2) + '\n'); 
                break;
            case 'node -v':
                process.stdout.write(process.versions.node + '\n');
                break;
            case 'getOSinfo':
                GetOSinfo.print();
                break;
            default: 
                process.stderr.write('Wrong instruction! \n');
                break;    
        }
    } else {
        process.stdout.write('You didn'+"'"+'t write anything! Quitting app...\n');
    }
});
