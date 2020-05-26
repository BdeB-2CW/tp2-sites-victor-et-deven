function createNode(element) {
    return document.createElement(element);
  }
  
  function append(parent, el) {
    return parent.appendChild(el);
  }
  
  const tableauCommandes = document.getElementById("commandes");
  const URL = "http://damnfastdelivery.com:8080/ords/tp2/commande";
  fetch(URL)
    .then((resp) => resp.json())
    .then(function (data) {
      let commandes = data.items; //.results;
      return commandes.map(function (commande) {

                let TR = createNode("tr");

                let ID = createNode("td");
                ID.innerHTML = `${commande.id_commande}`;

                let ID_LIVREUR = createNode("td");
                ID_LIVREUR.innerHTML = `${commande.livreure_id_livreure}`;

                let UTILISATEUR_ID = createNode("td");
                UTILISATEUR_ID.innerHTML = `${commande.utilisateur_id}`;

                let ADDRESSE_DESTINATION = createNode("td");
                ADDRESSE_DESTINATION.innerHTML = `${commande.addresse_destination}`;

                let DATE_COMMANDE_ENVOYEE = createNode("td");
                DATE_COMMANDE_ENVOYEE.innerHTML = `${commande.date_commande_envoyee}`;

                let DATE_COMMANDE_LIVREE = createNode("td");
                DATE_COMMANDE_LIVREE.innerHTML = `${commande.date_commande_livree}`;


                append(TR, ID);
                append(TR, ID_LIVREUR);
                append(TR, UTILISATEUR_ID);
                append(TR, ADDRESSE_DESTINATION);
                append(TR, DATE_COMMANDE_ENVOYEE);
                append(TR, DATE_COMMANDE_LIVREE);
                append(tableauCommandes, TR);
                                    
      });
    })
    .catch(function (error) {
      console.log(JSON.stringify(error));
    });
  
