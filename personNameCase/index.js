var personName = 'ahmad asghar';
var upperCaseName = personName.toUpperCase();
var lowerCaseName = personName.toLowerCase();
var titleCase = personName.split(" ").map(function (l) { return l[0].toUpperCase() + l.substr(1); }).join(" ");
console.log('====================================');
console.log("Uppercase:", upperCaseName);
console.log("Lowercase:", lowerCaseName);
console.log("TitleCase:", titleCase);
console.log('====================================');
