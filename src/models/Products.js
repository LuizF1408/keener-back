function User({
    type,
    name,
    value,
    cod,

} = {}) {
    this.type = type;
    this.name = name;
    this.value = value;
    this.cod = cod
}

User.prototype.view = function () {
    return {
        type: this.type,
        name: this.name,
        value: this.value,
        code: this.cod,

    };
};

module.exports = User;
