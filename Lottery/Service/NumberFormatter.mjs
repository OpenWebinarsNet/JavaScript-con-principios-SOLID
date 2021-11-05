"use strict"

class NumberFormatter{

    formatPaddingZeros(value, numberLenght){
        let num = value.toString();
        return num.padStart(numberLenght, '0')
    }
}

export {NumberFormatter}