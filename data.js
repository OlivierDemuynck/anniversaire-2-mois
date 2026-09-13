/* ============================================================
   DATA.JS — le seul fichier à toucher pour ajouter un mois
   ============================================================

   Pour ajouter un nouveau mois (ex: le 2 mois, 13 août) :
   1. Copie le bloc du dernier mois dans le tableau MONTHS
   2. Change "number", "dateRange", le thème, le poème, les photos
   3. C'est tout — index.html s'occupe du reste automatiquement.

   Le thème ("theme") = 2 couleurs en RGB "r,g,b" (sans "rgb()")
   qui redécorent le titre, le compteur et les accents de la page,
   + "bgBase" = la couleur de fond de base (très sombre, teintée
   selon le thème). Choisis-les selon ce qu'elle kiffe / le thème.

   ⚠️ Si tu écris le poème ailleurs (Notes du téléphone, Word...)
   et que tu colles ici, colle-le d'abord dans un éditeur de texte
   brut (Bloc-notes) avant de remettre dans ce fichier — ça évite
   les caractères invisibles qui cassent tout comme cette fois-ci.
   ============================================================ */

window.SITE_DATA = {
  startDate: "2026-06-13", // date où vous êtes devenus officiellement ensemble

  months: [
    {
      number: 1,
      dateRange: "13 juin → 13 juillet 2026",
      subtitle: "d'amour et de bonheur",
      counterSub: "Le premier de plein d'autres ❤",
      theme: {
        c1: "210,100,150",   // rose principal
        c2: "160,90,210",    // violet secondaire
        glow: "120,20,80",   // lueur de fond
        bgBase: "#0d0515"    // fond de base (violet très sombre)
      },
      flowerType: "lys", // forme des fleurs déco : "lys" ou "tulipe"
      poem: [
        {
          lines: [
            "T'étais déjà là bien avant le premier mot,",
            "Mon amie, ma confidente, mon tout.",
            "On riait, on parlait, sans même le savoir,",
            "Qu'on construisait quelque chose, doucement, le soir."
          ]
        },
        {
          special: true,
          lines: [
            "Et puis un soir, sans qu'on s'y attende,",
            "T'es devenue la fille que j'attendais."
          ]
        },
        {
          lines: [
            "T'es belle sans le savoir, naturelle et vraie,",
            "Pas besoin de masque pour que tu m'éblouisses.",
            "Juste toi, comme t'es, et c'est déjà parfait,",
            "Ta façon d'être unique qui me rend complice."
          ]
        },
        {
          lines: [
            "Je sais que la distance nous sépare,",
            "Que les kilomètres pèsent parfois trop lourd.",
            "Mais mon cœur, lui, il reste avec toi chaque jour,",
            "Et aucune route ne peut effacer mon amour."
          ]
        },
        {
          special: true,
          lines: [
            "Douce, drôle, forte à ta façon,",
            "T'es ma reine, ma fleur, ma raison."
          ]
        },
        {
          lines: [
            "Alors ce soir, pour notre premier mois,",
            "Je voulais juste que tu saches une chose :",
            "Que même de loin, je pense encore à toi,",
            "Et que je t'aime, follement, comme une rose."
          ]
        },
        {
          special: true,
          lines: [
            "Et moi je suis là, de loin je veille,",
            "Follement amoureux de ma merveille."
          ]
        }
      ],
      secretMessage: "Peu importe la distance,<br>il y aura toujours un endroit<br>où je penserai à toi. ❤",
      photos: [] // pas de photo pour le mois 1
    },

    {
      number: 2,
      dateRange: "13 juillet → 13 août 2026",
      subtitle: "et ça continue de grandir",
      counterSub: "Jusqu'à l'éternité",
      theme: {
        c1: "215,45,55",    // rouge tulipe
        c2: "225,150,60",   // doré chaud, en accord avec le rouge
        glow: "130,15,25",  // lueur rouge profond
        bgBase: "#12070a"   // fond de base rouge très sombre
      },
      flowerType: "tulipe",
      poem: [
        {
          lines: [
            "Mon amour, depuis que je suis avec toi, je me sens comme un Roi,",
            "L'élu de ton cœur mais aussi ton plus grand admirateur,",
            "T'es la meilleure des copines, je veux finir ma vie avec toi."
          ]
        },
        {
          special: true,
          lines: [
            "Avant toi, j'avançais sans trop savoir où aller,",
            "Aujourd'hui j'ai trouvé ma destinée et elle est à tes côtés,",
            "Il n'y a aucun doute, je sais où je veux aller,",
            "Et c'est dans tes bras que je veux me reposer."
          ]
        },
        {
          lines: [
            "Deux mois déjà que nous sommes ensemble,",
            "Deux mois où le temps semble s'être arrêté,",
            "Dans ces nuits trop courtes où nos mots d'amoureux se confondent,",
            "La distance est là, lourde et souvent pesante,",
            "Mais notre complicité la rend presque impuissante."
          ]
        },
        {
          special: true,
          lines: [
            "On s'appelle, on rigole, on refait tout le monde,",
            "Et plus le temps passe, plus mon amour abonde.",
            "Tu es devenue ma source de bonheur,",
            "Celle qui suffit à illuminer mes heures."
          ]
        },
        {
          lines: [
            "Mon refuge secret quand le monde est trop lourd,",
            "Ma personne préférée, mon repère de toujours.",
            "T'es mon quotidien, ma pensée au réveil,",
            "Celle qui fait briller mes nuits même quand je n'ai pas sommeil."
          ]
        },
        {
          special: true,
          lines: [
            "Et bientôt viendra enfin ce fameux 24 août,",
            "Ce jour où la distance s'effacera entre nous.",
            "Après tant d'attente, de kilomètres et de détours,",
            "Je pourrai enfin te serrer très fort, ma Julie d'amour."
          ]
        },
        {
          lines: [
            "Poser mes yeux sur toi pour la première fois, sentir ton souffle, ta peau,",
            "Et te dire en face à quel point tu es belle, qu'être avec toi, ça m'émerveille."
          ]
        },
        {
          special: true,
          lines: [
            "Deux mois seulement, et pourtant tant de souvenirs,",
            "Tant de choses vécues, tant d'autres à construire.",
            "Ce n'est que le tout début de notre grande histoire,",
            "Si aujourd'hui mon cœur bat pour toi comme un fou,",
            "J'ai hâte d'être à demain pour t'aimer par-dessus tout"
          ]
        }
      ],
      secretMessage: "Le 24 sera la première fois que nos yeux se rencontreront vraiment,<br>mais crois-moi, l'idée de pouvoir enfin te serrer dans mes bras <br> me chamboule déjà...",
      photos: []
    },
     
    {
      number: 3,
      dateRange: "13 aout → 13 septembre 2026",
      subtitle: "90 jours déjà, à tes coté",
      counterSub: "Encore loin d'etre les derniers",
      theme: {
        c1: "210,100,150",   // rose principal
        c2: "160,90,210",    // violet secondaire
        glow: "120,20,80",   // lueur de fond
        bgBase: "#0d0515"    // fond de base (violet très sombre)
      },
      flowerType: "lys", // forme des fleurs déco : "lys" ou "tulipe"
      poem: [
        {
          lines: [
            "T'étais déjà là bien avant le premier mot,",
            "Mon amie, ma confidente, mon tout.",
            "On riait, on parlait, sans même le savoir,",
            "Qu'on construisait quelque chose, doucement, le soir."
          ]
        },
        {
          special: true,
          lines: [
            "Et puis un soir, sans qu'on s'y attende,",
            "T'es devenue la fille que j'attendais."
          ]
        },
        {
          lines: [
            "T'es belle sans le savoir, naturelle et vraie,",
            "Pas besoin de masque pour que tu m'éblouisses.",
            "Juste toi, comme t'es, et c'est déjà parfait,",
            "Ta façon d'être unique qui me rend complice."
          ]
        },
        {
          lines: [
            "Je sais que la distance nous sépare,",
            "Que les kilomètres pèsent parfois trop lourd.",
            "Mais mon cœur, lui, il reste avec toi chaque jour,",
            "Et aucune route ne peut effacer mon amour."
          ]
        },
        {
          special: true,
          lines: [
            "Douce, drôle, forte à ta façon,",
            "T'es ma reine, ma fleur, ma raison."
          ]
        },
        {
          lines: [
            "Alors ce soir, pour notre premier mois,",
            "Je voulais juste que tu saches une chose :",
            "Que même de loin, je pense encore à toi,",
            "Et que je t'aime, follement, comme une rose."
          ]
        },
        {
          special: true,
          lines: [
            "Et moi je suis là, de loin je veille,",
            "Follement amoureux de ma merveille."
          ]
        }
      ],
      secretMessage: "Peu importe la distance,<br>il y aura toujours un endroit<br>où je penserai à toi. ❤",
      photos: [] // pas de photo pour le mois 1
    }
  ]
};

/* ============================================================
   CHRONOLOGIE — les grandes étapes de votre histoire
   Affichée sur chronologie.html

   Il ne te reste qu'à remplacer les "??? à dater" par les vraies
   dates (ou une période approximative si tu ne sais plus le jour
   exact, ex: "Automne 2023"). Réordonne les blocs si besoin,
   l'ordre du tableau = l'ordre d'affichage.
   ============================================================ */
window.TIMELINE_DATA = [
  {
    date: "6 octobre 2023",
    icon: "📖",
    title: "Le début d'une histoire",
    description: "Le soir où on s'est rencontré"
  },
  {
    date: "6 octobre 2023",
    icon: "🎮",
    title: "Premières parties ensemble",
    description: "On a commencé à traîner sur les jeux ensemble."
  },
  {
    date: "6 octobre 2023",
    icon: "🤗",
    title: "Premier compliment",
    description: "Le premier compliment que tu m'a fait c'était pour mon dessin de monsieur jack"
  },
  {
    date: "14 novembre 2023",
    icon: "👽",
    title: "Mon clone ?",
    description: "Le premier surnom qu'on s'est donné."
  },
  {
    date: "Janvier 2024",
    icon: "🤝",
    title: "Devenus amis",
    description: "Je pense que à ce moment là on était ami, on se l'est pas dit clairement mais j'avais ce ressenti en lisant les messages"
  },
  {
    date: "27 janvier 2024",
    icon: "🥲",
    title: "Premier moment émotion",
    description: "Ce soir là, on c'était pas parlé pendant 3j et on voulait pas se quitter tellement on c'était manqué."
  },
  {
    date: "28 janvier 2024",
    icon: "🥺",
    title: "Premier vrai surnom",
    description: "Mon chacal préféré fut le premier des nombreux surnoms que tu m'a donné et toi c'était bebou"
  },
  {
    date: "6 juillet 2024",
    icon: "💥",
    title: "Première dispute",
    description: "Je t'avais fait attendre et j'était en auto farm sur fishing simulator.."
  },
  {
    date: "7 juillet 2024",
    icon: "🫶",
    title: "Première réconciliation",
    description: "On s'est excusé tout les deux puis on a joué à deux"
  },
  {
    date: "24 juillet 2024",
    icon: "📞",
    title: "Premier appel",
    description: "Première fois que j'entendais ta douce voix"
  },
  {
    date: "17 février 2025",
    icon: "🫂",
    title: "Meilleurs amis",
    description: "Ce soir là je t'ai annoncé que pour moi tu étais ma meilleure amie"
  },
  {
    date: "28 février 2026",
    icon: "😍",
    title: "Premier face reveal sans filtre",
    description: "La première photo que j'ai reçu de toi sans filtre (avec Zoé derrière) et juste WOOOOOW c'est un canon"
  },
  {
    date: "6 mai 2026",
    icon: "😳",
    title: "Premier \"je t'aime\"",
    description: "Ce soir là tu as fait un craquage pour de la physique chimie, et tu m'a dit je t'aime.. Ça m'a tellement fait fondre et ça continue de le faire encore et encore.."
  },
  {
    date: "13 juin 2026",
    icon: "💕",
    title: "Officiellement ensemble",
    description: "Le jour où le déni a pris fin des deux côtés lors de notre premier sleepcall"
  }
];
