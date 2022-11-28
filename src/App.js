import "./App.css";
import Header from "./component/Header/Header";
import Strategic from "./component/Strategic/Strategic";
import Home from "./component/Home/Home";
import SwiperPage from "./component/SwiperPage/SwiperPage";
import WhyPage from "./component/WhyPage/WhyPage";
import Speak from "./component/Speak/Speak";
import Footer from "./component/Footer/Footer";
import Industry from "./component/Industry/Industry";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <SwiperPage />
      <WhyPage />
      <Industry />
      <Strategic />
      <Speak />
      <Footer />
    </div>
  );
}

export default App;
