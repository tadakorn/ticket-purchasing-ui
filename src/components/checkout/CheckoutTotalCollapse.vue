<template>
  <div
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#totalCollapse"
    aria-expanded="false"
    aria-controls="totalCollapse"
  >
    <div class="d-flex">
      <div class="h4 total">Totals</div>
      <div class="ms-auto h5 total">${{ total.toFixed(2) }}</div>
      <div class="ms-1">
        <img src="img/arrowdown.png" class="arrow" />
        <p></p>
      </div>
    </div>
  </div>

  <div class="collapse pb-4" id="totalCollapse">
    <div class="total-info">Ticket</div>
    <div class="d-flex mt-3 total-tickets">
      <div>
        Verified Resale Tickets: ${{ ticketStore.currentTicket.priceTicket }}
        x
        {{ ticketStore.seat }}
      </div>
      <div class="ms-auto">${{ subtotal }}</div>
    </div>
    <div class="mt-3 total-info">Fees</div>
    <div class="d-flex mt-3 total-tickets">
      <div class="">
        Service Fees: ${{ ticketStore.currentTicket.serviceFees.toFixed(2) }}
        x
        {{ ticketStore.seat }}
      </div>
      <div class="ms-auto">${{ totalServiceFees.toFixed(2) }}</div>
    </div>
    <div class="d-flex mt-3 total-tickets">
      <div class="">Order Processing Fee</div>
      <div class="ms-auto">${{ ticketStore.currentTicket.orderFees }}</div>
    </div>
    <div class="mt-3 total-info">Delivery</div>
    <div class="d-flex mt-3 total-tickets">
      <div class="">Go Mobile</div>
      <div class="ms-auto">Free</div>
    </div>
    <div class="d-flex mt-3">
      <div class="total-info">Tax</div>
      <div class="ms-auto total-tickets">${{ totalBeforeTax.toFixed(2) }}</div>
    </div>
    <div class="mt-3 total-tickets">
      <a
        href="#"
        class="terms-use"
        data-bs-toggle="modal"
        data-bs-target="#cancelModal"
        >Cancle Order</a
      >
    </div>
  </div>
</template>

<script>
import { useTicketStore } from "../../stores/ticket";

export default {
  computed: {
    subtotal() {
      return this.ticketStore.currentTicket.priceTicket * this.ticketStore.seat;
    },
    totalServiceFees() {
      return this.ticketStore.currentTicket.serviceFees * this.ticketStore.seat;
    },
    totalBeforeTax() {
      return (
        (this.subtotal +
          this.totalServiceFees +
          this.ticketStore.currentTicket.orderFees) *
        0.07
      );
    },
    total() {
      return (
        this.subtotal +
        this.totalServiceFees +
        this.totalBeforeTax +
        this.ticketStore.currentTicket.orderFees
      );
    },
  },
  setup() {
    const ticketStore = useTicketStore();
    return { ticketStore };
  },
};
</script>

<style scoped>
.terms-use {
  text-decoration: none;
}
.total {
  font-size: 20px;
  font-weight: 600;
}
.arrow {
  width: 20px;
  height: 20px;
}
.total-info {
  font-size: 0.8rem;
  font-weight: 500;
}
.total-tickets {
  font-size: 13px;
  font-weight: 400;
}
</style>
