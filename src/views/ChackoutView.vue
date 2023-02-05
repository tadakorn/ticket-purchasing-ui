<template>
  <div class="row">
    <div class="col-sm-12 col-md-7">
      <ChackoutTicket />
      <ChackoutPayment />
      <TicketInsurance />
    </div>
    <div class="col-sm-12 col-md-5">
      <ChackoutTotal />
      <ChackoutDetails />
    </div>
  </div>
</template>

<script>
import ChackoutTicket from "../components/ticket/ChackoutTicket.vue";
import ChackoutPayment from "../components/ticket/ChackoutPayment.vue";
import TicketInsurance from "../components/ticket/TicketInsurance.vue";
import ChackoutTotal from "../components/ticket/ChackoutTotal.vue";
import ChackoutDetails from "../components/ticket/ChackoutDetails.vue";
export default {
  components: {
    ChackoutTicket,
    ChackoutPayment,
    TicketInsurance,
    ChackoutTotal,
    ChackoutDetails,
  },
};
</script>
