const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
    it ('Returns empty string if empty string was provided', () => {
        expect(wrap("", 10)).to.equal("");
    });
    it ('It should check for number of characters in each line is not greater than maxLen', ()=> {
        expect(wrap("How tall are you?", 10)).to.equal("How tall\nare you?");
    })
});