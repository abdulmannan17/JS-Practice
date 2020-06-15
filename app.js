
/*Chapter 1

alert("Hello");
var a = prompt("Enter Password");
alert("Error! Please enter a valid password");
alert("Welcome to JS land\nHappy Coding!");
alert("Welocme to JS Land");
alert("Welcome to JS land\nHappy Coding!");
alert("Happy Coding\n ~ Prevent this page from creating additional dialogs");
alert("Hello...I can run JS through my web browser's console");
*/

/*Chapter 2

var userName = "Mannan17";
var myName = "Abdul Mannan Hassan";
var message = "Hello World";
alert(message);
alert(myName);
alert("15 Years Old");
alert("Certified Mobile App Developer");


var food = "Pizza";
alert("Pizza\nPizz\nPiz\nPi\nP");


var email = "mannanhassan17@gmail.com";
alert("My email address is " + email);

var book = "A smarter way to learn Javascript";
alert("I am trying to learn from the book " + book);
document.write("Ya! I can write HTML content through JS");


var sign = "▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬"
alert(sign);
*/

/*Chapter 3

var age = 15;
alert("I am " +age+ " years old");
var birthYear = 2004;
document.write("my birth year is " + birthYear + "<br>");
var name = prompt('Your Name');
var product = "Shirts";
var quantity = prompt('how many '+product);
document.write(name + " ordered " + quantity + ''+product);
*/

/*Chapter 4

var a = 15;
var b = "-";
var c = 5;

alert( a+ ''+b+''+c);
// 1. name1 2.firstName 3. value2 4. age 5. percentage
// 1. for 2. while 3. 3name 4. log 5. 1value
document.write('Rules for naming JS Variables' + "<br>"+"<br>" + "Variable names can only contain ,numbers, $ and_.For e.g:$my+1stValue " + "<br>"+"Variable must begin with a letter,$ or _."+"<br>"+"Varibles are case sensitive"+"<br>"+"Variables cannot be Keywords");
*/

/*Chapter 5

var a = prompt('FirstNumber');
var b = prompt('SecNumber');
var sign = prompt('Operator')
var c = (+a)+(+b);
var d = a-b;
var e = a*b;
var f= a/b;
var g = a % b;
//document.write("Sum of "+ a +" and "+ b + " is " + c);
if (sign === "+"){
    document.write("Sum of "+ a +" and "+ b + " is " + c);
}
else if (sign === "+"){
    document.write("Subtraction of "+ a +" and "+ b + " is " + d);
}
else if (sign === "*"){
        document.write("Multiplication of "+ a +" and "+ b + " is " + e);
    }
else if ( sign === "/"){
    document.write("Division of "+ a +" and "+ b + " is " + f);
}
else if (sign === "%"){
    document.write("Modulus of "+ a +" and "+ b + " is " + e)
}
*/
/*var initial = prompt("Your Number");
initial1 = initial;
var incre = (+initial1)+(+1);
var add = (+initial)+(+7);
var initial2 = 1;
var subtract = add-1;
var zero = 0;

document.write('<br>'+'Value after variable declaration is undefined');
document.write('<br>'+'Initial Value: ' + initial1);
document.write('<br>'+ 'Val after increment is '+ incre);
document.write('<br>'+ 'Val after addition is '+ add);
document.write('<br>'+ 'Val after decrement is '+ subtract);
document.write('<br>'+ 'Remainder is '+ zero);

*/

/*var ticket = 600;
var numberOfTickets = prompt("How many tickets");
var cost = ticket*numberOfTickets;
document.write('Total cost to buy ' + numberOfTickets + ' tickets to a movie is ' +cost );
*/

/*var table = prompt("Which Table");
document.write("Table of "+table);
for(var i =1; i <= 10; i++){
    document.write(table+"x"+i+"="+table*i+"<br>");
}*/

/*var celsius = prompt('Temperature in Celsius');
var convert1 = (celsius*9/5)+32;
document.write(celsius +"C"+" is"+ convert1+"<br>");
var fahrenheit = prompt('Temperature in Fahrenheit');
var convert2 = [(fahrenheit-32)*5]/9;
document.write(fahrenheit +"F"+" is"+ convert2);
*/

/*var head = "Shopping Cart";
var price1 = 650;
var q1 = prompt("How Many?");
var price2 = 100;
var q2 = prompt('How Many?');
var charges = 100;
var tcost = (+price1*q1) +(+price2*q2);
document.write(head + "<br>"+"<br>" + "Price of item 1 is " + price1 +"<br>"+"Quantity of item 1 is "+ q1+"<br>" + "Price of item 2 is " + price2 +"<br>"+"Quantity of item 2 is "+ q2+"<br>"+"Shipping Charges: "+ charges +"<br>"+"<br>"+"Total cost of your order is "+ tcost);
*/


/*var markTotal = 980;
var markObtained = prompt("Your Marks");
var headmark = "Marks Sheet";
var Percentage = markObtained / markTotal *100
document.write(headmark + "<br>" + "<br>" + "Total marks: "+markTotal+"<br>"+"Marks obtained: "+markObtained+"<br>"+"Percentage: "+ Percentage)
*/

/*var dollar = prompt("How many Dollars?");
var riyal = prompt("How many in Riyals");
var pkr = (dollar*104.8)+(riyal*28);
document.write("Total Currency in PKR: "+ pkr);
*/

/*var val1 = prompt("Enter Number");
var aritmetic = [(+val1)+(+5)]*10/2;
document.write(aritmetic);
*/

/*var birthYear = prompt("Birth Year");
var currentYear = prompt("Current Year");
var a = "Age Calculator";
document.write( a +"<br>"+currentYear - birthYear);
*/

/*var radius = prompt("Enter Radius");
var circumference = 2*(3.142)*radius;
var area = (3.142)*radius;
document.write("Radius: "+ radius +"<br>" +"Circumference: "+ circumference+"<br>"+"Area: "+ area);
*/

/*var favSnack = prompt("Fav Snacks");
var currentAge = prompt("Current Age");
var estAge = 70;
var aPerDay = 1;
var totalSnacks = 365*(estAge-currentAge);
document.write(totalSnacks +""+ favSnack);
*/

/*Chapter 6-9

var num = prompt("Enter any number:");
var num1 = num++;
var num2 = ++num;
var num3 = num--;
var num4 = --num;
document.write("++num "+ num1+"<br>"+"num++ "+ num2 + "<br>"+"--num "+ num3 + "<br>" + "num-- " + num4);
*/

/*var a = prompt("Enter any");
var b = prompt("Enter num");
var result = -a - -b + ++b + b--;
var a1 = --a - --b;
var a2 = --a - --b + ++b;
var a3 = --a - --b + ++b + b--;
document.write("-a - -b + ++b + b-- = "+result+"<br>");
document.write("-a = "+a+"<br>");
document.write("--a - --b = "+a1+"<br>");
document.write("--a - --b + ++b = "+a2+"<br>");
document.write("--a - --b + ++b + b-- = "+ a3+"<br>");
*/

/*var a = prompt("Enter Name");
alert("Hello! "+ a)*/

/*var table = prompt("Which Table");
document.write("Table of "+table);
for(var i =1; i <= 12; i++){
    document.write(table+"x"+i+"="+table*i+"<br>");
}
if(table = ''){
    document.write(5+"x"+i+"="+5*i+"<br>");
}
*/

/*var s1 = prompt("Enter Subject");
var m1 = prompt("Enter Marks");
var s2 = prompt("Enter Subject");
var m2 = prompt("Enter Marks");
var s3 = prompt("Enter Subject");
var m3 = prompt("Enter Marks");
var totalMarks = 100;
document.write(s1+": "+ m1 +" "+totalMarks+" "+ " "+ m1 +"%" +"<br>");
document.write(s2+": "+ m2 +" "+totalMarks+" "+ " "+ m2 +"%" +"<br>");
document.write(s3+": "+ m3 +" "+totalMarks+" "+ " "+ m3 +"%" +"<br>");
*/

/*Chapter 9-11

var city = prompt("Enter City");
if(city === "Karachi"){
    alert("Welcome to city of lights");
}
else{
    alert("OK");
}*/

/*var gender = prompt("Gender");
if(gender === "Male"){
    alert("Good Morning Sir!");
}
else if(gender === "Female"){
    alert("Good Morning Madam!");
}
else{
    alert("Enter valid Gender");
}

var lights = prompt("Red, Green Or Yellow");
var yellow = "Ready To Move";
var green = "Move Now";
if(lights = "Red"){
    alert("Must Stop");
}
else if (lights = "Green"){
    alert("Move Now");
}
else{
    alert("Ready to move");
}*/

/*var fuel = prompt("How much fuel?");
if(fuel < 0.25){
    alert("Please refill the fuel in your car");
}
else{
    alert("You are good to go!");
}
*/
/*var a = 4;
if (++a === 5){
    alert("given condition for variable a is true");
    }
//true

var b = 82; 
if (b++ === 83){ 
    alert("given condition for variable b is true"); 
}//false

var c = 12;
if (c++ === 13){
     alert("condition 1 is true"); 
}//false

if (c === 13){
     alert("condition 2 is true"); 
}//true
if (++c < 14){ 
    alert("condition 3 is true");
}//false 
if(c === 14){ 
    alert("condition 4 is true"); 
}//true

var materialCost = 20000; 
var laborCost = 2000; 
var totalCost = materialCost + laborCost; 
if (totalCost === laborCost + materialCost){ 
    alert("The cost equals"); 
}//true

if (true){ 
    alert("True"); 
} //true
if (false){ 
    alert("False"); 
}

if("car" < "cat"){ 
    alert("car is smaller than cat");
}//true*/

/*var s1 = prompt("Enter Subject");
var m1 = prompt("Enter Marks");
var s2 = prompt("Enter Subject");
var m2 = prompt("Enter Marks");
var s3 = prompt("Enter Subject");
var m3 = prompt("Enter Marks");
var totalMarks = 100;
if(m1,m2,m3 >= 90 && m1,m2,m3 <= 100 ){
    document.write("A+"+"<br>"+"Excellent");
}
else if (m1,m2,m3 >= 80 && m1,m2,m3 <= 89){
    document.write("A"+"<br>"+"Good");
}
else if (m1,m2,m3 >= 70 && m1,m2,m3 <= 79){
    document.write("B"+"<br>"+"Average");
}
else{
    document.write("You need to improve");
}
document.write("<br>"+s1+": "+ m1 +" "+totalMarks+" "+ " "+ m1 +"%" +"<br>");
document.write("<br>"+s2+": "+ m2 +" "+totalMarks+" "+ " "+ m2 +"%" +"<br>");
document.write("<br>"+s3+": "+ m3 +" "+totalMarks+" "+ " "+ m3 +"%" +"<br>");
*/

/*var a = 7;
var b = prompt("1-10?");
if(b == a){
    alert("Bingo! Correct answer");
}
else if(b == (+a+1)){
    alert("Close enough to the correct answer");
}
else {
    alert("Wrong!")
}

var a = prompt("Any Number");
var b = a % 3;

if(b == 0){
    alert("Number is Divisble by 3");
}
else{
    alert("Number is not Divisible by 3");
}

var num = prompt("Any Number");
var even = num % 2;
if(even == 0){
    alert("Even");
}
else{
    alert("Odd");
}

var t = prompt("Temperature");
if (t >= 40){
    alert("It's Too Hot");
}
else if (t >= 30){
    alert("The Weather Is Normal");
}
else if (t >= 20){
    alert("Today's Weather is cool");
}
else if (t >= 10){
    alert("OMG!");
}
else{
    alert("");
}*/

/*var a = prompt('FirstNumber');
var b = prompt('SecNumber');
var sign = prompt('Operator')
var c = (+a)+(+b);
var d = a-b;
var e = a*b;
var f= a/b;
var g = a % b;
//document.write("Sum of "+ a +" and "+ b + " is " + c);
if (sign === "+"){
    document.write("Sum of "+ a +" and "+ b + " is " + c);
}
else if (sign === "+"){
    document.write("Subtraction of "+ a +" and "+ b + " is " + d);
}
else if (sign === "*"){
        document.write("Multiplication of "+ a +" and "+ b + " is " + e);
    }
else if ( sign === "/"){
    document.write("Division of "+ a +" and "+ b + " is " + f);
}
else if (sign === "%"){
    document.write("Modulus of "+ a +" and "+ b + " is " + e)
}
*/

/*Chapter 12-13

var a = prompt("Enter anything");
if ( a = Number){
    alert("Number");
}
else if (a = "A"||"B"||"C"||"D"||"E"||"F"||"G"||"H"||"I"||"J"||"K"||"L"||"M"||"N"||"O"||"P"||"Q"||"R"||"S"||"T"||"U"||"V"||"W"||"X"||"Y"||"Z"){
    alert("UpperCase");
}

else{
    alert("LowerCase");
}


var a = prompt("Num1");
var b = prompt("Num2");
var c = b < a ;
var d = b > a;
if(c){
    alert(a);
}
else if(d){
    alert(b);
}
else if(a == b){
    alert("Equal");
}
else {
    alert("Invalid");
}

var password = prompt("Enter Password");
var password1 = prompt("Enter Password again");
if(password=""){
    alert("Please Enter Your Password");
}
else if(password1 === password){
    alert("Correct Password");
}
else{
    alert("Wrong");
}

var x = prompt("Enter a number");
if (x > 0){
    alert("Positive");
}
else if (x < 0){
    alert("Negative");
}

else{
    alert("Zero")
}

var v = prompt("Enter a letter in lowercase");
var vowels = ["a", "e","i","o","u"];
if( v === vowels[0]){
    alert("vowel");
}
else if( v === vowels[1]){
    alert("vowel");
}
else if( v === vowels[2]){
    alert("vowel");
}
else if( v === vowels[3]){
    alert("vowel");
}
else if( v === vowels[4]){
    alert("vowel");
}
else{
    alert("false");
}*/


/*var greeting = prompt("Enter Time") ;
var morning = "Good Day";
var night = "Good evening";
 
if (greeting < 18) { 
    alert(morning);
}
else {
     alert(night);
}

var time = prompt("24 Hour Clock");
var convert = time - 12;
if (time >=12){
    alert(convert + "PM");
}
else {
    alert(time + "AM");
}*/

/*CHAPTER 14-16

var students = [];
var students1 = new Array();
var string = ["ali","ahmes"];
var num = [1,2,2];
var bool = [true,false];
var mixed = ["day",4,false];
var eduPk = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"];
var cities = ["KHI","LHE","QUE"];


var a = ["Michael", "John", "Tony"];
var m = [320,230,480];
document.write("Score of "+ a[0]+ " is " + m[0]+ ". Percentage: " + m[0]/500*100 + "%" + "<br>" + 
               "Score of "+ a[1]+ " is " + m[1]+ ". Percentage: " + m[1]/500*100 + "%" + "<br>" +
               "Score of "+ a[2]+ " is " + m[2]+ ". Percentage: " + m[2]/500*100 + "%" + "<br>");



var color = ["red","yellow","green"];
var a1 = prompt("Add a color");
var b1 = color.unshift(a1);
alert(color);
var a2 = prompt("Add a color to the end");
var b2 = color.push(a2);
alert(color);
var a3 = prompt("Add another color");
var a4 = prompt("Add another color");
var b3 = color.unshift(a3);
var b4 = color.unshift(a4);
alert(color);
var b5 = color.shift();
alert(color);
var b6 = color.pop();
alert(color);

var color = ["red","yellow","green"];
var a5 = prompt("Where to add new color");
var a6 = prompt("Color Name");
var b7 = color.splice(a5,0,a6)
alert(color);
var a7 = prompt("Where to delete");
var a8 = prompt("How Many");
var b8 = color.splice(a7,a8)
alert(color);


var score = [320,230,350,190];
document.write(score + "<br>" + "Ascending Order: " + score.sort(function(a, b){return a-b}));


var city = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = [city[0], city[3], city[2]];
document.write(city + "<br>" + selectedCities);


var arr = ["This","is","my","cat"];
var join = arr.join();
document.write(join);


var a = new Array(); 
var count = a.push("A", "B", "C"); 
document.write(a + "<br>");         
var item1 = a.shift();
document.write(item1 + "<br>");
var item2 = a.slice(0,1);
document.write(item2 + "<br>");
var item3 = a.pop();
document.write(item3 + "<br>");


var a = new Array(); 
var count = a.unshift("A", "B", "C"); 
document.write(a + "<br>");         
var item1 = a.pop();
document.write(item1 + "<br>");
var item2 = a.splice(1,1);
document.write(item2 + "<br>");
var item3 = a.shift();
document.write(item3 + "<br>");


var phone = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write(phone);*/

/*CHAPTER 17-20


var num = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
document.write(num[0]+"<br>"+num[1]+"<br>"+num[2]);

var i;
for( i=1; i<=10;i++) {
    document.write(i+"<br>");
}



var mul = prompt("Enter Multiplication Table");
document.write("Table of "+mul+"<br>");
var len = prompt("Enter length");
document.write("Lenght "+len+"<br>");
for (var i = 1; i<=len; i++){
    document.write(mul+" x "+i+" = "+mul*i+"<br>");
}


var fruits = ["apple", "banana", "mango", "orange", "strawberry", "pear"];
for( var i= 0 ; i <= 5; i++){
    document.write( fruits[i]+ "<br>");
}
for( var index= 0; index <=5; index++){
    document.write("Element at index "+index + " is "+ fruits[index]+ "<br>");
}


for(var i = 1; i <=15; i++){
    document.write(i + " , ");
}


for(var i = 15; i >=1; i--){
    document.write(i + " , ");
}


for (var i = 0 ; i<=20; i++){
if( i%2 == 0){
    document.write(i+ " , ");
}
}

for (var o = 0 ; o<=20; o++){
if( o%2 == 1){
    document.write(o+ " , ");
}    
}
    

for (var i = 2 ; i<=20; i++){
    if( i%2 == 0){
        document.write(i+ "k , ");
}
}

var a = ["cake","apple pie", "cookie", "chips", "patties"];
var b = prompt("Welcome to the ABC Bakery. What do you want to order sir/maam?");
var c = b.toLowerCase()
if(c === a[0]){
    document.write("cake is available at index 0 in our bakery");
}
else if(c === a[1]){
    document.write("apple pie is available at index 1 in our bakery");
}
else if(c === a[2]){
    document.write("cookie is available at index 2 in our bakery");
}
else if(c === a[3]){
    document.write("chips is available at index 3 in our bakery");
}
else if(c === a[4]){
    document.write("patties is available at index 4 in our bakery");
}
else {
    document.write(b + " is not available in our bakery");
}

var arr = [24, 53, 78, 91, 12];
var max = arr.reduce(function(a, b) {
    return Math.max(a, b);
});
document.write("Greatest Number is "+max+"<br>");

var arr = [24, 53, 78, 91, 12];
var min = arr.reduce(function(a, b) {
    return Math.min(a, b);
});
document.write("Lowest Number is "+min);


var a = 5;
for(var i = 0; i <=100; i++){
if(i%a == 0){
    document.write(i+ " , ");
}
}
*/