import Layout from "./component/layout/layout";
import Apropos from "./a-propos";
import Experiences from "./experiences";
import Projets from "./projets";
import Contact from "./contact";

function App() {
  // le rendu navigateur
  return (
    <Layout>
      <body>
          <div id="container">
              <main>
                  <section id="portfolio">
                      <h1>Mon portfolio</h1>
                      <h2 class="white">Cameron Cardinal</h2>
                      <h2 class="white">Développeur web et web mobile</h2>
                      <div id="reseaux">
                          <a target="_blank" href="https://github.com/fledgless">GitHub</a>
                          <a target="_blank" href="https://www.linkedin.com/in/cameron-cardinal-a4158b231/">LinkedIn</a>
                          <a target="_blank" href="mailto:cameriancardinal@gmail.com">Mail</a>
                      </div>
                  </section>
              </main>
          </div>
      </body>
      <Apropos></Apropos>
      <Experiences></Experiences>
      <Projets></Projets>
      <Contact></Contact>
    </Layout>
  );
}

export default App;

