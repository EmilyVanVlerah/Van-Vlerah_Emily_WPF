// Emily Van Vlerah
// December 7th, 2013
// Assignment: Conditionals - Conditionals_Industry

//Ultimately, I came to idea of adding different factors of the life of a college student. And since we are working up to our Industry I figured I used some of these factors.

//I choose to use the 20 commit policey for each major assignment we have in WPF
//I wasn't sure what I could use for my Industry but this class is on the way to my Industry

alert("Welcome to the Commit factor.")

var commitPolicy = 20;

var commits = prompt("How many commits did you make on your assignment?");

//normally it would look something like this
/*
if(commints >= commitPolicy){
	alert("Good job, you didn't get a zero on the assignment."");
}else{
	alert("Sorry, you may have recieved a zero on your assignment.");
}*/

answer = (commits >= commitPolicy) ? "Good job, you didn't get a zero on the assignment." : "Sorry, you might want to find more to commit to your repository.";
alert(answer);

alert("Welcome to the next factor for grades.")

//I'm not sure how everyone's grading level is. To me I need to work harder if it's a B.
//this is to determine how someone did on their last class grade.
var lowGradeLevel = 79

var passingClass = prompt("What was you grade for you last class?");

//normally it would look something like this
/*
if(passingClass >= lowGradeLevel){
	alert("Good job, you passed another class."");
}else{
	alert("Sorry, you may have to work harder on the next class.");
}*/

(passingClass >= lowGradeLevel) ? alert("Good job, you passed another class.") : alert("Sorry, you may have to work harder on the next class.");

alert("If you wish to recalculate, please refresh the page.");

//I wish to find out how to loop the calculators so the user doesn't have to refresh a page to recalculate
//This would help my future plans I have for more coding this winter break

