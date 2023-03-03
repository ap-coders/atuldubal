var colors=['red',"yellow","blue","pink","green","orange","white","purple"];

function ani(){

var a = document.createElement('div');

a.setAttribute('class','back_light');

a.style.left = Math.round(Math.random()*350)+"px";

//a.style.right = Math.round(Math.random()*400)+"px";

//a.style.background=colors[Math.round(Math.random()*10)];

//a.style.top= Math.round(Math.random()*350)+"px";

a.style.bottom= Math.round(Math.random()*400)+"px";

document.body.appendChild(a);

  

}

function ani_1(){

 document.getElementsByClassName('back_light').style.background="red";

}

setInterval(ani,5);

setInterval(ani_1,50);

function submit(){

 

  var username= document.getElementById('username').value;

  var password= document.getElementById('password').value;

  alert(username+""+password)

  

  //send username and password to php file to check it is correct and get response as 1 and 0

  var res=1;

  if(res==1){

    location.replace('accesspoint.html')

  }

  else if(res==0){

    alert('username password wrong');

  }

  else{

    alert('Server Error');

  }

}
