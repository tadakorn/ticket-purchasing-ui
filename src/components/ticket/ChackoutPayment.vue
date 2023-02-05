<template>
  <!-- Payment -->
  <div class="card mt-4 p-4">
    <div class="card-body">
      <div class="payment">
        <h4>Payment</h4>
      </div>
      <div class="mt-4 px-3 payment-credit">
        <p>{{ card }}</p>
      </div>
      <div class="border-bottom py-3 payment-credit">
        <img src="img/plus.png" class="photo-change" />
        <img src="img/credit.png" class="photos-change" />
        <a href="#" class="photos-change">{{ addNewCard }}</a>
      </div>
      <div class="mt-4 px-3 payments">
        <p>Or Pay With</p>
        <button class="btn btn-success btn-sm">{{ payPal }}</button>
        <button class="btn btn-success btn-sm ms-5">{{ klarna }}</button>
        <p class="mt-3">
          {{ payFull }}
          <a href="#" class="terms-use">{{ termsUse }}</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      card: "Use Credit / Debit Card",
      addNewCard: "Add New Card",
      payPal: "PayPal",
      klarna: "Klarna",
      payFull:
        "Pay in full or split up your payments with buy now, pay later options from PayPal or Klarna. By using a digital wallet and continuing past this page, you have read and are accepting the",
      termsUse: "Terms of Use.",
    };
  },
};
</script>

<style scoped>
.terms-use {
  text-decoration: none;
}
.photo-change {
  width: 25px;
  height: 25px;
  margin-left: 15px;
}
.photos-change {
  width: 40px;
  height: 40px;
  margin-left: 20px;
  text-decoration: none;
}
.payment-credit {
  font-weight: 500;
}
.payment {
  font-size: 20px;
  font-weight: 600;
}
.payments {
  font-size: 14px;
  font-weight: 400;
}
</style>
