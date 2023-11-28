import Layout from "./component/layout/layout";

function App() {
  // logique javascript
  let toto = "tata";
  // le rendu navigateur
  return (
    <Layout>
      <div className="App">bonjour: {toto}</div>
      <div className="App">toto</div>
    </Layout>
  );
}

export default App;

