setcpm(110) // basicamente 110 bpm

// --------- PRIMEIRO TEMPO ---------
// pentagrama de cima (Clave de Sol)
const agudoT1 = cat(
  n("- - [a2, f2] -"),
  n("[b2, g2] [b2, g2] - [c2, g2]"),
  n("- - [e3, c2] [e3, c2]"),
  n("[e3, c2] - - -"),
).sound("piano1").scale("C:major")

// pentagrama de baixo (Clave de Fa)
const graveT1 = cat(
  n("f2@3 f2").adsr("0.05:0.95:0:0"),
  n("g2@3 g2").adsr("0.05:0.95:0:0"),
  n("c1@2 c2 c2").legato("1.5").decay(2),
  n("c2@3 g2").legato("1").decay(3),
).sound("piano1")

// --------- SEGUNDO TEMPO ---------
const agudoT2 = cat(
  n("- - g3 g3"),
  n("b3 c3 - [d4, d2, b1]"),
  n("d4 [d2, b1] - [d2, b1]"),
  n("[b1, g1] - [b1, d2] [b1, d2]"),
).sound("piano1").scale("C:major")

const graveT2 = cat(
  n("c2"),
  n("c2"),
  n("g2"),
  n("g2 - - g2"),
).sound("piano1")

arrange(
  [4, stack(agudoT1, graveT1)],
  [4, stack(agudoT2, graveT2)],
)
