// Articles de la rubrique Ressources. Pour en ajouter un : copier un bloc,
// changer le slug (adresse de la page), les textes et la date.
export const ressources = [
  {
    slug: 'rediger-un-bon-prompt',
    titre: 'Comment rédiger un bon prompt : la méthode en 4 éléments',
    description:
      "Contexte, objectif, informations, format : la méthode simple pour obtenir d'une IA générative une réponse utilisable du premier coup.",
    theme: 'Acculturation IA',
    lecture: 4,
    date: '2026-11-14',
    module: { href: '/acculturation/', nom: 'la formation Acculturation IA' },
    corps: `
<p>Une IA générative ne devine pas ce que vous avez en tête. Elle répond à ce qui est écrit. Si la consigne est vague, la réponse l'est aussi, et l'on perd du temps en allers-retours. La bonne nouvelle : quatre éléments suffisent à changer le résultat.</p>
<h2>1. Le contexte</h2>
<p>Dites à l'IA dans quelle situation vous êtes : votre métier, votre interlocuteur, l'enjeu. « Je suis responsable d'une équipe de six personnes et je prépare le compte rendu de notre réunion hebdomadaire » oriente déjà le ton et le niveau de détail.</p>
<h2>2. L'objectif</h2>
<p>Précisez ce que vous voulez obtenir et à quoi cela va servir. « Résume ce texte » ne dit pas si vous cherchez une synthèse pour décider, un message à envoyer ou une liste d'actions. Un objectif clair évite les réponses hors sujet.</p>
<h2>3. Les informations</h2>
<p>Donnez la matière : vos notes, les chiffres, les contraintes. L'IA travaille bien mieux sur des éléments fournis que sur ce qu'elle suppose. C'est aussi le moment de vérifier ce que vous transmettez : pas de données personnelles ni d'informations confidentielles sans y être autorisé.</p>
<h2>4. Le format</h2>
<p>Indiquez la forme attendue : longueur, structure, ton. « Trois décisions, puis les actions avec un responsable et une échéance » donne un document directement exploitable.</p>
<h2>Un exemple avant / après</h2>
<p><strong>Avant :</strong> « Fais-moi un compte rendu. »</p>
<p><strong>Après :</strong> « Voici mes notes de la réunion d'équipe de lundi (six participants). Rédige un compte rendu d'une demi-page : les trois décisions prises, puis la liste des actions avec le responsable et la date. Ton neutre, phrases courtes. »</p>
<h2>Trois réflexes à garder</h2>
<ul>
<li><strong>Relire et vérifier.</strong> Une réponse bien écrite peut contenir une erreur. Les faits, chiffres et citations se contrôlent.</li>
<li><strong>Affiner plutôt que recommencer.</strong> Demandez une version plus courte, un autre ton, un point à développer.</li>
<li><strong>Garder la main.</strong> L'IA propose, vous décidez de ce qui part sous votre nom.</li>
</ul>`,
  },
  {
    slug: 'ia-rgpd-reflexes-entreprise',
    titre: "IA et RGPD : 6 réflexes avant d'utiliser un assistant IA au travail",
    description:
      "Données personnelles, confidentialité, AI Act : les six réflexes à adopter en entreprise avant de transmettre un document à un assistant IA.",
    theme: 'RGPD & réglementation',
    lecture: 5,
    date: '2026-11-14',
    module: { href: '/rgpd-reglementation/', nom: 'la formation RGPD & réglementation' },
    corps: `
<p>Résumer un document client, reformuler un e-mail, analyser un tableau : ces usages paraissent anodins. Ils posent pourtant une question simple : qu'est-ce que je suis en train de transmettre, et à qui ? Voici six réflexes à installer dans une équipe.</p>
<h2>1. Repérer les données personnelles</h2>
<p>Au sens du RGPD, une donnée personnelle est toute information se rapportant à une personne identifiée ou identifiable : nom, adresse e-mail, numéro de téléphone, mais aussi un identifiant client ou une combinaison d'éléments qui permet de reconnaître quelqu'un.</p>
<h2>2. Repérer ce qui est confidentiel</h2>
<p>Le RGPD ne couvre pas tout. Un prix négocié, une stratégie commerciale ou un contrat ne sont pas des données personnelles, mais ils peuvent être couverts par le secret des affaires ou une clause de confidentialité.</p>
<h2>3. Savoir quel outil on utilise</h2>
<p>Un outil validé par l'entreprise, avec un contrat, n'offre pas les mêmes garanties qu'un compte gratuit ouvert à titre personnel. Avant de s'en servir, il faut savoir où vont les données et si elles peuvent être réutilisées par l'éditeur.</p>
<h2>4. Minimiser et anonymiser</h2>
<p>Ne transmettez que ce qui est nécessaire à la tâche. Remplacer les noms et coordonnées par des mentions neutres (« le client », « la société A ») suffit souvent pour obtenir le même résultat.</p>
<h2>5. Vérifier ce que l'IA produit</h2>
<p>Une réponse peut être inexacte ou incomplète. La personne qui l'utilise reste responsable de ce qu'elle envoie ou décide à partir de cette réponse.</p>
<h2>6. Demander quand on a un doute</h2>
<p>Le délégué à la protection des données (DPO), le service juridique ou le responsable informatique sont là pour ça. Une charte d'usage de l'IA aide chacun à savoir ce qui est permis.</p>
<h2>Et l'AI Act ?</h2>
<p>Le règlement européen sur l'intelligence artificielle (règlement (UE) 2024/1689) est entré en vigueur le 1<sup>er</sup> août 2024 et s'applique par étapes. Depuis le 2 février 2025, son article 4 demande aux organisations qui utilisent des systèmes d'IA de veiller à ce que leur personnel dispose d'un niveau suffisant de maîtrise de l'IA. Former ses équipes fait donc partie des attentes du texte.</p>
<p class="note">Cet article donne des repères généraux et ne remplace pas un avis juridique adapté à votre situation.</p>`,
  },
  {
    slug: 'vibe-coding-definition',
    titre: 'Vibe coding : définition, usages et limites',
    description:
      "Qu'est-ce que le vibe coding ? Définition, exemples d'outils que l'on peut créer avec l'IA sans être développeur, et limites à connaître.",
    theme: 'Vibe coding',
    lecture: 4,
    date: '2026-11-14',
    module: { href: '/vibe-coding/', nom: 'la formation Vibe coding' },
    corps: `
<p>Le terme « vibe coding » a été popularisé début 2025 par le chercheur Andrej Karpathy. Il désigne une façon de créer un logiciel en décrivant ce que l'on veut à une IA, en langage courant, puis en faisant évoluer le résultat par échanges successifs, plutôt qu'en écrivant soi-même le code.</p>
<h2>Comment ça se passe, concrètement</h2>
<ol>
<li><strong>Décrire.</strong> On formule le besoin : « un formulaire pour enregistrer les demandes de congés de l'équipe, avec un récapitulatif par mois ».</li>
<li><strong>Générer.</strong> L'IA produit une première version qui fonctionne.</li>
<li><strong>Tester.</strong> On l'essaie, on repère ce qui ne va pas.</li>
<li><strong>Améliorer.</strong> On demande les corrections, une par une, jusqu'à obtenir un prototype satisfaisant.</li>
</ol>
<h2>Ce que l'on peut créer</h2>
<ul>
<li>un formulaire interne ou un mini-outil de suivi ;</li>
<li>un tableau de bord à partir d'un fichier de données ;</li>
<li>une maquette cliquable pour présenter une idée à un prestataire ou à sa direction ;</li>
<li>un petit automatisme qui évite une tâche répétitive.</li>
</ul>
<h2>Pour qui ?</h2>
<p>Pour les personnes qui ont des idées d'outils sans être développeurs : chefs de projet, équipes métier, managers. L'objectif n'est pas de devenir développeur, mais de savoir transformer un besoin en prototype et de mieux dialoguer avec les équipes techniques.</p>
<h2>Les limites à connaître</h2>
<ul>
<li><strong>Un prototype n'est pas un produit.</strong> Sécurité, données personnelles, maintenance : ces sujets demandent une vérification par une personne compétente avant tout déploiement.</li>
<li><strong>Le code généré peut contenir des erreurs.</strong> Il faut tester, y compris les cas inhabituels.</li>
<li><strong>La clarté de la demande fait la qualité du résultat.</strong> Savoir décrire un besoin reste la compétence centrale.</li>
</ul>`,
  },
  {
    slug: 'financer-formation-ia-opco',
    titre: 'Financer une formation IA : OPCO et Qualiopi, mode d’emploi',
    description:
      "À quoi sert la certification Qualiopi, quel est le rôle de votre OPCO et quelles étapes suivre pour demander la prise en charge d'une formation à l'IA.",
    theme: 'Financement',
    lecture: 4,
    date: '2026-11-14',
    module: { href: '/devis/', nom: 'notre devis interactif' },
    corps: `
<p>Former une équipe à l'IA a un coût, et une partie peut souvent être prise en charge. Encore faut-il savoir à qui s'adresser et dans quel ordre. Voici les repères essentiels.</p>
<h2>À quoi sert la certification Qualiopi ?</h2>
<p>Qualiopi est la certification qualité des prestataires de formation. Depuis le 1<sup>er</sup> janvier 2022, elle est obligatoire pour qu'une action de formation puisse être financée par des fonds publics ou mutualisés, dont ceux des OPCO. Choisir un organisme certifié est donc la première condition d'une prise en charge.</p>
<h2>Qu'est-ce qu'un OPCO ?</h2>
<p>Les opérateurs de compétences (OPCO) sont onze organismes agréés par l'État, organisés par secteurs d'activité. Chaque entreprise relève d'un OPCO, déterminé par sa convention collective. Ils accompagnent en particulier les entreprises de moins de 50 salariés dans le financement de leur plan de développement des compétences.</p>
<h2>Les étapes d'une demande</h2>
<ol>
<li><strong>Identifier votre OPCO.</strong> Il dépend de votre convention collective ; votre service paie ou votre expert-comptable le connaît.</li>
<li><strong>Définir le besoin.</strong> Public concerné, objectifs, format, dates envisagées.</li>
<li><strong>Obtenir un devis et un programme</strong> auprès d'un organisme certifié Qualiopi.</li>
<li><strong>Déposer la demande</strong> sur l'espace en ligne de votre OPCO, avant le début de la formation.</li>
<li><strong>Attendre l'accord</strong> de prise en charge avant de démarrer.</li>
</ol>
<h2>Ce qui varie d'un OPCO à l'autre</h2>
<p>Les montants, les plafonds et les priorités de financement sont fixés par chaque OPCO et par chaque branche, et ils évoluent d'une année à l'autre. Seul votre OPCO peut confirmer ce qui sera pris en charge pour votre entreprise.</p>
<p>Capsule IA est certifié Qualiopi et vous fournit le devis et le programme nécessaires à votre dossier.</p>`,
  },
];
