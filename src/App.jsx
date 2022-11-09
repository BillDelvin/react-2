import { useState, useEffect } from "react";

import Card from "./components/Card";
import Spinner from "./components/Spinner";
import Modal from "./components/Modal";
import { listDocs } from "./api/docs";

// Static dan mutlak
const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [docs] = useState(listDocs);

  useEffect(() => {
    setTimeout(() => {
      setLoading((prevState) => (prevState = false));
    }, 3000);
  }, []);

  if (isLoading) {
    return (
      <div style={{ marginTop: "40px", textAlign: "center" }}>
        <Spinner />
      </div>
    );
  }

  return (
    <div>
      <section style={{ display: "flex" }}>
        {docs.map((val) => (
          <Card key={val.id} title={val.name} subtitle={val.subtitle} />
        ))}
      </section>
      <section>
        <Modal>
          <p>in adalah paragraf</p>
          <p>in adalah paragraf</p>
        </Modal>
        <Modal>
          <div style={{ backgroundColor: "blueviolet" }}>
            <h1>in adalah heading </h1>
          </div>
          <table>
            <thead>
              <tr>
                <th>No.</th>
                <th>Nama</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <th>uus</th>
                <th>C</th>
              </tr>
            </tbody>
          </table>
        </Modal>
      </section>
    </div>
  );
};

export default App;
