//Exemplo efeitos

setcpm(140/4)

$: cat(
    note("[c2, c1]@6 - [d2, d1]"),
    note("eb2, eb1"), 
    note("ab2, ab1"), 
    note("g2, g1"), 
).sound("gm_voice_oohs").gain(1.5).adsr(".05:.7:.1:.15").room(1.2)//.delay(".5:.4:.5")

//Nesse exemplo, usamos os efeitos .gain(), .adsr() e .room()
//Experimente alterar os valores (com cautela no .gain(), pelo bem dos seus ouvidos)
//Experimente também descomentar o efeito .delay() no final da linha e alterar seus valores