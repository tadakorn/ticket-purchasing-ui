<template>
  <!-- Delivery -->
  <div class="card mt-4 p-4">
    <div class="card-body">
      <div class="delivery">
        <h4>Delivery</h4>
      </div>
      <div class="mt-4 delivery-free">
        <p>{{ moblie }}</p>
      </div>
      <div class="deliverys">
        <p>
          {{ mobliefree }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      moblie: "Go Mobile - Free",
      mobliefree:
        "Your phone's your ticket. Locate your tickets in your account - orin your app. When you go mobile, your tickets will not be emailed to you or available for print.",
    };
  },
};
</script>

<style scoped>
.delivery {
  font-size: 20px;
  font-weight: 600;
}
.delivery-free {
  font-weight: 500;
}
.deliverys {
  font-size: 14px;
  font-weight: 400;
}
</style>
