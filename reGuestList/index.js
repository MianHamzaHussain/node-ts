var invitedGuests = ['Ali', 'Hamza', 'Tara'];
var oneIsNotComing = 'Hamza';
invitedGuests[invitedGuests.indexOf(oneIsNotComing)] = 'Babar';
invitedGuests.forEach(function (guest) {
    console.log("Hello ".concat(guest, ", you are invited to dinner!"));
});
console.log("".concat(oneIsNotComing, " can't make it to dinner."));
