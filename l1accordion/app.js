let getacctitles = document.querySelectorAll('.acctitle');
let getacccontents = document.getElementsByClassName('acccontent');
// console.log(getacctitles,getacccontents);

for(var x = 0 ; x < getacctitles.length; x++){
//   console.log(x)
getacctitles[x].addEventListener('click',function(e){
    console.log(e.target);
    // console.log(this);
    this.classList.toggle('active');
    var getcontent = this.nextElementSibling;
    console.log(getcontent);

    if(getcontent.style.height){
        getcontent.style.height = null;  //beware can't set 0
    }else{
        // console.log(getcontent.scrollHeight)
        getcontent.style.height = getcontent.scrollHeight + "px";
    }
});

  if(getacctitles[x].classList.contains('active')){
    getacccontents[x].style.height = getacccontents[x].scrollHeight + "px";
  }

};