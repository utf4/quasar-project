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
              :rules="[(val) => !!val || 'Enter email address', isValidEmail]"
            >
              <template v-slot:prepend>
                <q-avatar>
                  <img src="~assets/icons/email.svg" />
                </q-avatar>
              </template>
            </q-input>
            <q-input
              outlined
              v-model="phoneNumber"
              label="Phone Number"
              class="mt-20"
              :rules="[(val) => !!val || 'Enter Phone Number', isValidNumber]"
            >
              <template v-slot:prepend>
                <q-avatar>
                  <img src="~assets/icons/phone.svg" />
                </q-avatar>
              </template>
            </q-input>
          </div>
          <div class="mt-20 flex items-start gap-15">
            <q-checkbox v-model="val" />
            <p class="term">Sign up for exclusive offers and news</p>
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
                  :rules="[(val) => !!val || 'Enter a first name']"
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
                  :rules="[(val) => !!val || 'Enter a last name']"
                >
                  <template v-slot:prepend>
                    <q-avatar>
                      <img src="~assets/icons/user.svg" />
                    </q-avatar>
                  </template>
                </q-input>
              </div>
            </div>
            <q-input
              outlined
              v-model="shipAddress"
              label="Address"
              class="mt-20"
            >
              <template v-slot:prepend>
                <q-avatar>
                  <img src="~assets/icons/address.svg" />
                </q-avatar>
              </template>
            </q-input>
            <q-input
              outlined
              v-model="apertment"
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
                <q-input outlined v-model="city" label="City" class="mt-20" />
              </div>
              <div class="col">
                <q-input
                  outlined
                  v-model="postCode"
                  label="Post code"
                  class="mt-20"
                />
              </div>
            </div>
          </div>
          <h2 class="mt-50">Shipping method</h2>
          <div class="accodion-wapper mt-20">
            <div class="accodion-box mt-20">
              <button
                :class="{ active: state.shipingMethod === 1 }"
                @click="toggleShipingMethod(1)"
              >
                <span class="dot" />Free Shipping
              </button>
            </div>
            <div class="accodion-box mt-20">
              <button
                :class="{ active: state.shipingMethod === 2 }"
                @click="toggleShipingMethod(2)"
              >
                <span class="dot" />DHL with price
              </button>
            </div>
          </div>
          <h2 class="mt-50">Billing address</h2>
          <div class="accodion-wapper mt-20">
            <div class="accodion-box mt-20">
              <button
                :class="{ active: state.billingAddress === 1 }"
                @click="toggleBillingAddress(1)"
              >
                <span class="dot" />Same as shipping address
              </button>
            </div>
            <div class="accodion-box mt-20">
              <button
                :class="{ active: state.billingAddress === 2 }"
                @click="toggleBillingAddress(2)"
              >
                <span class="dot" />Use a different billing address
              </button>
              <div v-show="state.billingAddress === 2" class="mt-20">
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
                      v-model="text"
                      label="First Name"
                      class="mt-20"
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
                      v-model="text"
                      label="Last Name"
                      class="mt-20"
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
                    <q-input
                      outlined
                      v-model="text"
                      label="City"
                      class="mt-20"
                    />
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
          </div>
        </div>
        <div class="column-right">
          <div class="box">
            <h2>Order Summary</h2>
            <div class="flex column products">
              <div class="product-wapper">
                <div class="flex items-center">
                  <div class="product-img">
                    <img src="~assets/product.png" />
                    <span class="count">1</span>
                  </div>
                  <p>€69.00</p>
                </div>
                <p class="bold6">€69.00</p>
              </div>
            </div>
            <div class="flex items-center gap-24 coupon-code">
              <q-input
                outlined
                v-model="text"
                label="Discount code"
                class="col-auto"
              />
              <button>Apply</button>
            </div>
            <div class="price-list">
              <div class="price-list-items">
                <div class="flex justify-between">
                  <p>Subtotal</p>
                  <p class="bold6">€69.00</p>
                </div>
                <div class="flex justify-between">
                  <p>Shipping</p>
                  <p class="bold6">--</p>
                </div>
                <div class="flex justify-between">
                  <p>Discount</p>
                  <p class="bold6">--</p>
                </div>
              </div>
              <hr />
              <div class="flex justify-between">
                <p>Total</p>
                <p class="bold6">€69.00</p>
              </div>
            </div>
          </div>
          <div class="box">
            <div class="flex items-center justify-center gap-7">
              <img src="~/assets/icons/lock.svg" />
              <p class="small">
                Secure SSL Encryption & Guaranteed Safe Checkout
              </p>
            </div>
            <div class="flex items-center justify-center gap-7 mt-20">
              <img src="~/assets/icons/mastercard.svg" />
              <img src="~/assets/icons/visa.svg" />
              <img src="~/assets/icons/paypal.svg" />
              <img src="~/assets/icons/amex.svg" />
              <img src="~/assets/icons/jcb.svg" />
              <img src="~/assets/icons/dot.svg" />
            </div>
          </div>
          <div class="box">
            <h4>The ultimate jewellery club</h4>
            <p class="mt-12 small">
              Ornare rhoncus nunc ut felis. Faucibus dolor at ultrices
              tincidunt. Pulvinar sed justo et viverra pellentesque.
            </p>
            <div class="flex items-center gap-9 q-mb-xs mt-20">
              <img src="~/assets/icons/check.svg" />
              <p class="small">Extra 10$ off!</p>
            </div>
            <div class="flex items-center gap-9 q-mb-xs">
              <img src="~/assets/icons/check.svg" />
              <p class="small">Free shipping on marked club items!</p>
            </div>
            <div class="flex items-center gap-9">
              <img src="~/assets/icons/check.svg" />
              <p class="small">Free returns on marked club items!</p>
            </div>
          </div>
          <div class="box">
            <h2>Payment Method</h2>
            <div class="accodion-wapper mt-30">
              <div class="accodion-box">
                <div class="flex items-center justify-between">
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
                    v-model="text"
                    label="2587 9860 2354"
                    class="mt-20"
                  >
                    <template v-slot:prepend>
                      <q-avatar>
                        <img src="~assets/icons/card.svg" />
                      </q-avatar>
                    </template>
                  </q-input>
                  <q-input
                    outlined
                    v-model="text"
                    label="Name on the card"
                    class="mt-20"
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
                        v-model="text"
                        label="MM/YY"
                        class="mt-20"
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
                        v-model="text"
                        label="Post code"
                        class="mt-20"
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
                By checking this box, I acknowledge that I have read and agree
                to the <a>Terms of Service</a>, and <a>Monthly Billing</a> Terms
                of this website and want to opt-in for the monthly billed Dream
                Collection Club®
              </p>
            </div>
            <button class="purchase-button mt-30">Complete Purchase</button>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { reactive, ref } from 'vue'

export default {
  name: 'Checkout',
  methods: {
    isValidEmail() {
      const emailPattern =
        /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/
      return emailPattern.test(this.regEmail) || 'Enter a vaild email address'
    },
    isValidNumber() {
      const numberPatteren = /^\d{10}$/
      return numberPatteren.test(this.phoneNumber) || 'Enter valid phone number'
    }
  },
  setup() {
    const state = reactive({
      shipingMethod: 1,
      billingAddress: 1,
      paymentMethod: 1
    })
    const toggleShipingMethod = (buttonNumber) => {
      state.shipingMethod = buttonNumber
    }
    const toggleBillingAddress = (buttonNumber) => {
      state.billingAddress = buttonNumber
    }
    const togglePaymentMethod = (buttonNumber) => {
      state.paymentMethod = buttonNumber
    }

    return {
      model: ref(null),
      text: ref(''),
      regEmail: ref(''),
      phoneNumber: ref(''),
      firstName: ref(''),
      lastName: ref(''),
      shipAddress: ref(''),
      apertment: ref(''),
      city: ref(''),
      postCode: ref(''),

      options: ['USA', 'Austalia', 'UK', 'Germany'],
      dense: ref(false),
      denseOpts: ref(false),
      val: ref(true),
      state,
      toggleShipingMethod,
      toggleBillingAddress,
      togglePaymentMethod
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
      span.error-message {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
        color: #f53d6b;
        margin-top: 5px;
        display: inline-block;
      }
      .purchase-button {
        width: 100%;
        background: #000034;
        border-radius: 16px;
        cursor: pointer;
      }
      .mt-20 {
        margin-top: 20px;
      }
      .mt-30 {
        margin-top: 30px;
      }
      .mt-50 {
        margin-top: 50px;
      }
      .mt-12 {
        margin-top: 12px;
      }
      .accodion-wapper {
        .accodion-box {
          width: 100%;
          background: rgba(239, 240, 245, 0.4);
          border-radius: 16px;
          padding: 20px;
        }
        button {
          background: transparent;
          border-radius: 16px;
          padding: 0px;
          min-height: auto;
          border: none;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 24px;
          color: #4b4e68;
          cursor: pointer;
          .dot {
            min-height: 24px;
            min-width: 24px;
            background-color: transparent;
            border: 1px solid #d5d0df;
            border-radius: 100%;
            margin-right: 10px;
            position: relative;
          }
          &.active {
            .dot {
              border: 1px solid #4b4e68;
              &:before {
                content: '';
                height: 12px;
                width: 12px;
                background: #4b4e68;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                border-radius: 50%;
              }
            }
          }
        }
      }
      .gap-24 {
        column-gap: 24px;
      }
      .gap-7 {
        column-gap: 7px;
        row-gap: 7px;
      }
      .gap-9 {
        column-gap: 9px;
        row-gap: 9px;
      }
      .gap-15 {
        column-gap: 15px;
        row-gap: 15px;
      }
      .product-wapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 30px 0;
        .product-img {
          width: 55px;
          height: 52px;
          border-radius: 8px;
          position: relative;
          margin-right: 20px;
          img {
            height: 100%;
            width: 100%;
            border-radius: 8px;
            object-fit: cover;
            object-position: center;
          }
          .count {
            position: absolute;
            top: -6px;
            right: -6px;
            color: #ffffff;
            background: #4b4e68;
            min-width: 18px;
            min-height: 18px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 100%;
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 500;
            font-size: 12px;
            line-height: 12px;
          }
        }
      }
      .coupon-code {
        .q-field {
          flex: 1;
        }
        button {
          min-width: 130px;
          border-radius: 16px;
        }
      }
      .price-list {
        margin-top: 30px;
        p {
          line-height: 26px;
        }
        .price-list-items {
          display: flex;
          flex-direction: column;
          row-gap: 15px;
        }
        hr {
          border-color: #d6d8ea;
          margin: 10px 0;
        }
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
        &.bold6 {
          font-weight: 600;
        }
        &.small {
          font-size: 14px;
        }
        &.term {
          width: calc(100% - 50px);
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
      h4 {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 27px;
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
      .q-field,
      .q-field__inner,
      .q-field--focused,
      .q-field--highlighted,
      .q-field__control {
        outline: none !important;
        &:after {
          outline: none !important;
        }
        &:before {
          outline: none !important;
        }
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
      .q-checkbox {
        .q-checkbox__inner {
          height: 20px;
          width: 20px;
          font-size: revert;
          &:before {
            display: none;
          }
          .q-checkbox__bg {
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
            border-radius: 2px;
            color: #4b4e68;
            position: relative;
          }
        }
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
        margin-bottom: 30px;
      }
    }
  }
}
</style>
