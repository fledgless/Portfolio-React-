import Layout from "./component/layout/layout";
import Accueil from "./component/pages/accueil";
import Apropos from "./component/pages/a-propos";
import Experiences from "./component/pages/experiences";
import Projets from "./component/pages/projets";
import Contact from "./component/pages/contact";

function App() {
  return (
    <body>
      <Layout>
        <div id="container">
          <main>
            <Accueil></Accueil>
            <Apropos></Apropos>
            <Experiences></Experiences>
            <Projets></Projets>
            <Contact></Contact>
          </main>
        </div>
      </Layout>
    </body>
  );
}

export default App;

