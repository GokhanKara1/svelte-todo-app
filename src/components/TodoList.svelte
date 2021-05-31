<script>
  import { TodoStore } from "../stores/TodoStore";
  import TodoDetails from "./TodoDetails.svelte";
</script>

<div class="todo-list">
  {#each $TodoStore as todo (todo.id)}
    <hr />
    <TodoDetails {todo} />
  {:else}
    <p style="font-weight: lighter;">Nothing.....</p>
  {/each}
</div>

<style>
</style>
