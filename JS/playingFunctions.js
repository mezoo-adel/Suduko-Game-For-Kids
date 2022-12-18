// let table = document.querySelectorAll("table tr td.tdgame");
 let arr = [];

 //correct SuDUko must have every row and column with the same value
let matrixHorizentalFunc = function (table) { // iterate row by row and save it into array
    let start = 0; let end = 4; let target = 0;
    for (let i = 0; i < 4; i++) { // 4 stands for 4x4  game tablue
        for (start; start < end; start++) {
            console.log(table[start].counter);
            target += table[start].counter;
        }
        if (isNaN(target)) {
            target = 0 ;
        }
        arr[i] = target;
        end += 4;
        target = 0;
    }
        return arr;
};


let matrixVerticalFunc = function (table) {  // iterate column by column and save it into array
    let start = 0; let end = 16; let target = 0;
    for (let i = 0; i < 4; i++) {  
        for (start; start < end; start += 4) {
            console.log(table[start].counter);
            target += table[start].counter;
        }
        if (isNaN(target)) {
            target = 0 ;
        }
        arr[i] = target;
        start = i + 1; target = 0;
    }
    return arr;
};
let filteredArray = function (arr) {
    //filter the repeating elements 
    arr = arr.filter((a, b) => (arr.indexOf(a) === b));
    // if (arr.length != 1) { console.log("you lost the game"); }
    return arr.length;
}




 //set src of each img with the same index of each item of imgs[array]
function returnSrcs(tdsOfOption, imgs) { 
    for (let value = 0; value < tdsOfOption.length; value++) {
        tdsOfOption[value].src = `gallery/${imgs[value]}`;
    }
}
switch (localStorage.getItem("selectedImg")) { // put each img[i] in table 
    case 'group1':
        imgs = ["1.jpg", "11.jpg", "111.jpg", "1111.jpg"];
        tdsOfOption = document.querySelectorAll("table tr td.tds img");
        returnSrcs(tdsOfOption, imgs);
        break;
    case 'group2':
        imgs = ["2.jpg", "22.jpg", "222.jpg", "2222.jpg"];
        tdsOfOption = document.querySelectorAll("table tr td.tds img");
        returnSrcs(tdsOfOption, imgs);
        break;
    case 'group3':
        imgs = ["3.jpg", "33.jpg", "333.jpg", "3333.jpg"];
        tdsOfOption = document.querySelectorAll("table tr td.tds img");
        returnSrcs(tdsOfOption, imgs);
        break;
    case 'group4':
        imgs = ["4.jpg", "44.jpg", "444.jpg", "4444.jpg"];
        tdsOfOption = document.querySelectorAll("table tr td.tds img");
        returnSrcs(tdsOfOption, imgs);
        break;
}

//generate random images for any tds REPEATED*****************
let loopRandFunc = function(tdsOfOption,array){
    let noRepeatRandom=[];
    for (let index = 0; index <4; index++) {
        let random = Math.floor(Math.random() * 15 );
        if(noRepeatRandom.indexOf(random) == -1){
            noRepeatRandom.push(random);
          
        }
        else{
            index--;
            continue; // back to loop again
        }
    }
    console.log("randomArray "+noRepeatRandom);
    for(let index = 0; index < noRepeatRandom.length ; index++){
        tdsOfOption[noRepeatRandom[index]].childNodes[0].src= "gallery/"+array[index];
        //get tdOfElement In NoRepeatRandom and assign counter as indexOfImage
        tdsOfOption[noRepeatRandom[index]].counter=index+1; //number start from 1 not 0
        console.log("i'm number "+ noRepeatRandom[index]);
        //add value as root img
        tdsOfOption[noRepeatRandom[index]].childNodes[0].root="root";
        tdsOfOption[noRepeatRandom[index]].classList.add("root")
        
    }
};