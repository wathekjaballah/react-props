import "./App.css";
import Profile from "./profile/component/Profile";
function App() {
  const handleName = (fullName) => alert(fullName);
  const fullname = "wathek JBL";
  const bio = "photographe";
  const profession = "videomaker";
  const myStyle = { 
    textAlign: "center",
    color: "black",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between"
     };

  return (
    <div className="App-header" style={myStyle}>
      <h1>My Profile :</h1>
      <Profile 
      fullname={fullname} 
      bio={bio} 
      profession={profession}
      handleName={handleName} >
         <img src="./wathek.jpeg" style={{ width: 200, height: 200 }} alt="welcome"/>
      </Profile>
    </div>
  );
}

export default App;