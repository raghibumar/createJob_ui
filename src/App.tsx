import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import CreateJob from "./Components/createJob";
import { useHomeStyles } from "./css/homeStyles";

function App() {
  const { classes } = useHomeStyles();
  return (
    <>
      <Header />
      <div className={classes.homePage}>
          <SideBar />
          <CreateJob />
      </div>
    </>
  );
}

export default App;
