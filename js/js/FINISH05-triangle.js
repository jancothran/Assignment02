/*eslint-env browser*/
var i;
var j;
var rows = 7;
for (i = 0; i < 7; i += 1) {
    var str = "";
    for (j = i; j < 7; j += 1) {
        str += "*";
    }
    window.console.log(str);
}