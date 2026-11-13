document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const cookies = document.getElementById("cookies").value;
    const brownies = document.getElementById("brownies").value;
    const cupcakes = document.getElementById("cupcakes").value;

    const regex = /^\d+$/;

    if(!regex.test(cookies) || !regex.test(brownies) || !regex.test(cupcakes)) {
        document.getElementById("result4").textContent = '';
        alert("Please enter valid non-negative numbers for all items.");
        return;
    }
const cookiesTotal = Number(cookies)*3;
const browniesTotal = Number(brownies)*4;
const cupcakesTotal = Number(cupcakes)*5;

const totalCost = cookiesTotal + browniesTotal + cupcakesTotal;

document.getElementById("result4").textContent =
    "Order Summary:\n" +
    "Cookies: " + cookies + " x $3 = $" + cookiesTotal + "\n" +
    "Brownies: " + brownies + " x $4 = $" + browniesTotal + "\n" +
    "Cupcakes: " + cupcakes + " x $5 = $" + cupcakesTotal + "\n" +
    "Total Cost: $" + totalCost;
});
