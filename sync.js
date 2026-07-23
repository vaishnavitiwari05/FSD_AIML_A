function register(){
    
console.log("register here");
}
function login(){
    
    console.log("login here");

} 
function getData(){
    console.log("fetch data");

}
function displayData(){
    console.log("display data");
}
function waitforinput(delay){
 const ct=Date.now();
 const ms=ct+delay;
 while(Date.now()<ms){

 }
}
register();
login();
getData();
displayData();
console.log("Call another app!!")
