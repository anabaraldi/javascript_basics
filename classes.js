for(var i = 0; i<9; i ++) { console.log(i); }

// transform < > in harmless strings
var html = '<script src="http://hackyourwebsite.com/eviljavascript.js"></script>';

var charEscape = function(_html) {
    var newHTML = _html;
    // How will you make sure that newHTML doesn't contain any < or > ?
    // Your code goes here!
    newHTML = newHTML.replace(/</g, "");
    newHTML = newHTML.replace(/>/g, "");

    // Don't delete this line!
    return newHTML;
};

// Did your code work? The line below will tell you!
charEscape(html);

// String Manipulation #1

var s = "audacity";

var udacityizer = function(s) {
    // Right now, the variable s === "audacity"
    // Manipulate s to make it equal to "Udacity"
    // Your code goes here!
    s = s.slice(1);
    s = s.replace("u", "U");

    return s;
};

// Did your code work? The line below will tell you!
udacityizer(s);

// String Manipulation #2

var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;
    // Your code goes here!
    finalName = oldName.split(" ");

    var first = finalName[0].toLowerCase();
	first = first[0].toUpperCase() + first.slice(1);

    var second = finalName[1].toUpperCase();

	finalName = first + " " + second;

    // Don't delete this line!
    return finalName;
};

// Did your code work? The line below will tell you!
nameChanger(name);

// Object Notation
// Literal notation

var bio = {
	"name" : name,
	"role" : role,
	"contactInfo" : contactInfo,
	"welcomeMessage" : welcomeMessage,
	"pictureURL" : pictureURL,
	"skills" : skills
};

// dot notation
var work = {};
work.position = "Economist";
work.employer = "Vérios Investimentos";
work.years = "1,5 years";
work.city = "São Paulo";

// brackets notation
var education = {};

education["name"] = "Unicamp";
education["years"] = "5 years";
education["city"] = "Campinas";

// json notation

var education = {
	"schools" : [
	{
		"name" : "Unicamp",
		"city" : "Campinas"
	},
	{
		"name" : "John Hopkins",
		"city" : "Coursera - Internet"
	}
	]
};

// example of while loop, it will only stops when cameron is no long a course dev or we have a max
var cameron = {};
cameron.job = "course dev";

var courses = 0;
while(cameron.job === "course dev") {
	makeCourse();
	courses = courses + 1;
	if(courses === 10) {
		cameron.job === "learning specialist";
	}
}


