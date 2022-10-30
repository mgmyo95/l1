let getprogressbar = document.querySelector('#progress-bar');

window.onscroll = function(){
    scrollpoint();
}

function scrollpoint(){
    // console.log("I am working")

    let getscrolltop = document.documentElement.scrollTop;
    console.log(getscrolltop);

    let getscrollheight = document.documentElement.scrollHeight;
    let getclientheight = document.documentElement.clientHeight;
    let calcheight = getscrollheight - getclientheight;
    // let getfinalheight = Math.round((getscrolltop * 100) / calcheight);
    let getfinalheight = Math.round((getscrolltop / calcheight) * 100);
    // console.log(getfinalheight);

    getprogressbar.style.width = getfinalheight + "%";
}

function printme(){
    window.print();
}

//scrolltop
//project height
//current height

//project height - current height
//scrolltop * 100 / project height - current height
 
