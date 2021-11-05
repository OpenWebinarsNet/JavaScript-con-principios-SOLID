"use strict"

import { RollerInterface } from "./RollerInterface.mjs";

class NumberRoller extends RollerInterface{
    #numbers
    #numberFormatter
    #numberGenerator

    constructor(numberFormatter, numberGenetaror){
        super()
        this.#numbers = [];
        this.#numberFormatter = numberFormatter
        this.#numberGenerator = numberGenetaror
    }

    fillRollerWithValues(min, max, step){
        for (let number = min; number <= max; number += step) {
            this.#numbers.push(number)
        }
    }

    turnRoller(turnsNumber = 1){
        for (let turn = 0; turn < turnsNumber; turn++) {
            this.#numbers.sort(() => Math.random() - 0.5)
        }
    }

    extractAdward(){
        let randomNumber = this.#numberGenerator.generateRandom(MIN_TICKET_NUMBER, MAX_TICKET_NUMBER)
        return this.#numberFormatter.formatPaddingZeros(this.#numbers[randomNumber], TICKET_NUMBER_LENGHT)
    }
}

export {NumberRoller}