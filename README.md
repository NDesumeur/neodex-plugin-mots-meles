# Mots mêlés

Des mots cachés dans une grille de lettres, à retrouver en glissant de leur première à leur dernière lettre. Choisis un thème, la taille de la grille et le nombre de directions, et bats ton record de temps.

*English version: [README.en.md](README.en.md)*

## Comment jouer

- La liste **Mots à trouver** donne tous les mots cachés, rangés par ordre alphabétique.
- **Glisse** de la première à la dernière lettre d'un mot, en ligne droite ; dans le sens inverse, ça marche aussi. Un mot trouvé se colore dans la grille et dans la liste.
- Les accents et les cédilles disparaissent dans la grille : « BESANÇON » s'y cache en « BESANCON ». La liste garde l'orthographe exacte.
- Le chronomètre démarre à ta première sélection et s'arrête quand tous les mots sont trouvés.

## Réglages

- **Thème** : Animaux, Pays, Villes, Métiers, Fruits et légumes, Cuisine, Sports, Maison, Nature, Corps humain, Vêtements, Transports, Musique, Sciences et espace, Jeux vidéo et informatique, Animes et mangas, Mots difficiles, ou **Tous les thèmes** mélangés.
- **Taille** : 10 × 10 (8 mots), 12 × 12 (12 mots), 15 × 15 (18 mots), 18 × 18 (24 mots) ou 20 × 20 (30 mots).
- **Niveau** :
  - **Facile** : les mots se lisent de gauche à droite ou de haut en bas ;
  - **Normal** : en plus, sur les deux diagonales descendantes et montantes ;
  - **Difficile** : dans les 8 sens, à l'envers compris.

**Nouvelle grille** en crée une autre avec les mêmes réglages. Les mots composés (avec espace ou trait d'union) ne sont pas utilisés, et un mot n'est jamais caché à l'intérieur d'un autre.

## Records

Le haut de l'écran affiche les mots trouvés, le temps et ton record pour cette taille et ce niveau. Un nouveau record est annoncé à la fin de la grille.

## Données et synchronisation

Tes records sont enregistrés par NeoDex, sauvegardés et synchronisés entre tes PC si la synchro est activée. Au premier lancement, le plugin reprend ce que tu avais déjà dans NeoDex.

## Installer

Dans NeoDex : **NeoStore → À découvrir → Mots mêlés → Installer**.

Développer un plugin : voir le [SDK NeoDex](https://github.com/NDesumeur/neodex-sdk).
