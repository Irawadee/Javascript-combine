let greetingText = "Hi, I'm Ira";
let ages = 29;
let hobby = ["swimming", "walking", "cardio"];
let job = { title: "Developer", Place: "New York", Salary: 50000 };
ages = 42;
alert(hobby[0]);
alert(job.Place);

let adultYears;

function calculateAdultAges(userAges) {
  return userAges - 18;
}
adultYears = calculateAdultAges(ages);

alert(adultYears);
