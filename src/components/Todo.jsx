import * as React from 'react';
import ReactDom from 'react-dom';
const Todo = () => {
    return (
        <div>
            <input/>
            <button>등록</button>
            <button>삭제</button>

        </div>
    )
}
export default Todo;
const wrapper = document.getElementById('container');
wrapper ? ReactDom.render(<Todo/>, wrapper) : false;