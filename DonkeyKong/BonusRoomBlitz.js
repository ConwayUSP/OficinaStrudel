setcpm(110) // basicamente 110 bpm
// Partitura: https://musescore.com/user/35362982/scores/6833339?srsltid=AfmBOoqi91sApnTVzsrBIgn3hHYgogX1Nom7IidPgHbNrZ0yj9vFs-Cb

// --------- PRIMEIRO TEMPO ---------
// pentagrama de cima (Clave de Sol)
const agudoT1 = cat(
  n("- - [a3, f3] -"),
  n("[b3, g3] [b3, g3] - [c4, g3]"),
  n("- - [e4, c4] [e4, c4]"),
  n("[e4, c4] - - -"),
).sound("piano").scale("C:major")

const graveT1 = cat(
  n("f2@3 f2").adsr("0.05:0.95:0:0"),
  n("g2@3 g2").adsr("0.05:0.95:0:0"),
  n("c2@2 c3 c3").legato("1.5").decay(2),
  n("c3@3 g2").legato("1").decay(3),
).sound("piano").scale("C:major")

// --------- SEGUNDO TEMPO ---------
const agudoT2 = cat(
  n("- - g4 g4"),
  n("b4 c5 - [d5, d4, b3]"),
  n("d5 [d4, b3] - [d4, b3]"),
  n("[b3, g3] - [b3, d4] [b3, d4]"),
).sound("piano").scale("C:major")

const graveT2 = cat(
  n("c2"),
  n("c2"),
  n("g2"),
  n("g2 - ab2"),
).sound("piano").scale("C:major")

// --------- TERCEIRO TEMPO ---------
const agudoT3 = cat(
  n("- - e5 e5"),
  n("f5 e5 - [c5, e4, c4]"),
  n("c5 [e4, c4] - [e4, c4]"),
  n("[c4, a3] - [e4, c4] [e4, c4]"),
).sound("piano").scale("C:major")

const graveT3 = cat(
  n("a2"),
  n("a2"),
  n("f2"),
  n("f2 - - g2"),
).sound("piano").scale("C:major")

// --------- QUARTO TEMPO ---------
const agudoT4 = cat(
  n("- e5 - e5"),
  n("e5 - d5 c5"),
  n("- d5 - d5"),
  n("d5 - c5 b4"),
).sound("piano").scale("C:major")

const graveT4 = cat(
  n("c2"),
  n("c2"),
  n("f2"),
  n("f2 - - g2"),
).sound("piano").scale("C:major")

// --------- QUINTO TEMPO ---------
const agudoT5 = cat(
  n("c5@2 c5 c5"),
  n("d5 e5 d5 c5"),
  n("- - [e4, c4] [e4, c4]"),
  n("e4, c4"),
).sound("piano").scale("C:major")

const graveT5 = cat(
  n("f2"),
  n("g2"),
  n("c2@2 c3 c3"),
  n("c3@3 g2"),
).sound("piano").scale("C:major")

// --------- SEXTO TEMPO ---------
const agudoT6 = cat(
  n("- d6"),
  n("e6 g6 - -"),
  n("- g6"),
  n("a6 b6@2 -"),
).sound("piano").scale("C:major")

const graveT6 = cat(
  n("c2"),
  n("c2"),
  n("e2"),
  n("e2 e2"),
).sound("piano").scale("C:major")

// --------- SÉTIMO TEMPO ---------
const agudoT7 = cat(
  n("- c7"),
  n("d7 c7@2 e7"),
  n("e7 d7"),
  n("c7 a6@2 -"),
).sound("piano").scale("C:major")

const graveT7 = cat(
  n("f2"),
  n("f2"),
  n("gb2"),
  n("f2 f2"),
).sound("piano").scale("C:major")

// --------- OITAVO TEMPO ---------
const agudoT8 = cat(
  n("- d7 e7 g7"),
  n("e7!2 d7 c7"),
  n("- a6 b6 d7"),
  n("b6!2 a6 g6"),
).sound("piano").scale("C:major")

const graveT8 = cat(
  n("c2"),
  n("c2"),
  n("g2"),
  n("g2 g2"),
).sound("piano").scale("C:major")

// --------- NONO TEMPO ---------
const agudoT9 = cat(
  n("a6 c7"),
  n("e7 d7@2 c7"),
  n("- - [e4, c4] [e4, c4]"),
  n("[e4, c4] -"),
).sound("piano").scale("C:major")

const graveT9 = cat(
  n("f2"),
  n("g2"),
  n("c2@2 c3 c3"),
  n("c3@3 g2"),
).sound("piano").scale("C:major")

// --------- 10°, 11° e 12° TEMPO ---------
const agudoT10s = cat(
  n("- a4"),
  n("e4!2 - a4"),
  n("a4!2 - a4"),
  n("e4 - e4!2"),
).sound("piano").scale("C:major")

const graveT10s = cat(
  n("a2@3 a2"),
  n("e2@3 e2"),
  n("a2@3 a2"),
  n("e2@3 e2"),
).sound("piano").scale("C:major")

// --------- 13° TEMPO ---------
const agudoT13 = cat(
  n("c5!3"),
  n("a4!3"),
  n("e4@2 - c4"),
  n("c4 a3"),
).sound("piano").scale("C:major")

const graveT13 = cat(
  n("a2"),
  n("-"),
  n("-"),
  n("-"),
).sound("piano").scale("C:major")

arrange(
  [4, stack(agudoT1, graveT1)],
  [4, stack(agudoT2, graveT2)],
  [4, stack(agudoT3, graveT3)],
  [4, stack(agudoT4, graveT4)],
  [4, stack(agudoT5, graveT5)],
  [4, stack(agudoT6, graveT6)],
  [4, stack(agudoT7, graveT7)],
  [4, stack(agudoT8, graveT8)],
  [4, stack(agudoT9, graveT9)],
  [4, stack(agudoT10s, graveT10s)],
  [4, stack(agudoT10s, graveT10s)],
  [4, stack(agudoT10s, graveT10s)],
  [4, stack(agudoT13, graveT13)],
)
