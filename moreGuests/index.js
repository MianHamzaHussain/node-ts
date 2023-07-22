var invitedGuests = ['Ali', 'Hamza', 'Tara'];
var oneIsNotComing = 'Hamza';
invitedGuests[invitedGuests.indexOf(oneIsNotComing)] = 'Babar';
invitedGuests.forEach(function (guest) {
    console.log("Hello ".concat(guest, ", you are invited to dinner!"));
});
console.log("".concat(oneIsNotComing, " can't make it to dinner."));
console.log('====================================');
console.log('We found a bigger dinner table, so we are inviting more guests.');
invitedGuests.unshift('Sara');
invitedGuests.splice(Math.floor(invitedGuests.length / 2), 0, 'Sana');
invitedGuests.push('Sarim');
console.log('====================================');
invitedGuests.forEach(function (guest) {
    console.log("Hello ".concat(guest, ", you are invited to the bigger dinner!"));
});
