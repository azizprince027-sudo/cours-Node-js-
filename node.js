// async function recupererUtilisateur (id) {
//     try {
//         const  repons =  await fetch (`https://jsonplaceholder.typicode.com/users/${id}`);
//         const result =  await repons.json();
//         console.log(result)
//     } catch (error) {
//         console.error("erreur 404");
//     }

// }
// recupererUtilisateur(4);


async function recupererPost(id) {
    try {
        const reponse =  await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const  result = await reponse.json();
    console.log (result)
    } catch (error) {
        console.error("3333")
    }
}



