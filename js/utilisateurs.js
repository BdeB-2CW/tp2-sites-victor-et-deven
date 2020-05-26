function createNode(element) {
    return document.createElement(element);
  }
  
  function append(parent, el) {
    return parent.appendChild(el);
  }
  
  const tableauUtilisateurs = document.getElementById("utilisateurs");
  const URL = "http://damnfastdelivery.com:8080/ords/tp2/utilisateur?limit=1000";
  fetch(URL)
    .then((resp) => resp.json())
    .then(function (data) {
      let utilisateurs = data.items; //.results;
      return utilisateurs.map(function (utilisateur) {

                let TR = createNode("tr");

                let ID = createNode("td");
                ID.innerHTML = `${utilisateur.id}`;

                let PRENOM = createNode("td");
                PRENOM.innerHTML = `${utilisateur.prenom}`;

                let NOM = createNode("td");
                NOM.innerHTML = `${utilisateur.nom}`;


                append(TR, ID);
                append(TR, PRENOM);
                append(TR, NOM);
                append(tableauUtilisateurs, TR);
                                    
      });
    })
    .catch(function (error) {
      console.log(JSON.stringify(error));
    });
  
