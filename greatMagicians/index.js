function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    var greatMagicians = magicians.map(function (magician) { return "".concat(magician, " the Great"); });
    return greatMagicians;
}
var magicians = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
var greatMagicians = make_great(magicians);
console.log("Original magicians:");
show_magicians(magicians);
console.log("Great magicians:");
show_magicians(greatMagicians);
