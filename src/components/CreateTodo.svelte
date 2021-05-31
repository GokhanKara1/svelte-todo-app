<script>
  import {TodoStore} from '../stores/TodoStore';
  import Button from '../shared/Button.svelte';

  let fields = { title: '', description: '', isDone: false};
  let errors = { title: '', description: ''};
  let valid = false;

  const submitHandler = () => {
      valid = true;

      // validate title
      if (fields.title.trim().length < 1) {
          valid = false;
          errors.title = 'Title a cannot be empty';
      } else {
          errors.title = '';
      }

      // validate description
      if (fields.description.trim().length < 1) {
          valid = false;
          errors.description = 'Description a cannot be empty';
      } else {
          errors.description = '';
      }


      // add new todo
      if (valid) {
          let todo = {...fields, id:Math.random()};
          // save todo to store
          TodoStore.update(currentTodos => {
              return [todo, ...currentTodos];
          });
          fields = { title: '', description: ''};
      }
};
</script>

<form on:submit|preventDefault={submitHandler}>
  <div class="form-field">
      <input class="title" placeholder="Title" type="text"  bind:value={fields.title}>
      <div class="error">{ errors.title }</div>
  </div>
  <div class="form-field">
      <input class="description"placeholder="Description" type="text"  bind:value={fields.description}>
      <div class="error">{ errors.description }</div>
  </div>
  
  <Button type="tertiary" flat={true} inverse={true}>Add To Do</Button>
</form>

<style>
  form{
      display: flex;
      margin: 0 auto;
      text-align: center;
  }
  .form-field{
      margin: 18px auto;
  }
  .title{
    margin: 3px 5px;
    width: 150px;
  }
  .description{
    margin: 3px 5px;
    width: 400px;
  }
  input{
      border-radius: 6px;
  }

  .error{
      font-weight: bold;
      font-size: 10px;
      color: #d91b42;
  }

</style>