<template>
  <div class="box">
    <h2>Order Summary</h2>
    <div class="flex column products">
      <div v-for="item in productList" v-bind:key="item" class="product-wapper">
        <div class="flex items-center">
          <div class="product-img">
            <img :src="item.imgerc" />
            <span class="count">{{ item.count }}</span>
          </div>
          <p>{{ item.name }}</p>
        </div>
        <p class="bold6">{{ item.price }}.00</p>
      </div>
    </div>
    <div v-if="showDiscount" class="flex items-center gap-24 coupon-code">
      <q-input
        outlined
        v-model="discountCode"
        label="Discount code"
        class="col-auto"
      />
      <button>Apply</button>
    </div>
    <div class="price-list">
      <div class="price-list-items">
        <div class="flex justify-between">
          <p>Subtotal</p>
          <p class="bold6">€{{ Subtotal }}.00</p>
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
        <p class="bold6">€{{ totalPrice }}.00</p>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  name: 'OrderDetail',
  props: {
    productList: {
      type: Array
    },
    Subtotal: {
      type: String
    },
    totalPrice: {
      type: String
    },
    showDiscount: {
      type: Boolean
    }
  },
  setup() {
    return {
      discountCode: ref(''),
      itemsList: [
        {
          imgerc: 'img/product.png',
          name: 'Nike sneakers',
          count: 1,
          price: 69.0
        }
      ]
    }
  }
}
</script>
