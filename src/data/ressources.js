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
  {
    slug: 'ai-act-obligation-formation-ia',
    titre: "AI Act : l'obligation de former ses équipes à l'IA",
    description:
      "Depuis février 2025, l'article 4 de l'AI Act demande aux entreprises d'assurer la « maîtrise de l'IA » de leurs équipes. Ce que dit le texte et comment s'y préparer.",
    theme: 'RGPD & réglementation',
    lecture: 5,
    date: '2026-11-15',
    module: { href: '/rgpd-reglementation/', nom: 'la formation RGPD & réglementation' },
    corps: `
<p>L'AI Act, le règlement européen sur l'intelligence artificielle (règlement (UE) 2024/1689), ne concerne pas seulement les éditeurs de logiciels. Son article 4 s'adresse aussi aux entreprises qui se contentent d'utiliser des outils d'IA : elles doivent veiller à ce que les personnes qui s'en servent aient un niveau suffisant de « maîtrise de l'IA ». Cette disposition s'applique depuis le 2 février 2025.</p>
<h2>Que dit l'article 4 ?</h2>
<p>Le texte demande aux fournisseurs et aux « déployeurs » de systèmes d'IA de prendre des mesures pour garantir, dans toute la mesure du possible, un niveau suffisant de maîtrise de l'IA pour leur personnel et pour les autres personnes qui utilisent ces systèmes en leur nom. Ces mesures tiennent compte des connaissances techniques, de l'expérience et de la formation des personnes, ainsi que du contexte dans lequel l'IA est utilisée.</p>
<h2>Qui est concerné ?</h2>
<p>Un « déployeur » est une organisation qui utilise un système d'IA dans un cadre professionnel. Une entreprise dont les salariés se servent d'un assistant IA pour rédiger, résumer ou analyser des documents entre donc dans le champ du texte, quelle que soit sa taille.</p>
<h2>Que signifie « maîtrise de l'IA » ?</h2>
<p>Le règlement la définit comme les compétences, les connaissances et la compréhension qui permettent d'utiliser les systèmes d'IA en connaissance de cause, en ayant conscience de leurs possibilités, de leurs risques et des préjudices qu'ils peuvent causer. Concrètement, un collaborateur devrait savoir :</p>
<ul>
<li>ce qu'un outil d'IA générative peut et ne peut pas faire ;</li>
<li>qu'une réponse bien écrite peut être fausse, et comment la vérifier ;</li>
<li>quelles informations il ne doit pas transmettre à l'outil ;</li>
<li>à qui s'adresser en cas de doute.</li>
</ul>
<h2>Faut-il un certificat ou une formation précise ?</h2>
<p>Non. Le texte n'impose ni programme type, ni durée, ni certificat. Il fixe un objectif et laisse chaque organisation choisir les moyens, proportionnés à ses usages : une équipe qui utilise un assistant pour reformuler des courriels n'a pas les mêmes besoins qu'un service qui s'appuie sur l'IA pour trier des candidatures.</p>
<h2>Comment s'y préparer</h2>
<ol>
<li><strong>Recenser les usages.</strong> Quels outils d'IA sont utilisés, par qui et pour quelles tâches ?</li>
<li><strong>Adapter le niveau au public.</strong> Un socle commun pour tous, des approfondissements pour les fonctions les plus exposées.</li>
<li><strong>Former sur des cas réels.</strong> Les réflexes s'acquièrent sur les situations de travail des participants, pas sur des généralités.</li>
<li><strong>Garder une trace.</strong> Programme, date, participants : ces éléments montrent les mesures prises.</li>
<li><strong>Mettre à jour.</strong> Les outils et les usages évoluent, les repères aussi.</li>
</ol>
<p>Pour les réflexes du quotidien, voir aussi <a href="/ressources/ia-rgpd-reflexes-entreprise/">IA et RGPD : 6 réflexes avant d'utiliser un assistant IA au travail</a>.</p>
<p class="note">Cet article donne une information générale et ne constitue pas un conseil juridique. Pour une situation particulière, rapprochez-vous de votre délégué à la protection des données ou de votre conseil.</p>`,
  },
  {
    slug: 'choisir-formation-ia-entreprise',
    titre: 'Comment choisir une formation IA pour son entreprise : 7 critères',
    description:
      "Objectifs, niveau des équipes, cas pratiques, formateur, format, financement : sept critères pour comparer les formations IA et éviter les programmes trop généraux.",
    theme: 'Choisir sa formation',
    lecture: 5,
    date: '2026-11-15',
    module: { href: '/devis/', nom: 'notre devis interactif' },
    corps: `
<p>Les offres de formation à l'intelligence artificielle se sont multipliées, et elles se ressemblent sur le papier. Pour les comparer, sept critères permettent de distinguer un programme utile d'une présentation générale que les équipes auront oubliée la semaine suivante.</p>
<h2>1. Un objectif formulé en situations de travail</h2>
<p>« Découvrir l'IA » n'est pas un objectif. « Savoir préparer un compte rendu, une relance client ou une synthèse avec un assistant IA, et vérifier le résultat » en est un. Demandez ce que les participants sauront faire en sortant.</p>
<h2>2. Un programme adapté au niveau réel des équipes</h2>
<p>Dans une même entreprise, certains utilisent déjà l'IA tous les jours et d'autres ne l'ont jamais ouverte. Un bon organisme pose la question avant de proposer un programme, et prévoit un socle commun plutôt qu'un contenu unique pour tous. C'est le rôle d'une formation d'<a href="/acculturation/">acculturation IA</a>.</p>
<h2>3. Des cas pratiques tirés de votre activité</h2>
<p>C'est le critère qui pèse le plus sur ce qui restera après la formation. Les exercices doivent porter sur vos documents types, vos outils et vos tâches, pas sur des exemples génériques. Les besoins d'un commercial ne sont pas ceux d'une équipe administrative : voir nos <a href="/ressources/usages-ia-par-metier/">usages concrets de l'IA par métier</a>.</p>
<h2>4. Un formateur qui pratique</h2>
<p>Renseignez-vous sur la personne qui animera la session : utilise-t-elle ces outils dans son propre travail ? A-t-elle déjà accompagné des équipes comparables aux vôtres ?</p>
<h2>5. Une place pour les règles et les limites</h2>
<p>Une formation sérieuse aborde ce qu'il ne faut pas transmettre à un outil, la vérification des réponses et le cadre réglementaire. Depuis février 2025, l'AI Act demande d'ailleurs aux entreprises d'assurer la <a href="/ressources/ai-act-obligation-formation-ia/">maîtrise de l'IA de leurs équipes</a>.</p>
<h2>6. Un format compatible avec votre organisation</h2>
<p>À distance, dans vos locaux, en e-learning : le bon format est celui que vos équipes pourront réellement suivre. Le distanciel permet de réunir des sites éloignés et de découper la formation en séances courtes. Voir <a href="/ressources/formation-ia-a-distance/">comment se déroule une formation IA à distance</a>.</p>
<h2>7. La certification Qualiopi et le financement</h2>
<p>La certification Qualiopi est la condition pour qu'une formation puisse être financée par un OPCO. Vérifiez-la avant de demander un devis, et consultez notre guide pour <a href="/ressources/financer-formation-ia-opco/">financer une formation IA</a>.</p>
<h2>Les questions à poser avant de signer</h2>
<ul>
<li>Le programme sera-t-il adapté après un échange sur nos besoins ?</li>
<li>Sur quels cas pratiques les participants travailleront-ils ?</li>
<li>Qui anime, et quelle est son expérience des outils ?</li>
<li>Que reçoivent les participants après la session pour continuer seuls ?</li>
</ul>`,
  },
  {
    slug: 'usages-ia-par-metier',
    titre: 'IA au travail : 12 usages concrets par métier',
    description:
      "Marketing, commercial, administration, management : douze usages concrets de l'IA générative au travail, avec le point à vérifier pour chacun.",
    theme: 'IA & Métiers',
    lecture: 5,
    date: '2026-11-15',
    module: { href: '/metiers/', nom: 'la formation IA & Métiers' },
    corps: `
<p>Un assistant IA est utile quand il s'applique à une tâche précise. Voici douze usages que l'on retrouve le plus souvent dans les équipes, classés par métier. Pour chacun, l'IA prépare et l'utilisateur relit, corrige et décide.</p>
<h2>Marketing et communication</h2>
<ul>
<li><strong>Chercher des angles de campagne.</strong> Demander dix pistes à partir d'un brief, puis en retenir deux à travailler.</li>
<li><strong>Adapter un message à plusieurs canaux.</strong> Un même texte décliné pour un courriel, une publication LinkedIn et une page web.</li>
<li><strong>Préparer un calendrier éditorial.</strong> Une trame de sujets sur un trimestre, à ajuster selon vos priorités.</li>
</ul>
<p><strong>À vérifier :</strong> le ton de la marque, les chiffres et les promesses faites au client.</p>
<h2>Commercial et relation client</h2>
<ul>
<li><strong>Préparer un rendez-vous.</strong> Résumer les échanges précédents et lister les questions à poser.</li>
<li><strong>Travailler un argumentaire.</strong> Reformuler une offre selon l'interlocuteur et anticiper les objections.</li>
<li><strong>Personnaliser une relance.</strong> Partir de ses notes de rendez-vous pour écrire un message qui ne ressemble pas à un modèle.</li>
</ul>
<p><strong>À vérifier :</strong> les prix, les délais, les engagements, et ne pas transmettre de données clients à un outil non autorisé.</p>
<h2>Administration et gestion</h2>
<ul>
<li><strong>Rédiger un compte rendu.</strong> Transformer des notes en décisions et en actions avec responsable et échéance.</li>
<li><strong>Synthétiser un document long.</strong> Obtenir les points essentiels d'un rapport ou d'une procédure.</li>
<li><strong>Structurer des informations dispersées.</strong> Passer d'une liste en vrac à un tableau ou un plan d'action.</li>
</ul>
<p><strong>À vérifier :</strong> les dates, les montants et les noms, que l'IA peut modifier sans le signaler.</p>
<h2>Management et organisation</h2>
<ul>
<li><strong>Explorer des scénarios.</strong> Comparer plusieurs façons d'organiser un projet, avec leurs avantages et leurs risques.</li>
<li><strong>Préparer un entretien ou une réunion.</strong> Construire un ordre du jour et formuler des questions ouvertes.</li>
<li><strong>Clarifier une décision.</strong> Demander à l'IA de jouer l'avocat du diable sur un choix envisagé.</li>
</ul>
<p><strong>À vérifier :</strong> tout ce qui touche à une personne identifiable reste hors de l'outil, et la décision reste humaine.</p>
<h2>Ce qui fait la différence</h2>
<p>Dans tous ces cas, le résultat dépend de la consigne : contexte, objectif, informations, format. La méthode est détaillée dans <a href="/ressources/rediger-un-bon-prompt/">Comment rédiger un bon prompt</a>. Et lorsqu'une tâche revient chaque semaine à l'identique, elle peut souvent être automatisée : voir <a href="/ressources/automatiser-taches-ia/">Automatiser ses tâches avec l'IA</a>.</p>`,
  },
  {
    slug: 'formation-ia-a-distance',
    titre: 'Formation IA à distance : comment ça se passe ?',
    description:
      "Déroulement, avantages, limites et conditions de réussite d'une formation à l'intelligence artificielle en distanciel pour les équipes d'une entreprise.",
    theme: 'Formation à distance',
    lecture: 4,
    date: '2026-11-15',
    module: { href: '/devis/', nom: 'notre devis interactif' },
    corps: `
<p>Se former à l'intelligence artificielle à distance fonctionne bien, pour une raison simple : les outils d'IA s'utilisent sur un ordinateur. Chaque participant pratique sur son propre poste, dans les conditions réelles de son travail.</p>
<h2>Comment se déroule une session</h2>
<p>Une formation à distance se tient en classe virtuelle : le formateur et les participants sont connectés en visioconférence, en direct. Une séance alterne en général :</p>
<ul>
<li>un apport court du formateur, avec une démonstration à l'écran ;</li>
<li>un exercice que chacun réalise sur son poste ;</li>
<li>un retour en groupe sur les résultats obtenus, les erreurs et les bonnes formulations.</li>
</ul>
<h2>Les avantages du distanciel</h2>
<ul>
<li><strong>Réunir des équipes éloignées.</strong> Plusieurs sites ou des collaborateurs en télétravail suivent la même session, sans déplacement.</li>
<li><strong>Découper la formation.</strong> Des séances courtes, espacées, laissent le temps d'essayer entre deux rendez-vous.</li>
<li><strong>Pratiquer en conditions réelles.</strong> Les participants travaillent avec leurs outils et leurs documents.</li>
<li><strong>Former partout en France</strong> avec le même formateur et le même programme.</li>
</ul>
<h2>Les limites, et comment les compenser</h2>
<ul>
<li><strong>L'attention.</strong> Elle baisse plus vite derrière un écran : mieux vaut plusieurs séances courtes qu'une journée entière.</li>
<li><strong>La taille du groupe.</strong> Un petit groupe permet à chacun de montrer son écran et de poser ses questions.</li>
<li><strong>La technique.</strong> Une connexion stable, un casque et l'accès aux outils sont à vérifier avant le jour J.</li>
</ul>
<h2>Les conditions de réussite</h2>
<ol>
<li>Un échange préalable pour cadrer les besoins et le niveau des participants.</li>
<li>Des cas pratiques tirés de l'activité de l'entreprise.</li>
<li>Du temps bloqué dans les agendas, sans réunion en parallèle.</li>
<li>Un support remis après la session pour continuer seul.</li>
</ol>
<h2>Distanciel, présentiel ou e-learning ?</h2>
<p>Le distanciel en direct convient à la plupart des formations IA. Le présentiel garde son intérêt pour un séminaire ou une équipe peu à l'aise avec la visioconférence. Le e-learning, suivi à son rythme, complète bien une session en direct pour ancrer les acquis. Ces formats peuvent se combiner.</p>
<p>Pour comparer les offres, voir <a href="/ressources/choisir-formation-ia-entreprise/">Comment choisir une formation IA pour son entreprise</a>.</p>`,
  },
  {
    slug: 'automatiser-taches-ia',
    titre: "Automatiser ses tâches avec l'IA : par où commencer ?",
    description:
      "Quelles tâches automatiser, avec quels outils (Make, n8n, Zapier) et quelles précautions : le guide pour lancer une première automatisation en entreprise.",
    theme: 'Automatisation',
    lecture: 5,
    date: '2026-11-15',
    module: { href: '/devis/', nom: 'notre devis interactif, pour un programme sur mesure' },
    corps: `
<p>Automatiser, c'est confier à un outil une suite d'actions que l'on répète à l'identique : recevoir une demande, la classer, prévenir la bonne personne, mettre à jour un tableau. L'IA générative élargit ce qui est automatisable, parce qu'elle sait lire un texte libre, le résumer ou le classer.</p>
<h2>Automatisation et IA : quelle différence ?</h2>
<p>Une automatisation classique suit des règles fixes : « si un formulaire est envoyé, alors créer une ligne dans le tableau ». L'IA intervient comme une étape de cette chaîne, là où il faut comprendre du langage : extraire les informations d'un courriel, proposer une réponse, attribuer une catégorie. Les deux se complètent.</p>
<h2>Quelles tâches automatiser en premier ?</h2>
<p>Une bonne candidate est une tâche fréquente, répétitive, faite de plusieurs copier-coller entre outils, et dont le résultat se vérifie facilement. Par exemple :</p>
<ul>
<li>trier les demandes entrantes et les transmettre au bon service ;</li>
<li>préparer un brouillon de réponse aux questions récurrentes ;</li>
<li>reporter les informations d'un formulaire dans un tableau de suivi ;</li>
<li>produire le compte rendu d'une réunion à partir de notes ;</li>
<li>envoyer un rappel quand une échéance approche.</li>
</ul>
<h2>Les outils</h2>
<p>Des plateformes comme Make, n8n ou Zapier permettent de relier des applications entre elles sans programmer : on assemble des étapes dans une interface visuelle. La plupart proposent des modules pour appeler un modèle d'IA au milieu d'un scénario. Pour un besoin plus spécifique, le <a href="/ressources/vibe-coding-definition/">vibe coding</a> permet de créer un petit outil sur mesure.</p>
<h2>La méthode en 5 étapes</h2>
<ol>
<li><strong>Décrire la tâche telle qu'elle est faite aujourd'hui</strong>, étape par étape.</li>
<li><strong>Repérer ce qui est mécanique</strong> et ce qui demande un jugement humain.</li>
<li><strong>Commencer petit :</strong> une seule tâche, un seul service.</li>
<li><strong>Tester sur des cas réels</strong>, y compris les cas inhabituels.</li>
<li><strong>Garder un contrôle humain</strong> avant tout envoi vers l'extérieur.</li>
</ol>
<h2>Les précautions</h2>
<ul>
<li><strong>Données.</strong> Savoir quelles informations traversent l'automatisation et où elles sont envoyées. Les <a href="/ressources/ia-rgpd-reflexes-entreprise/">réflexes RGPD</a> s'appliquent ici aussi.</li>
<li><strong>Erreurs.</strong> Une IA peut mal classer ou mal résumer : prévoir une relecture sur ce qui engage l'entreprise.</li>
<li><strong>Maintenance.</strong> Désigner une personne responsable du scénario et documenter son fonctionnement.</li>
</ul>
<p>Capsule IA construit des programmes sur mesure sur l'automatisation, à partir des tâches de vos équipes.</p>`,
  },
  {
    slug: 'verifier-reponse-ia',
    titre: "Comment vérifier une réponse d'IA avant de l'utiliser ?",
    description:
      "Chiffres, noms, sources, raisonnement, oublis : cinq contrôles simples pour repérer les erreurs d'un assistant IA avant d'envoyer un document ou de décider.",
    theme: 'Acculturation IA',
    lecture: 4,
    date: '2026-11-15',
    module: { href: '/acculturation/', nom: 'la formation Acculturation IA' },
    corps: `
<p>Pour vérifier une réponse d'IA, contrôlez d'abord ce qui peut se vérifier : les chiffres, les dates, les noms et les sources, en les comparant à un document de référence. Relisez ensuite le raisonnement, puis adaptez le niveau de contrôle à l'enjeu : un brouillon interne ne demande pas la même attention qu'un courrier client ou qu'une décision.</p>
<h2>Pourquoi une réponse bien écrite peut être fausse</h2>
<p>Un assistant IA génératif produit un texte plausible à partir de ce qu'il a appris et de ce que vous lui avez fourni. Il ne garantit pas l'exactitude de chaque affirmation. Une erreur est donc rédigée avec la même assurance qu'une information juste : la qualité du style ne dit rien de la fiabilité du contenu.</p>
<h2>Les cinq contrôles</h2>
<ol>
<li><strong>Les chiffres et les dates.</strong> Montants, pourcentages, échéances : comparez-les à la source d'origine. Dans un résumé ou un tableau, vérifiez qu'aucune valeur n'a été arrondie, inversée ou ajoutée.</li>
<li><strong>Les noms propres.</strong> Personnes, sociétés, produits, références de dossier : une lettre ou un chiffre modifié suffit à créer une confusion.</li>
<li><strong>Les sources et les citations.</strong> Si la réponse cite un texte, une étude ou un site, retrouvez-le vous-même. Une référence peut ne pas exister, ou ne pas dire ce que la réponse lui fait dire.</li>
<li><strong>Le raisonnement.</strong> La conclusion découle-t-elle des éléments fournis ? Un calcul se refait, une comparaison se relit ligne par ligne.</li>
<li><strong>Ce qui manque.</strong> Une synthèse peut omettre une réserve, une exception ou une condition. Relisez le document d'origine sur les points qui comptent pour vous.</li>
</ol>
<h2>Demander à l'IA de faciliter le contrôle</h2>
<p>La façon de formuler la demande rend la vérification plus rapide :</p>
<ul>
<li><strong>Fournir la matière.</strong> Une réponse appuyée sur un document que vous avez transmis se contrôle plus facilement qu'une réponse donnée de mémoire.</li>
<li><strong>Demander l'origine de chaque information.</strong> « Pour chaque point, indique le passage du document sur lequel tu t'appuies. »</li>
<li><strong>Demander ce qui est incertain.</strong> « Signale ce qui ne figure pas dans le texte fourni et ce dont tu n'es pas sûr. »</li>
</ul>
<p>Ces consignes aident, sans remplacer votre relecture : l'IA peut aussi se tromper lorsqu'elle se relit. La méthode pour construire une consigne est détaillée dans <a href="/ressources/rediger-un-bon-prompt/">Comment rédiger un bon prompt</a>.</p>
<h2>Adapter le contrôle à l'enjeu</h2>
<ul>
<li><strong>Usage interne, enjeu faible.</strong> Recherche d'idées, brouillon, reformulation : une relecture attentive suffit.</li>
<li><strong>Document qui sort de l'entreprise.</strong> Devis, courrier, publication : les chiffres, les noms et les engagements se vérifient un par un.</li>
<li><strong>Sujet juridique, financier, médical ou lié aux ressources humaines.</strong> La réponse est un point de départ, à faire valider par une personne compétente.</li>
</ul>
<h2>Les signaux qui doivent alerter</h2>
<ul>
<li>un chiffre très précis donné sans source ;</li>
<li>une citation ou une référence que vous ne retrouvez pas ;</li>
<li>une réponse qui change sur le fond quand vous reposez la même question ;</li>
<li>une affirmation sur votre entreprise ou sur un fait récent que l'outil n'a aucune raison de connaître.</li>
</ul>
<h2>En faire un réflexe d'équipe</h2>
<p>La vérification tient mieux quand elle est partagée : une règle simple (« ce qui sort de l'entreprise est relu par la personne qui signe »), une liste de contrôles connue de tous, et des exemples d'erreurs repérées discutés en équipe. La personne qui utilise une réponse en reste responsable. Ce réflexe se travaille dans la formation <a href="/acculturation/">Acculturation IA</a> et complète les <a href="/ressources/ia-rgpd-reflexes-entreprise/">réflexes RGPD</a> sur ce que l'on transmet à l'outil.</p>`,
  },
  {
    slug: 'faire-adopter-ia-equipe',
    titre: "Faire adopter l'IA par son équipe : 6 leviers concrets",
    description:
      "Usages choisis, règles claires, formation sur des cas réels, relais internes : six leviers pour que votre équipe utilise vraiment l'IA au travail.",
    theme: 'Conduite du changement',
    lecture: 5,
    date: '2026-11-16',
    module: { href: '/acculturation/', nom: 'la formation Acculturation IA' },
    corps: `
<p>Pour faire adopter l'IA par une équipe, partez de ses tâches réelles plutôt que de l'outil : choisissez deux ou trois usages utiles, fixez des règles simples sur ce qui est permis, formez sur des cas concrets et laissez du temps pour pratiquer. L'adoption se joue moins sur la technologie que sur la confiance et sur l'habitude.</p>
<h2>Pourquoi ouvrir des accès ne suffit pas</h2>
<p>Donner un compte à chacun ne crée pas un usage. Sans repères, certains essaient une fois et abandonnent, d'autres s'en servent sans le dire, d'autres encore s'en tiennent à l'écart. Les freins sont le plus souvent les mêmes :</p>
<ul>
<li>ne pas savoir par où commencer ni pour quelle tâche ;</li>
<li>craindre de mal faire, ou de transmettre une information qu'il ne fallait pas ;</li>
<li>s'inquiéter de ce que l'outil change pour son poste ;</li>
<li>rester sur une première réponse décevante.</li>
</ul>
<h2>Les six leviers</h2>
<ol>
<li><strong>Partir des tâches.</strong> Demandez à l'équipe ce qui lui prend du temps chaque semaine : comptes rendus, relances, synthèses, mises en forme. Retenez deux ou trois usages précis pour commencer. Notre liste d'<a href="/ressources/usages-ia-par-metier/">usages concrets par métier</a> peut servir de point de départ.</li>
<li><strong>Dire ce qui est permis.</strong> Quel outil utiliser, quelles informations ne pas y mettre, qui relit ce qui sort de l'entreprise. Une page suffit. Des règles claires rassurent ceux qui hésitent et encadrent ceux qui pratiquent déjà.</li>
<li><strong>Former sur des cas réels.</strong> Une démonstration impressionne, un exercice sur ses propres documents installe un réflexe. Chacun doit repartir avec au moins une tâche qu'il sait refaire seul.</li>
<li><strong>S'appuyer sur des relais.</strong> Dans chaque équipe, une ou deux personnes sont plus à l'aise que les autres. Donnez-leur un rôle reconnu : répondre aux questions, partager une consigne qui fonctionne, faire remonter les difficultés.</li>
<li><strong>Laisser du temps.</strong> Un nouvel usage demande quelques essais avant de devenir plus rapide que l'ancienne façon de faire. Si l'agenda ne prévoit aucun moment pour essayer, l'habitude d'avant reprend le dessus.</li>
<li><strong>Montrer l'exemple.</strong> Quand le responsable explique comment il a préparé une réunion avec l'assistant, et ce qu'il a dû corriger, il rend l'usage légitime et rappelle que la relecture fait partie du travail.</li>
</ol>
<h2>Répondre aux inquiétudes</h2>
<p>Les réticences méritent une réponse, pas un argumentaire. Trois points reviennent souvent :</p>
<ul>
<li><strong>« Est-ce que l'outil va me remplacer ? »</strong> Dites ce que vous attendez concrètement : quelles tâches sont concernées, lesquelles ne le sont pas, et que la décision reste à la personne.</li>
<li><strong>« Et si je me trompe ? »</strong> Une réponse d'IA se contrôle. Donner une méthode pour <a href="/ressources/verifier-reponse-ia/">vérifier une réponse avant de l'utiliser</a> lève une bonne part de la crainte.</li>
<li><strong>« Je n'y arrive pas. »</strong> Le premier essai est rarement le bon. Regarder ensemble une consigne qui n'a pas marché apprend davantage qu'un exemple parfait.</li>
</ul>
<h2>Les erreurs à éviter</h2>
<ul>
<li><strong>Imposer l'outil sans expliquer pourquoi.</strong> L'équipe l'utilise pour la forme, puis l'oublie.</li>
<li><strong>Tout interdire par prudence.</strong> Les usages continuent, mais sans cadre et hors de votre vue.</li>
<li><strong>Vouloir tout couvrir d'un coup.</strong> Mieux vaut trois usages maîtrisés que vingt survolés.</li>
<li><strong>Former une fois, puis ne plus en parler.</strong> Sans suivi, les acquis s'estompent.</li>
</ul>
<h2>Comment savoir si l'adoption prend</h2>
<p>Inutile de mesurer des connexions. Posez plutôt trois questions à l'équipe, quelques semaines après le démarrage : pour quelles tâches utilisez-vous l'assistant ? Qu'est-ce qui ne fonctionne pas ? De quoi auriez-vous besoin pour aller plus loin ? Les réponses indiquent les usages à généraliser, ceux à abandonner et les règles à préciser.</p>
<p>Un socle commun aide à démarrer sur de bonnes bases : c'est l'objet de la formation <a href="/acculturation/">Acculturation IA</a>, construite à partir des situations de travail de vos équipes.</p>`,
  },
  {
    slug: 'ia-service-client-usages',
    titre: "IA et service client : comment s'en servir au quotidien ?",
    description:
      "Comprendre une demande, préparer une réponse, alimenter une base de réponses : les usages utiles de l'IA au service client et les règles à garder.",
    theme: 'IA & Métiers',
    lecture: 5,
    date: '2026-11-17',
    module: { href: '/metiers/', nom: 'la formation IA & Métiers' },
    corps: `
<p>Au service client, l'IA sert surtout à préparer : comprendre une demande longue, proposer un brouillon de réponse, reformuler un message délicat ou tenir à jour les réponses aux questions fréquentes. La réponse qui part chez le client reste relue et validée par un conseiller, qui garde la relation et la décision.</p>
<h2>Ce que l'IA fait bien, ce qu'elle ne doit pas faire seule</h2>
<p>Un assistant IA est à l'aise avec le langage : résumer, classer, reformuler, adapter un ton. Il ne connaît pas en revanche le dossier du client, les conditions de son contrat ni les engagements que l'entreprise peut prendre, sauf si on les lui fournit. Tout ce qui engage l'entreprise (un remboursement, un délai, un geste commercial, une explication sur une facture) relève donc du conseiller.</p>
<h2>Six usages concrets</h2>
<ul>
<li><strong>Comprendre une demande confuse.</strong> Demander à l'assistant d'extraire d'un long message le problème principal, ce que le client attend et les informations qui manquent pour lui répondre.</li>
<li><strong>Préparer un brouillon de réponse.</strong> À partir de la demande et des éléments que vous fournissez, obtenir une première version à corriger plutôt qu'une page blanche.</li>
<li><strong>Ajuster le ton.</strong> Rendre une réponse plus claire, plus courte ou plus chaleureuse, notamment face à un client mécontent, sans changer le fond.</li>
<li><strong>Expliquer simplement une procédure.</strong> Transformer une note interne technique en étapes compréhensibles pour un client.</li>
<li><strong>Construire la base des réponses fréquentes.</strong> Repérer les questions qui reviennent dans un lot de demandes anonymisées et proposer une trame de réponse pour chacune, à valider par l'équipe.</li>
<li><strong>Synthétiser les retours.</strong> Faire ressortir les motifs de contact les plus récurrents pour signaler aux autres services ce qui pose problème.</li>
</ul>
<h2>Un exemple de consigne</h2>
<p>« Je travaille au service client d'une entreprise de vente de matériel de bureau. Voici le message d'un client, dont j'ai retiré le nom et les coordonnées, et nos conditions de retour. Rédige une réponse de dix lignes au plus, polie et directe, qui explique la marche à suivre pour le retour. N'ajoute aucun engagement qui ne figure pas dans les conditions fournies. »</p>
<p>La consigne donne le contexte, l'objectif, la matière et le format, et fixe une limite claire : l'assistant ne doit rien promettre au-delà de ce qui lui a été transmis.</p>
<h2>Les règles à garder</h2>
<ul>
<li><strong>Protéger les données des clients.</strong> Nom, coordonnées, numéro de commande, historique : ces informations ne vont que dans un outil autorisé par l'entreprise, et seulement si la tâche l'exige. Les <a href="/ressources/ia-rgpd-reflexes-entreprise/">réflexes RGPD</a> s'appliquent pleinement ici.</li>
<li><strong>Relire avant d'envoyer.</strong> Vérifier les délais, les montants, les références et toute promesse. Une réponse bien tournée peut contenir une erreur : voir <a href="/ressources/verifier-reponse-ia/">comment vérifier une réponse d'IA</a>.</li>
<li><strong>Ne pas inventer de règle.</strong> Si l'information n'est pas dans les documents fournis, la réponse ne doit pas la supposer. Mieux vaut demander à un collègue.</li>
<li><strong>Garder sa propre voix.</strong> Un client remarque vite un message impersonnel. Le brouillon se retravaille pour ressembler à l'entreprise et à la personne qui signe.</li>
</ul>
<h2>Par où commencer dans une équipe</h2>
<ol>
<li><strong>Choisir un type de demande</strong> fréquent et sans enjeu sensible, par exemple les questions sur un suivi de livraison.</li>
<li><strong>Rassembler les documents de référence</strong> que l'assistant pourra utiliser : conditions générales, procédures, réponses déjà validées.</li>
<li><strong>Tester sur des cas réels anonymisés</strong> et comparer avec les réponses habituelles de l'équipe.</li>
<li><strong>Partager les consignes qui fonctionnent</strong> pour que chaque conseiller puisse les réutiliser.</li>
</ol>
<p>Ces usages se travaillent sur les situations propres à votre service dans la formation <a href="/metiers/">IA &amp; Métiers</a>, qui part des demandes et des outils de vos équipes.</p>`,
  },
  {
    slug: 'bibliotheque-prompts-equipe',
    titre: "Créer une bibliothèque de prompts d'équipe : mode d'emploi",
    description:
      "Quelles consignes garder, comment les rédiger, les ranger et les tenir à jour : la méthode pour partager des prompts qui fonctionnent dans une équipe.",
    theme: 'Acculturation IA',
    lecture: 5,
    date: '2026-11-18',
    module: { href: '/acculturation/', nom: 'la formation Acculturation IA' },
    corps: `
<p>Une bibliothèque de prompts d'équipe rassemble les consignes qui ont déjà donné de bons résultats sur des tâches récurrentes, pour que chacun puisse les réutiliser au lieu de repartir de zéro. Pour qu'elle serve, elle doit rester courte, rédigée sous forme de modèles à compléter, rangée par tâche et relue régulièrement par une personne désignée.</p>
<h2>Pourquoi partager ses consignes</h2>
<p>Dans une équipe qui utilise un assistant IA, chacun finit par trouver des formulations qui marchent. Tant qu'elles restent dans l'historique de quelques personnes, les autres refont les mêmes essais. Une bibliothèque commune permet de :</p>
<ul>
<li><strong>gagner du temps</strong> sur les tâches qui reviennent chaque semaine ;</li>
<li><strong>harmoniser les résultats</strong>, par exemple le format d'un compte rendu ou le ton d'une relance ;</li>
<li><strong>aider ceux qui débutent</strong>, qui disposent d'un point de départ éprouvé ;</li>
<li><strong>rappeler les règles</strong> au bon endroit, comme les informations à ne pas transmettre.</li>
</ul>
<h2>Quelles consignes y mettre</h2>
<p>Toutes ne méritent pas d'y figurer. Retenez celles qui répondent à trois conditions : la tâche est fréquente, la consigne a été testée par au moins deux personnes, et le résultat obtenu a été jugé utilisable après relecture. Quelques exemples courants :</p>
<ul>
<li>transformer des notes de réunion en décisions et en actions ;</li>
<li>résumer un document long pour une personne qui doit décider ;</li>
<li>reformuler un message délicat sans changer le fond ;</li>
<li>préparer une trame de réponse à une question fréquente.</li>
</ul>
<h2>Rédiger un modèle réutilisable</h2>
<p>Une consigne copiée telle quelle d'une conversation contient souvent des détails propres à un cas. Pour la rendre réutilisable, gardez la structure et remplacez les éléments variables par des zones à compléter, signalées entre crochets. Reprenez les quatre éléments d'une bonne consigne, détaillés dans <a href="/ressources/rediger-un-bon-prompt/">Comment rédiger un bon prompt</a> : contexte, objectif, informations, format.</p>
<p><strong>Exemple :</strong> « Je suis [fonction] et je prépare [type de document] pour [destinataire]. Voici mes notes : [coller les notes, sans données personnelles]. Rédige [longueur] avec [structure attendue]. Ton [neutre, cordial, direct]. Signale les points qui manquent dans mes notes. »</p>
<h2>Une fiche par consigne</h2>
<p>Chaque modèle gagne à être accompagné de quelques informations, pour que la personne qui le reprend sache quand et comment l'utiliser :</p>
<ol>
<li><strong>La tâche</strong> à laquelle il sert, en une phrase.</li>
<li><strong>Le modèle</strong> lui-même, avec ses zones à compléter.</li>
<li><strong>Ce qu'il ne faut pas y mettre</strong> : données personnelles, informations confidentielles.</li>
<li><strong>Le point à vérifier</strong> dans la réponse : chiffres, dates, engagements.</li>
<li><strong>La personne à contacter</strong> et la date de la dernière mise à jour.</li>
</ol>
<h2>Où la ranger et comment la faire vivre</h2>
<p>Un document partagé ou une page de l'intranet suffisent pour commencer. Classez les fiches par tâche plutôt que par outil : on cherche « préparer une relance », pas « consigne n° 12 ». Certains assistants permettent aussi d'enregistrer des instructions réutilisables, comme les GPT personnalisés présentés dans le <a href="/bootcamp-chatgpt/">Bootcamp ChatGPT</a> ; la fiche écrite reste utile pour expliquer l'usage et les règles.</p>
<p>Une bibliothèque se périme si personne ne s'en occupe. Quelques règles simples la gardent utile :</p>
<ul>
<li><strong>Un responsable</strong> qui valide les nouvelles fiches et retire celles qui ne servent plus.</li>
<li><strong>Un moment régulier</strong>, par exemple en réunion d'équipe, pour partager une consigne qui a bien fonctionné ou une qui a déçu.</li>
<li><strong>Peu de fiches</strong> : une dizaine de modèles utilisés vaut mieux qu'un catalogue que personne n'ouvre.</li>
</ul>
<h2>Les limites à garder en tête</h2>
<p>Un bon modèle ne dispense pas de relire la réponse : la même consigne peut produire un résultat différent d'une fois à l'autre, ou d'un outil à l'autre. La bibliothèque est un point de départ, pas une garantie. Elle fonctionne d'autant mieux qu'elle s'inscrit dans une démarche d'équipe, comme le montrent les <a href="/ressources/faire-adopter-ia-equipe/">leviers pour faire adopter l'IA</a>. La formation Acculturation IA permet de construire ces premières consignes sur les tâches réelles de vos équipes.</p>`,
  },
  {
    slug: 'charte-usage-ia-entreprise',
    titre: "Charte d'usage de l'IA : que doit-elle contenir ?",
    description:
      "Outils autorisés, données interdites, relecture, transparence, contact en cas de doute : les rubriques d'une charte d'usage de l'IA claire et appliquée.",
    theme: 'RGPD & réglementation',
    lecture: 5,
    date: '2026-11-19',
    module: { href: '/rgpd-reglementation/', nom: 'la formation RGPD & réglementation' },
    corps: `
<p>Une charte d'usage de l'IA dit aux salariés quels outils ils peuvent utiliser, quelles informations ils ne doivent jamais y transmettre, ce qui doit être relu avant de sortir de l'entreprise et à qui s'adresser en cas de doute. Pour être appliquée, elle doit tenir en peu de pages, partir des usages réels de l'équipe et être expliquée, pas seulement diffusée.</p>
<h2>Pourquoi en rédiger une</h2>
<p>Dans beaucoup d'entreprises, les assistants IA sont déjà utilisés, avec ou sans cadre. Sans règle écrite, chacun décide seul de ce qu'il peut faire : certains n'osent rien essayer, d'autres transmettent des documents qu'il aurait fallu garder. Une charte donne un repère commun. Elle aide aussi à montrer les mesures prises pour que les équipes utilisent l'IA en connaissance de cause, ce que l'AI Act demande aux entreprises qui s'en servent : voir <a href="/ressources/ai-act-obligation-formation-ia/">l'obligation de former ses équipes à l'IA</a>.</p>
<h2>Les rubriques essentielles</h2>
<ol>
<li><strong>Le champ d'application.</strong> À qui s'adresse la charte (salariés, stagiaires, prestataires qui travaillent pour vous) et quels outils elle couvre : assistants conversationnels, fonctions IA intégrées aux logiciels, extensions de navigateur.</li>
<li><strong>Les outils autorisés.</strong> La liste des outils validés par l'entreprise, avec le compte à utiliser. Précisez ce qu'il en est des comptes personnels ou gratuits, qui n'offrent pas les mêmes garanties.</li>
<li><strong>Les informations à ne pas transmettre.</strong> Données personnelles de clients, de candidats ou de collègues, informations confidentielles, documents couverts par une clause de confidentialité. Donnez des exemples tirés de votre activité plutôt que des catégories abstraites.</li>
<li><strong>La relecture.</strong> Qui vérifie une réponse avant qu'elle serve à décider ou qu'elle parte chez un client, un fournisseur ou un partenaire. La personne qui utilise le résultat en reste responsable.</li>
<li><strong>La transparence.</strong> Dans quels cas signaler qu'un contenu a été préparé avec l'aide de l'IA, en interne comme à l'extérieur.</li>
<li><strong>Les usages qui demandent un accord préalable.</strong> Par exemple tout ce qui touche à l'évaluation ou à la sélection de personnes, ou l'automatisation d'un échange avec des clients.</li>
<li><strong>Le contact en cas de doute.</strong> Le nom ou le service à solliciter : délégué à la protection des données, service juridique, responsable informatique.</li>
</ol>
<h2>Les erreurs qui la rendent inutile</h2>
<ul>
<li><strong>Un texte trop long ou trop juridique.</strong> S'il faut une demi-heure pour le lire, personne ne s'y référera au moment d'utiliser l'outil.</li>
<li><strong>Tout interdire.</strong> Les usages continuent, mais hors de tout cadre et sans que vous le sachiez.</li>
<li><strong>Rester dans les principes.</strong> « Faire preuve de prudence » n'aide personne. « Remplacer le nom du client par “le client” avant de coller un courriel » est une consigne applicable.</li>
<li><strong>La rédiger sans les équipes.</strong> Une charte écrite sans savoir comment l'IA est réellement utilisée passe à côté des vrais risques.</li>
</ul>
<h2>Comment la construire</h2>
<ol>
<li><strong>Recenser les usages actuels</strong> en demandant simplement aux équipes quels outils elles utilisent et pour quelles tâches.</li>
<li><strong>Associer les bonnes personnes</strong> : direction, responsable informatique, délégué à la protection des données s'il y en a un, et quelques utilisateurs réguliers.</li>
<li><strong>Rédiger une version courte</strong>, avec des exemples concrets pour chaque règle.</li>
<li><strong>Vérifier sa portée juridique.</strong> Selon la façon dont vous souhaitez la rendre applicable aux salariés, des formalités peuvent être nécessaires : faites relire le texte par votre service juridique ou votre conseil.</li>
<li><strong>La présenter</strong> lors d'un temps d'échange plutôt que par un simple envoi, et répondre aux questions.</li>
<li><strong>La mettre à jour</strong> quand un nouvel outil est adopté ou qu'un usage pose question.</li>
</ol>
<h2>Une charte ne remplace pas la formation</h2>
<p>Une règle n'est respectée que si elle est comprise. Savoir reconnaître une donnée personnelle dans un tableau ou une information confidentielle dans un compte rendu s'apprend sur des cas concrets. Les <a href="/ressources/ia-rgpd-reflexes-entreprise/">six réflexes avant d'utiliser un assistant IA</a> peuvent servir de base à cette présentation, et la formation <a href="/rgpd-reglementation/">RGPD &amp; réglementation</a> permet de travailler ces réflexes sur les situations de vos équipes.</p>
<p class="note">Cet article donne une information générale et ne constitue pas un conseil juridique.</p>`,
  },
  {
    slug: 'deleguer-tache-agent-ia',
    titre: 'Déléguer une tâche à un agent IA : comment la briefer ?',
    description:
      "Résultat attendu, matière, périmètre, critères de réussite, points de contrôle : la méthode pour confier une tâche longue à un agent IA et garder la main.",
    theme: 'Assistants IA',
    lecture: 5,
    date: '2026-11-20',
    module: { href: '/bootcamp-claude/', nom: 'le Bootcamp Claude' },
    corps: `
<p>Pour déléguer une tâche à un agent IA, rédigez un brief comme vous le feriez pour un nouveau collègue : le résultat attendu, la matière à utiliser, ce qu'il a le droit de faire, les critères qui diront si le travail est réussi et les moments où il doit s'arrêter pour vous demander. Plus la tâche est longue, plus ce cadrage compte, car l'agent enchaîne les étapes sans que vous relisiez chacune d'elles.</p>
<h2>Ce qui change par rapport à une simple question</h2>
<p>Dans une conversation classique, vous posez une question, vous lisez la réponse, vous corrigez. En mode agent, l'assistant mène plusieurs étapes à la suite : il lit des fichiers, cherche des informations, produit un document, parfois agit dans un autre outil. Vous ne voyez le résultat qu'à la fin, ou à quelques étapes. Une consigne floue ne donne donc pas seulement une réponse moyenne : elle peut faire partir tout le travail dans une mauvaise direction.</p>
<h2>Les cinq éléments d'un brief de tâche</h2>
<ol>
<li><strong>Le résultat attendu.</strong> Décrivez le livrable, pas l'activité. « Un tableau comparatif de trois prestataires, une ligne par critère, avec une recommandation en cinq lignes » est plus utile que « regarde ces devis ».</li>
<li><strong>La matière.</strong> Indiquez les documents à utiliser et ceux qui font référence en cas de contradiction. Précisez si l'agent doit s'en tenir à ce que vous fournissez ou s'il peut chercher ailleurs.</li>
<li><strong>Le périmètre.</strong> Dites ce qu'il peut faire et ce qu'il ne doit pas faire : créer un nouveau fichier plutôt que modifier l'original, préparer un message sans l'envoyer, ne rien supprimer.</li>
<li><strong>Les critères de réussite.</strong> Donnez deux ou trois conditions vérifiables : tous les montants sont repris des devis, chaque affirmation renvoie à un passage du document, le texte tient sur une page.</li>
<li><strong>Les points de contrôle.</strong> Demandez un plan avant le démarrage, et un arrêt dès qu'une information manque ou qu'un choix engage l'entreprise.</li>
</ol>
<p>Ces éléments prolongent la méthode décrite dans <a href="/ressources/rediger-un-bon-prompt/">Comment rédiger un bon prompt</a> : le contexte, l'objectif, les informations et le format restent la base, auxquels s'ajoutent les limites et les contrôles.</p>
<h2>Un exemple de brief</h2>
<p>« Voici trois devis de prestataires de nettoyage et notre cahier des charges. Prépare un tableau comparatif : prix, fréquence des passages, prestations incluses, durée d'engagement, conditions de résiliation. Utilise uniquement les informations des devis ; si une donnée manque, écris “non précisé” au lieu de la supposer. Ajoute ensuite une recommandation de cinq lignes au plus. Avant de commencer, présente-moi ton plan. Ne contacte personne et ne modifie aucun des fichiers fournis. »</p>
<h2>Quelles tâches déléguer, lesquelles garder</h2>
<ul>
<li><strong>Bonnes candidates.</strong> Les tâches longues mais bien définies, dont le résultat se contrôle : comparer des documents, mettre en forme un dossier, préparer une synthèse, construire une première version d'un tableau ou d'une présentation.</li>
<li><strong>À encadrer de près.</strong> Tout ce qui sort de l'entreprise ou modifie des données existantes : l'agent prépare, une personne valide avant l'envoi ou l'enregistrement.</li>
<li><strong>À garder.</strong> Les décisions, les arbitrages et ce qui concerne une personne identifiable : l'agent peut éclairer un choix, il ne le fait pas à votre place.</li>
</ul>
<h2>Contrôler le résultat</h2>
<p>Déléguer ne dispense pas de relire. Reprenez vos critères de réussite un par un, puis contrôlez ce qui se vérifie : chiffres, dates, noms, sources. Les contrôles détaillés dans <a href="/ressources/verifier-reponse-ia/">Comment vérifier une réponse d'IA</a> s'appliquent pleinement. Demandez aussi à l'agent un court compte rendu : ce qu'il a fait, ce qu'il n'a pas pu faire, ce dont il n'est pas sûr. Ce compte rendu oriente la relecture, sans la remplacer.</p>
<h2>Les précautions quand l'agent peut agir</h2>
<ul>
<li><strong>Des droits limités.</strong> N'ouvrez à l'agent que les dossiers et les outils nécessaires à la tâche.</li>
<li><strong>Une validation humaine</strong> avant toute action difficile à annuler : envoi d'un message, suppression, publication, paiement.</li>
<li><strong>Des données protégées.</strong> Les informations personnelles ou confidentielles ne vont que dans un outil autorisé par l'entreprise, et seulement si la tâche l'exige.</li>
<li><strong>Un premier essai sans enjeu.</strong> Testez sur une copie ou sur un cas simple avant de confier un vrai dossier.</li>
</ul>
<p>Savoir rédiger un brief de tâche, fixer des critères de réussite et décider quand déléguer ou non fait partie de ce que l'on pratique dans le <a href="/bootcamp-claude/">Bootcamp Claude</a>, sur des tâches tirées de votre activité.</p>`,
  },
  {
    slug: 'ia-comptabilite-pme-usages',
    titre: 'IA en comptabilité : quels usages pour une PME ?',
    description:
      "Relances de factures, commentaires de chiffres, résumés de contrats, procédures : les usages utiles de l'IA en comptabilité de PME et les règles à garder.",
    theme: 'IA & Métiers',
    lecture: 5,
    date: '2026-11-21',
    module: { href: '/metiers/', nom: 'la formation IA & Métiers' },
    corps: `
<p>Dans une PME, l'IA générative aide la comptabilité sur tout ce qui entoure les chiffres : rédiger une relance de facture, commenter un écart, résumer un contrat, mettre une procédure par écrit. Elle ne remplace ni le logiciel comptable ni l'expert-comptable : les écritures, les calculs et les choix de traitement restent vérifiés et validés par une personne compétente.</p>
<h2>Ce que l'IA fait bien, ce qu'il ne faut pas lui confier seule</h2>
<p>Un assistant IA est à l'aise avec le texte : reformuler, résumer, classer, expliquer. Il ne connaît en revanche ni vos comptes, ni vos contrats, ni les règles propres à votre situation, sauf si vous les lui fournissez. Il peut se tromper dans un calcul, et présenter une règle comptable ou fiscale de façon inexacte ou dépassée avec la même assurance qu'une information juste. Une réponse sur un traitement comptable, sur la TVA ou sur une échéance déclarative est donc un point de départ à faire confirmer, jamais une décision.</p>
<h2>Six usages concrets</h2>
<ul>
<li><strong>Rédiger les relances de factures.</strong> Préparer plusieurs modèles, du simple rappel à la relance ferme, à partir de vos conditions de règlement, puis les adapter à chaque situation.</li>
<li><strong>Commenter un chiffre.</strong> Transformer vos notes en quelques lignes claires pour le dirigeant : ce qui a évolué par rapport à la période précédente, pourquoi, et ce qu'il faut surveiller.</li>
<li><strong>Résumer un document long.</strong> Faire ressortir d'un contrat ou des conditions d'un fournisseur ce qui intéresse la comptabilité : échéances, conditions de paiement, pénalités, durée d'engagement.</li>
<li><strong>Mettre une procédure par écrit.</strong> Décrire en vrac la façon dont se traitent les notes de frais ou la clôture du mois, et obtenir un mode opératoire structuré, à corriger avec l'équipe.</li>
<li><strong>Demander des pièces manquantes.</strong> Rédiger un message précis et courtois aux collègues, avec la liste des justificatifs attendus et la date limite.</li>
<li><strong>Se faire aider sur un tableur.</strong> Demander une formule, l'explication d'une formule existante ou la structure d'un tableau de suivi, puis tester le résultat sur quelques lignes dont vous connaissez la réponse.</li>
</ul>
<h2>Un exemple de consigne</h2>
<p>« Je suis responsable comptable dans une PME de négoce. Un client professionnel n'a pas réglé une facture arrivée à échéance, malgré un premier rappel. Rédige une deuxième relance de huit lignes au plus, ferme et courtoise, qui rappelle l'échéance et demande une date de règlement. Laisse entre crochets le nom du client, le numéro de facture et le montant : je les compléterai moi-même. N'évoque ni pénalité ni procédure. »</p>
<p>La consigne donne le contexte, l'objectif et le format. Elle fixe aussi deux limites : aucune donnée du client n'est transmise à l'outil, et l'assistant ne doit rien ajouter qui engage l'entreprise.</p>
<h2>Les règles à garder</h2>
<ul>
<li><strong>Refaire les calculs.</strong> Un total, un pourcentage ou une conversion se recalcule dans le tableur ou le logiciel comptable, pas de tête ni sur la foi de la réponse.</li>
<li><strong>Protéger les données.</strong> Relevés bancaires, bulletins de paie, coordonnées de clients et de fournisseurs ne vont que dans un outil autorisé par l'entreprise, et seulement si la tâche l'exige. Voir les <a href="/ressources/ia-rgpd-reflexes-entreprise/">réflexes avant d'utiliser un assistant IA au travail</a>.</li>
<li><strong>Faire valider ce qui engage.</strong> Une question de traitement comptable, de fiscalité ou de paie se pose à l'expert-comptable ou à la personne compétente dans l'entreprise. La réponse de l'IA sert tout au plus à préparer la question.</li>
<li><strong>Relire avant d'envoyer.</strong> Montants, dates, références et noms se contrôlent un par un : la méthode est détaillée dans <a href="/ressources/verifier-reponse-ia/">Comment vérifier une réponse d'IA</a>.</li>
</ul>
<h2>Par où commencer</h2>
<ol>
<li><strong>Choisir une tâche de rédaction récurrente</strong> et sans donnée sensible, par exemple les relances ou les demandes de justificatifs.</li>
<li><strong>Rassembler la matière</strong> : conditions de règlement, messages déjà envoyés dont le ton convient, procédures existantes.</li>
<li><strong>Tester sur des cas anonymisés</strong> et comparer avec ce que l'équipe écrit d'habitude.</li>
<li><strong>Partager les consignes qui fonctionnent</strong> pour que chacun puisse les réutiliser.</li>
</ol>
<p>Ces usages se travaillent sur les documents et les tâches de votre service dans la formation <a href="/metiers/">IA &amp; Métiers</a>, construite à partir de l'activité de vos équipes.</p>
<p class="note">Cet article donne une information générale et ne remplace pas l'avis de votre expert-comptable.</p>`,
  },
  {
    slug: 'base-connaissances-ia-documents',
    titre: 'Base de connaissances IA : quels documents préparer ?',
    description:
      "Procédures, modèles, règles, réponses types : quels documents fournir à un assistant IA, lesquels écarter, et comment les préparer et les tenir à jour.",
    theme: 'Assistants IA',
    lecture: 5,
    date: '2026-11-23',
    module: { href: '/cerveau-ia/', nom: 'la formation Cerveau IA' },
    corps: `
<p>Pour qu'un assistant IA réponde avec les informations de votre entreprise, il faut lui fournir des documents de référence : ce que vous faites, vos procédures, vos modèles et vos règles. Une base de connaissances utile est courte, à jour, rangée par sujet et débarrassée des données qui n'ont pas à y figurer. Quelques documents fiables servent mieux qu'un grand nombre de fichiers qui se contredisent.</p>
<h2>Pourquoi l'assistant a besoin de vos documents</h2>
<p>Un assistant IA ne connaît ni vos offres, ni vos procédures, ni votre façon d'écrire, sauf si vous les lui transmettez. Sans cette matière, il répond par des généralités ou suppose ce qu'il ignore. La plupart des assistants permettent de joindre des documents à un espace de travail ou à un assistant dédié à une tâche : il peut alors s'y référer sans que vous ayez à tout recopier dans chaque consigne.</p>
<h2>Les documents à préparer en premier</h2>
<ul>
<li><strong>La présentation de l'activité.</strong> Qui vous êtes, ce que vous proposez et à qui, en une page.</li>
<li><strong>Les procédures.</strong> La façon dont se traitent les demandes récurrentes : une demande de devis, un retour, une réclamation.</li>
<li><strong>Les modèles.</strong> Courriels types, trames de compte rendu ou de proposition déjà validés.</li>
<li><strong>Les règles de la maison.</strong> Le ton, le vocabulaire à employer ou à éviter, ce que l'on ne promet jamais à un client.</li>
<li><strong>Les réponses aux questions fréquentes</strong>, relues par l'équipe.</li>
<li><strong>Le lexique.</strong> Termes du métier, sigles internes, noms de produits et de services.</li>
</ul>
<h2>Ce qu'il ne faut pas y mettre</h2>
<ul>
<li><strong>Les données personnelles.</strong> Fichiers clients, candidatures, dossiers de salariés : la base sert à décrire vos façons de faire, pas à stocker des informations sur des personnes. Voir les <a href="/ressources/ia-rgpd-reflexes-entreprise/">réflexes avant d'utiliser un assistant IA au travail</a>.</li>
<li><strong>Les informations confidentielles sans nécessité.</strong> Contrats, conditions négociées, données financières détaillées n'y entrent que si la tâche l'exige et si l'outil est autorisé par l'entreprise.</li>
<li><strong>Les versions périmées et les brouillons.</strong> L'assistant ne sait pas, de lui-même, lequel de deux documents fait foi.</li>
<li><strong>Les doublons.</strong> Deux fichiers qui décrivent la même règle de deux façons produisent des réponses hésitantes.</li>
</ul>
<h2>Rendre les documents exploitables</h2>
<ol>
<li><strong>Un sujet par document</strong>, avec un titre qui dit ce qu'il contient.</li>
<li><strong>Des titres et des sous-titres clairs</strong>, et du texte plutôt qu'une photo ou un scan de page.</li>
<li><strong>Un nom et une date lisibles.</strong> « Procédure retours, mise à jour de mars » renseigne mieux que « doc_final_v3 ».</li>
<li><strong>Les règles implicites mises par écrit.</strong> Ce que toute l'équipe sait sans que ce soit noté nulle part est précisément ce qui manque à l'assistant.</li>
<li><strong>Rien de superflu.</strong> Retirez les passages qui ne servent pas à la tâche.</li>
</ol>
<h2>Tester avant de s'y fier</h2>
<p>Avant d'ouvrir la base à l'équipe, posez à l'assistant quelques questions dont vous connaissez la réponse. Vérifiez qu'il reprend bien vos documents, et demandez-lui d'indiquer le passage sur lequel il s'appuie. Ajoutez une consigne simple : « Si l'information ne figure pas dans les documents fournis, dis-le au lieu de la supposer. »</p>
<p>Des documents fiables aident l'assistant sans dispenser de relire : les contrôles décrits dans <a href="/ressources/verifier-reponse-ia/">Comment vérifier une réponse d'IA</a> restent nécessaires, surtout pour ce qui sort de l'entreprise.</p>
<h2>La tenir à jour</h2>
<ul>
<li><strong>Un responsable</strong> qui ajoute, corrige et retire les documents.</li>
<li><strong>Une mise à jour à chaque changement</strong> de procédure ou d'offre : l'ancienne version est supprimée, pas simplement complétée.</li>
<li><strong>Une revue régulière</strong>, pour écarter ce qui ne sert plus.</li>
<li><strong>Des droits de modification limités</strong> à quelques personnes, pour que la base reste cohérente.</li>
</ul>
<p>Rassembler et organiser ce que l'IA doit savoir est l'une des étapes de la formation <a href="/cerveau-ia/">Cerveau IA</a>, qui part de vos procédures et de vos documents existants.</p>`,
  },
  {
    slug: 'vibe-coding-decrire-son-outil',
    titre: "Vibe coding : comment décrire son outil à l'IA ?",
    description:
      "Problème, utilisateurs, informations, parcours, règles, périmètre : la méthode pour décrire un outil à une IA et obtenir un prototype fidèle au besoin.",
    theme: 'Vibe coding',
    lecture: 5,
    date: '2026-11-24',
    module: { href: '/vibe-coding/', nom: 'la formation Vibe coding' },
    corps: `
<p>Pour obtenir un prototype utile en vibe coding, décrivez votre outil comme vous l'expliqueriez à un prestataire : qui va s'en servir, pour faire quoi, avec quelles informations et selon quelles règles. Commencez par une version réduite à l'essentiel, puis ajoutez les fonctions une par une. Une description précise évite une bonne part des allers-retours.</p>
<h2>Pourquoi la description compte autant</h2>
<p>L'IA construit ce qui est écrit et comble le reste par des suppositions. « Fais-moi un outil de suivi des demandes » donne un résultat qui fonctionne, mais rarement celui que vous aviez en tête : les champs, les statuts et les écrans ont été choisis à votre place. Dans le <a href="/ressources/vibe-coding-definition/">vibe coding</a>, savoir décrire un besoin est la compétence centrale, bien avant la technique.</p>
<h2>Les six éléments à décrire</h2>
<ol>
<li><strong>Le problème à résoudre.</strong> La façon dont la tâche est faite aujourd'hui et ce qui gêne : un tableau que chacun modifie, des demandes perdues dans les courriels, une double saisie.</li>
<li><strong>Les utilisateurs.</strong> Qui se servira de l'outil, sur un ordinateur ou un téléphone, et si tous ont le même rôle ou non.</li>
<li><strong>Les informations.</strong> Chaque donnée que l'outil enregistre, avec sa nature : texte libre, date, nombre, liste de choix, champ obligatoire ou non.</li>
<li><strong>Le parcours.</strong> Ce que l'utilisateur fait, étape par étape : ce qu'il voit en arrivant, ce qu'il saisit, ce qui s'affiche ensuite.</li>
<li><strong>Les règles.</strong> Ce qui est calculé, ce qui est refusé, ce qui change de statut et à quelle condition.</li>
<li><strong>Ce que l'outil ne fait pas.</strong> Fixer le périmètre évite que l'IA ajoute des fonctions que personne n'a demandées.</li>
</ol>
<p>On retrouve la logique d'une bonne consigne, détaillée dans <a href="/ressources/rediger-un-bon-prompt/">Comment rédiger un bon prompt</a> : du contexte, un objectif, de la matière et un résultat attendu.</p>
<h2>Un exemple avant / après</h2>
<p><strong>Avant :</strong> « Crée une application pour gérer les prêts de matériel. »</p>
<p><strong>Après :</strong> « Je veux un outil interne pour suivre le prêt du matériel partagé de notre agence : vidéoprojecteur, ordinateurs portables de secours, appareil photo. Une douzaine de collègues l'utiliseront depuis leur ordinateur. Chaque prêt comporte le matériel, choisi dans une liste, le nom de l'emprunteur, la date de sortie et la date de retour prévue. L'écran d'accueil affiche le matériel disponible et les prêts en cours, avec les retards signalés en rouge. Un matériel déjà sorti ne peut pas être emprunté. Pas de comptes utilisateurs ni d'envoi de courriels dans cette première version. Avant de commencer, pose-moi les questions qui te manquent. »</p>
<p>La seconde version tient en quelques lignes, mais elle répond d'avance aux choix que l'IA aurait faits seule.</p>
<h2>Avancer par petites étapes</h2>
<ul>
<li><strong>Une première version réduite.</strong> Une seule fonction qui marche vaut mieux que dix à moitié terminées.</li>
<li><strong>Une demande à la fois.</strong> Plusieurs changements demandés ensemble rendent les erreurs difficiles à localiser.</li>
<li><strong>Décrire ce que vous observez.</strong> « Quand j'enregistre un prêt sans date de retour, la ligne est créée ; elle devrait être refusée » aide davantage que « ça ne marche pas ».</li>
<li><strong>Faire reformuler.</strong> Demandez à l'IA de résumer ce qu'elle a compris avant de générer : les malentendus apparaissent tout de suite.</li>
<li><strong>Tenir la description à jour.</strong> Gardez-la dans un document et complétez-la à chaque décision : elle sert de référence si vous devez repartir d'une nouvelle conversation.</li>
</ul>
<h2>Tester sur des cas précis</h2>
<p>Préparez quelques situations avant de juger le résultat : le cas normal, un champ laissé vide, une date de retour antérieure à la date de sortie, deux personnes qui veulent le même matériel. Pendant ces essais, utilisez des données fictives : un prototype n'est pas l'endroit où saisir des informations réelles sur des clients ou des collègues.</p>
<h2>Les limites à garder en tête</h2>
<p>Une bonne description donne un bon prototype, pas un outil prêt à être déployé. La sécurité, la protection des données et la maintenance demandent une vérification par une personne compétente avant toute mise en service. Votre description écrite reste alors utile : elle sert de base à l'échange avec un développeur ou un prestataire.</p>
<p>Passer d'une idée à une description claire, puis à un premier prototype testé, est ce que l'on pratique dans la formation <a href="/vibe-coding/">Vibe coding</a>, à partir d'un besoin tiré de votre activité.</p>`,
  },
  {
    slug: 'automatisation-ia-validation-humaine',
    titre: 'Automatisation et IA : où garder une validation humaine ?',
    description:
      "Envoi vers l'extérieur, action irréversible, argent, personnes : comment repérer les étapes d'une automatisation IA qui demandent une validation humaine.",
    theme: 'Automatisation',
    lecture: 5,
    date: '2026-11-25',
    module: { href: '/cerveau-ia/', nom: 'la formation Cerveau IA' },
    corps: `
<p>Dans une automatisation qui fait appel à l'IA, gardez une validation humaine à chaque étape dont l'effet sort de l'entreprise, ne peut pas être annulé, engage de l'argent ou une décision, ou concerne une personne. Le reste, comme le tri, la mise en forme ou la préparation de brouillons, peut tourner seul, à condition d'être relu par sondage. La question utile n'est donc pas « faut-il un contrôle ? », mais « à quel endroit, et par qui ? ».</p>
<h2>Ni tout valider, ni tout laisser passer</h2>
<p>Si chaque étape attend un accord, l'automatisation ne fait plus gagner de temps et les validations finissent par être données sans lire. À l'inverse, sans aucun contrôle, une erreur se propage : une IA peut mal classer une demande ou mal résumer un message, et le scénario répète cette erreur à chaque exécution sans que personne ne la remarque. Le bon réglage consiste à placer peu de contrôles, aux endroits où une erreur coûterait cher.</p>
<h2>Quatre questions pour repérer les étapes sensibles</h2>
<p>Reprenez votre scénario étape par étape, comme dans la méthode décrite dans <a href="/ressources/automatiser-taches-ia/">Automatiser ses tâches avec l'IA</a>, et posez pour chacune quatre questions :</p>
<ol>
<li><strong>Le résultat sort-il de l'entreprise ?</strong> Un courriel à un client, une publication, un document transmis à un fournisseur.</li>
<li><strong>L'action est-elle difficile à annuler ?</strong> Une suppression, un envoi, la modification d'une fiche qui sert à d'autres.</li>
<li><strong>Engage-t-elle de l'argent, un délai ou une décision ?</strong> Un devis, une commande, une promesse de date.</li>
<li><strong>Concerne-t-elle une personne ?</strong> Un candidat, un salarié, un client identifié.</li>
</ol>
<p>Un seul « oui » suffit : l'étape attend l'accord d'une personne avant de s'exécuter.</p>
<h2>Trois niveaux de contrôle</h2>
<ul>
<li><strong>La validation avant action.</strong> L'automatisation prépare, puis s'arrête. Une personne relit, corrige si besoin et déclenche la suite. C'est le niveau à retenir pour les étapes sensibles.</li>
<li><strong>Le contrôle par sondage.</strong> L'étape s'exécute seule, et une personne relit régulièrement un échantillon de résultats. Ce niveau convient aux tâches internes dont l'erreur se rattrape : classer, étiqueter, reporter une information dans un tableau.</li>
<li><strong>L'alerte sur exception.</strong> L'automatisation traite les cas courants et prévient quelqu'un dès qu'elle sort du cadre prévu : une information manquante, un montant inhabituel, une demande qu'elle ne sait pas classer.</li>
</ul>
<h2>Un exemple : les demandes de devis</h2>
<p>Une PME reçoit ses demandes de devis par un formulaire. Le scénario peut se découper ainsi :</p>
<ul>
<li><strong>Extraire et classer la demande.</strong> L'IA repère le besoin et la catégorie. L'étape tourne seule, avec un contrôle par sondage.</li>
<li><strong>Enregistrer la demande dans le tableau de suivi.</strong> Aucune validation : l'erreur éventuelle se corrige en une ligne.</li>
<li><strong>Préparer la réponse au client.</strong> L'IA rédige un brouillon. Le commercial le relit, vérifie les prix et les délais, puis l'envoie lui-même.</li>
<li><strong>Traiter une demande incomplète ou inhabituelle.</strong> L'automatisation ne suppose rien : elle signale la demande à la personne responsable.</li>
</ul>
<h2>Faire en sorte que la validation soit réelle</h2>
<ul>
<li><strong>Une personne nommée.</strong> Chaque validation a un responsable, et un remplaçant en cas d'absence.</li>
<li><strong>La source sous les yeux.</strong> Le brouillon est présenté avec la demande d'origine, pour que la personne puisse comparer. Les contrôles utiles sont détaillés dans <a href="/ressources/verifier-reponse-ia/">Comment vérifier une réponse d'IA</a>.</li>
<li><strong>Un volume tenable.</strong> Si les accords s'enchaînent sans lecture, il y a trop de validations : mieux vaut en garder moins et les faire vraiment.</li>
<li><strong>Une trace.</strong> Noter qui a validé et quand aide à comprendre une erreur et à corriger le scénario.</li>
<li><strong>Un blocage par défaut.</strong> Si personne ne valide, l'action attend. Elle ne part pas d'elle-même au bout d'un délai.</li>
</ul>
<h2>Ajuster le réglage avec le temps</h2>
<p>Après quelques semaines, regardez ce que les personnes ont corrigé. Une étape que personne ne corrige plus peut passer d'une validation systématique à un contrôle par sondage, sauf si elle répond « oui » à l'une des quatre questions. Une étape souvent corrigée demande de revoir la consigne donnée à l'IA ou les documents qu'elle utilise. Et toute modification du scénario, d'un outil ou d'une procédure justifie une nouvelle période de relecture attentive.</p>
<p>Automatiser un processus complet en y plaçant un contrôle humain, puis encadrer l'ensemble par des règles claires, fait partie de ce que l'on travaille dans la formation <a href="/cerveau-ia/">Cerveau IA</a>, à partir des processus de votre entreprise.</p>`,
  },
  {
    slug: 'ia-artisans-usages-quotidien',
    titre: 'IA pour les artisans : quels usages au quotidien ?',
    description:
      "Descriptifs de devis, réponses aux clients, comptes rendus de chantier, avis en ligne : les usages utiles de l'IA pour un artisan et les précautions à garder.",
    theme: 'IA & Métiers',
    lecture: 5,
    date: '2026-11-26',
    module: { href: '/metiers/', nom: 'la formation IA & Métiers' },
    corps: `
<p>Pour un artisan, l'IA générative sert surtout à alléger le travail de bureau : mettre au propre le descriptif d'un devis, répondre à une demande de client, rédiger un compte rendu de chantier ou une réponse à un avis en ligne. Elle ne connaît ni vos prix, ni vos chantiers, ni les règles de votre métier : les montants, les quantités et les choix techniques restent les vôtres.</p>
<h2>Ce que l'IA fait bien, ce qui reste votre métier</h2>
<p>Un assistant IA est à l'aise avec le texte : reformuler, résumer, structurer, corriger les fautes. Certains acceptent aussi la dictée, ce qui permet de leur confier ses notes à l'oral plutôt que de tout taper le soir. En revanche, un assistant peut se tromper avec assurance sur une norme, une règle technique ou un calcul de quantités. Il prépare un texte ; il ne remplace ni votre savoir-faire ni votre visite sur place.</p>
<h2>Six usages concrets</h2>
<ul>
<li><strong>Mettre au propre le descriptif d'un devis.</strong> Vous dictez ou tapez vos notes de visite, l'assistant en tire un descriptif clair, poste par poste. Les prix et les quantités, vous les saisissez vous-même.</li>
<li><strong>Répondre aux demandes de clients.</strong> Obtenir un brouillon de réponse à une demande reçue par courriel : accusé de réception, questions à poser avant la visite, proposition de rendez-vous.</li>
<li><strong>Expliquer des travaux simplement.</strong> Transformer une explication technique en quelques phrases compréhensibles par un particulier : les étapes, leur ordre, ce qu'il doit préparer avant votre venue.</li>
<li><strong>Rédiger un compte rendu de chantier.</strong> Passer de notes en vrac à un message structuré : ce qui a été fait, ce qui reste à faire, les points à décider avec le client.</li>
<li><strong>Répondre aux avis en ligne.</strong> Préparer une réponse courtoise à un avis, y compris négatif, que vous ajustez ensuite avec vos mots.</li>
<li><strong>Présenter son activité.</strong> Rédiger le texte d'un site, d'une fiche en ligne ou d'une publication qui montre une réalisation, à partir de ce que vous décrivez.</li>
</ul>
<h2>Un exemple de consigne</h2>
<p>« Je suis plombier-chauffagiste et je travaille seul. Voici mes notes après la visite d'une salle de bains à rénover : [notes, sans le nom ni l'adresse du client]. Rédige le descriptif des travaux pour mon devis, poste par poste, en phrases courtes et compréhensibles par un particulier. N'indique aucun prix, aucune quantité ni aucune référence de norme : je les ajouterai moi-même. Signale ce qui te semble manquer dans mes notes. »</p>
<p>La consigne donne le contexte, l'objectif, la matière et le format, comme dans la méthode décrite dans <a href="/ressources/rediger-un-bon-prompt/">Comment rédiger un bon prompt</a>. Elle fixe aussi une limite : l'assistant met en forme, il n'invente ni chiffre ni règle.</p>
<h2>Les précautions à garder</h2>
<ul>
<li><strong>Vérifier tout ce qui engage.</strong> Prix, quantités, délais, références de matériel : relisez-les un par un avant d'envoyer. Les contrôles utiles sont détaillés dans <a href="/ressources/verifier-reponse-ia/">Comment vérifier une réponse d'IA</a>.</li>
<li><strong>Ne pas s'en remettre à l'IA pour les règles du métier.</strong> Normes, règles de l'art, mentions à faire figurer sur un devis ou une facture, questions d'assurance : ces points se vérifient auprès de votre organisation professionnelle, de votre chambre de métiers, de votre expert-comptable ou de votre assureur.</li>
<li><strong>Protéger les informations des clients.</strong> Nom, adresse, téléphone, photos d'un logement : retirez-les avant de transmettre vos notes, sauf si l'outil et la tâche le justifient. Voir les <a href="/ressources/ia-rgpd-reflexes-entreprise/">réflexes avant d'utiliser un assistant IA au travail</a>.</li>
<li><strong>Garder votre façon de parler.</strong> Un client reconnaît un message impersonnel. Le brouillon se retouche pour ressembler à la personne qui signe.</li>
</ul>
<h2>Par où commencer</h2>
<ol>
<li><strong>Choisir une tâche d'écriture qui revient chaque semaine</strong>, par exemple les descriptifs de devis ou les réponses aux demandes.</li>
<li><strong>Rassembler deux ou trois textes déjà envoyés</strong> dont le ton vous convient, pour les donner en exemple à l'assistant.</li>
<li><strong>Tester sur un chantier terminé</strong> et comparer le résultat avec ce que vous aviez écrit vous-même.</li>
<li><strong>Garder la consigne qui fonctionne</strong> dans un fichier, pour la réutiliser en changeant seulement les notes.</li>
</ol>
<p>Ces usages se travaillent à partir des documents et des situations de votre entreprise dans la formation <a href="/metiers/">IA &amp; Métiers</a>, dont le programme est construit sur mesure.</p>`,
  },
];
