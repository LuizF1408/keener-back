function User({
    type,
    name,
    value,
    cod,
    qtd
    

} = {}) {
    this.type = type;
    this.name = name;
    this.value = value;
    this.cod = cod
    this.qtd = qtd
   
}

User.prototype.view = function () {
    return {
        type: this.type,
        name: this.name,
        value: this.value,
        code: this.cod,
        qtd: this.qtd
        

    };
};

module.exports = User;
