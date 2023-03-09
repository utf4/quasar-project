<template>
  <div class="box">
    <h2>Payment Method</h2>
    <div class="accodion-wapper mt-30">
      <div class="accodion-box">
        <div class="flex items-md-center justify-between">
          <button
            :class="{ active: state.paymentMethod === 1 }"
            @click="togglePaymentMethod(1)"
          >
            <span class="dot" />Credit Card
          </button>
          <div class="flex items-center justify-center gap-7">
            <img src="~/assets/icons/mastercard.svg" />
            <img src="~/assets/icons/visa.svg" />
            <img src="~/assets/icons/amex.svg" />
            <img src="~/assets/icons/more.svg" />
          </div>
        </div>
        <div v-show="state.paymentMethod === 1" class="mt-20">
          <q-input
            outlined
            v-model="cardNumber"
            label="2587 9860 2354"
            class="mt-20"
            :rules="[(val) => !!val || 'Enter Card Number', isValidCardNumber]"
          >
            <template v-slot:prepend>
              <q-avatar>
                <img src="~assets/icons/card.svg" />
              </q-avatar>
            </template>
          </q-input>
          <q-input
            outlined
            v-model="cardHolderName"
            label="Name on the card"
            class="mt-20"
            :rules="[(val) => !!val || 'Enter card Holder Name']"
          >
            <template v-slot:prepend>
              <q-avatar>
                <img src="~assets/icons/user.svg" />
              </q-avatar>
            </template>
          </q-input>
          <div class="two-fields-row">
            <div class="col">
              <q-input
                outlined
                v-model="cardDate"
                label="MM/YY"
                class="mt-20"
                :rules="[(val) => !!val || 'Enter card Date']"
              >
                <template v-slot:prepend>
                  <q-avatar>
                    <img src="~assets/icons/calender.svg" />
                  </q-avatar>
                </template>
              </q-input>
            </div>
            <div class="col">
              <q-input
                outlined
                v-model="cardCode"
                label="Post code"
                class="mt-20"
                :rules="[(val) => !!val || 'Enter Card Post Code']"
              >
                <template v-slot:prepend>
                  <q-avatar>
                    <img src="~assets/icons/lock2.svg" />
                  </q-avatar>
                </template>
              </q-input>
            </div>
          </div>
        </div>
      </div>
      <div class="accodion-box mt-20">
        <div class="flex items-center justify-between">
          <button
            :class="{ active: state.paymentMethod === 2 }"
            @click="togglePaymentMethod(2)"
          >
            <span class="dot" />Paypal
          </button>
          <img src="~/assets/icons/paypal-long.svg" />
        </div>
      </div>
    </div>
    <div class="mt-20 flex items-start gap-15">
      <q-checkbox v-model="val" />
      <p class="small term">
        By checking this box, I acknowledge that I have read and agree to the
        <a>Terms of Service</a>, and <a>Monthly Billing</a> Terms of this
        website and want to opt-in for the monthly billed Dream Collection Club®
      </p>
    </div>
    <button class="purchase-button mt-30">Complete Purchase</button>
  </div>
</template>
<script>
import { reactive, ref } from 'vue'
export default {
  methods: {
    isValidCardNumber() {
      const cardNumberPatrent = /^[0-9]{13,19}$/
      return (
        cardNumberPatrent.test(this.cardNumber) || 'Enter valid card number'
      )
    }
  },
  setup() {
    const state = reactive({
      shipingMethod: 1,
      billingAddress: 1,
      paymentMethod: 1
    })
    const togglePaymentMethod = (buttonNumber) => {
      state.paymentMethod = buttonNumber
    }
    return {
      cardNumber: ref(''),
      cardHolderName: ref(''),
      cardDate: ref(''),
      cardCode: ref(''),
      discountCode: ref(''),
      val: ref(true),
      togglePaymentMethod,
      state
    }
  }
}
</script>
<style>
.q-field--outlined .q-field__control:before {
  border: 1px solid #d6d8ee;
  border-radius: 16px;
  background-color: white;
  z-index: 0;
}
.q-field--outlined.q-field--highlighted .q-field__control:after {
  border-radius: 16px !important;
}
.q-field__prepend {
  z-index: 1;
}
.q-field--outlined .q-field__control {
  padding: 0px 25px;
}
</style>
