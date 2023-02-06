<template>
  <!-- Payment -->
  <div class="card mt-4 p-2">
    <div class="card-body">
      <div class="payment d-flex justify-content-between">
        <div><h4>Payment</h4></div>
        <div><img src="img/official_card_amex.svg" width="90" /></div>
      </div>

      <div v-if="ticketStore.showAlertCreditCard" class="mt-4">
        <AlertRequired />
      </div>

      <PaymentForm
        v-if="ticketStore.showPaymentForm"
        :mode="ticketStore.modePaymentForm"
      />

      <PaymentDescription v-else />
    </div>
  </div>
</template>

<script>
import { useTicketStore } from "../../stores/ticket";
import AlertRequired from "./AlertRequired.vue";
import PaymentDescription from "./PaymentDescription.vue";
import PaymentForm from "./PaymentForm.vue";

export default {
  components: {
    AlertRequired,
    PaymentDescription,
    PaymentForm,
  },
  setup() {
    const ticketStore = useTicketStore();
    return { ticketStore };
  },
};
</script>
