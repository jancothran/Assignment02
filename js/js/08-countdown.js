/*eslint-env browser*/
var i;
var countDown;
countDown = parseInt(window.prompt("Enter a number less than 500 please."));
for (i = countDown; i <= 500; i -= 1) {
    window.document.write(countDown);
}