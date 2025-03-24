import "./App.css";
import u1 from "./images/user1.jpg";
import Greetings from "./components/Greetings";
function App() {
  const name = "Pranay";

  return (
    <>
      <div className="container">
        <div className="row justify-content-around">
          <Greetings
            title="UserProfile"
            para="Welcome to your profile! Here, you can view and update your personal details, track your progress, and manage your account settings. Stay connected and make the most out of your experience."
            img={u1}
          />
          <Greetings
            title="UserProfile"
            para="Welcome to your profile! Here, you can view and update your personal details, track your progress, and manage your account settings. Stay connected and make the most out of your experience."
            img={u1}
          />
          <Greetings
            title="UserProfile"
            para="Welcome to your profile! Here, you can view and update your personal details, track your progress, and manage your account settings. Stay connected and make the most out of your experience."
            img={u1}
          />
        </div>
      </div>
    </>
  );
}

export default App;
