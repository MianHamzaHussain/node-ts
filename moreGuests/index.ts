const invitedGuests: string[] = ['Ali', 'Hamza', 'Tara'];
const oneIsNotComing: string = 'Hamza';
invitedGuests[invitedGuests.indexOf(oneIsNotComing)] = 'Babar';

invitedGuests.forEach((guest) => {
    console.log(`Hello ${guest}, you are invited to dinner!`);
}
);
console.log(`${oneIsNotComing} can't make it to dinner.`);
console.log('====================================');
console.log('We found a bigger dinner table, so we are inviting more guests.');

invitedGuests.unshift('Sara');
invitedGuests.splice(Math.floor(invitedGuests.length / 2), 0, 'Sana');
invitedGuests.push('Sarim');
console.log('====================================');
invitedGuests.forEach((guest) => {
    console.log(`Hello ${guest}, you are invited to the bigger dinner!`);
}
);