<template>
  <div class="card mt-4 p-4">
    <div class="card-body">
      <div class="d-flex">
        <div class="ticket-insu">
          <h4 class="mb-0">Ticket Insurance</h4>
        </div>
        <div class="ms-3 text-danger align-self-center infos">
          (Selection Required)
        </div>
      </div>
      <div class="mt-4 infos">
        <p>{{ getInfo }}</p>
      </div>
      <div class="mt-4 infos">
        <p>{{ infoFull }}</p>
      </div>
      <div class="d-flex">
        <p class="rounded bg-success p-1 text-light infos">important</p>
        <div class="ms-4 infos">
          {{ temporarily }}
        </div>
      </div>
      <div class="mt-4 infos">
        <p>
          {{ recommended }}
          <a href="#" class="terms-use">{{ plan }}</a>
          {{ learnMore }}
        </p>
      </div>
      <div class="mt-4 infos">
        <img src="img/warning.png" />
        <a href="#" class="ms-2 terms-use"
          >COVID: More about coverage, limitations, & exclusionsLearn</a
        >
      </div>
      <div class="mt-4 px-5 infos">
        <p>
          Yes, protect my ticket purchase to Nashville SC at GEODIS Park.
          (Highly Recommended)
        </p>
        <p>
          No, do not protect my ticket purchase. I understand this decision may
          put my $75.84 spent on Nashville SC tickets at risk.
        </p>
        <h6>76,958 people protected their tickets in the last 3 days</h6>
        <h6>Free Look Period</h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      moblie: "Go Mobile - Free",
      getInfo:
        "Get reimbursed up to 100% with Event Ticket Insurance for only $9.00 per ticket ($18.00 total). This insurance is only a small fraction of your ticket purchase.",

      infoFull:
        "If you can't attend this event for a number of reasons like covered illness, airline delays, traffic accidents, weather emergencies, if you are required to work and more, you can be reimbursed for your ticket purchase. Protection also includes parking and other event related expenses that have been added to your order. You'll also receive access to a 24-hour hotline that can give you driving suggestions, provide parking information, make group arrangements, and much more.",
      temporarily:
        " Temporarily accommodating certain COVID-19 claims to help protect yourticket (see links below)",
      recommended:
        "Recommended/offered/sold by Allianz Global Assistance. Underwriter Jefferson Insurance Company. Plan incl. insurance & assistance services. Terms & exclusions (incl. for pre-existing conditions) apply.",
      plan: "Plan & Pricing details, disclosures, Coverage Alerts.",
      learnMore:
        " Learn more about terms and conditions. Link opens in a new window.. By clicking yes, you authorize Ticketmaster to send your name, address, and credit card information to AGA Service Company, who will charge your card on the terms described above.",
    };
  },
};
</script>

<style scoped>
.terms-use {
  text-decoration: none;
}
.ticket-insu {
  font-size: 20px;
  font-weight: 600;
}
.infos {
  font-size: 14px;
  font-weight: 400;
}
</style>
