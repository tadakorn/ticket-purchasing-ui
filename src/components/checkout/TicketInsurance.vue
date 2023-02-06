<template>
  <div class="card mt-4 p-2">
    <div class="card-body">
      <div class="d-flex align-items-center">
        <div class="">
          <h4 class="mb-0">Ticket Insurance</h4>
        </div>
        <div v-if="insuranceSelected" class="ms-3">
          <font-awesome-icon class="fa-lg" icon="fa-regular fa-circle-check" />
        </div>
        <div v-else class="ms-3 text-danger infos">(Selection Required)</div>
      </div>
      <div class="mt-4 infos">
        <p>
          Get reimbursed up to 100% with Event Ticket Insurance for only $9.00
          per ticket ($18.00 total). This insurance is only a small fraction of
          your ticket purchase.
        </p>
      </div>
      <div class="mt-4 infos">
        <p>
          If you can't attend this event for a number of reasons like covered
          illness, airline delays, traffic accidents, weather emergencies, if
          you are required to work and more, you can be reimbursed for your
          ticket purchase. Protection also includes parking and other event
          related expenses that have been added to your order. You'll also
          receive access to a 24-hour hotline that can give you driving
          suggestions, provide parking information, make group arrangements, and
          much more.
        </p>
      </div>
      <div class="d-flex">
        <div>
          <span class="badge rounded-pill important-pill">IMPORTANT</span>
        </div>

        <div class="ms-4 infos">
          Temporarily accommodating certain COVID-19 claims to help protect
          yourticket (see links below)
        </div>
      </div>
      <div class="mt-4 infos">
        <p>
          Recommended/offered/sold by Allianz Global Assistance. Underwriter
          Jefferson Insurance Company. Plan incl. insurance & assistance
          services. Terms & exclusions (incl. for pre-existing conditions)
          apply.
          <a
            href="https://www.allianzworldwidepartners.com/usa/terms-and-conditions/001005501"
            target="_blank"
            rel="noopener noreferrer"
            class="terms-use"
            >Plan & Pricing details, disclosures, Coverage Alerts.</a
          >
          Learn more about terms and conditions. Link opens in a new window.. By
          clicking yes, you authorize Ticketmaster to send your name, address,
          and credit card information to AGA Service Company, who will charge
          your card on the terms described above.
        </p>
      </div>
      <div class="mt-4 infos">
        <img src="img/warning.png" width="20" height="20" />
        <a
          href="https://azcontent.us/alert/2019-novel-coronavirus-event"
          target="_blank"
          rel="noopener noreferrer"
          class="ms-2 terms-use"
          >COVID: More about coverage, limitations, & exclusions</a
        >
      </div>
      <div class="mt-4 infos">
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            value="yes"
            id="insuranceYes"
            v-model="insuranceSelected"
          />
          <label class="form-check-label" for="insuranceYes">
            <div v-if="insuranceSelected !== 'yes'">
              Yes, protect my ticket purchase to Nashville SC at GEODIS Park.
              (Highly Recommended)
            </div>
            <div v-else class="text-success">
              <font-awesome-icon icon="fa-regular fa-circle-check" />
              Success! Your ticket purchase is protected.
            </div>
          </label>
        </div>

        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            value="no"
            id="insuranceNo"
            v-model="insuranceSelected"
          />
          <label class="form-check-label" for="insuranceNo">
            <div v-if="insuranceSelected !== 'no'">
              <div>
                No, do not protect my ticket purchase. I understand this
                decision may put my $75.84 spent on Nashville SC tickets at
                risk.
              </div>
              <div class="mt-2">
                76,958 people protected their tickets in the last 3 days
              </div>
              <div class="mt-2">Free Look Period</div>
            </div>
            <div v-else class="text-danger">
              <font-awesome-icon icon="fa-solid fa-triangle-exclamation" />
              Your ticket purchase is NOT protected.
            </div>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      insuranceSelected: null,
    };
  },
};
</script>

<style scoped>
.terms-use {
  text-decoration: none;
}
.infos {
  font-size: 14px;
  font-weight: 400;
}
.important-pill {
  background-color: #904eba;
}
.fa-circle-check {
  color: rgb(27, 171, 30);
}
</style>
