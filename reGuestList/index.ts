const invitedGuests: string[] = ['Ali', 'Hamza', 'Tara'];
const oneIsNotComing: string = 'Hamza';
invitedGuests[invitedGuests.indexOf(oneIsNotComing)] = 'Babar';

invitedGuests.forEach((guest) => {
    console.log(`Hello ${guest}, you are invited to dinner!`);
}
);
console.log(`${oneIsNotComing} can't make it to dinner.`);