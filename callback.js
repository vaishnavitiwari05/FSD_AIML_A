function register(cb){
    setTimeout(()=>{
console.log("register here");
cb();},6000)
}
function login(cb){
    setTimeout(()=>{
    console.log("login here");
cb();},8000)

} 
function getData(cb){
    setTimeout(()=>{
    console.log("fetch data");
    cb();},8000)

}
function displayData(){
    setTimeout(()=>{
    console.log("display data");
    },1000)
}
function waitforinput(delay){
 const ct=Date.now();
 const ms=ct+delay;
 while(Date.now()<ms){

 }
}
// callback hell
register(()=>{
    login(()=>{
        getData(()=>{
            displayData()
        })
    })
});
login();
getData();
displayData();
console.log("Call another app!!");
