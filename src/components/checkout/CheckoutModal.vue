<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="checkoutModal"
    tabindex="-1"
    aria-labelledby="checkoutModal"
    aria-hidden="true"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
  >
    <div class="modal-dialog">
      <div class="modal-content pt-5">
        <div class="modal-body text-center">
          <h3>ORDER SUCCESS</h3>
          <button
            type="button"
            class="btn btn-primary my-4 px-4"
            data-bs-dismiss="modal"
            @click="backHome"
          >
            OK
          </button>
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
    backHome() {
      this.ticketStore.clearState();
      this.$router.push(`/`);
    },
  },
};
</script>
