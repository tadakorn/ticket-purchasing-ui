<template>
  <div class="mt-4">
    <a href="#" @click="backStore" class="payment-credit"
      ><font-awesome-icon class="me-1" icon="fa-solid fa-chevron-left" />
      <span style="font-weight: 500">Back to Stored Cards</span>
    </a>
  </div>
  <div class="pt-3 payment-credit d-flex gap-3">
    <div><img src="img/card.png" class="photos-change" /></div>
    <div><img src="img/creditcard.png" class="photos-change" /></div>
    <div><img src="img/visa.png" class="photos-change" /></div>
    <div><img src="img/credits.png" class="photos-change" /></div>
  </div>
  <form>
    <!-- Name -->
    <div class="my-3">
      <label for="name-card" class="form-label">Name on Card</label>
      <input type="name" class="form-control" v-model="formData.name" />
      <!-- Card Number -->
    </div>
    <div class="mb-3">
      <label for="cardNumber" class="form-label">Card Number</label>
      <input
        type="text"
        id="cardNumber"
        class="form-control"
        maxlength="16"
        v-model="formData.cardNumber"
      />
    </div>
    <!--Expiration  -->
    <div class="mb-3">
      <div class="row align-items-end">
        <div class="col-4">
          <label for="expirationDate" class="form-label">Expiration Date</label>
          <input
            type="text"
            class="form-control"
            id="expirationDate"
            maxlength="4"
            placeholder="MM/YY"
            v-model="formData.expireDate"
          />
        </div>
        <div class="col-3">
          <label for="securityCode" class="form-label">Security Code</label>
          <input
            type="password"
            class="form-control"
            pattern="[0-9]*"
            id="securityCode"
            maxlength="3"
            placeholder="CVV"
            v-model="formData.securityCode"
          />
        </div>
        <div class="col-5">
          <img src="img/wallet-item-3digit.svg" width="40" class="me-2" />
          <span style="font-size: 12px">3-digits on back of card</span>
        </div>
      </div>
    </div>

    <!-- Country -->
    <div class="mb-3">
      <div class="pb-2">Country</div>
      <select v-model="formData.country" class="form-select">
        <option v-for="country in countryList" :key="country" :value="country">
          {{ country }}
        </option>
      </select>
    </div>
    <!-- Address -->
    <div class="mb-3">
      <div class="row align-items-end">
        <div class="col-6">
          <label for="address" class="form-label">Address</label>
          <input
            type="text"
            class="form-control"
            id="address"
            v-model="formData.address"
          />
        </div>

        <div class="col-6">
          <div v-if="!addAddressLine2">
            <button
              class="btn px-3 payment-credit add-address-line-2"
              @click="addAddressLine2 = !addAddressLine2"
            >
              + Add Unit # / Address Line 2
            </button>
          </div>
          <div v-else>
            <label for="address2" class="form-label"
              >Address 2 (Optional)</label
            >
            <input
              type="text"
              class="form-control"
              id="address2"
              v-model="formData.address2"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- city -->
    <div class="mb-3">
      <div class="row">
        <div class="col-6">
          <label for="city" class="form-label">City</label>
          <input
            type="text"
            class="form-control"
            id="city"
            v-model="formData.city"
          />
        </div>
        <div class="col-6" v-if="formData.country === 'United States'">
          <div class="pb-2">State</div>

          <div>
            <select class="form-select" v-model="formData.state">
              <option value=""></option>
              <option v-for="state in stateList" :key="state" :value="state">
                {{ state }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <!-- Phone Number -->
    <div class="mb-3">
      <div class="row">
        <div class="col-6">
          <label for="postal-code" class="form-label">Postal Code</label>
          <input
            type="text"
            class="form-control"
            id="postal-code"
            v-model="formData.postalCode"
          />
        </div>

        <div class="col-6">
          <label for="phone-number" class="form-label">Phone Number</label>
          <input
            type="text"
            class="form-control"
            id="phone-number"
            v-model="formData.phoneNumber"
          />
        </div>
      </div>
    </div>
    <!-- Save Card -->
    <div class="mb-3 form-check">
      <input
        type="checkbox"
        class="form-check-input"
        id="save-card"
        v-model="formData.isCardSave"
      />
      <label class="form-check-label" for="save-card"
        >Save this card for future purchases</label
      >
    </div>
    <!-- Set -->
    <div class="my-3" style="font-size: 13px">Set as a primary card for :</div>
    <!-- Payment-->
    <div class="mb-3 form-check">
      <input
        type="checkbox"
        class="form-check-input"
        id="payment"
        v-model="formData.isPrimary"
      />
      <label class="form-check-label" for="payment"
        >Payment
        <div style="font-size: 14px">
          For when you are purchasing tickets
        </div></label
      >
    </div>
    <!-- bubmit  cancle -->
    <div class="d-flex justify-content-end gap-3 border-bottom pb-3">
      <button type="button" class="btn" @click="backStore">Cancel</button>
      <button
        type="button"
        class="btn btn-primary"
        :class="{ disabled: !canAddNewCard }"
        @click="saveCard"
      >
        <span v-if="mode === 'add'">Add New Card</span>
        <span v-else>Save Changes</span>
      </button>
    </div>
  </form>
</template>

<script>
import { useTicketStore } from "../../stores/ticket";
export default {
  data() {
    return {
      addAddressLine2: false,
      canAddNewCard: false,
      formData: {
        name: "",
        cardNumber: "",
        expireDate: "",
        securityCode: "",
        country: "United States",
        address: "",
        address2: "",
        city: "",
        state: "",
        postalCode: "",
        phoneNumber: "",
        isCardSave: false,
        isPrimary: false,
      },
      countrySelected: "United States",
      countryList: [
        "Afghanistan",
        "Åland Islands",
        "Albania",
        "Algeria",
        "American Samoa",
        "Andorra",
        "Angola",
        "Anguilla",
        "Antarctica",
        "Antigua and Barbuda",
        "Argentina",
        "Armenia",
        "Aruba",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bermuda",
        "Bhutan",
        "Bolivia",
        "Bosnia and Herzegovina",
        "Botswana",
        "Bouvet Island",
        "Brazil",
        "British Indian Ocean Territory",
        "Brunei Darussalam",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Cape Verde",
        "Cayman Islands",
        "Central African Republic",
        "Chad",
        "Chile",
        "China",
        "Christmas Island",
        "Cocos (Keeling) Islands",
        "Colombia",
        "Comoros",
        "Congo",
        "Congo, The Democratic Republic of The",
        "Cook Islands",
        "Costa Rica",
        "Cote D'ivoire",
        "Croatia",
        "Cuba",
        "Curaçao",
        "Cyprus",
        "Czech Republic",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Ethiopia",
        "Falkland Islands (Malvinas)",
        "Faroe Islands",
        "Fiji",
        "Finland",
        "France",
        "French Guiana",
        "French Polynesia",
        "French Southern Territories",
        "Gabon",
        "Gambia",
        "Georgia",
        "Germany",
        "Ghana",
        "Gibraltar",
        "Greece",
        "Greenland",
        "Grenada",
        "Guadeloupe",
        "Guam",
        "Guatemala",
        "Guernsey",
        "Guinea",
        "Guinea-bissau",
        "Guyana",
        "Haiti",
        "Heard Island and Mcdonald Islands",
        "Holy See (Vatican City State)",
        "Honduras",
        "Hong Kong",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran, Islamic Republic of",
        "Iraq",
        "Ireland",
        "Isle of Man",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jersey",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Korea, Democratic People's Republic of",
        "Korea, Republic of",
        "Kuwait",
        "Kyrgyzstan",
        "Lao People's Democratic Republic",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libyan Arab Jamahiriya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Macao",
        "Macedonia, The Former Yugoslav Republic of",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Marshall Islands",
        "Martinique",
        "Mauritania",
        "Mauritius",
        "Mayotte",
        "Mexico",
        "Micronesia, Federated States of",
        "Moldova, Republic of",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Montserrat",
        "Morocco",
        "Mozambique",
        "Myanmar",
        "Namibia",
        "Nauru",
        "Nepal",
        "Netherlands",
        "New Caledonia",
        "New Zealand",
        "Nicaragua",
        "Niger",
        "Nigeria",
        "Niue",
        "Norfolk Island",
        "Northern Mariana Islands",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau",
        "Palestinian Territory, Occupied",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines",
        "Pitcairn",
        "Poland",
        "Portugal",
        "Puerto Rico",
        "Qatar",
        "Reunion",
        "Romania",
        "Russia",
        "Rwanda",
        "Saint Helena",
        "Saint Kitts and Nevis",
        "Saint Lucia",
        "Saint Pierre and Miquelon",
        "Saint Vincent and The Grenadines",
        "Samoa",
        "San Marino",
        "Sao Tome and Principe",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "Somalia",
        "South Africa",
        "South Georgia and The South Sandwich Islands",
        "Spain",
        "Sri Lanka",
        "Sudan",
        "Suriname",
        "Svalbard and Jan Mayen",
        "Eswatini",
        "Sweden",
        "Switzerland",
        "Syrian Arab Republic",
        "Taiwan (ROC)",
        "Tajikistan",
        "Tanzania, United Republic of",
        "Thailand",
        "Timor-leste",
        "Togo",
        "Tokelau",
        "Tonga",
        "Trinidad and Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Turks and Caicos Islands",
        "Tuvalu",
        "Uganda",
        "Ukraine",
        "United Arab Emirates",
        "United Kingdom",
        "United States",
        "United States Minor Outlying Islands",
        "Uruguay",
        "Uzbekistan",
        "Vanuatu",
        "Venezuela",
        "Vietnam",
        "Virgin Islands, British",
        "Virgin Islands, U.S.",
        "Wallis and Futuna",
        "Western Sahara",
        "Yemen",
        "Zambia",
        "Zimbabwe",
      ],
      stateList: [
        "Alabama",
        "Alaska",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "Florida",
        "Georgia",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Pennsylvania",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming",
      ],
    };
  },
  watch: {
    "formData.securityCode": function (val) {
      this.formData.securityCode = val.replace(/[^0-9]/g, "");
    },
    "formData.cardNumber": function (val) {
      this.formData.cardNumber = val.replace(/[^0-9]/g, "");
    },
    "formData.expireDate": function (val) {
      this.formData.expireDate = val.replace(/[^0-9]/g, "");
    },
    "formData.country": function (val) {
      if (val !== "United States") {
        this.formData.state = "";
      }
    },
    formData: {
      handler() {
        if (this.isFormValid()) {
          this.canAddNewCard = true;
        } else {
          this.canAddNewCard = false;
        }
      },
      deep: true,
    },
  },
  setup() {
    const ticketStore = useTicketStore();
    return { ticketStore };
  },
  props: ["mode"],
  mounted() {
    if (this.mode === "edit") {
      this.formData = this.ticketStore.currentCreditCard;
    }
  },
  methods: {
    backStore() {
      this.ticketStore.currentCreditCard = null;
      this.ticketStore.showPaymentForm = false;
    },
    isFormValid() {
      if (
        this.formData.name === "" ||
        this.formData.cardNumber === "" ||
        this.formData.cardNumber.length !== 16 ||
        this.formData.expireDate === "" ||
        this.formData.securityCode === "" ||
        this.formData.address === "" ||
        this.formData.city === "" ||
        this.formData.postalCode === "" ||
        this.formData.phoneNumber === "" ||
        (this.formData.country === "United States" &&
          this.formData.state === "")
      ) {
        return false;
      }
      return true;
    },
    saveCard() {
      if (this.mode === "add") {
        this.ticketStore.addCreditCard(this.formData);
        if (this.ticketStore.creditCardList.length === 1) {
          this.ticketStore.creditCardSelected = this.formData.cardNumber;
        }
      } else {
        this.ticketStore.editCreditCard(this.formData);
      }
      this.ticketStore.showPaymentForm = false;
    },
  },
};
</script>
<style scoped>
.payment-credit {
  text-decoration: none;
}
.photos-change {
  width: 35px;
  height: 35px;
  text-decoration: none;
}
.add-address-line-2 {
  font-size: 14px;
  color: #026cdf;
}
</style>
