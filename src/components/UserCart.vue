<template>
  <div>
    <h2>Cart</h2>
    <ul>
      <li v-for="item in cart" :key="item.id">
        {{ item.name }} ({{ item.price }})
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: []
    }
  },
  methods: {
    addToCart(item) {
      this.cart.push(item);
    }
  }
}
</script>
