//1
//Write a variable and call it dogQuestion and have the value of "But what if I like dogs more than cats?"
//use the .length method to determine the length of the string value. 
//1 Code Answer
let dogQuestion = "But what if I like dogs more than cats?"
console.log(dogQuestion.length)
//1 Result Answer
39



//2
//Write a variable and call it noms and have the value of the name any type of snack you like, 
//use the .length method to determine the length of the string value. 
//2 Code Answer
let noms = "chips"
console.log(noms.length)

//2 Result Answer
5


//3 
//Replace "no" values in the "I have no interest in Boba" in string using the correct method.
//3 Code Answer
let originalStatement = "I have no interest in Boba";
let newStatement = originalStatement.replace("no", "a lot of");

console.log(newStatement);

//3 Result Answer:
// I have a lot of interest in Boba


//4
//Trim this string "Tell me whyyyy!                 ".
//4 Code Answer
let desperateQuestion = "Tell me whyyyy!                 ";

console.log(desperateQuestion.trim());
//4 Result Answer
// Tell me whyyyy!

//5
// Convert 1400 into a string.
//5 Code Answer:
const changeFormat = 1400;
console.log(changeFormat.toString());


//5 Result Answer:
// 1400


//6
//Convert the boolean true and false into integers
//6 Code Answer:
let blue = Number(true);
console.log(blue);
//1
let green = false;
console.log(Number(green));
//0


//7
// Convert the string "02130" into an integer
//7 Code Answer:

//7 Result Answer:
let zipCode = "02130";

console.log(Number(zipCode));


//8
//Search the string "Fighting Evil by Moonlight" for "Moonlight" content using the correct method.
//8 Code Answer:
let title = "Fighting Evil by Moonlight";

console.log(title.includes("Moonlight"));
//8 Result Answer:
true


//9
//Concatenate the following "I love"+ favorite food + Favorite drink "!"
//9 Code Answer:
let sentenceBeginning = "I love";
let favoriteFood = "sushi";
let favoriteDrink = "boba";

console.log(sentenceBeginning.concat(" ", favoriteFood, " and ", favoriteDrink, "!"));


//9 Result Answer:
// I love sushi and boba!

//10
//Write a variable and call it dogQuestion and have the value of "But what if I like dogs more than cats?", 
//use the .length method to determine the length of the string value. 

//10 Code Answer:
// see question 1
//10 Result Answer:


//11
//Print to the console the smallest number in this list: 85, -3, 5, 93.2, -42.4 (list of numbers must be passed in this order)
//(Hint: Which Math method can you use to do this?)

//11 Code Answer:
console.log(Math.min(85, -3, 5, 93.2, -42.4));
//11 Result Answer:
-42.4

//12
//Print to the console a random number between 1 to 10.

//12 Code Answer:
console.log(Math.floor(Math.random() * (10 - 1 + 1) + 1));

//12 Result Answer:
3

//13
//Print to the console a random number between 14 to 21.

//13 Code Answer:
console.log(Math.floor(Math.random() * (21 - 14 + 1) + 14));
//13 Result Answer:
18


//14 Challenge! (Optional)
//Print to the console the current date in the format of "MM/DD/YYYY" using Date object methods you learned 

//14 Code Answer:
let today = new Date().toLocaleDateString()
console.log(today);

//14 Result Answer:
3/25/2021