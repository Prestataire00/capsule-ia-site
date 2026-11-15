// Fiche de chaque formation : résumé « en bref », points clés et questions fréquentes.
// Sert aux blocs de questions des pages modules, aux données structurées
// et aux fichiers /llms.txt et /llms-full.txt lus par les assistants IA.
const commun = {
  format: {
    q: 'La formation se déroule-t-elle à distance ou en présentiel ?',
    r: "Capsule IA privilégie le distanciel, ce qui permet de former des équipes partout en France. Une session dans vos locaux reste possible selon les modalités définies ensemble, et des modules e-learning peuvent être conçus pour votre organisation.",
  },
  financement: {
    q: 'La formation peut-elle être financée par un OPCO ?',
    r: "Capsule IA est un organisme de formation certifié Qualiopi, condition nécessaire pour qu'une formation puisse être prise en charge par un OPCO. Nous vous renseignons sur les possibilités de financement selon les critères applicables à votre entreprise.",
  },
  devis: {
    q: 'Comment obtenir un devis ?',
    r: "Décrivez votre besoin dans le formulaire de devis : nous envoyons une proposition sous 2 heures et un formateur vous rappelle sous 48 heures. Chaque programme est construit sur mesure après un échange sur vos équipes et vos objectifs.",
  },
};

export const modules = [
  {
    cle: 'acculturation',
    href: '/acculturation/',
    nom: 'Formation Acculturation IA',
    court: 'Acculturation IA',
    bref: "La formation Acculturation IA de Capsule IA est une initiation à l'IA générative pour les équipes en entreprise. Elle apprend à comprendre le fonctionnement de l'intelligence artificielle, à rédiger des consignes (prompts) claires, à vérifier les réponses obtenues et à expérimenter sur des situations de travail réelles. Elle ne demande aucun prérequis technique.",
    formateur: 'Ismael Lepennec',
    points: [
      ['Comprendre', "Découvrir le fonctionnement de l'IA générative, ses possibilités et ses limites."],
      ['Bien demander', 'Apprendre à formuler des consignes claires pour obtenir des réponses plus pertinentes.'],
      ['Vérifier', 'Repérer les erreurs possibles, questionner les résultats et développer son esprit critique.'],
      ['Expérimenter', "Tester l'IA sur des tâches et des situations proches du quotidien professionnel."],
    ],
    faq: [
      {
        q: "À qui s'adresse la formation Acculturation IA ?",
        r: "À toutes les équipes qui débutent avec l'intelligence artificielle, quel que soit leur métier. Aucun prérequis technique n'est demandé : nous partons d'exemples simples et de situations professionnelles familières.",
      },
      {
        q: 'Que sait-on faire à la fin de la formation ?',
        r: "Les participants comprennent ce qu'une IA générative peut et ne peut pas faire, savent construire une consigne avec le contexte, l'objectif, les informations et le format attendu, et ont le réflexe de vérifier une réponse avant de l'utiliser.",
      },
      commun.format,
      commun.financement,
      commun.devis,
    ],
  },
  {
    cle: 'metiers',
    href: '/metiers/',
    nom: 'Formation IA & Métiers',
    court: 'IA & Métiers',
    bref: "La formation IA & Métiers de Capsule IA adapte l'apprentissage de l'intelligence artificielle aux tâches de chaque fonction : marketing et communication, commercial et relation client, administration et gestion, management et organisation. Les cas pratiques sont tirés de l'activité des participants.",
    formateur: 'Faouzi Fieve, Wissam Bouakline et Ismael Lepennec',
    points: [
      ['Marketing & communication', "Explorer des idées de campagne, adapter des messages et préparer des contenus avec l'IA."],
      ['Commercial & relation client', 'Préparer des rendez-vous, travailler des argumentaires et personnaliser des relances.'],
      ['Administration & gestion', 'Structurer des informations, organiser des notes et préparer des synthèses professionnelles.'],
      ['Management & organisation', "Explorer des scénarios, structurer des plans d'action et mieux préparer certaines décisions."],
    ],
    faq: [
      {
        q: 'Pour quels métiers proposez-vous une formation IA ?',
        r: "Marketing et communication, commercial et relation client, administration et gestion, management et organisation. Ces exemples ne sont pas exhaustifs : nous construisons le programme à partir des tâches, des outils et des situations propres à votre activité.",
      },
      {
        q: "En quoi une formation IA par métier diffère-t-elle d'une formation générale ?",
        r: "Un commercial n'a pas les mêmes besoins qu'un responsable marketing ou qu'une équipe administrative. La formation part donc des missions réelles de chaque fonction, pour que les usages appris servent dès le retour au poste, en gardant la maîtrise des résultats produits par l'IA.",
      },
      commun.format,
      commun.financement,
      commun.devis,
    ],
  },
  {
    cle: 'rgpd',
    href: '/rgpd-reglementation/',
    nom: 'Formation IA, RGPD & réglementation',
    court: 'RGPD & réglementation',
    bref: "La formation IA, RGPD & réglementation de Capsule IA apprend aux équipes à utiliser l'intelligence artificielle de façon responsable : reconnaître les données personnelles et les informations confidentielles, comprendre les principes du RGPD et du cadre réglementaire de l'IA (AI Act), identifier les risques liés aux outils et adopter les bonnes précautions.",
    formateur: 'Wissam Bouakline',
    points: [
      ['Identifier', 'Reconnaître les données personnelles et informations confidentielles à protéger.'],
      ['Comprendre', "Découvrir les principes essentiels du RGPD et du cadre réglementaire de l'IA."],
      ['Anticiper', "Identifier les risques liés à certains outils et aux informations qu'on leur transmet."],
      ['Agir', 'Adopter les précautions adaptées et savoir quand demander conseil.'],
    ],
    faq: [
      {
        q: "Peut-on utiliser une IA générative au travail en respectant le RGPD ?",
        r: "Oui, à condition de savoir ce que l'on transmet à l'outil. La formation apprend à repérer les données personnelles et les informations confidentielles, à choisir quoi partager, et à vérifier les points essentiels avant d'envoyer un document à un assistant IA.",
      },
      {
        q: "À qui s'adresse la formation IA et RGPD ?",
        r: "À toutes les équipes qui utilisent ou vont utiliser des outils d'IA dans leur travail, sans prérequis juridique. Elle donne des repères pratiques et aide à savoir quand demander conseil.",
      },
      {
        q: "La formation aborde-t-elle l'AI Act ?",
        r: "Oui. Elle présente les principes essentiels du RGPD ainsi que le cadre réglementaire européen de l'IA, sous l'angle des précautions concrètes à adopter en entreprise.",
      },
      commun.format,
      commun.financement,
      commun.devis,
    ],
  },
  {
    cle: 'vibe',
    href: '/vibe-coding/',
    nom: 'Formation Vibe coding',
    court: 'Vibe coding',
    bref: "La formation Vibe coding de Capsule IA apprend à créer un prototype d'application en décrivant son besoin à une IA, sans être développeur. Les participants imaginent un outil, génèrent une première version, la testent, l'améliorent et apprennent à évaluer ses limites avant un véritable déploiement.",
    formateur: 'Faouzi Fieve',
    points: [
      ['Imaginer', 'Identifier un besoin concret et définir ce que votre futur outil doit permettre de faire.'],
      ['Créer', "Décrire les fonctionnalités attendues à l'IA pour générer une première version du prototype."],
      ['Tester', "Essayer l'outil, observer son fonctionnement et améliorer les éléments qui ne conviennent pas."],
      ['Évaluer', 'Comprendre les limites du prototype et les vérifications nécessaires avant un véritable déploiement.'],
    ],
    faq: [
      {
        q: "Qu'est-ce que le vibe coding ?",
        r: "Le vibe coding consiste à créer une application en décrivant ce que l'on veut à une IA, en langage courant, puis à tester et améliorer le résultat par échanges successifs, au lieu d'écrire soi-même le code.",
      },
      {
        q: 'Faut-il savoir programmer pour suivre la formation ?',
        r: "Non. L'objectif n'est pas de devenir développeur du jour au lendemain, mais d'apprendre à explorer la création d'outils avec l'IA, à expérimenter et à comprendre ce qui fonctionne ou pas encore.",
      },
      {
        q: 'Que peut-on créer pendant la formation ?',
        r: "Un premier prototype répondant à un besoin concret de votre activité, par exemple un petit outil interne de suivi de demandes. La formation insiste aussi sur les limites d'un prototype et sur les vérifications nécessaires avant de le déployer réellement.",
      },
      commun.format,
      commun.financement,
      commun.devis,
    ],
  },
];

export const organisme = {
  nom: 'Capsule IA',
  bref: "Capsule IA est un organisme de formation à l'intelligence artificielle certifié Qualiopi. Il forme les équipes des entreprises françaises, à distance, avec des programmes sur mesure : acculturation IA, IA par métier, RGPD & réglementation, vibe coding.",
  email: 'contact@capsuleia.fr',
  telephone: '06 21 00 58 94',
};
