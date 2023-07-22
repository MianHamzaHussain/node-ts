let usernames: string[] = ['admin', 'Eric', 'John', 'Jane', 'Alice'];

if (usernames.length === 0) {
  console.log("We need to find some users!");
} else {
  for (const username of usernames) {
    if (username === 'admin') {
      console.log(`Hello ${username}, would you like to see a status report?`);
    } else {
      console.log(`Hello ${username}, thank you for logging in again.`);
    }
  }
}

// Clear the array to test the message when the list is empty
usernames = [];

if (usernames.length === 0) {
  console.log("We need to find some users!");
} else {
  for (const username of usernames) {
    if (username === 'admin') {
      console.log(`Hello ${username}, would you like to see a status report?`);
    } else {
      console.log(`Hello ${username}, thank you for logging in again.`);
    }
  }
}
