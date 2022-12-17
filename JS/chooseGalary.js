window.addEventListener("load", function () {
    let group1 = this.document.querySelector("#group1");
    let group2 = this.document.querySelector("#group2");
    let group3 = this.document.querySelector("#group3");
    let group4 = this.document.querySelector("#group4");

    group1.onclick = function () {
        pressBtnTOPlay(group1)
    }
    group2.onclick = function () {
        pressBtnTOPlay(group2)
    }
    group3.onclick = function () {
        pressBtnTOPlay(group3)
    }
    group4.onclick = function () {
        pressBtnTOPlay(group4)
    }


});

function pressBtnTOPlay(imageObj) {
    localStorage.setItem("selectedImg", imageObj.getAttribute("id"));
}