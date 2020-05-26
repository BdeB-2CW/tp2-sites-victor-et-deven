function ins_Utilisateur() {
    let utilisateur_exemple = {
      id: 0,
      nom: "",
      prenom: "",
      courriel: "",
      telephone: "",
    };
    utilisateur_exemple.id = document.getElementById("ID").value;
    utilisateur_exemple.nom = document.getElementById("Nom").value;
    utilisateur_exemple.prenom = document.getElementById("Prenom").value;
    utilisateur_exemple.courriel = document.getElementById("Courriel").value;
    utilisateur_exemple.telephone = document.getElementById("Telephone").value;

  
    const URL =
      "http://damnfastdelivery.com:8080/ords/tp2/utilisateur/";
  
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(utilisateur_exemple),
    })
      .then((resp) => resp.json())
      .then(function (data) {
        console.log(data);
      })
      .catch(function (error) {
        console.log(JSON.stringify(error));
      });
  }
  
