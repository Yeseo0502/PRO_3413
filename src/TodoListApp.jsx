import { useState } from "react";

function TodoListApp(){
    return(
        <>
        <div>
            <h1>HyeonDo List</h1>
        </div>
        <form>
            <input type="text" />
            <button type="submit">Add</button>
        </form>
        <ul>
            <li>
                <input type="checkbox" id="chk-1"/>
                <label htmlFor="chk-1">지각 하기</label>
                <button>✏️</button>
                <button>❌</button>
            </li>
            <li>
                <input type="checkbox" id="chk-2"/>
                <label htmlFor="chk-2">롤체 in dawn</label>
                <button>✏️</button>
                <button>❌</button>
            </li>
        </ul>
        </>
    );
}

export default TodoListApp;