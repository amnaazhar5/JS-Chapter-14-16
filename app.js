//*****CHAPTER 14-16******//
//QUESTION 01

//var studentNames = [];

//QUESTION 02

//var studentNames = new Array();

//QUESTION 03

//var colors = ["Cabernet","Dark Green","Navy Blue","Black"];

//QUESTION 04

//var numbers = [85,90,40,92];

//QUESTION 05

//var boolArray = [true,false,true,false];

//QUESTION 06

//var mixedArray = ["Amna",15,true,"Karachi"];

//QUESTION 07

//var qualifications = ["SSC","HSC","BCS","BS","BCOM","MS","M.phil.","PhD"];
//document.write("<h1>Qualifications: </h1>");
//for (var a = 0; a < qualifications.length; a++) {
// document.write((a + 1) + ") " + qualifications[a] + "<br>");
//}

//QUESTION 08
//var students = ["Michael","John","Tony"];
//var scores = [320, 230, 480];
//var totalMarks = 500;
//document.write("Score of " + students[0] + " is " + scores[0] + ". Percentage: " + (scores[0]/totalMarks*100) + "%<br>");
//document.write("Score of " + students[1] + " is " + scores[1] + ". Percentage: " + (scores[1]/totalMarks*100) + "%<br>");
//document.write("Score of " + students[2] + " is " + scores[2] + ". Percentage: " + (scores[2]/totalMarks*100) + "%<br>");

//QUESTION 09

//var myColors = ["Maroon","Green","Black"];
//document.write("Initial colors: " + myColors + "<br><br>");

//a) var color1 = prompt("Enter color for start:");
//myColors.unshift(color1);
//document.write("After adding at start: " + myColors + "<br>");

//b) var color2 = prompt("Enter color for end:");
//myColors.push(color2);
//document.write("After adding at end:" + myColors + "<br>");

//C) myColors.unshift("Yellow","Pink");
//document.write("After adding two more: " + myColors + "<br>");

//d) myColors.shift();
//document.write("After deleting first:" + myColors + "<br>");

//e) myColors.pop();
//document.write("After deleting last:" + myColors + "<br>");

//f) var date = prompt("Enter index to add color:");
//var name = prompt("Enter color name:");
//myColors.splice(date,0,name);
//document.write("After adding at index:" + myColors + "<br>");

// g) var delIndex = prompt("Enter index to delete from:");
//var count = prompt("How many colors to delete?");
//myColors.splice(delIndex,count);
//document.write("Final Array:" + myColors + "<br>");

//QUESTION 10

//var studentScores = [320,230,480,120];
//document.write("Scores of Students: " + studentScores + "<br>");
//studentScores.sort();
//document.write("Ordered Scores of Students: " + studentScores + "<br>");

//QUESTION 11

//var cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
//var selectedCities = cities.slice(2,4); 
//document.write("Cities list: " + "<br>" + cities + "<br><br>");
//document.write("Selected cities list: " + "<br>" + selectedCities + "<br>");

//QUESTION 12

//var userName = ["This","is","my","cat"];
//document.write("Array: <br>" + userName + "<br>");
//document.write("String: <br>" + userName.join(" ") + "<br>");
//console.log(userName.join(" "));

//QUESTION 13

//var devices = [];
//devices.push("Keyboard");
//devices.push("mouse");
//devices.push("printer");
//devices.push("monitor");
//document.write("Devices: <br>" + devices + "<br>");
//document.write("Out: <br>" + devices.shift() + "<br>");
//document.write("Out: <br>" + devices.shift() + "<br>");
//document.write("Out: <br> " + devices.shift() + "<br>");
//document.write("Out: <br> " + devices.shift() + "<br>");

//QUESTION 14

//var devices = [];
//devices.push("Keyboard");
//devices.push("mouse");
//devices.push("printer");
//devices.push("monitor");
//document.write("Devices: <br>" + devices + "<br>");
//document.write("Out: <br>" + devices.pop() + "<br>");
//document.write("Out: <br>" + devices.pop() + "<br>");
//document.write("Out: <br> " + devices.pop() + "<br>");
//document.write("Out: <br> " + devices.pop() + "<br>");

//QUESTION 15 
//var mobilesBrand = ["Apple","Samsung","Nokia","Motorola","Sony","Haier"];
//document.write("<select>");
//for (var m = 0; m < mobilesBrand.length; m++){
 //document.write("<option>" + mobilesBrand[m] + "</option>");
//}
//document.write("</select>");

//(⁠◔⁠‿⁠◔⁠)**----END----**(⁠◔⁠‿⁠◔⁠)//