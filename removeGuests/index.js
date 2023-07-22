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
// You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
console.log('====================================');
console.log('We can only invite two people to dinner.');
console.log('====================================');
var newInvitedGuests = invitedGuests.splice(0, invitedGuests.length - 2);
newInvitedGuests.forEach(function (guest) {
    console.log("Sorry ".concat(guest, ", we can't invite you to dinner."));
});
console.log('====================================');
invitedGuests.forEach(function (guest) {
    console.log("Hello ".concat(guest, ", you are still invited to dinner!"));
});
invitedGuests.splice(0, invitedGuests.length);
console.log('====================================');
console.log('Empty List', invitedGuests);
console.log('====================================');
