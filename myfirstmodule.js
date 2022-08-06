exports.myDateTime = function (c) {
    //c = ['{','[','(',')',']','}']
    c.forEach(myFunction);

    return array.length;
};
var array = [];
function  myFunction(item){
    if(item === '{' || item === '[' || item === '(')
    {
        array.push(item);
    }
    else {
        array.pop();
    }
}