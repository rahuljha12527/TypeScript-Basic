function showTodo(todo:{title:string,text:string}){
    console.log(todo.title+' '+todo.text);
}

let myTodo={title:'Trash',text:'Take out trash'}
showTodo(myTodo);