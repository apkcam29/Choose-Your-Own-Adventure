let spacing = ("     ") // annoying but necessary..... until I find a different way to space in the console at least.
console.log(spacing);;
console.log(spacing);
console.log(spacing);
const prompt = require('prompt-sync')();
const userName = prompt('                                   What is your name, stranger? ');
const playerEmotions = []

let userSalary = 50000;
let userConfidence = 25;
let codingSkills = 50;


console.log(spacing);
const WelcomeMessage = () => {
   console.log(`  So ${userName}, you've decided to take the leap of faith and start pursuing your dream as a Full Stack Developer! `);
   console.log(spacing);
   console.log(`You've started your very first job at a tech start up and have finally started venturing out into the great beyond...`);
   console.log(spacing);
   console.log(`You're current salary is $${userSalary}, your confidence is ${userConfidence}% and your coding skills are at ${codingSkills}%`);
   console.log(spacing);
   console.log('I think we can achieve much more than this, dont you agree?');
   console.log(spacing)
}
WelcomeMessage();

const playerAttitude = prompt('                                   Press [a] to start your journey, press [b] to exit. ');
console.log(spacing);

if (playerAttitude === "a") {
   console.log('Well then! Lets begin!!')
} if (playerAttitude === "b") {
   console.log("Somebody wasn't ready.....smh.")
   process.exit()
} 
console.log(spacing);
const onToNextScenario = prompt('                                   Press [n] for first scenario');
console.log(spacing)

console.log("Your on your third month of working at your new position, your overwhelmed and are under performing.");
console.log(spacing)
console.log("Your manager notices your behavior and calls you into the office to address these issues.");
console.log(spacing)
console.log("The conversation isn't to your liking and feel a bit offended, how do we respond to his suggestions?");
console.log(spacing)
const decisionOne = prompt('                             Do you [a], refuse their criticism and lash out. OR [b],receive their criticism and learn from your mistakes');
console.log(spacing)
if (decisionOne === "a") {
   console.log("Your FIRED!!")
    process.exit()
} if (decisionOne === "b") {
   console.log("Great! Your manager notices your improvement since the talk and wants to give you a raise.") 
}
console.log(spacing)



























































console.log(spacing);
console.log(spacing);
console.log(spacing);
