<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="cancelModal"
    tabindex="-1"
    aria-labelledby="cancelModal"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="cancel-order">
          <div class="h4 py-2 px-4">
            Are You Sure You Want to Leave Checkout?
          </div>
          <div class="py-2 px-4">
            <p>
              If you leave this page, you'll lose your chance to purchase these
              tickets.
            </p>
          </div>

          <div class="d-flex justify-content-end gap-3 py-2">
            <button
              type="button"
              class="btn text-primary btn-sm"
              data-bs-dismiss="modal"
              @click="clearState"
            >
              Cancle Order
            </button>
            <button
              type="button"
              class="btn btn-primary btn-sm"
              data-bs-dismiss="modal"
            >
              Stay in Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
};
</script>
<style scoped>
.cancel-order {
  margin: 25px;
}
</style>
