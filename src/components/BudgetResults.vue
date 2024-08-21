<template>
  <div>
    <h1>Budget Allocation Results</h1>
    <div v-if="allocation">
      <p>Facebook: {{ allocation.facebook }}</p>
      <p>LinkedIn: {{ allocation.linkedin }}</p>
      <p>Instagram: {{ allocation.instagram }}</p>
      <p>WhatsApp: {{ allocation.whatsapp }}</p>
    </div>
    <div v-else>
      <p>No allocation data available.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BudgetResults',
  data() {
    return {
      allocation: null
    };
  },
  created() {
    this.allocation = this.$route.params.allocation;
  }
};
</script>

<style scoped>
/* Add any necessary styles here */
</style>
