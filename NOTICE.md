# 📖 Notice — ajouter un mois / une page sans rien casser

**Règle d'or : tu ne touches presque qu'à `data.js`.** Le reste (index.html, style.css) se met à jour tout seul : le sommaire, la page du mois, le compteur, la chronologie.

## 1. Ajouter un mois (le 13 de chaque mois)
1. Ouvre `data.js`, copie **tout le bloc du dernier mois** (de `{` à `},`) et colle-le juste en dessous.
2. Change les champs :
   - `number` : 4, 5, 6… (mois suivant)
   - `dateRange` : ex. `"13 septembre → 13 octobre 2026"`
   - `subtitle`, `counterSub` : tes phrases
   - `theme` : `c1` et `c2` (couleurs au format `"r,g,b"`), `glow`, `bgBase` (fond très sombre)
   - `flowerType` : `"lys"`, `"tulipe"` ou `"tournesol"`
   - `poem` : liste de strophes → `{ lines: ["vers 1", "vers 2"] }`
   - `secretMessage` : le message du bouton « je suis caché »
3. **Vérifie la virgule** entre deux mois (`},` puis le suivant). Le dernier n'en a pas besoin mais ça passe quand même.
4. Enregistre, remplace `data.js` sur GitHub, **Ctrl+Shift+R** sur le site.

⚠️ Un mois ajouté dans `data.js` apparaît **tout de suite** sur le site. Ajoute-le seulement le jour J (ou garde-le dans un fichier à part avant).

## 2. Ajouter un évènement à la chronologie
Dans `data.js`, dans `TIMELINE_DATA`, ajoute :
```js
{ date: "13 octobre 2026", icon: "💛", title: "Titre", description: "Texte." },
```
(ne pas oublier la virgule à la fin de la ligne précédente).

## 3. Ajouter des photos / dessins
- Mets l'image dans le dossier `photos/` sur GitHub.
- Dans `index.html`, cherche `CHAPTER_PHOTOS` : ajoute une ligne sur le même modèle (nom de fichier, rotation, hauteur). Elles tournent en boucle d'un mois à l'autre.
- Évite les photos de Julie sans son accord 💛

## 4. Ajouter une nouvelle fleur
Dans `index.html`, `FLOWER_LIB` : copie un type existant (ex. `tournesol`), renomme-le, change les formes SVG, puis utilise son nom dans `flowerType`.

## 5. Les pièges classiques
| Symptôme | Cause probable |
|---|---|
| Écran de chargement puis rien | erreur dans `data.js` (virgule, guillemet `"` non fermé, accolade) |
| Erreur bizarre sans raison | caractère invisible collé depuis Discord/Notes → retape la ligne à la main |
| Une apostrophe casse tout | utilise `"…"` autour du texte, ou écris `\'` |
| Rien ne change | cache : Ctrl+Shift+R (sur téléphone : navigation privée) |
| Guillemets dans un texte entre `"` | écris `\"` |

## 6. Tester avant de publier
- Ouvre `index.html` dans ton navigateur, puis F12 → onglet **Console** : s'il y a du rouge, la ligne est indiquée.
- Raccourci : `index.html?m=4` ouvre directement le mois 4.
- Ne modifie pas `chronologie.html`, `mc-toast.js` ni l'écran de chargement : ils sont indépendants.

## 7. Publier
Sur GitHub : *Add file → Upload files* → glisse les fichiers modifiés (même nom = remplacé) → *Commit*. Attends ~1 min.

## 8. Garde une copie
Avant chaque grosse modif, télécharge le dossier complet. Si ça casse, tu remets l'ancien `data.js` et c'est réparé.

## 9. Sons et audio du poème
- Crée un dossier **`audio/`** sur GitHub (à côté de `photos/`).
- **Easter egg « je suis caché »** : mets ton son sous le nom `audio/gay.mp3`. S'il n'existe pas, rien ne se joue (aucune erreur).
- **Lecture du poème** : enregistre-toi et nomme le fichier `audio/poeme-N.mp3` (N = numéro du mois : `poeme-2.mp3`, `poeme-3.mp3`…). Le bouton « 🎧 Écouter le poème » n'apparaît que pour les mois qui ont leur fichier.
- Garde les fichiers légers (quelques Mo max).
