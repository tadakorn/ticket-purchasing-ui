<template>
  <!-- Modal -->
  <div
    class="modal fade"
    ref="modal"
    id="orderExpiredModal"
    tabindex="-1"
    aria-labelledby="orderExpiredModal"
    aria-hidden="true"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="order-expired">
          <div class="h4 py-2 px-4">Sorry... Time's Up.</div>
          <div class="py-2 px-4">
            <p>The time limit gives all fans a fair shot at tickets.</p>
          </div>

          <div class="d-flex justify-content-end py-2">
            <button
              type="button"
              class="btn btn-primary btn"
              data-bs-dismiss="modal"
              @click="clearState"
            >
              Try Again Now
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from "bootstrap";
import { useTicketStore } from "../../stores/ticket";

export default {
  setup() {
    const ticketStore = useTicketStore();
    return { ticketStore };
  },
  methods: {
    clearState() {
      this.ticketStore.clearState();
      this.$router.push(`/`);
    },
  },
  mounted() {
    const modalRef = this.$refs.modal;
    let modalInstance = new Modal(modalRef);
    modalInstance.show();
  },
};
</script>

<style scoped>
.order-expired {
  margin: 25px;
}
</style>
