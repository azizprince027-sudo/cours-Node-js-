    // Contenu converti en tableau d'objets JavaScript

    const descriptionConvertie = [
    {
        method: "GET",
        title: "GET : récupérer des données",
        exampleRequest: "GET /users",
        response: `[
    {
    "id":1,
    "nom":"Jonathan"
    }
    ]`,
        express: `app.get("/users", (req,res)=>{\n    res.json(users);\n});`,
        usage: [
        "Liste des utilisateurs",
        "Profil utilisateur",
        "Produits",
        "Articles"
        ]
    },
    {
        method: "POST",
        title: "POST : créer une donnée",
        exampleRequest: "POST /users",
        body: `{
    "nom":"Jonathan",
    "age":18
    }`,
        express: `app.post("/users", (req,res)=>{\n\n    const user = req.body;\n\n    res.json(user);\n\n});`,
        usage: [
        "Inscription",
        "Création d'un produit",
        "Création d'une commande"
        ]
    },
    {
        method: "PUT",
        title: "PUT : remplacer complètement",
        description: "Remplace toute la ressource",
        before: `{
    "id":1,
    "nom":"Jean",
    "age":20
    }`,
        request: "PUT /users/1",
        body: `{
    "nom":"Jonathan",
    "age":18
    }`,
        after: `{
    "id":1,
    "nom":"Jonathan",
    "age":18
    }`
    },
    {
        method: "PATCH",
        title: "PATCH : modifier partiellement",
        description: "Modifie seulement les champs envoyés",
        before: `{
    "id":1,
    "nom":"Jean",
    "age":20,
    "ville":"Abidjan"
    }`,
        request: "PATCH /users/1",
        body: `{
    "age":21
    }`,
        after: `{
    "id":1,
    "nom":"Jean",
    "age":21,
    "ville":"Abidjan"
    }`
    },
    {
        method: "DELETE",
        title: "DELETE : supprimer",
        exampleRequest: "DELETE /users/1",
        express: `app.delete("/users/:id", (req,res)=>{\n\n    res.json({\n        message:"Utilisateur supprimé"\n    });\n\n});`
    },
    {
        method: "HEAD",
        title: "HEAD : récupérer uniquement les informations",
        difference: "GET renvoie données + informations, HEAD renvoie uniquement les informations",
        exampleRequest: "HEAD /image/photo.jpg",
        response: `200 OK\nContent-Type:image/jpeg\n(pas le contenu)`
    },
    {
        method: "OPTIONS",
        title: "OPTIONS : connaître les possibilités",
        exampleRequest: "OPTIONS /users",
        response: `Allow: GET,POST,DELETE`,
        note: "Le serveur indique les méthodes autorisées"
    },
    {
        method: "CONNECT",
        title: "CONNECT : créer une connexion réseau",
        exampleRequest: "CONNECT serveur.com:443",
        note: "Utilisé principalement par des proxies pour créer un tunnel TLS"
    },
    {
        method: "TRACE",
        title: "TRACE : renvoyer la requête pour vérification",
        note: "Renvoie la requête telle quelle pour diagnostiquer le chemin (diagnostic réseau)"
    },
    {
        method: "REST_SUMMARY",
        title: "Résumé REST professionnel",
        mapping: {
        GET: "Lire",
        POST: "Créer",
        PUT: "Remplacer",
        PATCH: "Modifier",
        DELETE: "Supprimer"
        },
        exampleRoutes: [
        { action: "Voir tous les étudiants", method: "GET", route: "/students" },
        { action: "Voir un étudiant", method: "GET", route: "/students/1" },
        { action: "Ajouter un étudiant", method: "POST", route: "/students" },
        { action: "Modifier un étudiant complet", method: "PUT", route: "/students/1" },
        { action: "Modifier une note seulement", method: "PATCH", route: "/students/1/note" },
        { action: "Supprimer un étudiant", method: "DELETE", route: "/students/1" }
        ]
    }
    ];

    module.exports = descriptionConvertie;
