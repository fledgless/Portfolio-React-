const Contact = () => {
  function validate(e) { 
    // récupération des forms
    e.preventDefault();
    let name = document.querySelector("#name").value; 
    let subject = document.querySelector("#subject").value; 
    let email = document.querySelector("#email").value; 
    let message = document.querySelector("#message").value; 
    let error_message = document.querySelector("#error_message"); 
    error_message.style.padding = "10px"; 
  
    let errors = []; 

    // vérification nom
    if (name.length < 3) { 
        errors.push("Veuillez entrer un nom valide.");
    } 
    // vérification sujet
    if (subject.length < 5) { 
        errors.push("Veuillez entrer un sujet valide.");
    }
    // vérification du mail
    if (email.indexOf("@") === -1 || email.length < 6) { 
        errors.push("Veuillez entrer une adresse mail valide.");
    } 
    // vérification du message
    if (message.length <= 30) { 
        errors.push("Veuillez écrire un message de plus de 30 caractères.");
    } 
    // envoi du message en fonction des erreurs
    if (errors.length > 0) { 
        error_message.textContent = errors.join(" "); 
        return false;
    } 
    else { 
        alert( 
            "Votre message a été envoyé !"); 
        return true;
    }
  }
    return (
        <body>
          <div id="container">
              <main>
                <section id="contact">
                  <h2>Contact</h2>
                  <hr width="500" size="2"/>
                  <div class="form"> 
                      <div id="error_message"></div> 
                      <form action="" 
                          id="myform" 
                          onsubmit="return validate();"> 
                          <div class="input_field"> 
                              <input type="text" 
                                  placeholder="Nom" 
                                  id="name"></input>
                          </div> 
                          <div class="input_field"> 
                              <input type="text" 
                                  placeholder="Sujet" 
                                  id="subject"></input>
                          </div> 
                          <div class="input_field"> 
                              <input type="text" 
                                  placeholder="Adresse mail" 
                                  id="email"></input>
                          </div> 
                          <div class="input_field"> 
                              <textarea placeholder="Message" 
                                      id="message"> 
                              </textarea> 
                          </div> 
                          <button onClick={validate}>Envoyer</button>
                      </form> 
                  </div> 
                </section>
              </main>
            </div>
        </body>
    );
  };
  
  export default Contact;
  