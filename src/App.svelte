<script>
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import CreateTodo from "./components/CreateTodo.svelte";
  import TodoList from "./components/TodoList.svelte";
</script>

<Header />
<main>
  <div>
    <h1>To Do List</h1>
    <div class="create-todo">
      <CreateTodo />
    </div>
    <div class="create-todo">
      <TodoList />
    </div>
  </div>
</main>
<Footer />

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 720px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
  .create-todo {
    border: 0;
    border-radius: 6px;
    padding: 8px 12px;
    font-weight: bold;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  }
</style>
