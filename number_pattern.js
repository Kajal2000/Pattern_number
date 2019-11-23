var s = 15
var a = 1
var i = 1
var line = "";
while (i <= 5){
    var j = i
    while (j >= 1){
        line+= s + ""; 
        s--
        j--
    }
    console.log(line);
    line = "";
    i++
}
