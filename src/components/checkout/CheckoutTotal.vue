<template>
  <div class="card mt-4 p-2">
    <div class="card-body">
      <CheckoutTotalCollapse />

      <div class="total-info">
        <p>*All Sales Final - No Refunds or Exchanges</p>
      </div>

      <AlertRequired v-if="showAlertRequired" />

      <div class="form-check total-info">
        <input
          id="termOfUseCheck"
          class="form-check-input"
          type="checkbox"
          v-model="hasAgreeTermOfUse"
        />
        <label class="form-check-label" for="termOfUseCheck"
          >I have read and agree to the current
          <a href="#" class="terms-use">Terms of Use.</a>
        </label>
      </div>
      <div
        ref="placeOrderButton"
        class="d-grid btn mt-3 py-2 btn-sm place-order"
        type="button"
        @click="placeOrder"
      >
        Place Order
      </div>

      <div class="mt-2 total-tickets">
        *Exceptions may apply, see our Terms of Use.
      </div>
    </div>
  </div>

  <CancelOrderModal />
  <CheckoutModal />
</template>
<script>
import { useTicketStore } from "../../stores/ticket";
import { Modal } from "bootstrap";
import AlertRequired from "./AlertRequired.vue";
import CancelOrderModal from "./CancelOrderModal.vue";
import CheckoutModal from "./CheckoutModal.vue";
import CheckoutTotalCollapse from "./CheckoutTotalCollapse.vue";

export default {
  components: {
    AlertRequired,
    CheckoutModal,
    CheckoutTotalCollapse,
    CancelOrderModal,
  },
  setup() {
    const ticketStore = useTicketStore();
    return { ticketStore };
  },
  data() {
    return {
      hasAgreeTermOfUse: false,
      showAlertRequired: false,
    };
  },
  methods: {
    placeOrder() {
      let creditCardLength = this.ticketStore.creditCardList.length;
      if (this.hasAgreeTermOfUse && creditCardLength > 0) {
        let modalInstance = new Modal(document.getElementById("checkoutModal"));
        modalInstance.show();

        this.showAlertRequired = false;
        this.ticketStore.showAlertCreditCard = false;
        this.ticketStore.clearState();
      } else {
        if (!this.hasAgreeTermOfUse) {
          this.showAlertRequired = true;
        } else {
          this.showAlertRequired = false;
        }

        if (this.ticketStore.creditCardSelected === null) {
          this.ticketStore.showAlertCreditCard = true;
        } else {
          this.ticketStore.showAlertCreditCard = false;
        }
      }
    },
  },
};
</script>

<style scoped>
.terms-use {
  text-decoration: none;
}
.total-info {
  font-size: 0.9rem;
  font-weight: 500;
}
.total-tickets {
  font-size: 13px;
  font-weight: 400;
}
.place-order {
  background-color: #148016;
  color: #fff;
}
</style>
