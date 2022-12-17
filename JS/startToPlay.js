//put values outside windows loading not to over load the loading
let imgs; let tdsOfOption;

window.addEventListener("load", function () {

    let usrName = this.document.querySelector("#usrName");
    let timerTxt = this.document.querySelector("#timer");
    let startPlayBtn = this.document.querySelector("#startPlaying");
    let endPlayingBtn = this.document.querySelector("#endPlaying");

    //focus the first td of playingTable
    tdsOfOption = this.document.querySelector("#gameTablue tr td.tdgame");
    tdsOfOption.focus();
    tdsOfOption.classList.add("focus");

    usrName.innerText = localStorage.getItem("usrName");

    let intervalID;
    startPlayBtn.onclick = function () {
        let ready = confirm("Do You Want to Start The Game? ");
        if (!ready) {
            console.log("not ready");
        }
        else {
            //----------------
            loopRandFunc(document.querySelectorAll("#gameTablue tr td.tdgame"), imgs);
            //-------------------
            startPlayBtn.style.visibility = "hidden";
            endPlayingBtn.style.visibility = "visible";
            let timer = 0.6;
             intervalID = setInterval(function () {
                if (timer.toFixed(2) > 0) {
                    timer -= 0.01;
                    
                } else if (timer.toFixed(2) <= 0) {
                    endPlayingBtn.style.visibility = "hidden";
                    alert("TIMES OUT");
                    clearInterval(intervalID);
                    checkResult();
                }
                timerTxt.innerText = timer.toFixed(2);
            }, 1000);

            document.addEventListener('keydown', function (event) { // onkeypress isn't working nowadays in all browsers
                let sibling;
                switch (event.key) { // switch case didn't use operators | &
                    case "ArrowLeft":
                        sibling = tdsOfOption.previousElementSibling;
                        movingArrows(sibling);
                        break;
                    case "ArrowRight": // Right pressed
                        sibling = tdsOfOption.nextElementSibling;
                        movingArrows(sibling);
                        break;
                    case "ArrowUp": // Up pressed
                        var current = tdsOfOption.cellIndex;
                        var nextRow = tdsOfOption.parentElement.previousElementSibling;
                        if (nextRow != null) {
                            sibling = nextRow.cells[current];
                            movingArrows(sibling);
                        }
                        break;
                    case "ArrowDown": // Down pressed
                        var current = tdsOfOption.cellIndex;
                        var nextRow = tdsOfOption.parentElement.nextElementSibling;
                        if (nextRow != null) {
                            sibling = nextRow.cells[current];
                            movingArrows(sibling);
                        }
                        break;
                    // put images
                    case "1":
                        //   --------------------  console.log("im pressed");------------------------------------------
                        if (tdsOfOption.childNodes[0].root == "root") {
                            event.off("keydown") //throw error not to execute code 😂
                            console.log(tdsOfOption.childNodes[0].root);
                        }
                        //-----------
                        //childNode returan an array of [children]
                        tdsOfOption.childNodes[0].src = "gallery/" + imgs[0];
                        tdsOfOption.counter = 1;
                        break;
                    case "2":
                        if (tdsOfOption.childNodes[0].root == "root") {
                            event.off("keydown") //throw error not to execute code 😂
                            console.log(tdsOfOption.childNodes[0].root);
                        }
                        //-----------
                        tdsOfOption.childNodes[0].src = "gallery/" + imgs[1];
                        tdsOfOption.counter = 2;
                        break;
                    case "3":
                        if (tdsOfOption.childNodes[0].root == "root") {
                            event.off("keydown") //throw error not to execute code 😂
                            console.log(tdsOfOption.childNodes[0].root);
                        }
                        //-----------
                        tdsOfOption.childNodes[0].src = "gallery/" + imgs[2];
                        tdsOfOption.counter = 3;
                        break;
                    case "4":
                        if (tdsOfOption.childNodes[0].root == "root") {
                            event.off("keydown") //throw error not to execute code 😂
                            console.log(tdsOfOption.childNodes[0].root);
                        }
                        //-----------
                        tdsOfOption.childNodes[0].src = "gallery/" + imgs[3];
                        tdsOfOption.counter = 4;
                        break;
                }
                console.log("you pressed now " + event.code);

            });//document on keydown closer
        } // start play the game
    }; // Sure? start play the game?!


    endPlayingBtn.onclick = function () {

        let ready = confirm("Do You Want to Finish The Game? ");
        if (!ready) {
            console.log("not yet");
        }
        else {
            checkResult();
            clearInterval(intervalID);
        }
    }; // submit playing of the game closer

}); // close loading

// check neighbour and add focus style 
function movingArrows(sibling) {
    if (sibling != null) {
        tdsOfOption.classList.remove("focus");
        sibling.focus();
        sibling.classList.add("focus");
        tdsOfOption = sibling;
    }
} // movingArrows closer


function checkResult() { //get Vertical and Horizontal array length into alert after filtering
    tdsOfOption = document.querySelectorAll("#gameTablue tr td.tdgame");
    let arr1 = matrixHorizentalFunc(tdsOfOption);
    console.log("horizontal "+arr1);
    let arr2 = matrixVerticalFunc(tdsOfOption);
    console.log("vertical "+arr2);
    
    if (filteredArray(arr1) == 1 && filteredArray(arr2)==1) {
            alert(`CONGRATULATIONS, You WIN! 🎉💕😁`);
            window.location.reload();
    }
    else {
        alert(`Hard Luck, GAME OVER! 🤦‍♂️ 😢 LOSER😒 😛`);
        window.location.reload();
    }

}


