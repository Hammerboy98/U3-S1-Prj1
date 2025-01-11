import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
//import MyProfile from './components/MyProfile'
//import MySettings from './components/MySettings'
import MyHome from "./components/MyHome";

function App() {
  return (
    <>
      <div style={{ backgroundColor: "#221f1f" }}>
        <MyHome />
      </div>
      {/*<MyProfile/>*/}
      {/*<MySettings/>*/}
    </>
  );
}

export default App;
