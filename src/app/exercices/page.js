export default function Exercices() {
  return (
    <div>
      <h1>Bienvenue sur votre Framework Flask</h1>
      <h2>Ceci est le projet de : Jordan Wakelam</h2>
      <p>
        Si vous avez mis en ligne votre solution et si cette page d'exercices
        s'affiche dans votre navigateur, alors vous avez réussi votre mise en
        service.
      </p>
      <p>
        Notions acquises lors de cette étape : Vous avez appris à créer votre
        hébergement en ligne sur Alwaydata, installer une application, forker un
        projet GitHub et créer des Secrets qui seront utilisés lors de vos
        commits pour mettre à jour votre site en ligne.
      </p>

      <hr />

      <section>
        <h3>Exercice 1 : Personnaliser votre page d'exercices</h3>
        <p>
          Modifier le fichier <code>exercices.html</code> de votre projet
          GitHub afin de préciser votre prénom et nom sur cette page d'exercices
          (modification de la ligne 7 du fichier <code>exercices.html</code>).
        </p>
        <p>
          Notions acquises lors de cet exercice : Vous avez pris connaissance de
          votre environnement GitHub avec ses fichiers, ses répertoires et ses
          "commits" pour enregistrer vos modifications.
        </p>
      </section>

      <hr />

      <section>
        <h3>Exercice 2 : Création d'une nouvelle route</h3>
        <p>
          Objectif : Savoir créer des routes (c'est-à-dire la création d'une
          nouvelle API).
        </p>
        <p>
          L'exercice consiste à créer une nouvelle route accessible depuis le
          chemin <code>/contact/</code> de votre site et qui affichera "Ma page
          de contact" dans le navigateur de l'internaute.
        </p>
        <p>
          L'internaute saisira l'adresse suivante dans son navigateur :
          <b>https:// Votre URL /contact/</b> et obtiendra donc le résultat "Ma
          page de contact". Vous allez pour cela, depuis GitHub, <b>ajouter</b>{' '}
          le code suivant dans votre fichier <b>__init__.py</b> qui est à la
          racine de votre repository précédemment créé :
        </p>
        <pre>
          <code>
            {'@app.route("/contact/")'}
            <br />
            {'def MaPremiereAPI():'}
            <br />
            {'  return "<h2>Ma page de contact</h2>"'}
          </code>
        </pre>
        <p>
          Remarque importante : Ce code est à ajouter après la ligne{' '}
          <code>app = Flask(__name__)</code> qui est le début de votre programme
          et avant le bloc <code>if __name__ == "__main__"</code> à la fin du
          fichier. <b>Attention, l'indentation est très importante en Python.</b>
        </p>
        <p>
          Notions acquises lors de cet exercice : Vous avez appris à créer des
          API (c'est-à-dire des routes) dans une application Python. Vous pouvez
          créer autant d'API (de routes) que vous le souhaitez dans votre
          application Python.
        </p>
      </section>

      <hr />

      <section>
        <h3>Exercice 3 : Création d'un fichier contact.html</h3>
        <p>
          Objectif : Savoir créer et placer ses fichiers HTML (& CSS).
        </p>
        <p>
          L'exercice consiste à créer un fichier <code>contact.html</code>,
          toujours accessible depuis la route <code>/contact/</code> de votre
          site, et qui n'affichera plus "Ma page de contact", mais une page HTML
          beaucoup plus élaborée.
        </p>
        <p>
          2 étapes sont nécessaires pour réaliser cet exercice :
          <br />
          <b>Étape 1 :</b> Créer et déposer votre fichier <code>contact.html</code> dans le répertoire{' '}
          <b>templates</b>.
          <br />
          <b>Étape 2 :</b> Modifier votre route <code>/contact/</code> comme suit :
        </p>
        <pre>
          <code>
            {'@app.route("/contact/")'}
            <br />
            {'def MaPremiereAPI():'}
            <br />
            {'  return render_template("contact.html")'}
          </code>
        </pre>
        <p>
          Remarque importante : Si vous souhaitez utiliser du CSS dans votre
          fichier HTML, les fichiers CSS sont à déposer dans le répertoire{' '}
          <code>/static/css/</code>. <b>Les "links" CSS dans votre fichier HTML
          passent par l'ajout du code suivant :</b>
        </p>
        <pre>
          <code>
            {'<link rel="stylesheet" href="../static/css/style.css">'}
          </code>
        </pre>
        <p>
          Notions acquises lors de cet exercice : Les Frameworks imposent un
          cadre de travail. Ici, le Framework Flask vous impose de déposer vos
          fichiers HTML dans le répertoire <b>"templates"</b> et les fichiers CSS
          dans le répertoire <code>/static/css/</code>.
        </p>
      </section>

      <hr />

      {/* Ajouter ici les autres exercices de manière similaire */}

    </div>
  );
}
