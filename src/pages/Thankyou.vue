<template>
  <q-page class="page-bg">
    <div class="container">
      <div class="page-layout">
        <div class="column-left flex column items-center">
          <img src="~assets/thanks.svg" />
          <h2 class="mt-34">Thank you for your order</h2>
          <p>Your order is confirmed</p>
          <button class="back-btn mt-40">
            <img src="~assets/icons/backarrow.svg" class="q-mr-sm" />Back to
            Shop
          </button>
          <div class="content-box mt-40">
            <div class="flex items-center gap-15">
              <p class="attr">Name:</p>
              <p>Oleo Bone</p>
            </div>
            <hr />
            <div class="flex items-center gap-15">
              <p class="attr">Email:</p>
              <p>oleo_bone@gmail.com</p>
            </div>
            <hr />
            <div class="flex items-center gap-15">
              <p class="attr">Ship to:</p>
              <p>4140 Parker Rd. Allentown, New Mexico 31134</p>
            </div>
            <hr />
            <div class="flex items-center gap-15">
              <p class="attr">Bill to:</p>
              <p>4140 Parker Rd. Allentown, New Mexico 31134</p>
            </div>
            <hr />
            <div class="flex items-center gap-15">
              <p class="attr">Payment:</p>
              <p>Credit Card</p>
            </div>
          </div>
        </div>
        <div class="column-right">
        <OrderDetail
            :productList="itemsList"
            :Subtotal="Subtotal"
            :totalPrice="totalPrice"
            :showDiscount="showDiscount"
          />
          <SecureSection />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import OrderDetail from 'components/checkout/OrderDetail.vue'
import SecureSection from 'components/checkout/Secure.vue'
export default {
  components: {
    OrderDetail: OrderDetail,
    SecureSection: SecureSection
  },
  setup() {
    return {
      totalPrice: 69.0,
      Subtotal: 69.0,
      showDiscount: false,
      itemsList: [
        {
          imgerc: 'product.png',
          name: 'Nike sneakers',
          count: 1,
          price: 69.0
        }
      ]
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
      .content-box {
        background: rgba(239, 240, 245, 0.4);
        border-radius: 16px;
        padding: 40px;
        max-width: 540px;
        width: 100%;
        .attr {
          min-width: 100px;
        }
        p {
          font-size: 14px;
          line-height: 24px;
        }
      }
      hr {
        border: 0;
        border-top: 1px solid #d6d8ea;
      }

      .back-btn {
        width: 213px;
        min-height: 56px;
        background: #000034;
        border-radius: 16px;
        cursor: pointer;
      }
      .mt-20 {
        margin-top: 20px;
      }
      .mt-34 {
        margin-top: 34px;
      }
      .mt-40 {
        margin-top: 40px;
      }
      .mt-12 {
        margin-top: 12px;
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

      .price-list {
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
        line-height: 26px;
        color: #4b4e68;
        &.bold6 {
          font-weight: 600;
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
        font-weight: 600;
        font-size: 24px;
        line-height: 34px;
        color: #000034;
        margin-bottom: 5px;
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
    }
    .column-left {
      background-color: #ffffff;
      border-radius: 16px;
      max-width: 975px;
      width: 100%;
      padding: 60px 40px;
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
