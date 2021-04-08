
function extodolist(){

  new Vue({
    el: '#app',
    data:{
      todos: [
        'Ripassare Vue', 'fare ex todo list', 'partecipa al recap'
      ],
      newTodo: ''
    },
    methods: {
      clickNewTodo: function(){

        if(this.newTodo.length > 0){

          this.todos.push(this.newTodo);

          this.newTodo= '';
        }


      },
      clickDeleteToDo: function(index){

        this.todos.splice(index,1);

      }
    }

  })
}

function init() {

    console.log('hello');
    extodolist()

}
$(init);
