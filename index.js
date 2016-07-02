var _ = require("underscore");

var linear = function (x){
    return _.range(1,(x*x)+1,1).reduce(function(prev,curr){
        if(prev == 1){
            return repeatChar("_",(1+(spaces(x)+1)*x))+"\n|"+ repeatChar(" ",spaces(x)) + prev + whiteSpaces(x,curr)+curr;
        }
        if((curr-1)%x == 0){

            return prev+"\n|"+whiteSpaces(x,curr)+curr;
        }

        return prev+whiteSpaces(x,curr)+curr;
    })
}

var squares = function (x){
    return _.range(1,(x*x)+1,1).reduce(function(prev,curr){
        if(prev == 1){
            return repeatChar("_",(1+(spaces(pow(x))+1)*x))+"\n| " + prev +whiteSpacesFirst(pow(x),1)+ whiteSpaces(pow(x),pow(curr))+pow(curr);
        }
        if((curr-1)%x == 0){

            return prev+"\n| "+pow(curr)+whiteSpacesFirst(pow(x),pow(curr));
        }

        return prev+whiteSpaces(pow(x),pow(curr))+pow(curr);
    })
}

var pow = function(x){
    return x*x;
}

var spaces = function(x){
    return (x*x).toString().length;
}

var whiteSpaces = function(x,a){
    return repeatChar(" ",spaces(x)-a.toString().length+1);
}

var whiteSpacesFirst = function(x,a){
    return repeatChar(" ",spaces(x)-a.toString().length);
}

var repeatChar = function(char,times){
    if(times < 1){
        return "";
    }
    if(times == 1){
        return char;
    }
    return char + repeatChar(char,times-1);
}

if(isNaN(parseInt(process.argv[3])) || parseInt(process.argv[3])){
    console.log("Please enter a positive integer");
    return;
}

if(process.argv[2] == "linear") {
    console.log(linear(parseInt(process.argv[3])));
}else if(process.argv[2] == "squares"){
    console.log(squares(parseInt(process.argv[3])))
}else{
    console.log("Please enter linear or squares");
}


module.exports = {
    linear : linear,
    squares : squares
};