const Projets = () => {
    return (
            <body>
                <div id="container">
                    <main>
                        <section id="projets">
                            <h2>Projets</h2>
                            <hr width="500" size="2"/>
                            <div id="projet">
                                <div className="projet">
                                    <img src="img/Portfolio.png" alt="Image projet 1 "></img>
                                    <h3><a target="_blank" href="https://github.com/fledgless/Portfolio">Ce portfolio (HTML, CSS, Javascript)</a></h3>
                                </div>
                                <div className="projet">
                                    <img src="#" alt="Image projet 2"></img>
                                    <h3>Projet n°2</h3>
                                </div>    
                                <div className="projet">
                                    <img src="#" alt="Image projet 3"></img>
                                    <h3>Projet n°3</h3>
                                </div>
                                <div className="projet">
                                    <img src="#" alt="Image projet 4"></img>
                                    <h3>Projet n°4</h3>
                                </div>
                                <div className="projet">
                                    <img src="#" alt="Image projet 5"></img>
                                    <h3>Projet n°5</h3>
                                </div>
                                </div>
                        </section>
                    </main>
                </div>
            </body>
    );
};

export default Projets;