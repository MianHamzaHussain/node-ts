const personName: string = 'ahmad asghar';
const upperCaseName: string = personName.toUpperCase();
const lowerCaseName: string = personName.toLowerCase();
const titleCase = personName
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

console.log('====================================');
console.log("Uppercase:", upperCaseName);
console.log("Lowercase:", lowerCaseName);
console.log("TitleCase:", titleCase);
console.log('====================================');