import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("Gagal mendapatkan pesan dari DB");
  const getMessage = async () => {
    try {
      const response = await axios.get("http://localhost:3030");
      console.log(">>>", response);
      setMessage(response.data[0].message);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMessage();
  }, []);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h3>
          Ini adalah PR dari sharing session docker compose. Disini kita akan
          mencoba mengintegrasikan network dari FE, BE, dan Database menggunakan
          docker compose
        </h3>
        <h4>Berikut ini adalah pesannya : </h4>
        <p>{message}</p>
      </div>
    </>
  );
}

export default App;
