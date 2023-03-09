<template>
  <q-page class="page-bg">
    <div class="container">
      <div class="upsell-page-layout">
        <div class="slider"><Slider /></div>
        <div class="box mt-30 flex column justify-centet items-center">
          <div class="flex items-center price-box gap-12">
            <p>Price:</p>
            <h4>$50</h4>
            <p class="discount">-80%</p>
          </div>
          <div class="quantity-box mt-30">
            <p class="text">Quantity:</p>
            <button><img src="~/assets/icons/minus.svg" /></button>
            <p class="text">1</p>
            <button><img src="~/assets/icons/plus.svg" /></button>
          </div>
        </div>
        <p class="mt-40">
          Ornare rhoncus nunc ut felis. Faucibus dolor at ultrices tincidunt.
          Pulvinar sed justo et viverra pellentesque. <br /><br />Mauris augue
          nulla proin vel a. Facilisis fringilla molestie dignissim elit orci
          malesuada. Lorem sit sagittis vitae nulla id. Mauris ipsum sed sed
          faucibus. Nulla amet metus gravida orci faucibus nisl eros arcu lorem.
          Nullam ornare molestie nam id gravida volutpat bibendum sem feugiat.
          Neque vulputate in et maecenas porta mi tellus. In massa porttitor
          urna quis volutpat at.
        </p>
        <div class="flex items-stretch mt-40 gap-30 two-box">
          <div class="box small">
            <div class="flex items-center justify-center gap-7">
              <img src="~/assets/icons/lock.svg" />
              <p class="small">Guaranteed Safe & Secure Checkout</p>
            </div>
            <div class="flex items-center justify-center gap-15 mt-30">
              <img src="~/assets/icons/mastercard.svg" />
              <img src="~/assets/icons/visa.svg" />
              <img src="~/assets/icons/paypal.svg" />
              <img src="~/assets/icons/amex.svg" />
              <img src="~/assets/icons/jcb.svg" />
              <img src="~/assets/icons/dot.svg" />
            </div>
          </div>
          <div class="box small flex items-center justify-center gap-30">
            <img src="~/assets/icons/help.svg" />
            <div>
              <p class="large">
                <span>24/7</span><br />
                Support
              </p>
            </div>
          </div>
        </div>
        <div class="action-btns">
          <button>
            Yes, I want <img src="~/assets/icons/arrow.svg" class="q-ml-md" />
          </button>
          <p class="bold mt-30 pointer">No, Thanks</p>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import Slider from '../components/Slider.vue'
export default {
  components: {
    Slider
  },
  setup() {
    return {}
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
    .upsell-page-layout {
      max-width: 790px;
      margin: 0 auto;
      .pointer {
        cursor: pointer;
      }
      .slider {
        overflow: hidden;
        position: relative;
        min-height: 520px;
        border-radius: 32px;
      }
      .box {
        background: #ffffff;
        border-radius: 16px;
        padding: 40px;
        &.small {
          padding: 30px;
        }
      }
      .price-box {
        p {
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
          font-size: 30px;
          line-height: 40px;
          color: #000034;
        }
        .discount {
          background: #eff0f5;
          border-radius: 8px;
          padding: 3px 15px;
        }
      }
      .quantity-box {
        background-color: rgba(239, 240, 245, 0.5);
        padding: 15px;
        min-height: 80px;
        max-width: 540px;
        width: 100%;
        border-radius: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        column-gap: 30px;
        .text {
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 500;
          font-size: 20px;
          line-height: 30px;
          color: #4b4e68;
        }
        button {
          width: 57px;
          height: 50px;
          background: #ffffff;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 0;
        }
      }
      .two-box {
        .box:first-child {
          max-width: 475px;
          width: 100%;
        }
        .box:last-child {
          max-width: 285px;
          width: 100%;
        }
      }
      .action-btns {
        margin-top: 70px;
        display: flex;
        flex-direction: column;
        align-items: center;
        button {
          min-height: 76px;
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 600;
          font-size: 24px;
          line-height: 33px;
          color: #ffffff;
          background: #050824;
          border-radius: 16px;
          min-width: 281px;
          cursor: pointer;
        }
        p {
        }
      }
      hr {
        border: 0;
        border-top: 1px solid #d6d8ea;
      }

      .mt-20 {
        margin-top: 20px;
      }
      .mt-30 {
        margin-top: 30px;
      }
      .mt-40 {
        margin-top: 40px;
      }
      .mt-12 {
        margin-top: 12px;
      }

      .gap-7 {
        column-gap: 7px;
        row-gap: 7px;
      }
      .gap-12 {
        column-gap: 12px;
        row-gap: 12px;
      }

      .gap-15 {
        column-gap: 15px;
        row-gap: 15px;
      }
      .gap-30 {
        column-gap: 30px;
        row-gap: 30px;
      }
      p {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 28px;
        color: #4b4e68;
        &.bold {
          font-weight: 600;
          line-height: 24px;
        }
        &.small {
          font-size: 16px;
          line-height: 26px;
          color: #4b4e68;
        }
        &.large {
          font-weight: 400;
          font-size: 20px;
          line-height: 30px;
          span {
            font-weight: 600;
          }
        }
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
  }
}
</style>
