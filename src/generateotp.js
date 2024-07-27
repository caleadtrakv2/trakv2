const generateotp = function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    const tempotp =  Math.floor(Math.random() * (max - min + 1)) + min;
    return tempotp;

};

module.exports = generateotp;