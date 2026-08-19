const ratchet = register('ratchet', (pat) => pat.sometimes(ply(2)))

setcpm(140/4)

//Madeiras
  //Fagote(bassoon)
  const fagote1 = cat(
    //Primeira página
    note("-"), note("-"), note("-"), note("- c@3 - a#2@3"), note("- c@3 - a#2@3")
  ).sound("gm_bassoon")

  const fagote2_4 = cat(
    //Segunda e quarta páginas
    note("- c@3 - a#2@3"), note("- c@3 - a#2@3"), note("- c@3 - a#2@3"), note("- c@3 - a#2@3"), note("- c@3 - a#2@3"), note("- c@3 - a#2@3"), note("- c@3 - a#2@3"), note("- c@3 - a#2@3")
  ).sound("gm_bassoon")

  const fagote3 = cat(
    //Terceira página
    note("-"), note("-"), note("-"), note("-"), note("-"), note("-"), note("-"), note("-"), note("- c@3 - a#2@3"), note("- c@3 - a#2@3"),
  ).sound("gm_bassoon")

  //Piccolo (Flautim)

  const piccolo2 = cat(
    //Segunda página
    note("g4 c5 g4 e4 [d4@2 d4] [e4@2 e4] f4"),
    note("g4 a4 g4@4 f4 g4 f4@4 e4@2 e4 d4@2 d4"),
    note("e4 c4@4 c4@2 c4"),
    note("- - - - - f4 d4 f4"),
    note("g4 c5 g4 e4 [d4@2 d4] [e4@2 e4] f4"),
    note("g4 a4 g4@4 f4 g4 f4@4 e4@2 e4 d4@2 d4"),
    note("e4 c4@4 c4@2 c4"),
    note("-"),
  ).sound("gm_piccolo")

  const piccolo4 = cat(
    //Quarta página
    note("[g4 a4 g4@4 g4@2] -"), note("-"), note("-"),
    note("f4@2 f4 e4 e4@4"), note("-"), note("-"), note("-"), note("-"),
  ).sound("gm_piccolo")

  //Oboé
  const oboe2 = cat(
    //Segunda página
    note("-"), note("-"),
    note("- [a# f a# d4]"),
    note("c4@3 c4 g@4"),
    note("-"), note("-"),
    note("- [a# f a# d4]"),
    note("c4"),
  ).sound("gm_oboe")

  const oboe4 = cat(
    //Quarta página
    note("- - - - - - f4 g4 f4@4 f4@2 - -"), note("-"), note("-"), note("-"),
    note("[f4 g4 f4@4 f4@2] -"), note("-"), note("-"), note("-"),
  ).sound("gm_oboe")

  //Clarinete
  const clarinete4 = cat(
    //Quarta página
    note("- [- [[f#4 g4] f#4]]"),
    note("f#4@2 f#4 e4 d4 c4 d4 e4"),
    note("d4@2 d4 a a@4"),
    note("a"),
    note("- - - - - - c4 d4 c4@4 c4@2 - -"),
    note("-"),
    note("-"),
    note("-"),
  ).sound("gm_clarinet")

//Metais
  //Trompete
  const trompete4 = cat(
    //Quarta página
    note("-"), note("-"),
    note("a@2 a f f@4"),
    note("f"),
    note("-"), note("-"), note("-"), note("-"),
  ).sound("gm_trumpet")

//Percursão e Teclas
  //Harpa
  const harpa1 = cat(
    //Primeira página
    note("-"), note("-"),
    note("- [- [f4 g4] [f4 g4] [f4 g4]] [[a#4 c5] [a#4 c5] [f5 g5] [f5 g5]] [[a#5 c6] [a#5 c6] [f6 g6] a#6]"),
    note("-"), note("-"),
  ).sound("gm_orchestral_harp")

  //Vibrafone
  const vibrafone4 = cat(
    //Quarta página
    note("-"), note("-"),
    note("- [- c4 e4 g4]"),
    note("c5 -"),
    note("[- c4 e4 g4] c5"),
    note("- [- c4 e4 g4]"),
    note("c5 -"),
    note("[- c4 e4 g4] c5"),
  ).sound("gm_vibraphone")

  //Marimba
  const marimba1 = cat(
    //Primeira página
    note("-"), note("-"), note("-"), note("-"), note("-"),
  ).sound("gm_marimba")

  const marimba2 = cat(
    //Segunda página
    note("[g4 c5 g4 e4] [d4@1.5 e4@1.5 f4]"),
    note("[g4 a4] g4 - [f4 g4] f4 - e4 d4"),
    note("[e4 c4 - -] -"),
    note("-"),
    note("[g c4 g e] [d@1.5 e@1.5 f]"),
    note("[g a] g - [f g] f - e d"),
    note("[[e c] -] -"),
    note("-"),
  ).sound("gm_marimba")

  const marimba3 = cat(
    //Terceira página
    note("-"), note("-"), note("-"), note("-"), note("-"), note("-"), note("-"), note("-"), note("-"), note("-"),
  ).sound("gm_marimba")

  const marimba4 = cat(
    //Quarta página
    note("-"), note("-"),
    note("- [- - g a a# c4 a# a]").gain(0.5),
    note("{a# g}%16").gain("0.5 0.45 0.4 0.35 0.3 0.25 0.20 0.15"),
    note("-"), note("-"),
    note("- [- - e f g a4 g f]").gain(0.5),
    note("{g e}%16").gain("0.5 0.45 0.4 0.35 0.3 0.25 0.20 0.15"),
  ).sound("gm_marimba")

  //Clavicórdio (ou o substituto mais próximo)
  const clavicordio3 = cat(
    //Terceira página
    note("- a2 c a2 b2 d@2 d"),
    note("[- a2 c e] [[d e d@4 d@2] b2]"),
    note("- a2 c a2 b2 d@2 d"),
    note("[- c d d#] [[f g f@4 f@2] d]"),
    note("- a2 c a2 b2 d@2 d"),
    note("[- a2 c e] [[d e [d@2 d]] b2]"),
    note("- a2 c a2 b2 d@2 d"),
    note("[- c d d#] [[f g f@4 f@2] d]"),
    note("e"),
    note("-"),
  ).sound("gm_clavinet")

//Cordas Friccionadas
  //Violino
  const violino1 = cat(
    //Primeira página
    note("[d5@3 c5@5]"),
    note("[d5@3 d#5@3 f5]"),
    note("f5"),
    note("- g4 - - - f4 - -"),
    note("- g4 - - - f4 - -"),
  ).sound("gm_violin")

  const violino2 = cat(
    //Segunda página
    note("- g4 - - - f4 - -"), note("- g4 - - - f4 - -"),
    note("- g4 - - - f4 - -"), note("- g4 - - - f4 - -"),
    note("- g4 - - - f4 - -"), note("- g4 - - - f4 - -"),
    note("- g4 - - - f4 - -"), note("- g4 - - - f4 - -"),
  ).sound("gm_violin")

  const violino3 = cat(
    //Terceira página
    note("f4 g4"), note("f4 g4"), note("f4 g4"), note("g#4 b4"),
    note("f4 g4"), note("f4 g4"), note("f4 g4"), note("g#4 b4"),
    note("- g4 - - - f4 - -"), note("- g4 - - - f4 - -"),
  ).sound("gm_violin")

  const violino4 = cat(
    //Quarta página
    note("- g4 - - - f4 - -"), note("- g4 - - - f4 - -"),
    note("- g4 - - - f4 - -"), note("- g4 - - - f4 - -"),
    note("- g4 - - - f4 - -"), note("- g4 - - - f4 - -"),
    note("- g4 - - - f4 - -"), note("- g4 - - - f4 - -"),
  ).sound("gm_violin")

  //Viola
  const viola1 = cat(
    //Primeira página
    note("[b@2 b a a@4]"),
    note("[b@2 b b#@2 b# d4]"),
    note("d4"),
    note("-"),
    note("-"),
  ).sound("gm_viola")

  const viola3 = cat(
    //Terceira página
    note("a b"), note("a b"), note("a b"), note("c d"),
    note("a b"), note("a b"), note("a b"), note("c d"),
    note("-"), note("-"),
  ).sound("gm_viola")

  const viola4 = cat(
    //Quarta página
    note("-"), note("-"), note("-"), note("-"),
    note("- [- [[a3 b3] a3]]"),
    note("[a3 [a3 g2]] [f2 e2 f2 g2]"),
    note("e2 [e2,g2]"),
    note("e2,g2,b3"),
  ).sound("gm_viola")

  //Violoncelo
  const violoncelo1 = cat(
    //Primeira página
    note("g2"),
    note("[g2@2 g2 g2@2 g2 g2]"),
    note("g2"),
    note("c - a#2 -"),
    note("c - a#2 -"),
  ).sound("gm_cello")

  const violoncelo2 = cat(
    //Segunda página
    note("c2 - b1 -"), note("c2 - b1 -"), 
    note("c2 - b1 -"), note("c2 - b1 -"),
    note("c2 - b1 -"), note("c2 - b1 -"), 
    note("c2 - b1 -"), note("c2 - b1 -"),
  ).sound("gm_cello")

  const violoncelo3 = cat(
    //Terceira página
    note("f1 g1"), note("f1 g1"), note("f1 g1"), note("g#1 b1"),
    note("f1 g1"), note("f1 g1"), note("f1 g1"), note("g#1 b1"),
    note("c2 - a#2 -"), note("c2 - a#2 -"),
  ).sound("gm_cello")

  const violoncelo4 = cat(
    //Quarta página
    note("c2 - a#2 -"), note("c2 - a#2 -"), 
    note("c2 - a#2 -"), note("c2 - a#2 -"),
    note("c2 - a#2 -"), note("c2 - a#2 -"), 
    note("c2 - a#2 -"), note("c2 - a#2 -"),
  ).sound("gm_cello")

arrange(
  [5, stack(fagote1, harpa1, marimba1, violino1, viola1, violoncelo1)],
  [8, stack(fagote2_4,piccolo2, oboe2, marimba2, violino2, violoncelo2)],
  [8, stack(fagote3, marimba3, clavicordio3, violino3, viola3, violoncelo3)],
  [8, stack(fagote2_4, piccolo4, oboe4, clarinete4, trompete4, vibrafone4, marimba4, violino4, viola4, violoncelo4)]
)
