// ------------------CHAPTER 3-----------------------

// task01
// var age = 22;
// alert("I am "+ age +" years old.");

// task02
// var visit = 14;
// alert("You have visited this website "+ visit + " times.");

// task03
// var birthYear = 1999;
// document.write("My birth year is "+ birthYear + "<br>");
// document.writeln("Data type of my declared variable is "+ typeof(birthYear));

// task04
// var visitorName = "Hamza";
// var productTitle =  "T-shirts";
// var productQuantity = 10;

// document.write("<b>" + visitorName + "</b>" + " ordered " + "<b>" + productQuantity + "</b>" + " " + "<b>" + productTitle + "</b>" + " Brands clothing store.")


// ------------------CHAPTER 4-----------------------

// task01
// var name, price, year;

// task02 legal
// var shirtPrice, shirt_price, $shirtPrice, shirt4Price, shirt_Price;

// task02 illegal
// var 1shirtprice, alert, shirt-price, #shirtprice, shirt price;

// task03
// document.write("<h1>Rules for naming JS variables</h1>")
// document.write("Variable names can only contain, numbers, $ and _. For example : <b> $my_1stVariable </b> <br>");
// document.write("Variable must begin with a letter, $ or _. For example : <b> $name, _name or name </b> <br>");
// document.write("Variable names are case sensitive <br>");
// document.write("Variable name should not be JS keyword");

// ------------------CHAPTER 5-----------------------

// task01
// var num1 = 67;
// var num2 = 30;
// var result = num1 + num2;
// document.write("Sum of "+ num1 + " "+ num2 + " is " + result);

// task02
// var num1 = 67;
// var num2 = 30;
// var result = num1 - num2;
// document.write("Subtraction of "+ num1 + " "+ num2 + " is " + result);

// var num1 = 67;
// var num2 = 30;
// var result = num1 * num2;
// document.write("Multiplication of "+ num1 + " "+ num2 + " is " + result);

// var num1 = 67;
// var num2 = 30;
// var result = num1 / num2;
// document.write("Division of "+ num1 + " "+ num2 + " is " + result);

// var num1 = 67;
// var num2 = 30;
// var result = num1 % num2;
// document.write("Modulus of "+ num1 + " "+ num2 + " is " + result);

// task03
// var value;
// document.write("Value after variable declaration is: " + value + "<br>");

// value = 5;
// document.write("Initial value: " + value + "<br>");

// value++;
// document.write("Value after increment is: " + value + "<br>");

// value = value + 7;
// document.write("Value after addition is: " + value + "<br>");

// value--;
// document.write("Value after decrement is: " + value + "<br>");

// value = value % 3;
// document.write("The remainder is: " + value + "<br>");

// task04
// var ticketPrice = 600;
// document.write("Total cost to buy 5 tictets to a movie is " + 5*ticketPrice + "PKR")

// task05
// var num = 4;
// document.write("Table of 4 <br>");
// document.write("4 * 1 = " + num * 1 + "<br>");
// document.write("4 * 2 = " + num * 2 + "<br>");
// document.write("4 * 3 = " + num * 3 + "<br>");
// document.write("4 * 4 = " + num * 4 + "<br>");
// document.write("4 * 5 = " + num * 5 + "<br>");
// document.write("4 * 6 = " + num * 6 + "<br>");
// document.write("4 * 7 = " + num * 7 + "<br>");
// document.write("4 * 8 = " + num * 8 + "<br>");
// document.write("4 * 9 = " + num * 9 + "<br>");
// document.write("4 * 10 = " + num * 10 + "<br>");

// task06
// var celsius = 25;
// var celToFer =  (celsius * 9 / 5) + 32;
// document.write(celsius + "°C is " + celToFer + "°F <br>");

// var fahrenheit = 70;
// var ferToCel =  (fahrenheit - 32) * 5 / 9;
// document.write(fahrenheit + "°F is " + ferToCel + "°C");

// task07
// var item1 = 650;
// var item2 = 100;
// var quantityItem1 = 3;
// var quantityItem2 = 7;
// var shippingCost = 100;

// document.write("Price of item 1 is: " + item1 + "<br>");
// document.write("Quantity of item 1 is: " + quantityItem1 + "<br>");
// document.write("Price of item 2 is: " + item2 + "<br>");
// document.write("Quantity of item 2 is: " + quantityItem2 + "<br>");
// document.write("Shipping charges is: " + shippingCost + "<br> <br>");

// var total = (item1 * quantityItem1) + (item2 * quantityItem2) + shippingCost;
// document.write("Total cost of your order is: " + total + "<br>");


// task08
// var totalMarks = 980;
// var obtainMarks = 804;

// var percentage = (obtainMarks/totalMarks) * 100;

// document.write("Total marks: " + totalMarks + "<br>");
// document.write("Marks obtained: " + obtainMarks + "<br>" );
// document.write("Percentage: " + percentage + "% <br>");

// task09
// document.write("<h1>Currency in PKR </h1>");
// var dollar = 10;
// var usToPak = 104.80;

// var riyal = 25;
// var riyalToPak = 28;

// var totalPkr = (10 * 104.80) + (25 * 28);
// document.write("Total Currency in PKR: "+ totalPkr);

// task10
// var num = 30;
// num = ((num + 5) *10) /2;

// task11
// document.write("<h1>Age Calculator</h1>");

// var currentYear = 2022;
// var birthYear = 1999;

// var age = currentYear - birthYear;

// document.write("Your Age is: " + age);

// task12
// document.write("<h1>The Geometrizer</h1>");

// var radius = 20;
// var circumference = 2 * 3.142 * radius;
// var area = 3.142 * (radius * radius);

// document.write("Radius of a circle: " + radius + "<br>");
// document.write("The circumference is: " + circumference + "<br>");
// document.write("The area is: " + area + "<br>");

// task13
// document.write("<h1>The Lifetime Supply Calculator</h1>");

// var favSnack = "Doritos";
// var currentAge = 22;
// var maxAge = 70;
// var amount = 4;

// var yearsLeft = maxAge - currentAge;

// document.write("Favourite Snack: " + favSnack +"<br>");
// document.write("Current age: " + currentAge +"<br>");
// document.write("Estimated Maximum age: " + maxAge +"<br>");
// document.write("Amount of snack per day: " + amount +"<br>");
// document.write("You will need " + yearsLeft*amount +" " + favSnack + "to last you until the ripe old age of " + maxAge);


// ------------------CHAPTER 6-----------------------

// task01
// var a = 20;
// document.write("Result: <br> The value a is: " + a + "<br> ---------------------------------<br><br>" );

// document.write("The value of ++a is: " + ++a + "<br> Now the value of a is: " + a + "<br> <br>");
// document.write("The value of a++ is: " + a++ + "<br> Now the value of a is: " + a + "<br><br>");
// document.write("The value of --a is: " + --a + "<br> Now the value of a is: " + a + "<br><br>");
// document.write("The value of a-- is: " + a-- + "<br> Now the value of a is: " + a + "<br><br>");


// task02
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// document.write("a is: " + a + "<br>b is: " + b + "<br>result is: " + result + "<br><br>");

// task03
//  var userName = prompt("Enter your name");
//  alert("Welcome " + userName);

// task05
// var num = prompt("Enter Number: ", 5);
// document.write("<h1>Table of " + num + "</h1><br>");

// document.write(num + " * " + " 1 = " + num*1 +"<br>"  );
// document.write(num + " * " + " 2 = " + num*2 +"<br>"  );
// document.write(num + " * " + " 3 = " + num*3 +"<br>"  );
// document.write(num + " * " + " 4 = " + num*4 +"<br>"  );
// document.write(num + " * " + " 5 = " + num*5 +"<br>"  );
// document.write(num + " * " + " 6 = " + num*6 +"<br>"  );
// document.write(num + " * " + " 7 = " + num*7 +"<br>"  );
// document.write(num + " * " + " 8 = " + num*8 +"<br>"  );
// document.write(num + " * " + " 9 = " + num*9 +"<br>"  );
// document.write(num + " * " + " 10 = " + num*10 +"<br>"  );

// task06
var subject1 = prompt("Enter name of Subject");
var subject2 = prompt("Enter name of Subject");
var subject3 = prompt("Enter name of Subject");

var maxMarks = 100;
var totalMarks = maxMarks*3;

var obtainMarksSubject1 = prompt("Enter obtained marks of " + subject1 + " out of 100 ");
var obtainMarksSubject2 = prompt("Enter obtained marks of " + subject2 + " out of 100 ");
var obtainMarksSubject3 = prompt("Enter obtained marks of " + subject3 + " out of 100 ");
var totalObtainMarks = ((parseFloat(obtainMarksSubject1)) + (parseFloat(obtainMarksSubject2)) + (parseFloat(obtainMarksSubject3)));

var percentageSubject1 = (obtainMarksSubject1/maxMarks)*100;
var percentageSubject2 = (obtainMarksSubject2/maxMarks)*100;
var percentageSubject3 = (obtainMarksSubject3/maxMarks)*100;
var totalpercentage = (totalObtainMarks/totalMarks) *100;


document.write("<table border = 1 cellpadding = 5 cellspacing = 0> <tr><th>Subject</th> <th>Total Marks</th> <th>Obtained Marks</th> <th>Percentage</th></tr> ");
document.write("<tr><td>" + subject1 + "</td>" +  "<td>" + maxMarks + "</td>" + "<td>" + obtainMarksSubject1 +"</td>" + "<td>" + percentageSubject1 + "%</td>"  );
document.write("<tr><td>" + subject2 + "</td>" +  "<td>" + maxMarks + "</td>" + "<td>" + obtainMarksSubject2 +"</td>" + "<td>" + percentageSubject2 + "%</td>" );
document.write("<tr><td>" + subject3 + "</td>" +  "<td>" + maxMarks + "</td>" + "<td>" + obtainMarksSubject3 +"</td>" + "<td>" + percentageSubject3 + "%</td>"  );
document.write("<tr><td> <b>Total</b> </td>" +  "<td>" + totalMarks + "</td>" + "<td>" + totalObtainMarks +"</td>" + "<td>" + totalpercentage + "%</td>" + "</table> <br> ");
