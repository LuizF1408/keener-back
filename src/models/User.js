function User({
    id,
    username,
    password,

} = {}) {
    this.id = id;
    this.username = username;
    this.password = password;
}

User.prototype.view = function () {
    return {
        id: this.id,
        username: this.name,
        email: this.email,

    };
};

module.exports = User;
