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
];
