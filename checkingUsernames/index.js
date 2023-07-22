var current_users = ['john', 'eric', 'alice', 'mike', 'jane'];
var new_users = ['Mike', 'Jane', 'peter', 'david', 'John'];
var _loop_1 = function (new_username) {
    var isUsernameTaken = current_users.some(function (current_username) { return current_username.toLowerCase() === new_username.toLowerCase(); });
    if (isUsernameTaken) {
        console.log("Sorry, the username '".concat(new_username, "' has already been used. Please enter a new username."));
    }
    else {
        console.log("Congratulations! The username '".concat(new_username, "' is available."));
    }
};
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_username = new_users_1[_i];
    _loop_1(new_username);
}
