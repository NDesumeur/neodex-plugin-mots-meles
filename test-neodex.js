// lancé par le test « local » de NeoDex : on trouve les mots en glissant à la souris (du début à la fin, puis à l'envers), un faux trait
// ne compte pas, la grille finie, chaque taille tient dans la fenêtre (avec NEO_SHOTS : garde des images du jeu)
module.exports = async ({ pj, sleep }) => {
  const C = code => pj(`(() => { const cv = document.getElementById('wsGrid'), T = cv.__ws, ws = T.st(); ${code} })()`);
  const shot = async n => { if (!process.env.NEO_SHOTS) return; const d = await pj(`document.getElementById('wsGrid').toDataURL()`); require('fs').writeFileSync(require('path').join(process.env.NEO_SHOTS, 'motsmeles-' + n + '.png'), Buffer.from(d.split(',')[1], 'base64')); };
  // un glissé : appui sur la case a, passage au milieu, lâché sur la case b
  const drag = (k, rev) => C(`const w = ws.words[${k}], a = {x: w.x, y: w.y}, b = {x: w.x + w.dx * (w.p.length - 1), y: w.y + w.dy * (w.p.length - 1)}, [s, e] = ${rev ? '[b, a]' : '[a, b]'};
    const ev = (t, c) => cv.dispatchEvent(new PointerEvent(t, {bubbles: true, pointerId: 1, clientX: T.mid(c)[0], clientY: T.mid(c)[1]}));
    ev('pointerdown', s); ev('pointermove', {x: Math.round((s.x + e.x) / 2), y: Math.round((s.y + e.y) / 2)}); ev('pointermove', e); ev('pointerup', e); return w.found;`);
  await pj(`window.__e = []; addEventListener('error', e => __e.push(e.message)); 0`);
  const keep = await pj(`[document.getElementById('wsSize').value, document.getElementById('wsLevel').value]`);
  await pj(`(() => { const s = document.getElementById('wsSize'), l = document.getElementById('wsLevel'); s.value = '12'; l.value = 'difficile'; l.dispatchEvent(new Event('change')); return 0; })()`); await sleep(300);
  if (!await drag(0)) throw new Error('le premier mot devait être trouvé en glissant');
  if (!await drag(1, true)) throw new Error('le deuxième mot devait être trouvé en glissant à l\'envers');
  // un faux trait (une seule case) ne trouve rien
  const fake = await C(`const ev = (t) => cv.dispatchEvent(new PointerEvent(t, {bubbles: true, pointerId: 1, clientX: T.mid({x: 0, y: 0})[0], clientY: T.mid({x: 0, y: 0})[1]})); ev('pointerdown'); ev('pointerup'); return ws.words.filter(w => w.found).length;`);
  if (fake !== 2) throw new Error('un clic seul ne devait rien trouver (' + fake + ' trouvés)');
  const chip = await pj(`document.querySelector('.wsWord.found')?.style.background || ''`); if (!chip) throw new Error('le mot trouvé devait prendre sa couleur dans la liste');
  for (let k = 2; k < 6; k++) await drag(k);
  await sleep(200); await shot('12-moitie');
  const n = await C('return ws.words.length;'); for (let k = 6; k < n; k++) await drag(k);
  await sleep(200);
  if (!await C('return ws.done;')) throw new Error('la grille devait être finie');
  await shot('12-finie');
  const fits = [];
  for (const size of ['10', '20']) {
    await pj(`(() => { const s = document.getElementById('wsSize'); s.value = '${size}'; s.dispatchEvent(new Event('change')); return 0; })()`); await sleep(250);
    for (let k = 0; k < 5; k++) await drag(k);
    await shot(size + '-cinq');
    const L = await pj(`(() => { const r = document.getElementById('wsGrid').getBoundingClientRect(); let s = 0; for (let e = document.getElementById('wsGrid').parentElement; e; e = e.parentElement) s += e.scrollTop; return { bottom: Math.round(r.bottom + s), h: Math.round(r.height), wh: innerHeight, ww: innerWidth, sw: document.documentElement.scrollWidth }; })()`);
    if (process.env.NEO_FIT_LOG) console.log('FIT', size, JSON.stringify(L));
    if (L.bottom > L.wh + 1 || L.sw > L.ww + 1 || L.h < 300) throw new Error('la grille ' + size + ' dépasse la fenêtre ou reste petite : ' + JSON.stringify(L));
    fits.push(L.h);
  }
  await pj(`(() => { const s = document.getElementById('wsSize'), l = document.getElementById('wsLevel'); s.value = '${keep[0]}'; l.value = '${keep[1]}'; l.dispatchEvent(new Event('change')); return 0; })()`);
  const errs = await pj(`window.__e.join(' | ')`); if (errs) throw new Error('erreur : ' + errs);
  return 'mots trouvés en glissant (à l\'endroit et à l\'envers), grille 12 × 12 finie · grille de ' + fits[0] + ' px';
};
