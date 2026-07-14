// async function recupererUtilisateur (id) {
//     try {
//         const  repons =  await fetch (`https://jsonplaceholder.typicode.com/users/${id}`);
//         const result =  await repons.json();
//         console.log(result)
//     } catch (error) {
//         console.error("erreur 404");
//     }

// const { Axios, get } = require("axios");


// }
// recupererUtilisateur(4);


// async function recupererPost(id) {
//     try {
//         const reponse =  await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//         const  result = await reponse.json();
//     console.log (result)
//     } catch (error) {
//         console.error("3333")
//     }
// }
// methode fetch
// async function prixBitcoin() {
//     try {
//         const prix = await fetch(`https://blockchain.info/ticker`);
//         const resultatPrix = await prix.json();
//         console.log(resultatPrix);
//     } catch (error) {
//         console.error("errreurs 404 le site nes plus a jours !");
//     }
// }
// prixBitcoin();


// methode Axios 


// On importe la librairie Axios
// const axios = require("axios");


// // Fonction asynchrone car on va attendre une réponse du serveur
// async function getPost() {

//     try {

//         // axios.get() envoie une requête GET vers l'API
//         // await attend que la réponse arrive
//         const response = await axios.get(
//             "https://jsonplaceholder.typicode.com/posts/1"
//         );


//         // Axios place automatiquement les données reçues dans response.data
//         const post = response.data;


//         // On affiche uniquement le titre du post
//         console.log(post.title);


//     } catch (error) {

//         // Si une erreur arrive, on arrive ici
//         console.log(error.message);

//     }
// }


// // Exécution de la fonction
// getPost();

// const axios = require("axios");


// async function afficherUsers() {

//     try {

//         // On récupère la liste des utilisateurs
//         const response = await axios.get(
//             "https://jsonplaceholder.typicode.com/users"
//         );


//         // response.data contient un tableau
//         const users = response.data;


//         // forEach permet de parcourir chaque utilisateur
//         users.forEach(user => {

//             // Pour chaque utilisateur, on affiche son nom
//             console.log(user.name);

//         });


//     } catch(error) {

//         console.log(error.message);

//     }

// }


// afficherUsers();

// const axios = require("axios");


// async function gestionErreurs() {

//     try {

//         // Cette URL n'existe pas
//         // Axios va provoquer une erreur
//         const response = await axios.get(
//             "https://jsonplaceholder.typicode.com/users/999999"
//         );


//         console.log(response.data);


//     } catch(error) {


//         // Axios met automatiquement les erreurs HTTP ici
//         if(error.response) {

//             // Le serveur a répondu mais avec une erreur
//             console.log(
//                 "Erreur HTTP :",
//                 error.response.status
//             );


//         } else {

//             // Erreur réseau par exemple
//             console.log(error.message);

//         }

//     }

// }


// gestionErreurs();


// const axios = require("axios");


// async function envoieUser() {


//     try {


//         // axios.post(url, données)
//         // Le deuxième argument contient les données envoyées

//         const response = await axios.post(

//             "https://jsonplaceholder.typicode.com/users",

//             {
//                 nom: "Jonathan",
//                 age: 18
//             }

//         );


//         // Affiche la réponse du serveur
//         console.log(response.data);



//     } catch(error) {


//         console.log(error.message);


//     }

// }


// envoieUser();

// const axios = require("axios");


// async function getUser(id) {


//     try {


//         // On utilise une template string
//         // ${id} sera remplacé par la valeur envoyée

//         const response = await axios.get(
//             `https://jsonplaceholder.typicode.com/users/${id}`
//         );


//         const user = response.data;


//         console.log("Nom :", user.name);

//         console.log("Email :", user.email);

//         console.log(
//             "Ville :",
//             user.address.city
//         );



//     } catch(error) {


//         console.log(error.message);


//     }


// }


// getUser(3);

// const axios = require("axios");


// async function recupererPosts() {


//     try {


//         const response = await axios.get(
//             "https://jsonplaceholder.typicode.com/posts"
//         );


//         // Tableau contenant 100 posts
//         const posts = response.data;



//         // slice(0,5) récupère les éléments de 0 à 4
//         const cinqPosts = posts.slice(0,5);



//         // On parcourt les 5 posts
//         cinqPosts.forEach(post => {


//             console.log(
//                 post.title
//             );


//         });



//     } catch(error) {


//         console.log(error.message);


//     }


// }


// recupererPosts();

