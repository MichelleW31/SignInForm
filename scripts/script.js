


var user ={
  email: "coolguy@gmail.com",
  password:"ILoveCoffee",
  name:"Grant Chirpus"
};

function signOut(){
  document.getElementsByTagName("input")[0].value = "";
  document.getElementsByTagName("input")[1].value = "";
  var hide = document.getElementById("loggedin");
  var show = document.getElementById("signin");
  var show2 = document.getElementById("welcome");
  hide.style.display="none";
  show.style.display="flex";
  show2.style.display="block";
}

function checkLogin(){
  var e = document.getElementsByTagName("input")[0].value;
  var p = document.getElementsByTagName("input")[1].value;

  if(e === user.email && p === user.password ){
    var hide =document.getElementById("signin");
    var hide2 = document.getElementById("welcome");
    var show = document.getElementById("loggedin");
    var title=document.querySelector("#loggedin h2");
    hide.style.display="none";
    hide2.style.display="none";
    show.style.display="flex";
    show.style.marginTop="40px";
    title.innerText = "Welcome, " + user.name + "!";

  }else{
    alert("Your email or password is incorrect. Please try again");
  }
}
