// Bootcamps : parcours intensifs de 16 heures consacrés à un assistant IA.
// Le bootcamp Claude reprend le syllabus pédagogique de Wissam Bouakline.
// Pour en ajouter un : copier un bloc et changer le slug (adresse de la page).
const usageResponsable = [
  ['Protéger les données', "Ne pas confier à un outil non validé des informations permettant d'identifier une personne ; anonymiser les exemples."],
  ["Vérifier avant d'utiliser", "Un chiffre, une source ou une mention légale produits par l'IA sont relus avant toute diffusion."],
  ['Contrôler ce que fait un agent', 'Droits minimaux, secrets protégés, validation humaine avant toute action irréversible.'],
  ['Signaler les contenus générés', "Un contenu produit par l'IA et diffusé à un tiers est signalé comme tel."],
  ["Vérifier ce qu'on installe", "Licence, origine et maintenance d'un outil tiers sont contrôlées avant de l'utiliser."],
];
const evaluation = [
  ['Avant la formation', 'Questionnaire de positionnement : niveau de départ, usages actuels, attentes.'],
  ['Séances 1 à 7', 'Un livrable à la fin de chaque séance valide la compétence travaillée.'],
  ['Séance 8', "Debrief de 30 minutes avec la formatrice ou le formateur : bilan des acquis et plan d'action."],
  ['Fin de formation', 'Questionnaire de satisfaction et attestation de fin de formation.'],
];

export const bootcamps = [
  {
    slug: 'bootcamp-claude',
    outil: 'Claude',
    nom: 'Bootcamp Claude de A à Z',
    titre: 'Bootcamp Claude : mode agentique, Claude Code et agents IA | Capsule IA',
    description:
      "Formation Claude de 16 heures : mode agentique, Claude Code, création d'agents IA et montage vidéo automatisé. 8 séances pratiques avec Wissam Bouakline.",
    accroche: 'Claude de A à Z.',
    sousTitre: "Mode agentique, Claude Code, création d'agents et montage vidéo automatisé : tout l'univers de Claude en 16 heures de pratique.",
    bref: "Le Bootcamp Claude de Capsule IA est une formation pratique de 16 heures, en 8 séances de 2 heures, qui couvre tout l'univers de Claude : formuler des demandes efficaces, déléguer des tâches longues en mode agentique, développer avec Claude Code, construire ses propres agents (sous-agents, skills, serveurs MCP, hooks) et monter une vidéo par scripts. Elle est animée par Wissam Bouakline et s'adresse aux débutants comme aux profils intermédiaires.",
    fiche: [
      ['Durée', '16 heures : 8 séances de 2 h, ou 4 demi-journées de 4 h'],
      ['Format', 'Individuel, en visioconférence ou en présentiel, 100 % pratique'],
      ['Niveau', 'Débutant à intermédiaire'],
      ['Intervenante', 'Wissam Bouakline, formatrice experte Claude'],
      ['Livrables', "Un agent opérationnel, une vidéo montée et un plan d'action à 30 jours"],
    ],
    formateur: {
      nom: 'Wissam Bouakline',
      role: 'Formatrice experte Claude',
      bio: "Cheffe de projet et formatrice, elle est spécialisée dans les solutions IA métiers et l'automatisation no-code. Elle accompagne chaque apprenant pas à pas, du premier prompt jusqu'à l'agent connecté à ses outils.",
      photo: '/img/wissam.webp',
    },
    objectifGlobal:
      "Rendre l'apprenant autonome pour déléguer des tâches à Claude, développer avec Claude Code, construire ses propres agents et produire une vidéo montée de bout en bout.",
    objectifs: [
      'Structurer une demande efficace, choisir le bon modèle, maîtriser coûts et limites, organiser son travail (projets, mémoire, connecteurs).',
      'Confier des tâches longues à Claude : documents Word, Excel et présentations, navigation web, tâches programmées.',
      'Installer et configurer Claude Code, puis créer, tester et mettre en ligne un projet réel.',
      'Concevoir un agent avec Claude Code : sous-agents, skills, serveurs MCP, hooks et exécution automatisée.',
      'Piloter un montage vidéo par scripts : découpe, sous-titres, assemblage, export.',
      "Évaluer la fiabilité d'un résultat, sécuriser ses accès et décider quand déléguer ou non.",
    ],
    blocs: [
      {
        nom: 'Bloc 1 · Prise en main',
        duree: '4 heures',
        seances: [
          {
            titre: 'Découvrir Claude et préparer son poste',
            objectif: "Formuler des demandes efficaces, choisir le bon modèle, maîtriser les coûts et les limites d'usage, organiser son travail dans un projet Claude.",
            notions: 'Contexte, rôle, format de sortie, itération, projets, mémoire, quotas, choix du modèle, confidentialité des données.',
            livrable: 'Un projet Claude configuré et une fiche personnelle « coûts et limites ».',
          },
          {
            titre: 'Déléguer en mode agentique',
            objectif: 'Confier à Claude une tâche longue de bout en bout, produire des documents professionnels, le faire agir dans le navigateur et contrôler le résultat.',
            notions: 'Brief de tâche, critères de réussite, documents Word, Excel et présentations, connecteurs, Claude dans le navigateur, tâche programmée.',
            livrable: 'Un document Word, un tableur et une présentation produits ; un outil connecté ; une tâche programmée.',
          },
        ],
      },
      {
        nom: 'Bloc 2 · Claude Code et agents',
        duree: '8 heures',
        seances: [
          {
            titre: 'Installer Claude Code et premiers pas',
            objectif: "Disposer d'un Claude Code fonctionnel et savoir lui faire explorer, créer et modifier un projet.",
            notions: 'Terminal, session, contexte, commandes slash, reprise de session.',
            livrable: 'Claude Code installé et connecté ; un mini-projet initialisé qui fonctionne.',
          },
          {
            titre: 'Méthode de travail avec Claude Code',
            objectif: 'Mener un projet de façon sûre (règles écrites, plan validé, historique Git, tests) et le mettre en ligne avec un lien partageable.',
            notions: 'CLAUDE.md, mode plan, Git, commits, branches, GitHub Pages, Netlify, permissions, tests, relecture.',
            livrable: 'Un projet versionné sur GitHub, documenté, testé et mis en ligne.',
          },
          {
            titre: 'Concevoir un agent : sous-agents et skills',
            objectif: "Spécifier un agent utile à son activité et le construire avec des sous-agents et un skill.",
            notions: 'Agent, instructions, outils, mémoire, sous-agent, contexte isolé, skill, cas de test.',
            livrable: "Un cahier des charges d'agent, deux sous-agents et un skill, testés sur cinq cas.",
          },
          {
            titre: 'Connecter, automatiser et sécuriser un agent',
            objectif: 'Relier son agent à un outil réel, le lancer automatiquement et en maîtriser les risques.',
            notions: 'Serveurs MCP, hooks, exécution non interactive, SDK, droits minimaux, secrets, coûts.',
            livrable: 'Un agent connecté à un outil et lancé automatiquement ; une checklist de sécurité.',
          },
        ],
      },
      {
        nom: 'Bloc 3 · Vidéo et consolidation',
        duree: '4 heures',
        seances: [
          {
            titre: 'Monter une vidéo avec Claude Code',
            objectif: "Produire une vidéo montée et sous-titrée à partir de rushes, par un script que l'on peut rejouer.",
            notions: "FFmpeg, transcription, sous-titres, recadrage vertical, script reproductible, droits d'usage.",
            livrable: 'Une vidéo exportée et sous-titrée ; le script de montage sauvegardé comme skill.',
          },
          {
            titre: 'Focus ciblé et debrief',
            objectif: "Consolider les points qui posent encore difficulté et repartir avec un plan d'action pour poursuivre seul.",
            notions: "Reprise de cas pratiques, corrections en direct, bilan des acquis, plan d'action.",
            livrable: "Les points ciblés consolidés et un plan d'action à 30 jours.",
          },
        ],
      },
    ],
    prerequis: [
      'Un abonnement Claude compatible avec Claude Code (nous vous indiquons lequel avant le démarrage).',
      "L'application Claude et l'extension pour Chrome installées.",
      'Git, Node.js et VS Code installés en suivant le guide transmis avant la formation.',
      'Un compte GitHub (et Netlify, facultatif).',
      '2 à 5 minutes de rushes vidéo pour la séance de montage.',
      "Un cas d'usage professionnel : les cas pratiques s'appuient sur votre activité réelle.",
    ],
    evaluation,
    usageResponsable,
    faq: [
      {
        q: 'À qui s\'adresse le Bootcamp Claude ?',
        r: "Aux professionnels débutants ou intermédiaires qui veulent maîtriser l'ensemble de l'univers Claude : dirigeants, indépendants, chefs de projet, équipes marketing, opérations ou support. Un questionnaire de positionnement permet d'adapter le rythme au niveau de départ.",
      },
      {
        q: 'Faut-il savoir programmer pour utiliser Claude Code ?',
        r: "Non. Claude Code s'utilise dans un terminal, ce qui peut impressionner, mais la formatrice avance pas à pas et chaque commande est expliquée avant d'être lancée. Un guide d'installation est transmis avant la première séance.",
      },
      {
        q: 'Combien de temps dure la formation Claude ?',
        r: "16 heures, réparties en 8 séances de 2 heures ou en 4 demi-journées de 4 heures. Chaque séance s'appuie sur la précédente et se termine par un livrable concret.",
      },
      {
        q: 'Que sait-on faire à la fin du bootcamp ?',
        r: "Déléguer des tâches longues à Claude, produire des documents Word, Excel et des présentations, développer et mettre en ligne un projet avec Claude Code, construire un agent connecté à un outil réel et monter une vidéo sous-titrée par script. L'apprenant repart avec un agent opérationnel, une vidéo montée et un plan d'action à 30 jours.",
      },
      {
        q: 'La formation se déroule-t-elle à distance ?',
        r: 'Oui, en visioconférence, ou en présentiel selon ce qui est convenu. La formation est individuelle et entièrement pratique.',
      },
      {
        q: 'Le Bootcamp Claude peut-il être financé ?',
        r: "Capsule IA est un organisme de formation certifié Qualiopi et vous renseigne sur les possibilités de prise en charge par votre OPCO, selon les critères applicables. Le devis est envoyé sous 2 heures.",
      },
    ],
    teaches: ['Claude', 'Claude Code', 'Mode agentique', 'Agents IA', 'Sous-agents et skills', 'Serveurs MCP', 'Montage vidéo automatisé avec FFmpeg'],
  },
  {
    slug: 'bootcamp-chatgpt',
    outil: 'ChatGPT',
    nom: 'Bootcamp ChatGPT de A à Z',
    titre: 'Bootcamp ChatGPT : GPT personnalisés, mode agent et Codex | Capsule IA',
    description:
      "Formation ChatGPT de 16 heures : prompts, projets, GPT personnalisés, mode agent, Codex et automatisation. 8 séances pratiques avec Wissam Bouakline.",
    accroche: 'ChatGPT de A à Z.',
    sousTitre: "Prompts, projets, GPT personnalisés, mode agent, Codex et automatisation : tout l'univers de ChatGPT en 16 heures de pratique.",
    bref: "Le Bootcamp ChatGPT de Capsule IA est une formation pratique de 16 heures, en 8 séances de 2 heures, construite sur le même modèle que le Bootcamp Claude : formuler des demandes efficaces, déléguer des tâches longues en mode agent, créer ses GPT personnalisés, développer avec Codex, connecter et automatiser ses assistants, puis produire un contenu de bout en bout. Elle est animée par Wissam Bouakline et adaptée à l'activité et au niveau de l'apprenant.",
    fiche: [
      ['Durée', '16 heures : 8 séances de 2 h, ou 4 demi-journées de 4 h'],
      ['Format', 'Individuel, en visioconférence ou en présentiel, 100 % pratique'],
      ['Niveau', 'Débutant à intermédiaire'],
      ['Intervenante', 'Wissam Bouakline, formatrice experte en assistants IA'],
      ['Livrables', "Un GPT personnalisé opérationnel, un projet réalisé avec Codex et un plan d'action à 30 jours"],
    ],
    formateur: {
      nom: 'Wissam Bouakline',
      role: 'Formatrice experte en assistants IA',
      bio: "Cheffe de projet et formatrice, elle est spécialisée dans les solutions IA métiers et l'automatisation no-code. Elle accompagne chaque apprenant pas à pas, du premier prompt jusqu'à l'assistant connecté à ses outils.",
      photo: '/img/wissam.webp',
    },
    objectifGlobal:
      "Rendre l'apprenant autonome pour déléguer des tâches à ChatGPT, créer ses propres GPT, développer avec Codex et automatiser ses usages en gardant la maîtrise des résultats.",
    objectifs: [
      'Structurer une demande efficace, choisir le bon modèle, maîtriser coûts et limites, organiser son travail (projets, mémoire, instructions personnalisées).',
      'Confier des tâches longues à ChatGPT : recherche approfondie, analyse de fichiers, documents, tableaux et présentations.',
      'Faire agir ChatGPT en mode agent et planifier des tâches récurrentes.',
      'Créer des GPT personnalisés : instructions, base de connaissances, actions.',
      'Développer et mettre en ligne un petit projet avec Codex.',
      "Évaluer la fiabilité d'un résultat, sécuriser ses accès et décider quand déléguer ou non.",
    ],
    blocs: [
      {
        nom: 'Bloc 1 · Prise en main',
        duree: '4 heures',
        seances: [
          {
            titre: 'Découvrir ChatGPT et préparer son poste',
            objectif: "Formuler des demandes efficaces, choisir le bon modèle, maîtriser les coûts et les limites d'usage, organiser son travail dans un projet.",
            notions: 'Contexte, rôle, format de sortie, itération, projets, mémoire, instructions personnalisées, confidentialité des données.',
            livrable: 'Un projet ChatGPT configuré et une fiche personnelle « coûts et limites ».',
          },
          {
            titre: 'Déléguer des tâches longues',
            objectif: 'Confier à ChatGPT une tâche de bout en bout, produire des documents professionnels et contrôler le résultat.',
            notions: 'Brief de tâche, critères de réussite, recherche approfondie, analyse de fichiers, connecteurs, mode agent, tâches planifiées.',
            livrable: 'Un document, un tableur et une présentation produits ; un outil connecté ; une tâche planifiée.',
          },
        ],
      },
      {
        nom: 'Bloc 2 · GPT personnalisés, Codex et agents',
        duree: '8 heures',
        seances: [
          {
            titre: 'Créer son premier GPT personnalisé',
            objectif: 'Concevoir un assistant dédié à une tâche de son activité, avec ses instructions et ses documents de référence.',
            notions: 'Instructions, base de connaissances, amorces de conversation, partage, cas de test.',
            livrable: 'Un GPT personnalisé testé sur cinq cas.',
          },
          {
            titre: 'Premiers pas avec Codex',
            objectif: "Disposer d'un environnement fonctionnel et savoir faire explorer, créer et modifier un projet par Codex.",
            notions: 'Terminal, dépôt, contexte, consignes de projet, relecture du code produit.',
            livrable: 'Un mini-projet initialisé qui fonctionne.',
          },
          {
            titre: 'Méthode de travail et mise en ligne',
            objectif: 'Mener un projet de façon sûre (règles écrites, plan validé, historique Git, tests) et le mettre en ligne.',
            notions: 'Fichier de consignes, plan, Git, GitHub, mise en ligne, permissions, tests.',
            livrable: 'Un projet versionné, testé et mis en ligne avec un lien public.',
          },
          {
            titre: 'Connecter, automatiser et sécuriser',
            objectif: 'Relier son assistant à un outil réel, le lancer automatiquement et en maîtriser les risques.',
            notions: 'Actions et connecteurs, API, déclencheurs, droits minimaux, secrets, coûts.',
            livrable: 'Un assistant connecté et automatisé ; une checklist de sécurité.',
          },
        ],
      },
      {
        nom: 'Bloc 3 · Création de contenu et consolidation',
        duree: '4 heures',
        seances: [
          {
            titre: 'Produire un contenu de bout en bout',
            objectif: 'Réaliser un contenu complet (texte, visuels, vidéo courte) par une méthode que l\'on peut rejouer.',
            notions: "Génération d'images, script reproductible, sous-titres, droits d'usage, signalement des contenus générés.",
            livrable: 'Un contenu finalisé et la méthode enregistrée pour être réutilisée.',
          },
          {
            titre: 'Focus ciblé et debrief',
            objectif: "Consolider les points qui posent encore difficulté et repartir avec un plan d'action pour poursuivre seul.",
            notions: "Reprise de cas pratiques, corrections en direct, bilan des acquis, plan d'action.",
            livrable: "Les points ciblés consolidés et un plan d'action à 30 jours.",
          },
        ],
      },
    ],
    prerequis: [
      'Un abonnement ChatGPT adapté (nous vous indiquons lequel avant le démarrage).',
      "L'application ChatGPT installée sur votre poste.",
      'Git, Node.js et VS Code installés en suivant le guide transmis avant la formation.',
      'Un compte GitHub.',
      "Un cas d'usage professionnel : les cas pratiques s'appuient sur votre activité réelle.",
    ],
    evaluation,
    usageResponsable,
    faq: [
      {
        q: "À qui s'adresse le Bootcamp ChatGPT ?",
        r: "Aux professionnels débutants ou intermédiaires qui utilisent déjà un peu ChatGPT et veulent aller au bout de ses possibilités : GPT personnalisés, mode agent, Codex, automatisation. Un questionnaire de positionnement permet d'adapter le rythme.",
      },
      {
        q: 'Quelle différence avec le Bootcamp Claude ?',
        r: "La progression est la même : prise en main, délégation de tâches longues, développement et agents, puis consolidation. Seul l'outil change. Si vous hésitez, nous vous aidons à choisir selon vos usages et les outils déjà en place dans votre entreprise.",
      },
      {
        q: 'Combien de temps dure la formation ChatGPT ?',
        r: '16 heures, réparties en 8 séances de 2 heures ou en 4 demi-journées de 4 heures. Chaque séance se termine par un livrable concret.',
      },
      {
        q: 'Proposez-vous ce bootcamp pour d\'autres assistants IA ?',
        r: 'Oui. Le même parcours peut être adapté à Gemini, Copilot ou Mistral : décrivez votre besoin dans le formulaire de devis.',
      },
      {
        q: 'Le Bootcamp ChatGPT peut-il être financé ?',
        r: "Capsule IA est un organisme de formation certifié Qualiopi et vous renseigne sur les possibilités de prise en charge par votre OPCO, selon les critères applicables. Le devis est envoyé sous 2 heures.",
      },
    ],
    teaches: ['ChatGPT', 'GPT personnalisés', 'Mode agent', 'Codex', 'Automatisation', 'Rédaction de prompts'],
  },
];
