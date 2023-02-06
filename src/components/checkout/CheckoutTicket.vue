<template>
  <!-- Delivery -->
  <div class="card mt-4 p-2">
    <div class="card-body">
      <div class="d-flex delivery gap-2">
        <div>
          <h4>Delivery</h4>
        </div>
        <div>
          <font-awesome-icon icon="fa-regular fa-circle-check" />
        </div>
      </div>
      <div class="mt-2 delivery-free">
        <p>Go Mobile - Free</p>
      </div>
      <div class="deliverys text-secondary">
        <p>
          Your phone's your ticket. Locate your tickets in your account - orin
          your app. When you go mobile, your tickets will not be emailed to you
          or available for print.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
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
.fa-circle-check {
  color: rgb(27, 171, 30);
}
</style>
