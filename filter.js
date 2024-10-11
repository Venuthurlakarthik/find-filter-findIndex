
//filter 

var getFilterData = ["karthik","Nithin","yogi"];

var filterData = getFilterData.filter(function(items){
    return items.startsWith("y");
});
console.log(filterData);



//find

var findData = getFilterData.find(function(Data){
    if(Data=="nithin"){
    return true;
    }
        return false;
});

console.log(findData);



//find index 


var findIndex = getFilterData.findIndex((indexData)=>{
if(indexData=="karthik"){
    return indexData;
}
});
console.log(findIndex);

