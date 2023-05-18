import { Button } from "./components/Buttons/Button";
import ProfileCard from "./components/Buttons/ProfileCard/ProfileCard";
import Counter from "./components/Counter/Counter";

function App() {
  const users = [
    { name: "User1", id: 1 },
    { name: "User2", id: 2 },
    { name: "User3", id: 3 },
    { name: "User4", id: 4 },
    { name: "User5", id: 5 },
    { name: "User6", id: 6 },
  ];

  return (
    <div>
      <h1>App component</h1>
      <ul>
        {users.map((user) => {
          return (<div key={user.id} >
            <li>{user.name}</li>
          </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
