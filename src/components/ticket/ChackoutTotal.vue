<template>
  <div class="card mt-4 p-4">
    <div class="card-body">
      <div
        class="d-flex"
        data-bs-toggle="collapse"
        data-bs-target="#collapseExample"
        aria-expanded="false"
        aria-controls="collapseExample"
        type="button"
      >
        <div class="h4 total">Total</div>
        <div class="ms-auto h5 total">${{ priceTicket }}</div>
        <div class="ms-1">
          <img src="img/arrowdown.png" class="arrow" />
          <p></p>
        </div>

        <!-- arrow end -->
      </div>
      <!-- show price -->
      <div class="collapse my-3" id="collapseExample">
        <div class="total-info">Ticket</div>
        <div class="d-flex mt-3 total-tickets">
          <div>Verified Resale Tickets: $24.00 x 2</div>
          <div class="ms-auto">$48.00</div>
        </div>
        <div class="mt-3 total-info">Fees</div>
        <div class="d-flex mt-3 total-tickets">
          <div class="">Service Fee: $5.04 x 2</div>
          <div class="ms-auto">$10.08</div>
        </div>
        <div class="d-flex mt-3 total-tickets">
          <div class="">Order Processing Fee</div>
          <div class="ms-auto">$2.95</div>
        </div>
        <div class="mt-3 total-info">Delivery</div>
        <div class="d-flex mt-3 total-tickets">
          <div class="">Go Mobile</div>
          <div class="ms-auto">Free</div>
        </div>
        <div class="mt-3 total-tickets">
          <a href="#" class="terms-use">Cancle Order</a>
        </div>
      </div>
      <!-- show price end -->

      <div class="total-info">
        <p>*All Sales Final - No Refunds or Exchanges</p>
      </div>
      <div class="form-check total-info">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckChecked"
          checked
        />
        I have read and agree to the current
        <a href="#" class="terms-use">{{ termsUse }}</a>
      </div>
      <div class="d-grid btn btn-success mt-3 btn-sm" type="button">
        Place Order
      </div>
      <div class="mt-2 total-info">
        *Exceptions may apply, see our Terms of Use.
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      priceTicket: 75.84,
      termsUse: "Terms of Use.",
    };
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
  font-weight: 500;
}
.total-tickets {
  font-size: 14px;
  font-weight: 400;
}
</style>
