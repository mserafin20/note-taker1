// Generates a unique ID for every note created

module.exports = () =>
    Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .toString(1);