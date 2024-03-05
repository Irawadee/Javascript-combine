// Exercise Time!

// 1) Create three new variables:
//    - A variable that stores the name of an online course of your choice
//    - A variable that stores the price of that course
//    - A variable that stores the three main goals that you have, when taking this course
// 2) Output ("alert") the three variable values
// 3) Try "grouping" the three variables together and still output their values thereafter
// 4) Also output the second element in your "main goals" variable
// 5) Add a custom command that does the following:
//    - Use your "main goals" variable and access an element by its identifier
//    - The concrete identifier value should be dynamic / flexible
//      (i.e. the command can be executed for different identifier)
//    - The "main goals" variable should also be dynamic: The command should work
//      with ANY list of values
//    - The custom command should provide the accessed value (i.e. the list element)
// 6) Execute your custom command from (5) and output ("alert") the result

//1.
let onlineCourse = "Web Development";
let price = 15;
let goals = ["be developer", "be proud", "be concentrated"];

//2.+//3.
let showValue = {
  onlineCourse: "Web Development",
  price: 15,
  goals: ["be developer", "be proud", "be concentrated"],
};
alert(showValue.onlineCourse);
alert(showValue.price);
alert(showValue.goals);

//4.
alert(goals[2]);

//5.

function showList(array, arrayIndex) {
  let arrayElement = array[arrayIndex];
  return arrayElement;
}

//6.

let firstGoal = showList(goals, 1);
alert(firstGoal);
