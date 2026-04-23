import TodoItemEmpty from './TodoItemEmpty.jsx';
import TodoItem from './TodoItem.jsx';

export default function TodoList({todos, ...rest}){
    return(
        <ul className="todo__list">
            {/* 아무것도 없을 때, */}
            {todos.length === 0 && <TodoItemEmpty />}
            {/* 아무것도 없지 않을 때 */}
            {todos.length > 0 && todos.map((todo)=>
                <TodoItem key={todo.id} todo={todo} {...rest}/> 
                // 왜 todos는 ...rest 안에다가 왜 안 넣는거에오?
                // 이름있는 뭐시기는 지정해야한다.
            )}
        </ul>
    )
}