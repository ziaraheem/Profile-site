import "./App.css";
import { useEffect, useState } from "react";
import ProfileCard from "./components/ProfileCard";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://api.jsonbin.io/b/6297641605f31f68b3b20657", {
      headers: {
        "secret-key":
          "$2b$10$ZQ2T42Dns6pSS90fcjQE7O0uj0m8YKBfkaWlkXPGGdsMCvcxCZtym",
      },
    })
      .then((response) => response.json())
      .then((_data) => {
        console.log("data --> ", _data);
        setData(_data);
      });
  }, []);

  return (
    <div>
      <p>{data ? <ProfileCard data={data} /> : "Loading.."}</p>
    </div>
  );
}

export default App;
