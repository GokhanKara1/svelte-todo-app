<script>
  import { TodoStore } from "../stores/TodoStore";
  import Button from "../shared/Button.svelte";
  import TodoUpdateDialog from "./TodoUpdateDialog.svelte";
  export let todo;

  let showUpdateForm = false;

  // change status
  const changeStatus = (id) => {
    TodoStore.update((currentTodos) => {
      let copiedTodos = [...currentTodos];
      let updatedStatus = copiedTodos.find((todo) => todo.id == id);
      updatedStatus.isDone = !updatedStatus.isDone;
      return copiedTodos;
    });
  };
  // update to do
  const updateTodo = (id) => {
    TodoStore.update((currentTodos) => {
      let copiedTodos = [...currentTodos];
      let updatedStatus = copiedTodos.find((todo) => todo.id == id);
      updatedStatus = {
        title: todo.title,
        description: todo.description,
      };
      return copiedTodos;
    });
    toggleModal();
  };

  let toggleModal = () => {
    showUpdateForm = !showUpdateForm;
  };

  // deleting a todo
  const handleDelete = (id) => {
    TodoStore.update((currentTodos) => {
      return currentTodos.filter((todo) => todo.id != id);
    });
  };
</script>

<TodoUpdateDialog {showUpdateForm} on:click={toggleModal}>
  <h3>Update To Do</h3>
  <form on:submit|preventDefault={updateTodo} >
    <div class="form-field">
      <label for="">Title</label>
      <input
        class="title"
        placeholder="Title"
        type="text"
        bind:value={todo.title}
      />
    </div>
    <div class="form-field">
      <label for="">Description</label>
      <input
        class="description"
        placeholder="Description"
        type="text"
        bind:value={todo.description}
      />
    </div>
    <Button type="tertiary" flat={true} inverse={true}>Update</Button>
  </form>
</TodoUpdateDialog>

<div class="detail" on:dblclick={toggleModal}>
  <div class:text={todo.isDone}>
    <h1 class:done={todo.isDone}>{todo.title}</h1>
    <p class:done={todo.isDone}>{todo.description}</p>
  </div>
  <div>
    {#if todo.isDone}
      <Button
        type="quaternary"
        flat={true}
        inverse={true}
        on:click={() => changeStatus(todo.id)}>Recall</Button
      >
    {:else}
      <Button
        type="secondary"
        flat={true}
        inverse={true}
        on:click={() => changeStatus(todo.id)}>Complete</Button
      >
    {/if}
    <Button
      type="primary"
      flat={true}
      inverse={true}
      on:click={() => handleDelete(todo.id)}>Delete</Button
    >
  </div>
</div>

<style>
  
  form {
    display: block;
    margin: 0 auto;
    text-align: center;
  }
  .form-field {
    margin: 18px auto;
  }
  .title {
    margin: 3px 5px;
    width: 150px;
  }
  .description {
    margin: 3px 5px;
    width: 400px;
  }
  label{
    color: #ff3e00;
    margin-left: 7px;
  }
  input {
    border-radius: 6px;
  }
  div {
    text-align: left;
  }
  p {
    color: #45526c;
    padding: 3px;
    margin: 0;
    font: 15px Arial, sans-serif;
  }
  .done{
    color: #45526c;
  }
  h1 {
    font-weight: lighter;
    color: #ff3e00;
    font-size: 1em;
    padding: 3px;
    margin: 0;
  }
  .text {
    text-decoration: line-through;
  }
  .detail {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }
  .detail:hover {
    background: #f8f8f6;
  }
</style>
