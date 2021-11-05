"use strict"

import { TicketPrizedAbstraction } from "./TicketPrizedAbstraction.mjs"

class SpanishTicketPrized extends TicketPrizedAbstraction {

    isTicketPrized(){
        return (this.isFullMatch() || this.isLastThreeNumbersMatch())
    }

    isFullMatch(){
        return (this.prizedNumber === this.ticket.ticketNumber)
    }

    isLastThreeNumbersMatch(){
        let lastThreePrized = this.prizedNumber.slice(-3)
        let lastThreeTicket = this.ticket.ticketNumber.slice(-3)

        return (lastThreePrized === lastThreeTicket)
    }
}

export { SpanishTicketPrized }