function division (numero1, numero2) {
    if (numero2 == 0) {
        return "El denominador es 0"
    }
    return numero1 / numero2
}

module.exports = division;