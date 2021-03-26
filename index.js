function generateRandomCard() {

    let numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
    let randomNum = numberArr[Math.floor(Math.random() * numberArr.length)];
    document.querySelector(".card").innerHTML = randomNum;

    
    let suitArr = ["heart", "spade", "club", "diamond"];
    let randomSuit = suitArr[Math.floor(Math.random() * suitArr.length)];
    document.querySelector(".card").className = `card ${randomSuit}`;

    let timeleft = 9;
    let timeToNewCard = setInterval(function () {
        if (timeleft == 0) {
            clearInterval(timeToNewCard);
            document.getElementById("countdown").innerHTML = "New Card!";
        } else {
            document.getElementById("countdown").innerHTML = timeleft + " seconds remaining to new card";
        }
        timeleft--;
    }, 1000);

}

window.addEventListener("load", generateRandomCard);











