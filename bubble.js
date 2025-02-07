document.addEventListener("DOMContentLoaded", function () {
    var Clutter = "";

    // Generate random bubbles
    for (var i = 1; i <= 102; i++) {
        var rn = Math.floor(Math.random() * 10);
        Clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector("#pbtm").innerHTML = Clutter;

    // Initialize game variables
    var timer = 60;
    var score = 0;
    var targetValue = 0;

    // Function to start the countdown timer
    function runtimer() {
        var timerinl = setInterval(function () {
            if (timer > 0) {
                timer--;
                document.querySelector("#timervalue").textContent = timer;
            } else {
                clearInterval(timerinl);
                alert("Game Over! Your final score is: " + score);
            }
        }, 1000);
    }

    // Function to get a new hit value
    function getNewHit() {
        targetValue = Math.floor(Math.random() * 10);
        document.querySelector("#hitval").textContent = targetValue;
    }

    // Function to increase score
    function increasescore() {
        score += 10;
        document.querySelector("#scoreval").textContent = score;
    }

    // Event listener for clicking a bubble
    document.querySelector("#pbtm").addEventListener("click", function (event) {
        var clickedValue = Number(event.target.textContent);
        
        if (clickedValue === targetValue) {
            increasescore();
            getNewHit(); // Update target value
            // Refresh bubbles
            Clutter = "";
            for (var i = 1; i <= 102; i++) {
                var rn = Math.floor(Math.random() * 10);
                Clutter += `<div class="bubble">${rn}</div>`;
            }
            document.querySelector("#pbtm").innerHTML = Clutter;
        }
    });

    // Start the game
    runtimer();
    getNewHit();
});
