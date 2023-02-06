<template>
  <div class="mt-3 px-3 payment-credit">
    <p>Use Credit / Debit Card</p>
  </div>

  <div class="d-flex flex-column gap-3">
    <div
      class="p-3"
      :class="{
        'credit-card-selected':
          ticketStore.creditCardSelected === card.cardNumber,
      }"
      v-for="card in ticketStore.creditCardList"
      :key="card.cardNumber"
    >
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          :value="card.cardNumber"
          :id="`card_${card.cardNumber}`"
          v-model="ticketStore.creditCardSelected"
        />
        <label class="form-check-label" :for="`card_${card.cardNumber}`">
          <div class="d-flex gap-2">
            <div>
              <img src="img/mastercard.png" width="40" />
            </div>
            <div class="credit-card-detail">
              <div style="font">
                Mastercard - {{ card.cardNumber.slice(-4) }}
              </div>
              <div class="text-secondary">
                {{ card.name }} | exp. {{ card.expireDate }}
              </div>
              <div class="d-flex gap-1">
                <a href="#" @click.prevent="clickeEditCard(card)">Edit</a>
                <div>|</div>
                <a
                  href="#"
                  @click.prevent="ticketStore.deleteCreditCard(card.cardNumber)"
                  >Delete</a
                >
              </div>
            </div>
          </div>
        </label>
      </div>
    </div>
  </div>

  <div class="d-flex border-bottom p-3 payment-credit align-items-center">
    <div>
      <font-awesome-icon
        class="fa-lg add-new-card-icon"
        icon="fa-solid fa-plus"
      />
    </div>
    <div>
      <img src="img/wallet-item.svg" class="photos-change" />
    </div>
    <div>
      <a href="#" class="photos-change" @click.prevent="clickAddNewCard"
        >Add New Card</a
      >
    </div>
  </div>
  <div class="mt-4 px-3 border-bottom payments">
    <p>Or Pay With</p>
    <button type="button" class="btn btn-sm px-4 paypal-button">
      <img src="img/paypal.svg" width="44" height="14" />
    </button>
    <button class="btn btn-sm ms-4 px-4 klarna-button">
      <img src="img/klarna.svg" width="44" height="14" />
    </button>
    <p class="mt-3">
      Pay in full or split up your payments with buy now, pay later options from
      PayPal or Klarna. By using a digital wallet and continuing past this page,
      you have read and are accepting the
      <a
        href="https://help.ticketmaster.com/s/article/Terms-of-Use?language=en_US"
        target="_blank"
        rel="noopener noreferrer"
        class="terms-use"
        >Terms of Use.</a
      >
    </p>
  </div>

  <div class="mt-4 px-3">
    <div
      type="button"
      class="d-flex gap-3 align-items-center add-promo-code"
      v-if="!addPromocode"
      @click="addPromocode = !addPromocode"
    >
      <font-awesome-icon class="fa-lg" icon="fa-solid fa-plus" />
      <div style="font-weight: 500">Add Credits / Promo Codes / Gift Cards</div>
    </div>
    <div v-else>
      <div style="font-weight: 500">Add Credits / Promo Codes / Gift Cards</div>
      <div class="mt-3">
        Combine up to 5 promo codes and 5 gift cards. (Hang on to your gift
        cards in case of a refund.)
      </div>
      <div class="mt-3">Credit / Promo Code / Gift Card Number</div>
      <div class="d-flex mt-1 gap-4">
        <input
          type="text"
          class="form-control"
          placeholder="Enter Code or Number"
          v-model="promoCode"
        />
        <button
          class="btn btn-outline-primary"
          :class="{ disabled: promoCode === null || promoCode === '' }"
        >
          Apply
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useTicketStore } from "../../stores/ticket";

export default {
  data() {
    return {
      addPromocode: false,
      promoCode: null,
    };
  },
  setup() {
    const ticketStore = useTicketStore();
    return { ticketStore };
  },
  methods: {
    clickAddNewCard() {
      this.ticketStore.modePaymentForm = "add";
      this.ticketStore.showPaymentForm = true;
    },
    clickeEditCard(card) {
      this.ticketStore.currentCreditCard = card;
      this.ticketStore.modePaymentForm = "edit";
      this.ticketStore.showPaymentForm = true;
    },
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
.paypal-button {
  background-color: #ffc439;
}
.klarna-button {
  background-color: #ffb3c7;
}
.add-promo-code {
  color: #0d6efd;
}
.add-new-card-icon {
  color: #0d6efd;
}
.credit-card-selected {
  border: 1px solid #d6e7fa;
  background-color: #ebf4fdb3;
}
.credit-card-detail {
  font-size: 14px;
}
.credit-card-detail div:first-child {
  font-weight: 600;
}
.credit-card-detail div:nth-child(3) a {
  font-weight: 600;
  text-decoration: none;
}
</style>
