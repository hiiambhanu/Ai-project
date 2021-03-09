import "./App.css";
import SongCard from "./components/SongCard";
import { useEffect, useState, useRef } from "react";

function App() {
  let [inp, changeInp] = useState("");
  let [list, changeList] = useState([]);
  let [method, changeMethod] = useState(false);
  let [results, changeResults] = useState([]);
  const myRef = useRef(null);
  useEffect(() => {
    if (inp === "") {
      changeList([]);
      return;
    }
    document.getElementById("error").style.display = "none";

    fetch(`https://music-recommender-ai.herokuapp.com/api/search?q=${inp}`, {
      method: "GET",
    })
      .then((blob) => blob.json())
      .then((data) => {
        console.log(data);
        changeList(data);
      });
  }, [inp]);

  useEffect(() => {
    if (results === [] || results.length === 0) {
      document.getElementById("magic").style.display = "none";
    } else {
      myRef.current.scrollIntoView();
      changeList([]);
      document.getElementById("magic").style.display = "block";
      document.getElementById("error").style.display = "none";

    }
  }, [results]);

  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/768px-Spotify_logo_without_text.svg.png"
          className="App-logo"
          alt="logo"
        />
        <div className="search">
          <input
            style={{
              marginBottom: "0",
            }}
            value={inp}
            type="text"
            onChange={(e) => {
              changeInp(e.target.value);
              changeResults([]);
            }}
            placeholder="Enter your favourite song"
          />
          <ul
            style={{
              backgroundColor: "#1aa34a",
              borderRadius: "0 0 5px 5px",
              padding: "0.5em",
              marginTop: 0,
            }}
          >
            {list.slice(0, 5).map((li) => (
              <SongCard
                name={li}
                onClick={() => {
                  console.log("oncliced");
                  changeInp(li);
                  changeResults([]);
                }}
              />
            ))}
          </ul>
        </div>
        <div>
          <span className="method">Collaborative Filtering</span>

          <label className="switch">
            <input
              type="checkbox"
              onChange={(e) => {
                changeMethod(e.target.checked);
              }}
            />
            <span className="slider round"></span>
          </label>
          <span className="method">Content Based </span>
        </div>
        <button
          type="button"
          className="btn"
          onClick={() => {
            console.log(inp, method);
            if (method === true) {
              fetch(
                `https://music-recommender-ai.herokuapp.com/api/content/find?q=${encodeURI(
                  inp
                )}&c=4`
              )
                .then((blob) => blob.json())
                .then((data) => {
                  if (data.error) {
                    changeResults([]);
                    document.getElementById("error").style.display = "block";
                  } else {
                    document.getElementById("error").style.display = "none";
                    changeResults(data);
                  }
                  console.log(data);
                });
            } else {
              fetch(
                `https://music-recommender-ai.herokuapp.com/api/collab/find?q=${encodeURI(
                  inp
                )}&c=4`
              )
                .then((blob) => blob.json())
                .then((data) => {
                  if (data.error) {
                    changeResults([]);
                    document.getElementById("error").style.display = "block";
                  } else {
                    document.getElementById("error").style.display = "none";

                    changeResults(data);
                  }
                  console.log(data);
                });
            }
          }}
        >
          Find your next favourite song
        </button>
        <div>
          <h1 style={{ textAlign: "center", display: "none" }} id="error">
            Sorry an error occured
          </h1>
          <h1 style={{ textAlign: "center" }} id="magic">
            Your Recommendations are:
          </h1>

          <ul>
            {results.length > 0
              ? results.map((result) => (
                  <SongCard name={result.name}></SongCard>
                ))
              : ""}
          </ul>
          <div ref={myRef}> </div>
        </div>
      </header>
    </div>
  );
}

export default App;
