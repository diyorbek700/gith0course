// FUNCTION DECLARATION

function read(){
    console.log('read');
}


// FUNCTION EXPRESSION
let write = function() {
    console.log('write');
};

let me2 = write;
write();
me2();