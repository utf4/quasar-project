<template>
  <q-page class="page-bg">
    <div class="container">
      <div class="page-layout">
        <div class="column-left">
          <h1 class="page-title">Checkout</h1>
          <div class="sub-title">
            Strong demand! Complete your order before it's too late!
          </div>
          <div class="order-reseved-timer">
            <p class="bold">Your cart is reserved for 10:00 minutes.</p>
          </div>
          <div class="express-checkout-box">
            <h3>Express Checkout</h3>
            <div class="express-checkout-btns">
              <button class="flex flex-center">
                <img src="~assets/shop-pay.png" />
              </button>
              <button class="paypal flex flex-center">
                <img src="~assets/paypal.png" />
              </button>
              <button class="g-pay flex flex-center">
                <img src="~assets/g-pay.png" />
              </button>
            </div>
          </div>
          <div class="warrenty-box">
            <div class="flex justify-between items-center">
              <div>
                <h3>Lifetime Warranty🔥</h3>
                <p>
                  Add a lifetime warranty & enjoy peace of mind for life with
                  your dream collections order for just $4.99
                </p>
              </div>
              <button>Add- $4.99</button>
            </div>
          </div>
          <h2>Contact information</h2>
          <div class="mt-20">
            <q-input
              outlined
              v-model="regEmail"
              label="Email Address"
              class="mt-20"
              type="email"
              :rules="[val => !!val || 'Enter email address', isValidEmail,]"
            >
              <template v-slot:prepend>
                <q-avatar>
                  <img src="~assets/icons/email.svg" />
                </q-avatar>
              </template>
            </q-input>
            <q-input outlined v-model="phoneNumber" label="Phone Number" class="mt-20" :rules="[val => !!val || 'Enter Phone Number', isValidNumber,]">
              <template v-slot:prepend>
                <q-avatar>
                  <img src="~assets/icons/phone.svg" />
                </q-avatar>
              </template>
            </q-input>
          </div>
          <h2 class="mt-50">Shipping address</h2>
          <div class="mt-20">
            <q-select
              class="form-field"
              outlined
              v-model="model"
              :options="options"
              :dense="dense"
              :options-dense="denseOpts"
              label="Select a Country"
            >
              <template v-slot:prepend>
                <img src="~assets/icons/location.svg" />
              </template>
            </q-select>
            <div class="two-fields-row">
              <div class="col">
                <q-input
                  outlined
                  v-model="firstName"
                  label="First Name"
                  class="mt-20"
                  :rules="[val => !!val || 'Enter a first name',]"
                >
                  <template v-slot:prepend>
                    <q-avatar>
                      <img src="~assets/icons/user.svg" />
                    </q-avatar>
                  </template>
                </q-input>
              </div>
              <div class="col">
                <q-input
                  outlined
                  v-model="lastName"
                  label="Last Name"
                  class="mt-20"
                  :rules="[val => !!val || 'Enter a last name',]"
                >
                  <template v-slot:prepend>
                    <q-avatar>
                      <img src="~assets/icons/user.svg" />
                    </q-avatar>
                  </template>
                </q-input>
              </div>
            </div>
            <q-input outlined v-model="text" label="Address" class="mt-20">
              <template v-slot:prepend>
                <q-avatar>
                  <img src="~assets/icons/address.svg" />
                </q-avatar>
              </template>
            </q-input>
            <q-input
              outlined
              v-model="text"
              label="Aparment, suit, etc (Optional)"
              class="mt-20"
            >
              <template v-slot:prepend>
                <q-avatar>
                  <img src="~assets/icons/appartment.svg" />
                </q-avatar>
              </template>
            </q-input>
            <div class="two-fields-row">
              <div class="col">
                <q-input outlined v-model="text" label="City" class="mt-20" />
              </div>
              <div class="col">
                <q-input
                  outlined
                  v-model="text"
                  label="Post code"
                  class="mt-20"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="column-right">
          <div class="box">.col</div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Checkout',
  methods: {
    isValidEmail() {
      const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/
      return emailPattern.test(this.regEmail) || 'Enter a vaild email address'
    },
    isValidNumber() {
      const numberPatteren = /^\d{10}$/
      return numberPatteren.test(this.phoneNumber) || 'Enter valid phone number'
    }
  },
  setup() {
    return {
      model: ref(null),
      text: ref(''),
      regEmail: ref(''),
      phoneNumber: ref(''),
      firstName: ref(''),
      lastName: ref(''),

      options: ['USA', 'Austalia', 'UK', 'Germany'],

      dense: ref(false),
      denseOpts: ref(false)
    }
  }
}
</script>

<style lang="scss">
.page-bg {
  background-color: #d6d8ea;
  .container {
    max-width: 1600px;
    margin: 0 auto;
    padding: 60px 20px;
    .page-layout {
      display: flex;
      column-gap: 30px;
      .mt-20 {
        margin-top: 20px;
      }
      .mt-50 {
        margin-top: 50px;
      }
      p {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: #4b4e68;
        &.bold {
          font-weight: 500;
        }
      }
      h1.page-title {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        line-height: 46px;
        color: #000034;
        margin-bottom: 50px;
      }
      h2 {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 34px;
        color: #000034;
      }
      h3 {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 30px;
        color: #000034;
      }
      button {
        background: #000034;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 56px;
        color: #ffffff;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
      }
      .sub-title {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;
        color: #4b4e68;
      }
      .order-reseved-timer {
        background: #ebecf3;
        border-radius: 16px;
        padding: 18px 25px;
        margin: 20px 0 30px;
      }
      .express-checkout-box {
        background: #ffffff;
        border: 1px solid #d6d8ee;
        border-radius: 16px;
        margin-bottom: 20px;
        padding: 30px;
        .express-checkout-btns {
          display: flex;
          column-gap: 20px;
          flex-wrap: wrap;
          margin-top: 20px;
          row-gap: 20px;
          button {
            width: 147px;
            height: 50px;
            background: rgba(90, 49, 244, 0.1);
            border: 1px solid rgba(90, 49, 244, 0.6);
            border-radius: 16px;
            &.paypal {
              background: rgba(17, 57, 132, 0.1);
              border: 1px solid rgba(17, 57, 132, 0.6);
            }
            &.g-pay {
              background: rgba(234, 64, 50, 0.1);
              border: 1px solid rgba(234, 64, 50, 0.6);
            }
          }
        }
      }
      .warrenty-box {
        background: #f5f5f8;
        border-radius: 16px;
        padding: 30px;
        margin-bottom: 50px;
        h3 {
          margin-bottom: 7px;
        }
        p {
          font-size: 14px;
          line-height: 24px;
          max-width: 635px;
        }
        button {
          font-weight: 500;
          max-width: 115px;
          padding: 11px 35px;
        }
      }
      .two-fields-row {
        display: flex;
        align-items: center;
        column-gap: 24px;
      }
      .q-field {
        outline: none !important;
      }
      .q-field__label {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        color: #979ab8;
      }
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
      .q-field__marginal .q-avatar {
        font-size: 18px;
        border-radius: 0;
      }
    }
    .column-left {
      background-color: #ffffff;
      border-radius: 16px;
      max-width: 975px;
      width: 100%;
      padding: 40px;
    }
    .column-right {
      max-width: 595px;
      width: 100%;

      .box {
        background-color: #ffffff;
        border-radius: 16px;
        padding: 40px;
      }
    }
  }
}
</style>
