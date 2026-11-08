# Mots mêlés (Word search)

Words hidden in a grid of letters, to find by dragging from their first to their last letter. Pick a theme, the grid size and the number of directions, and beat your time record. The words are in French.

*Version française : [README.md](README.md)*

## How to play

- The **Words to find** list gives every hidden word, in alphabetical order.
- **Drag** from the first to the last letter of a word, in a straight line; the reverse direction works too. A found word is coloured in the grid and in the list.
- Accents and cedillas disappear in the grid: "BESANÇON" hides as "BESANCON". The list keeps the exact spelling.
- The timer starts at your first selection and stops when every word is found.

## Settings

- **Theme**: Animals, Countries, Cities, Jobs, Fruit and vegetables, Cooking, Sports, Home, Nature, Human body, Clothes, Transport, Music, Science and space, Video games and computing, Anime and manga, Difficult words, or **All themes** mixed.
- **Size**: 10 × 10 (8 words), 12 × 12 (12 words), 15 × 15 (18 words), 18 × 18 (24 words) or 20 × 20 (30 words).
- **Level**:
  - **Easy**: words read left to right or top to bottom;
  - **Normal**: also along both diagonals, down and up;
  - **Hard**: in all 8 directions, backwards included.

**New grid** creates another one with the same settings. Compound words (with a space or hyphen) are not used, and a word is never hidden inside another.

## Records

The top of the screen shows the words found, the time and your record for this size and level. A new record is announced at the end of the grid.

## Data and sync

Your records are stored by NeoDex, backed up and synced between your PCs when sync is on. On first launch, the plugin picks up what you already had in NeoDex.

## Install

In NeoDex: **NeoStore → Discover → Mots mêlés → Install**.

Building a plugin: see the [NeoDex SDK](https://github.com/NDesumeur/neodex-sdk).
