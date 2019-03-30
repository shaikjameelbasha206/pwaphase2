var para;
var paravalue;
var query=window.location.search.substring(1).split("?");
for (var i in query)
{
  para =query[i].split("=");
  paravalue=parseInt(para[1]);
}
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
  var info=store.get(paravalue);
  info.onsuccess=function(data){
    console.log(data);
    personalinfo(data.target.result);
  }
}
var parent=document.querySelector(".parent");

var left=document.querySelector(".left");
 var right=document.querySelector(".right");
function personalinfo(pi){

  var image=document.createElement("img");
  image.src="images/jan3.jpg";
  image.alt=pi.name;
  left.append(image);


var hn=document.createElement("h1");
hn.textContent=pi.name;
left.append(hn);

var hm=document.createElement("h2");
hm.textContent=pi.mobile;
left.append(hm);

var ha=document.createElement("h3");
ha.textContent=pi.address;
left.append(ha);

var he=document.createElement("h4");
he.textContent=pi.email;
left.append(he);

var h111=document.createElement("h1");
h111.textContent="Career Objectives";
right.append(h111);


 var head11=document.createElement("h1");
 head11.textContent="Education Details";
 right.append(head11);


 var table=document.createElement("table");
 table.border="1";
 var tr1="<tr><th>institute</th><th>branch</th><th>medium</th><th>board</th><th>year</th><th>per</th><tr>";
 var tr2="";
 for (var i in pi.education){
   tr2=tr2+"<tr><td>"+pi.education[i].institute+"</td><td>"+pi.education[i].branch+"</td><td>"+pi.education[i].medium+"</td><td>"+pi.education[i].board+"</td><td>"+pi.education[i].year+"</td><td>"+pi.education[i].per+"</td><tr>";
  }
  table.innerHTML=tr1+tr2;
  right.append(table);

  var sac=document.createElement("h1");
  sac.textContent="Skills";
  right.append(sac);

  var skills=document.createElement("skills");
  skills.textContent=pi.skills;
  right.append(skills);
}

// var hs=document.createElement("h1");
// hs.textContent=pi.college;
// left.append(hs);
//
// var hs=document.createElement("h1");
// hs.textContent=pi.college;
// left.append(hs);
