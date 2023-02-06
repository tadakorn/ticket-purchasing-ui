<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="ticketModal"
    tabindex="-1"
    aria-labelledby="ticketModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <!-- header -->
        <div class="modal-header">
          <h1 class="modal-title fs-5 text-dark" id="ticketModalLabel">
            {{ ticketStore.currentTicket.title }}
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <!-- body -->
        <div class="modal-body">
          <div class="container-fluid">
            <div class="d-flex flex-row">
              <div>
                <img
                  :src="`/img/${ticketStore.currentTicket.img}.png`"
                  class="img-fluid photo-info"
                />
              </div>
              <div class="ms-5 mt-3">
                <p class="ticket-store">
                  Verified Resale Ticket
                  {{ ticketStore.currentTicket.detail }}
                </p>
              </div>
              <hr />
            </div>

            <div class="d-flex justify-centent-between align-items-center mt-3">
              <div>
                <h6 class="m-0">Verified Resale Ticket</h6>
                <small class="text-secondary m-0"
                  >${{ ticketStore.currentTicket.priceTicket }} ea + Fees</small
                >
              </div>
              <div class="ms-auto">
                <div class="d-flex align-items-center">
                  <div class="px-2">
                    <font-awesome-icon
                      v-if="ticketStore.seat > 1"
                      icon="fa-solid fa-circle-minus"
                      class="minus"
                      @click="minusSeat"
                    />
                  </div>
                  <div class="my-1 h4 seat">
                    {{ ticketStore.seat }}
                  </div>
                  <div class="px-2">
                    <font-awesome-icon
                      icon="fa-solid fa-circle-plus"
                      class="plus"
                      @click="ticketStore.seat++"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="d-flex buy-ticket align-items-center" type="button">
              <div class="px-3">
                <img src="img/credit.png" class="wait-pays" />
              </div>
              <div class="align-self-center ticket-store">
                Buy Now, Pay Later at checkout
              </div>
              <div class="ms-auto px-3">
                <img src="img/warning.png" class="wait-pay" />
              </div>
            </div>
          </div>
        </div>
        <!-- footer -->
        <div class="p-4 border-top shadow-lg">
          <div class="d-flex justify-centent-between align-items-center">
            <div>
              <h6 class="m-0">Subtotal</h6>
            </div>
            <div class="ms-auto">${{ subtotal }}</div>
            <div></div>
          </div>
          <div>
            <small class="text-secondary">{{ ticketStore.seat }} Tickets</small>
          </div>
          <div class="d-grid mt-2">
            <button
              type="button"
              class="btn btn-primary btn-sm"
              data-bs-dismiss="modal"
              @click="nextPage"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useTicketStore } from "../../stores/ticket";
export default {
  data() {
    return {};
  },
  computed: {
    subtotal() {
      return this.ticketStore.seat * this.ticketStore.currentTicket.priceTicket;
    },
  },
  setup() {
    const ticketStore = useTicketStore();
    return { ticketStore };
  },
  methods: {
    nextPage() {
      let ticketReserve = JSON.stringify({
        seat: this.ticketStore.seat,
        ticketId: this.ticketStore.currentTicket.id,
        orderExpired: new Date().getTime() + (7 * 60 + 30) * 10000,
      });
      this.ticketStore.clearState();

      localStorage.setItem("ticketReserve", ticketReserve);
      this.$router.push(`/checkout`);
    },
    minusSeat() {
      if (this.ticketStore.seat > 1) {
        this.ticketStore.seat--;
      }
    },
  },
};
</script>

<style scoped>
.photo-info {
  width: 400px;
  height: 400;
}
.ticket-store {
  font-size: 14px;
  font-weight: 400;
}
.add-seat {
  width: 50px;
  height: 50px;
}
.buy-ticket {
  border: 1px solid #dddddd;

  padding: 7px;
  margin-top: 100px;
}
.buy-ticket:hover {
  background-color: #aee2ff;
  border-color: #00337c;
}
.wait-pays {
  width: 35px;
  height: 35px;
}
.wait-pay {
  width: 20px;
  height: 20px;
}
.minus {
  width: 40px;
  height: 40px;
  cursor: pointer;
}
.plus {
  width: 40px;
  height: 40px;
  cursor: pointer;
}
.seat {
  font-weight: 300;
}
.fa-circle-minus {
  color: #727272;
}
.fa-circle-plus {
  color: #026cdf;
}
</style>
