const current_users: string[] = ['john', 'eric', 'alice', 'mike', 'jane'];
const new_users: string[] = ['Mike', 'Jane', 'peter', 'david', 'John'];

for (const new_username of new_users) {
  const isUsernameTaken = current_users.some((current_username) => current_username.toLowerCase() === new_username.toLowerCase());

  if (isUsernameTaken) {
    console.log(`Sorry, the username '${new_username}' has already been used. Please enter a new username.`);
  } else {
    console.log(`Congratulations! The username '${new_username}' is available.`);
  }
}
