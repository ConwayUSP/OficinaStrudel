setcpm(110) // basicamente 110 bpm
// Partitura: https://musescore.com/user/35362982/scores/6833339?srsltid=AfmBOoqi91sApnTVzsrBIgn3hHYgogX1Nom7IidPgHbNrZ0yj9vFs-Cb

// --------- PRIMEIRO TEMPO ---------
// pentagrama de cima (Clave de Sol)
const agudoT1 = cat(
  n("- - [a2, f2] -"),
  n("[b2, g2] [b2, g2] - [c3, g2]"),
  n("- - [e3, c3] [e3, c3]"),
  n("[e3, c3] - - -"),
).sound("piano1").scale("C:major")

// pentagrama de baixo (Clave de Fa)
const graveT1 = cat(
  n("f2@3 f2").adsr("0.05:0.95:0:0"),
  n("g2@3 g2").adsr("0.05:0.95:0:0"),
  n("c1@2 c2 c2").legato("1.5").decay(2),
  n("c2@3 g2").legato("1").decay(3),
).sound("piano1").scale("C:major")

// --------- SEGUNDO TEMPO ---------
const agudoT2 = cat(
  n("- - g3 g3"),
  n("b3 c4 - [d4, d3, b2]"),
  n("d4 [d3, b2] - [d3, b2]"),
  n("[b2, g2] - [b2, d3] [b2, d3]"),
).sound("piano1").scale("C:major")

const graveT2 = cat(
  n("c1"),
  n("c1"),
  n("g2"),
  n("g2 - g2"),
).sound("piano1").scale("C:major")

// --------- TERCEIRO TEMPO ---------
const agudoT3 = cat(
  n("- - e4 e4"),
  n("f4 e4 - [c4, e3, c3]"),
  n("c4 [e3, c3] - [e3, c3]"),
  n("[c3, a2] - [e3, c3] [e3, c3]"),
).sound("piano1").scale("C:major")

const graveT3 = cat(
  n("c2"),
  n("c2"),
  n("g2"),
  n("g2 - - g2"),
).sound("piano1")

// --------- QUARTO TEMPO ---------
const agudoT4 = cat(
  n("- e4 - e4"),
  n("e4 - d4 c4"),
  n("- d4 - d4"),
  n("d4 - c4 b3"),
).sound("piano1").scale("C:major")

// --------- QUINTO TEMPO ---------
const agudoT5 = cat(
  n("c4@2 c4 c4"),
  n("d4 e4 d4 c4"),
  n("- - [e3, c3] [e3, c3]"),
  n("e3, c3"),
).sound("piano1").scale("C:major")

arrange(
  [4, stack(agudoT1)],
  [4, stack(agudoT2)],
  [4, stack(agudoT3)],
  [4, stack(agudoT4)],
  [4, stack(agudoT5)],
)
