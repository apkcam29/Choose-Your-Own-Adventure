let spacing = ("     ") // annoying but necessary..... until I find a different way to space in the console at least.
console.log(spacing);;
console.log(spacing);
console.log(spacing);
const prompt = require('prompt-sync')();
const userName = prompt('                                   What is your name, stranger? ');
const playerEmotions = []
function valueSaying(salary,confidence,skills){
   console.log("Your new salary is now ","$",salary )
   console.log(`Your confidence is now `,'%',confidence)
   console.log(`and your coding skills are at `,'%',skills)
}
let userValues = {
   userSalary:50000,
   userConfidence :25,
   codingSkills:50
}


console.log(spacing);
const WelcomeMessage = () => {
   console.log(`  So ${userName}, you've decided to take the leap of faith and start pursuing your dream as a Full Stack Developer! `);
   console.log(spacing);
   console.log(`You've started your very first job at a tech start up and have finally started venturing out into the great beyond...`);
   console.log(spacing);
   console.log(`You're current salary is $${userValues.userSalary}, your confidence is ${userValues.userConfidence}% and your coding skills are at ${userValues.codingSkills}%`);
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

console.log("Your on your sixth month of working at your new position, your overwhelmed and are under performing.");
console.log(spacing)
console.log("Your manager notices your behavior and calls you into the office to address these issues.");
console.log(spacing)
console.log("The conversation isn't to your liking and feel a bit offended, how do we respond to his suggestions?");
console.log(spacing)
const decisionOne = prompt('                   Do you [a], refuse their criticism and lash out. OR [b],receive their criticism and learn from your mistakes');
console.log(spacing)
if (decisionOne === "a") {
   console.log("Your FIRED!!")
    process.exit()
} if (decisionOne === "b") {
   console.log("Great! Your manager notices your improvement since the talk and wants to give you a raise.") 
   console.log(spacing)
   valueSaying(userValues.userSalary*2,userValues.userConfidence*2,userValues.codingSkills+25)
}
console.log(spacing)
console.log("Keep up the good work! Your on your way to becoming a strong developer!")
console.log(spacing)
const scenarioTwo = prompt('                                   Press [n] for your next scenario.');
console.log(spacing)
console.log("Its now been four years with this start up company and your looking to expand your horizons.")
console.log(spacing)
console.log("You have obtained skills that will better your resume and help land your dream job, you start applying and hope for the best.")
console.log(spacing)
console.log("2 months later you're on your way to work, checking your emails and see that you got two job offers! Both from companies that you admire.")
console.log(spacing)
console.log("These companies are, Amazon and Uber! But which one do you pick?!")
console.log(spacing)
const companyPick = prompt('                   Select [a] for Amazon and [u] for uber.');
console.log(spacing)
if (companyPick === "a") {
   console.log("Good choice!")
} if (companyPick === "u") {
   console.log("Cant go wrong with uber!")
}
console.log(spacing)
console.log("So...Turns out that your new company really values your work and knowledge and want to compensate you accordingly! ")
console.log(spacing)
valueSaying(userValues.userSalary*4,userValues.userConfidence*4,userValues.codingSkills+50)
console.log(spacing)
console.log("CONGRATULATIONS! YOU MADE IT TO YOUR GOAL IN LIFE! Whats next for the young dev?!")

























































console.log(spacing);
console.log(spacing);
console.log(spacing);
