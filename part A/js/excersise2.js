const myArray = ["apple", 7, false];

document.getElementById("result1").textContent = myArray.toString();
document.getElementById("result2").textContent = myArray.join(" & ");
myArray.forEach(function(item, index) {
    document.getElementById("result3").textContent += index + ": " + item + "\n";
});