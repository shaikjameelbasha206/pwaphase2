function submitData() {
var career=document.querySelector("#career").value;
var name=document.querySelector("#name").value;
var mobile=document.querySelector("#mobile").value;
var address=document.querySelector("#address").value;
var email=document.querySelector("#email").value;
var ginstitute=document.querySelector("#ginstitute").value;
var gbranch=document.querySelector("#gbranch").value;
var gyear=document.querySelector("#gyear").value;
var gper=document.querySelector("#gper").value;

var iinstitute=document.querySelector("#icollege").value;
var ibranch=document.querySelector("#igroup").value;
 var imedium=document.querySelector("#imedium").value;
var iyear=document.querySelector("#iyear").value;
var iper=document.querySelector("#iper").value;

var sinstitute=document.querySelector("#sschool").value;
var sboard=document.querySelector("#sboard ").value;
var smedium=document.querySelector("#smedium ").value;
var syear=document.querySelector("#syear ").value;
var sper=document.querySelector("#sper").value;
var skills=document.querySelector("#skills ").value;

var idb=window.indexedDB || window.mozIndexedDB || window.msIndexedDB || window.webkitIndexedDB ;
if(!idb in window){
  console.log("indexedDB is not supported");
}
var request;
var store;
var open=idb.open("storeData",1);
console.log("indexedDB is created");

open.onupgradeneeded=function (e){
  request=e.target.result;
  var request=e.target.result;
  request.createObjectStore("formdata",{keyPath:"id",autoIncrement:true});
  console.log("store is created");
}
open.onerror=function(error){
  console.log("Error is occured");

}
open.onsuccess=function(e){
  request=e.target.result;
  var transaction=request.transaction("formdata","readwrite")
  store=transaction.objectStore("formdata");
  store.put({
    career:career,
    name:name,
    mobile:mobile,
     address:address,
    email:email,
    education:[
      {
        institute:ginstitute,
        branch:gbranch,
         medium:"",
         board:"",
        year:gyear,
        per:gper

      },
      {
        institute:iinstitute,
        branch:ibranch,
         medium:imedium,
         bord:"",
        year:iyear,
        per:iper

      },
      {
        institute:sinstitute,
        branch:"",
         medium:smedium,
         board:sboard,
        year:syear,
        per:sper

      }

    ],
    skills:skills
  });
}




window.open("index.html");
}
