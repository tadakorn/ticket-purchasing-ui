import { defineStore } from "pinia";

export const useTicketStore = defineStore("ticket", {
  state: () => ({
    modePaymentForm: "add",
    showPaymentForm: false,
    showOrderExpiredModal: false,
    orderExpiredTimeout: 0,
    orderExpiredIntervalId: null,
    hasAgreeTermOfUse: false,
    showAlertCreditCard: false,
    creditCardList: [],
    creditCardSelected: null,
    currentCreditCard: null,
    currentTicket: {
      img: "",
      title: "",
      info: "",
      id: 0,
      detail: "",
      priceTicket: 0,
      serviceFees: 0,
      orderFees: 0,
      opponentTitle: "",
    },
    seat: 1,
    ticketList: [
      {
        img: "atlanta",
        title: "Atlanta Hawks",
        info: "31 Events",
        id: 1,
        detail: "Upper Level Sec 202, Row Q, Seats 6-7",
        priceTicket: 36.0,
        serviceFees: 2.0,
        orderFees: 2.95,
        opponentTitle: "Atlanta Hawks vs. San Antonio Spurs",
      },
      {
        img: "indiana",
        title: "Indiana Pacers",
        info: "30 Events",
        id: 2,
        detail: "Balcony Sec 206, Row 19, Seats 15-16",
        priceTicket: 24.0,
        serviceFees: 2.04,
        orderFees: 2.05,
        opponentTitle: "Indiana Pacers vs. San Antonio Spurs",
      },
      {
        img: "charlotte",
        title: "Charlott Hornets",
        info: "30 Events",
        id: 3,
        detail: "Upper Bowl Seating Sec 124, Row 17",
        priceTicket: 38.0,
        serviceFees: 3.04,
        orderFees: 1.95,
        opponentTitle: "Charlott Hornets vs. San Antonio Spurs",
      },
      {
        img: "utah",
        title: "Utah Jazz",
        info: "29 Events",
        id: 4,
        detail: " Upper Bowl Seating Sec 137, Row 19, Seats 17-18",
        priceTicket: 35.0,
        serviceFees: 2.05,
        orderFees: 2.0,
        opponentTitle: "Utah Jazz vs. San Antonio Spurs",
      },
      {
        img: "memphis",
        title: "Memphis Grizzlies",
        info: "31 Events",
        id: 5,
        detail: "Terrace Level Sec 229, Row J, Seats 2-3",
        priceTicket: 39.0,
        serviceFees: 3.09,
        orderFees: 2.03,
        opponentTitle: "Memphis Grizzlies vs. San Antonio Spurs",
      },
      {
        img: "boston",
        title: "Boston Bruins",
        info: "31 Events",
        id: 6,
        detail: " Upper Bowl Seating Sec 137, Row 19, Seats 17-18",
        priceTicket: 32.0,
        serviceFees: 4.04,
        orderFees: 2.08,
        opponentTitle: "Boston Bruins vs. San Antonio Spurs",
      },
      {
        img: "tampa",
        title: "Tampa Bay Lighting",
        info: "34 Events",
        id: 7,
        detail: " Upper Bowl Seating Sec 137, Row 19, Seats 17-18",
        priceTicket: 26.0,
        serviceFees: 1.05,
        orderFees: 2.04,
        opponentTitle: "Tampa Bay Lighting vs. San Antonio Spurs",
      },
      {
        img: "louis",
        title: "St. Louis Blues",
        info: "31 Events",
        id: 8,
        detail: " Upper Bowl Seating Sec 137, Row 19, Seats 17-18",
        priceTicket: 29.0,
        serviceFees: 2.06,
        orderFees: 2.96,
        opponentTitle: "St. Louis Blues vs. San Antonio Spurs",
      },
    ],
  }),
  actions: {
    openModal(ticket) {
      this.currentTicket = ticket;
    },
    clearState() {
      localStorage.removeItem("ticketReserve");
      this.currentTicket = {
        img: "",
        title: "",
        info: "",
        id: 0,
        detail: "",
        priceTicket: 0,
        serviceFees: 0,
        orderFees: 0,
      };
      this.seat = 1;
      this.showOrderExpiredModal = false;
      this.orderExpiredTimeout = 0;

      this.deleteExpiredInterval();
      this.orderExpiredIntervalId = null;

      this.modePaymentForm = "add";
      this.showPaymentForm = false;
      this.hasAgreeTermOfUse = false;
      this.showAlertCreditCard = false;
      this.creditCardList = [];
      this.creditCardSelected = null;
      this.currentCreditCard = null;
    },
    setExpiredInterval(orderExpired) {
      let now = new Date().getTime();
      let orderExpiredTimeout = parseInt((orderExpired - now) / 1000);
      if (orderExpiredTimeout <= 0) {
        this.showOrderExpiredModal = true;
        return;
      }

      this.orderExpiredTimeout = orderExpiredTimeout;
      this.orderExpiredIntervalId = setInterval(() => {
        this.orderExpiredTimeout--;
        if (this.orderExpiredTimeout === 0) {
          this.showOrderExpiredModal = true;
          this.deleteExpiredInterval();
        }
      }, 1000);
    },
    deleteExpiredInterval() {
      if (this.orderExpiredIntervalId !== null) {
        clearInterval(this.orderExpiredIntervalId);
      }
    },
    addCreditCard(data) {
      this.creditCardList.push(data);
    },
    deleteCreditCard(cardNumber) {
      this.creditCardList = this.creditCardList.filter((card) => {
        if (card.cardNumber === cardNumber) {
          return false;
        }
        return true;
      });

      if (this.creditCardList.length > 0) {
        this.creditCardSelected = this.creditCardList[0].cardNumber;
      } else {
        this.creditCardSelected = null;
      }
    },
    editCreditCard(editCard) {
      this.creditCardList = this.creditCardList.map((card) => {
        if (card.cardNumber === editCard.cardNumber) {
          return editCard;
        }
        return card;
      });
    },
  },
});
