// toutes les methodes http

const httpMethods = [
	{
		method: "GET",
		purpose: "Lire/récupérer des données",
		usage: "Obtenir des utilisateurs, produits, articles...",
		example: "fetch('/api/users').then(r => r.json()).then(data => console.log(data));"
	},
	{
		method: "POST",
		purpose: "Créer une nouvelle ressource",
		usage: "Ajouter un utilisateur, créer une commande...",
		example: "fetch('/api/users', { method: 'POST', body: JSON.stringify(user) })"
	},
	{
		method: "PUT",
		purpose: "Remplacer complètement une ressource",
		usage: "Modifier entièrement un utilisateur",
		example: "fetch('/api/users/1', { method: 'PUT', body: JSON.stringify(user) })"
	},
	{
		method: "PATCH",
		purpose: "Modifier partiellement une ressource",
		usage: "Modifier seulement un champ",
		example: "fetch('/api/users/1', { method: 'PATCH', body: JSON.stringify({ name: 'Ana' }) })"
	},
	{
		method: "DELETE",
		purpose: "Supprimer une ressource",
		usage: "Supprimer un utilisateur",
		example: "fetch('/api/users/1', { method: 'DELETE' })"
	},
	{
		method: "HEAD",
		purpose: "Récupérer les informations d'une réponse sans le contenu",
		usage: "Vérifier si une ressource existe",
		example: "fetch('/api/users/1', { method: 'HEAD' }).then(r => console.log(r.status));"
	},
	{
		method: "OPTIONS",
		purpose: "Connaître les méthodes disponibles",
		usage: "Savoir ce que le serveur autorise",
		example: "fetch('/api/users', { method: 'OPTIONS' }).then(r => console.log(r.headers));"
	},
	{
		method: "CONNECT",
		purpose: "Créer un tunnel réseau",
		usage: "Utilisé surtout avec des proxies",
		example: "// Généralement géré par le client/proxy, pas par fetch"
	},
	{
		method: "TRACE",
		purpose: "Tester le chemin d'une requête",
		usage: "Diagnostic réseau",
		example: "// Méthode de diagnostic ; rarement utilisée côté client"
	}
];
