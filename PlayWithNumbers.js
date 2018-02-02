/*Given a positive integer n written as abcd... (a, b, c, d... being digits) 
and a positive integer p we want to find a positive integer k, if it exists, 
such as the sum of the digits of n taken to the successive powers of p is equal to k * n. 
In other words:
Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k
If it is the case we will return k, if not return -1.
Note: n, p will always be given as strictly positive integers. */

// Constructor for the method
var PlayWithNumbers = function(number, power){
    this.number = number;
    this.power = power;
}
//Prototype built from the constructor
PlayWithNumbers.prototype.digPow = function (no, pow) {
    return 1
}

module.exports = PlayWithNumbers;
