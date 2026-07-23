function register(){
    setTimeout(()=>{
console.log("register here");},6000)
}
function login(){
    setTimeout(()=>{
    console.log("login here");},8000)

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
