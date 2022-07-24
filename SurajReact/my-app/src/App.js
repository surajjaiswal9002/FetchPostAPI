import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import News from "./components/News";
import Articles from "./components/Articles";
import Explore from "./components/Explore";
import Trending from "./components/Trending";

function App() {
  const [apiData, setApiData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getApiData = async () => {
      setIsLoading(true);
      try {
        const res = await axios.post(
          "http://devapi.hidoc.co:8080/hidoc-us/api/v1/getArticlesByUid/",
          0
        );
        setApiData(res.data.data);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        console.log(err);
      }
    };
    getApiData();
  }, []);

  return (
    <div class="main">
      <div class="news-container">
        <News apiData={apiData} isLoading={isLoading} />
      </div>

      <div class="row">
        <div class="column">
          <div class="card">
          <Articles apiData={apiData} isLoading={isLoading} />
          </div>
        </div>

        <div class="column">
          <div class="card">
            <Trending apiData={apiData} isLoading={isLoading} />
          </div>
        </div>

        <div class="column">
          <div class="card">
            <Explore apiData={apiData} isLoading={isLoading} />
          </div>
        </div>
      </div>
      <div class="heading">
        <h1 >what's more on Hidoc  DR</h1>
      </div>
    </div>
  );
}

export default App;
