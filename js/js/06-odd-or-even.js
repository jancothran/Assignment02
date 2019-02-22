/*eslint-env browser*/
var i;

for (i = 0; i < 15; i += 1) {
    function oddOrEven(i) {
        return (i & 1) ? "odd" : "even";
    }
}