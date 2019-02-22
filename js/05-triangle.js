/*eslint-env browser*/
var i;
var j;

for (i = 6; i >= 0; i -= 1) {
    var str = "";
    for (j = i; j <= 6; j += 1) {
        str += "#";
    }
    window.console.log(str);
}