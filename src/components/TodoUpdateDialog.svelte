<script>
  export let showUpdateForm = false;

</script>
{#if showUpdateForm}
  <div class="backdrop" on:click|self>
    <div class="modal">
      <slot></slot>
    </div>
  </div>
{/if}

<style>
  .backdrop{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0%;
    left: 50%;
    transform: translate(-50%);
    background: rgba(0,0,0,0.8);
  }
  .modal{
    padding: 10px;
    border-radius: 10px;
    max-width: 400px;
    margin: 10% auto;
    text-align: center;
    background: white;
  }
  
</style>