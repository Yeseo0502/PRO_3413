import { useState } from 'react'
import CounterApp from './CounterApp.jsx'
import TodoListApp from './TodoListApp.jsx'

function ButtonPageApp({setPage}){
    return (
        <>
            <h1>App 목록</h1>
            <ul>
                <li><button onClick={() => setPage('counterapp')} style={{width: '100px', fontSize: '2rem', height: "100px"}}>🧮</button></li>
                <li><button onClick={() => setPage('todolistapp')} style={{width: '100px', fontSize: '2rem', height: "100p"}}>✅</button></li>
            </ul>
        </>
    );
}
export default function HomeApp(){
    const [page,setPage] = useState('home'); //'home','counterapp','todolistapp'

    return(
        <>
            {/* //home일 때 COunterApp, TodoListApp 링크 페이지 보여주자 */}
            {page === 'home' && <ButtonPageApp setPage={setPage}/>}
            {/* home 아니면 home 버튼 보여주자. */}
            {page !== 'home' **
                <button onClick={() => setPage('home')}
                    style={{
                        position: 'fixed',
                        left: '10px',
                        bottom: '10px',
                        cursor: 'pointer',
                        borderRadius: '8px',
                        padding: '8px 12px',
                        backgroundColor: '#eee',
                        border: 'none',
                    }}
                >호옴🛖</button>
            }
            {/* //counterapp일 떄 CoutnerApp 보여주자 */}
            {page === 'counterapp' && <CounterApp />}
            {/* //todolistapp일 때 TodoListApp 보여주자 */}
            {page === 'todolistapp' && <TodoListApp />}
        </>
    );
}