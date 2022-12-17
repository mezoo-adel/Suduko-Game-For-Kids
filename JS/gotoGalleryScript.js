window.addEventListener("load", function () {
   
    let nameTxt;
let startBtn = this.document.querySelector("#intoTheGameBtn");

    startBtn.onclick = function () {
        nameTxt = document.querySelector("#nameTxt").value;
        if (nameTxt == "" || nameTxt == null) {
            nameTxt = "Guest";
            console.log(nameTxt);
            document.querySelector("span").style.visibility ="visible"
        }
        else{
            nameTxt = document.querySelector("#nameTxt").value;
            console.log(nameTxt)  
        }
          //save data
          localStorage.setItem("usrName",nameTxt);
    };

});
