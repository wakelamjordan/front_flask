import H1 from "@/components/H1";
import P from "@/components/P";

export const metadata = {
  title: "Exercices",
  description: "page exercices",
};

export default function Exercices() {
  return (
    <div className="">
      <H1>Bienvenue sur votre Framework Flask</H1>
      <h2>Ceci est le projet de : Jordan Wakelam</h2>

      <P>
        Si vous avez mis en ligne votre solution et si cette page d{"'"}exercices
        s{"'"}affiche dans votre navigateur alors vous avez réussi votre mise en
        service.
      </P>

      <P>
        Notions acquises lors de cette étape : Vous avez lors cette première
        étape appris à créer votre hébergement en ligne sur Alwaydata, installer
        une application, Forker un projet GitHUB et créer des Secrets qui seront
        utilisés lors de vos Commits pour mettre à jour votre site en ligne
      </P>

      <hr />

      <h3>Exercice 1 : Personnaliser votre page d'exercices</h3>

      <P>
        Modifier le fichier exercices.html de votre projet GitHUB afin de
        préciser votre Prénom et Nom sur cette page d'exercices{" "}
        {"(Modification de la ligne 7 du fichier exercices.html)"}
      </P>

      <P>
        Notion acquises lors de cet exercice : Vous avez pris connaissance de
        votre environnement GitHUB avec ses fichiers, ses répertoires et ses
        {'"Commits" '}pour enregistrer vos modifications
      </P>

      <hr />

      <h3>Exercice 2 : Création d{"'"}une nouvelle route</h3>

      <P>
        Objectif : Savoir créer des routes{" "}
        {"(c'est à dire la création d'une nouvelle API)"}
      </P>

      <P>
        L'exercice consiste à créer une nouvelle route accessible depuis le
        chemin {'"/contact/"'} de votre site et qui affichera {'"Ma page de contact"'}
        dans le navigateur de l'internaute.
      </P>

      <P>
        L'internaute saisira l'adresse suivante dans son navigateur :{" "}
        <b>{"https://{Votre_URL}/contact/"}</b> et obtiendra donc le résultat
        "Ma page de contact". Vous allez pour cela, depuis GitHUB,{" "}
        <b>ajouter</b> le code suivant dans votre fichier <b>__init__.py</b> qui
        est à la racine de votre Repository précédemment créé :
      </P>

      <pre>
        <code>
          @app.route("/contact/") def MaPremiereAPI(): return "
          {'<h2>Ma page de contact</h2>"'}
        </code>
      </pre>

      <P>
        Remarque importante : Ce code est à ajouter après la ligne{" "}
        {"app = Flask(__name__)"} qui est le début de votre programme et avant
        le bloc "if __name__ == "__main__" à la fin du fichier.
      </P>

      <P>
        <b>Attention l'indentation est très importante en Python.</b>
      </P>

      <P>
        Notion acquises lors de cet exercice : Vous avez appris lors de cet
        exercice à créer des API {"(c'est à dire des routes)"} dans une
        application Python. Vous pouvez créer autant d'API {"(de routes)"} que
        vous le souhaitez dans votre application Python.
      </P>

      <hr />

      <h3>Exercice 3 : Création d'un fichier contact.html</h3>

      <P>Objectif : Savoir créer et placer ses fichiers HTML {"(&CSS)"}</P>

      <P>
        L'exercice consiste à créer un fichier contact.html toujours accessible
        depuis la route "/contact/" de votre site et qui n'affichera plus "Ma
        page de contact" mais une page html beaucoup plus élaborée.
      </P>

      <P>
        2 étapes sont nécessaires pour réaliser cet exercice. Etape 1 : Créer et
        déposer votre fichier contact.html dans le répertoire <b>templates</b>.
        Etape 2 : Modifier votre route /contact/ comme suit :
      </P>

      <pre>
        <code>
          @app.route("/contact/") def MaPremiereAPI(): return
          render_template("contact.html")
        </code>
      </pre>

      <P>
        Remarque importante : Si vous souhaitez utiliser du CSS dans votre
        fichier.html, les fichiers CSS sont à déposer dans le répertoire
        /static/css/ .{" "}
        <b>
          Les "links" CSS dans votre fichier html passent par l'ajout du code
          suivant dans votre fichier html :
        </b>
      </P>

      <pre>
        <code>{'<link rel="stylesheet" href="../static/css/style.css">'}</code>
      </pre>

      <P>
        Notion acquises lors de cet exercice : Les Framework imposent un cadre
        de travail. Ici, le Framework Flask vous impose de déposer vos fichiers
        html dans le répertoire "templates" et les fichiers CSS dans le
        répertoire /static/css/
      </P>

      <hr />

      <h3>Exercice 4 : Création d'une fonction de calcul</h3>

      <P>Objectif : Savoir créer des fonctions de calcul en Python</P>

      <P>
        L'exercice consiste à créer une fonction qui calculera le carré d'une
        valeur saisie par l'internaute. Cette fonction sera accessible depuis la
        route "/calcul_carre/" de votre site et nécessitera de saisir une
        valeur. Exemple : <b>https://{"{Votre_URL}"}/calcul_carre/2</b>.
      </P>

      <P>
        Voici la route à créer dans votre application Python {"(__init__.py)"} :
      </P>

      <pre>
        <code>
          @app.route{"('/calcul_carre/<int:val_user>')"}
          def carre{"(val_user)"}: return{" "}
          {
            '"<h2>Le carré de votre valeur est : </h2>" + str(val_user * val_user)'
          }
        </code>
      </pre>

      <P>
        Travail demandé : Sachant que la construction d'une route pour 2 valeurs
        est la suivante :
      </P>

      <pre>
        <code>/somme/{"<int:valeur1>/<int:valeur2>"}</code>
      </pre>

      <P>
        Ecrivez la fonction permettant de faire la somme de 2 valeurs saisies
        par l'internaute.
      </P>

      <P>
        Notion acquises lors de cet exercice : Vous avez appris à créer vos
        fonctions Python
      </P>

      <hr />

      <h3>Exercice 5 : Pair ou Impaire ?</h3>

      <P>Objectif : Savoir créer des conditions</P>

      <P>
        Reprenez votre précédent exercice sur les sommes et précisez à
        l'internaute si la somme de ces deux valeurs est pair ou impaire.
      </P>

      <P>
        Notion acquises lors de cet exercice : Vous avez appris à faire des
        conditions
      </P>

      <hr />

      <h3>Exercice 6 : Somme de toutes les valeurs</h3>

      <P>Objectif : Savoir créer des boucles</P>

      <P>
        Faites la somme de toutes les valeurs qui seront saisies par
        l'internaute. Le problème est que vous ne connaissez pas la quantité de
        valeurs saisies par l'internaute. A vous de trouver la solution qui
        fonctionne.
      </P>

      <P>
        Notion acquises lors de cet exercice : Vous avez appris à faire des
        boucles
      </P>

      <hr />

      <h3>Exercice 7 : La valeur la plus importante</h3>

      <P>Objectif : Mélanger boucles, conditions et variables</P>

      <P>Trouver la valeur maximale saisie par l'internaute.</P>

      <P>
        Notion acquises lors de cet exercice : Vous savez à présent programmer
        en Flask
      </P>

      <hr />

      <h3>Exercice 8 : Mettre un CV en ligne</h3>

      <P>Objectif : Créer vos pages HTML et CSS dans Flask</P>

      <P>
        Votre CV sera accessible via l'adresse suivante : https://
        {"{Votre_Compte_Alwaysdata}"}-alwaysdata.com/cv
      </P>

      <P>Celui-ci doit contenir au minimum les sections suivantes :</P>

      <ul>
        <li>
          Présentation personnelle {"(CV anonyme)"} : photo, nom, prénom,
          profession, et une courte description.
        </li>
        <li>
          Expériences professionnelles : un tableau ou une liste des expériences
          professionnelles passées et actuelles.
        </li>
        <li>
          Formations : un tableau ou une liste de vos études et certifications.
        </li>
        <li>
          Compétences : une liste de vos compétences techniques et personnelles.
        </li>
      </ul>

      <P>Votre CV doit contenir du style et à minima une image (la photo).</P>

      <P>
        Notion acquises lors de cet exercice : Vous savez à présent créer une
        application en Flask
      </P>
    </div>
  );
}
