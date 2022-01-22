import './App.css';
import Users from "./components/users/Users"

function App() {
const users=[
  {
    id:1,
    title:"Section 1",
    content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, temporibus."
  },
  {
    id:2,
    title:"Section 2",
    content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, temporibus."
  },
  {
    id:3,
    title:"Section 3",
    content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, temporibus."
  },
  {
    id:4,
    title:"Section 4",
    content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, temporibus."
  },
]
  
  return (
    <div className="App">
     <Users users={users}/>
    </div>
  );
}

export default App;
