import React, { useState, useEffect } from "react";
// import logo from './logo.svg';
import "./App.css";
const removeIcon = (
  <svg
    t="1593541324658"
    className="icon"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="2104"
    width="200"
    height="200"
  >
    <path
      d="M972.657609 209.348408C987.158609 209.36839 998.930114 197.571202 998.949999 182.99865 998.969882 168.426097 987.230618 156.59651 972.729617 156.576528L32.457975 155.280806C17.956974 155.260823 6.18547 167.058012 6.165585 181.630564 6.1457 196.203116 17.884965 208.032703 32.385966 208.052686L972.657609 209.348408ZM180.466902 992.356169 180.466902 1019.014859 206.993296 1018.74074 833.361858 1012.267947 859.348284 1011.999407 859.348284 985.883377 859.348284 289.397297C859.348284 274.824732 847.59289 263.011332 833.091874 263.011332 818.590859 263.011332 806.835465 274.824732 806.835465 289.397297L806.835465 985.883377 832.82189 959.498805 206.453329 965.971599 232.979723 992.356169 232.979723 282.67005C232.979723 268.097483 221.224329 256.284085 206.723313 256.284085 192.222298 256.284085 180.466902 268.097483 180.466902 282.67005L180.466902 992.356169ZM656.410257 847.079027C656.410257 861.651593 668.165651 873.464992 682.666667 873.464992 697.167682 873.464992 708.923076 861.651593 708.923076 847.079027L708.923076 372.131659C708.923076 357.559091 697.167682 345.745694 682.666667 345.745694 668.165651 345.745694 656.410257 357.559091 656.410257 372.131659L656.410257 847.079027ZM341.333333 847.079027C341.333333 861.651593 353.08873 873.464992 367.589743 873.464992 382.090758 873.464992 393.846155 861.651593 393.846155 847.079027L393.846155 372.131659C393.846155 357.559091 382.090758 345.745694 367.589743 345.745694 353.08873 345.745694 341.333333 357.559091 341.333333 372.131659L341.333333 847.079027ZM498.871795 847.079027C498.871795 861.651593 510.627189 873.464992 525.128205 873.464992 539.62922 873.464992 551.384614 861.651593 551.384614 847.079027L551.384614 372.131659C551.384614 357.559091 539.62922 345.745694 525.128205 345.745694 510.627189 345.745694 498.871795 357.559091 498.871795 372.131659L498.871795 847.079027ZM392.147755 116.721777C392.147755 102.063669 403.758665 90.363507 418.40134 90.363507L622.925796 90.363507C637.408947 90.363507 649.179381 102.1619 649.179381 116.549585L649.179381 171.644875 701.692203 171.644875 701.692203 116.549585C701.692203 72.986607 666.38105 37.591577 622.925796 37.591577L418.40134 37.591577C374.724427 37.591577 339.634933 72.950804 339.634933 116.721777L339.634933 165.310801 392.147755 165.310801 392.147755 116.721777Z"
      p-id="2105"
      fill="#ffffff"
    ></path>
  </svg>
);
const uncompleteIcon = (
  <svg
    t="1593542561136"
    class="icon"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="3756"
    width="200"
    height="200"
  >
    <path
      d="M512 960C264.576 960 64 759.36 64 512S264.576 64 512 64s448 200.64 448 448-200.576 448-448 448z m0-960C229.216 0 0 229.12 0 512s229.216 512 512 512 512-229.12 512-512S794.784 0 512 0z"
      p-id="3757"
      fill="#ffffff"
    ></path>
  </svg>
);
const completeIcon = (
  <svg
    t="1593542464078"
    className="icon"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="2692"
    width="200"
    height="200"
  >
    <path
      d="M499.7587 800.00032 184.85566 474.771097l80.721463-65.702398 182.094268 145.004535c74.617441-90.096994 240.284575-268.907473 468.845131-411.111219l19.241226 45.057195C725.971791 383.722428 554.202683 659.205667 499.7587 800.00032L499.7587 800.00032 499.7587 800.00032zM894.33329 417.391249c7.199982 29.791513 11.047614 60.889789 11.047614 92.89369 0 217.60197-176.406732 394.009725-394.018935 394.009725-217.604016 0-394.013819-176.411849-394.013819-394.009725 0-217.60811 176.408779-394.017912 394.013819-394.017912 54.121642 0 105.691157 10.921747 152.634306 30.66644L663.996275 92.050486c-47.605228-17.377786-99.013061-26.861788-152.634306-26.861788-245.815545 0-445.092148 199.276602-445.092148 445.096241 0 245.810429 199.276602 445.087031 445.092148 445.087031 245.820662 0 445.095217-199.276602 445.095217-445.087031 0-31.858592-3.354398-62.932308-9.717316-92.89369L894.33329 417.391249 894.33329 417.391249zM894.33329 417.391249"
      p-id="2693"
      fill="#ffffff"
    ></path>
  </svg>
);
const TODOS = [
  { id: 1, text: "learn react", completed: false },
  { id: 2, text: "host aliyun", completed: true },
  { id: 3, text: "change css", completed: false },
];
const TodoForm = (props) => {
  const { addTodo } = props;
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault(); //防止form刷新操作

    if (!value) return;
    addTodo(value);
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input className="input" value={value} onChange={handleChange} />
    </form>
  );
};
const TodoItem = (props) => {
  const { todo } = props;
  const { finishTodo, removeTodo } = props;
  return (
    <div key={todo.id} className="todoItem">
      <div
        className="task"
        onClick={() => finishTodo(todo.id)}
        style={{ textDecoration: todo.completed ? "line-through" : "" }}
      >
        {todo.completed ? completeIcon : uncompleteIcon}
        {todo.text}
      </div>
      <a href="#" className="remove" onClick={(e) => removeTodo(e, todo.id)}>
        {removeIcon}
      </a>
    </div>
  );
};
function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || TODOS
  );
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const addTodo = (text) => {
    const newTodos = [
      { id: new Date().getSeconds(), text: text, completed: false },
      ...todos,
    ];
    setTodos(newTodos);
  };
  const removeTodo = (e, id) => {
    e.preventDefault();
    e.stopPropagation(); //防止动作传递到下一层
    const newTodos = todos.filter((todo) => todo.id !== id);

    setTodos(newTodos);
  };
  const finishTodo = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    // console.log(todos);
    setTodos(newTodos);
    // console.log(todos);
  };
  return (
    <div className="App">
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          finishTodo={finishTodo}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
}

export default App;
