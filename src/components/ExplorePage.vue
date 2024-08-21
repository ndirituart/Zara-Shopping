<template>
  <div>
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Explore</a>
          <button class="navbar-toggler" type="button" @click="toggleSearch">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="searchQuery">
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </header>
    <main>
      <div class="container scrollable-content">
        <div class="grid-container">
          <div class="grid-item" v-for="item in items" :key="item.id">
            <div class="card h-100">
              <img :src="item.image" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">{{ item.name }}</h5>
                <p class="card-text">Price: {{ item.price }}</p>
                <button class="btn btn-success" @click="addToCart(item)">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      items: [
      //   { id: 1, image: require('../assets/Belt.png'), name: 'Ladies Belt', price: 4.99, description: 'This is a ladies belt for pants and skirts made from leather' },
      //   { id: 2, image: require('../assets/Gold necklaces.png'), name: 'Gold Necklace', price: 9.99, description: 'This is a gold necklace.' },
      //   { id: 3, image: require('../assets/Handbag.png'), name: 'Handbag', price: 24.99, description: 'This is a leather handbag.' },
      //   { id: 4, image: require('../assets/Jacket.png'), name: 'Jacket', price: 34.99, description: 'This is a stylish jacket.' },
      //   { id: 5, image: require('../assets/Skirt.png'), name: 'Skirt', price: 19.99, description: 'This is a designer skirt.' },
      //   { id: 6, image: require('../assets/Blouses.png'), name: 'Blouse', price: 14.99, description: 'This is a casual blouse.' },
      //   { id: 7, image: require('../assets/Palazzo pants.png'), name: 'Palazzo Pants', price: 29.99, description: 'These are palazzo pants.' },
      //  // { id: 8, image: require('../assets/Gemstone earrings.png'), name: 'Gemstone Earrings', price: 49.99, description: 'These are gemstone earrings.' },
      //   { id: 8, image: require('../assets/Sundress.png'), name: 'A sundress', price: 49.99, description: 'This is a blue sundress' },
       ]
    };
  },
  methods: {
    toggleSearch() {
      // Toggle search bar on mobile devices
    },
    addToCart(item) {
      // Add item to cart
      this.$emit('add-to-cart', item);
    }
  }
};
</script>

<style scoped>
.scrollable-content {
  max-height: 80vh;
  overflow-y: auto;
  padding-top: 20px;
}

/* CSS Grid for responsive layout */
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 items per row */
  gap: 20px;
}

.grid-item {
  display: flex;
  flex-direction: column;
}

.card {
  margin-bottom: 20px;
  transition: transform 0.3s, box-shadow 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.card-img-top {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.card-body {
  padding: 10px;
}

.card-title {
  font-size: 16px;
  font-weight: bold;
}

.card-text {
  font-size: 14px;
  color: #666;
}

.btn {
  margin-bottom: 10px;
}

</style>
