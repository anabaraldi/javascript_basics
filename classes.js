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
