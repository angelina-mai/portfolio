function addNumbers(numbers){
    let sum = 0;

numbers.forEach(function(item) {
    const number = parseFloat(item);

    if (!isNaN(number)) {
        sum += number;
        }
    });
    return sum;
}
document.getElementById("result1").textContent = addNumbers([1, 2, 3, 4, 5]);

function findMaxNumber(numbers){
    let max = arguments[0];
    
    for(let i =1; i <arguments.length; i++){
        if(arguments[i]>max){
            max = arguments[i];
        }
    }
    return max;
}
document.getElementById("result2").textContent = findMaxNumber(1, 2, 3, 4, 5);

function addOnlyNumbers(mixedArray) {
    let sum = 0;
    mixedArray.forEach(function (item) {
        if (typeof item === "number" || typeof item === "string") {
            const number = parseFloat(item);
            if (!isNaN(number)) {
                sum += number;
            }
        }
    });
    return sum;
}
document.getElementById("result3").textContent = addOnlyNumbers([1, "two", 3, "four", 5]);

function countVowels(str){
    const vowels = str.match(/[aeiou]/gi);
    if(vowels === null){
        return 0;
    }
    return vowels.length;
}
document.getElementById("result4").textContent = countVowels("Hello World");

function reverseWords(sentence){
    return sentence.split(" ").reverse().join(" ");
} 
document.getElementById("result5").textContent = reverseWords("Hello World");

function getCurrentDate(){
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    return `${day}/${month}/${year}`;
}
document.getElementById("result6").textContent = getCurrentDate();