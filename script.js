/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((emp)=> {if(emp.profession==="developer") console.log(emp)});
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((emp)=>{if(emp.profession==="developer") console.log(emp);});
}

function addData() {
  //Write your code here, just console.log
  let emp={id:4,name:"susan",age:"20",profession:"intern"};
  arr.push(emp);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  let newArr=arr.filter((emp)=>{return emp.profession!="admin"});
  console.log(newArr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let newArr = [
    { id: 5, name: "emma", age: "22", profession: "Designer" },
    { id: 6, name: "alex", age: "25", profession: "Assistant developer" },
    { id: 7, name: "lucas", age: "23", profession: "Manager" },
  ];
  let copy=arr.concat(newArr);
  console.log(copy);
}