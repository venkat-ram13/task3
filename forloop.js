let obj = [
    {
        "country":"INDIA",
        "capital":"NEW DELHI",
        "region" :"ASIA",
        "language":"TAMIL"
}];
// for loop
for(var i=0;i<obj.length;i++){
    console.log(obj[i]);
    console.log(obj[i].country);
}
// for in
let text = "";
for(var key in obj){
    console.log(obj[key].capital);
}

// for of
for (let x of obj) {
  console.log(x.region);
}

//for Each
obj.forEach(function(obj) { console.log(obj.language); });