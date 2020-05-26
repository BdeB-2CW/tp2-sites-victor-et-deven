function createNode(element) {
    return document.createElement(element);
  }
  
  function append(parent, el) {
    return parent.appendChild(el);
  }
  
  const tableauLivreurs = document.getElementById("livreurs");
  const URL = "http://damnfastdelivery.com:8080/ords/tp2/livreure";
  fetch(URL)
    .then((resp) => resp.json())
    .then(function (data) {
      let livreurs = data.items; //.results;
      return livreurs.map(function (livreure) {

                let TR = createNode("tr");

                let ID = createNode("td");
                ID.innerHTML = `${livreure.id_livreure}`;

                let PRENOM = createNode("td");
                PRENOM.innerHTML = `${livreure.prenom}`;

                let NOM = createNode("td");
                NOM.innerHTML = `${livreure.nom}`;

                let TELEPHONE = createNode("td");
                TELEPHONE.innerHTML = `${livreure.telephone}`;

                let COURRIEL = createNode("td");
                COURRIEL.innerHTML = `${livreure.courriel}`;


                append(TR, ID);
                append(TR, PRENOM);
                append(TR, NOM);
                append(TR, TELEPHONE);
                append(TR, COURRIEL);
                append(tableauLivreurs, TR);
                                    
      });
    })
    .catch(function (error) {
      console.log(JSON.stringify(error));
    });
  
