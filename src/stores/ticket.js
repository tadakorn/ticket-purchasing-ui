import { defineStore } from "pinia";

export const useTicketStore = defineStore("ticket", {
  state: () => ({
    currentTicket: {},
    ticketList: [
      {
        img: "atlanta",
        title: "Atlata Hawks",
        info: "31 Events",
        id: 1,
        detail:
          "Verified Resale Ticket Upper Bowl Seating Sec 137, Row 19, Seats 17-18",
        priceTicket: 24.0,
        seat: 0,
        priceTotalSeat: 0,
        totalSeat: 0,
      },
      {
        img: "indiana",
        title: "Indiana Pacers",
        info: "30 Events",
        id: 2,
        detail:
          "Verified Resale Ticket Upper Bowl Seating Sec 137, Row 19, Seats 17-18",
        priceTicket: 24.0,
        seat: 0,
        priceTotalSeat: 0,
        totalSeat: 0,
      },
      {
        img: "charlotte",
        title: "Charlott Hornets",
        info: "30 Events",
        id: 3,
        detail:
          "Verified Resale Ticket Upper Bowl Seating Sec 137, Row 19, Seats 17-18",
        priceTicket: 24.0,
        seat: 0,
        priceTotalSeat: 0,
        totalSeat: 0,
      },
      {
        img: "utah",
        title: "Utah Jazz",
        info: "29 Events",
        id: 4,
        detail:
          "Verified Resale Ticket Upper Bowl Seating Sec 137, Row 19, Seats 17-18",
        priceTicket: 24.0,
        seat: 0,
        priceTotalSeat: 0,
        totalSeat: 0,
      },
      {
        img: "memphis",
        title: "Memphis Grizzlies",
        info: "31 Events",
        id: 5,
        detail:
          "Verified Resale Ticket Upper Bowl Seating Sec 137, Row 19, Seats 17-18",
        priceTicket: 24.0,
        seat: 0,
        priceTotalSeat: 0,
        totalSeat: 0,
      },
      {
        img: "boston",
        title: "Boston Bruins",
        info: "31 Events",
        id: 6,
        detail:
          "Verified Resale Ticket Upper Bowl Seating Sec 137, Row 19, Seats 17-18",
        priceTicket: 24.0,
        seat: 0,
        priceTotalSeat: 0,
        totalSeat: 0,
      },
      {
        img: "tampa",
        title: "Tampa Bay Lighting",
        info: "34 Events",
        id: 7,
        detail:
          "Verified Resale Ticket Upper Bowl Seating Sec 137, Row 19, Seats 17-18",
        priceTicket: 24.0,
        seat: 0,
        priceTotalSeat: 0,
        totalSeat: 0,
      },
      {
        img: "louis",
        title: "St. Louis Blues",
        info: "31 Events",
        id: 8,
        detail:
          "Verified Resale Ticket Upper Bowl Seating Sec 137, Row 19, Seats 17-18",
        priceTicket: 24.0,
        seat: 0,
        priceTotalSeat: 0,
        totalSeat: 0,
      },
    ],
  }),
  actions: {
    openModal(ticket) {
      this.currentTicket = ticket;
    },
  },
});
