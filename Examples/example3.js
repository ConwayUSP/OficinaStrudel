//Exemplo Mini Notação

setcpm(140/4)

cat(
    s("bd bd sd -"),
    s("bd@3 bd sd bd - -")
).bank("akailinn").delay(".2:.25:.1")

//Essa sequência pode ser reescrita da seguinte forma:

//s("<[bd bd sd -] [bd@3 bd sd bd - -]>").bank("akailinn").delay(".2:.25:.1")

//Outro exemplo:

// cat(
//     note("c4 - - -"),
//     note("-"),
//     note("-"),
//     note("- - - g4 g#4 g4 f4 eb4"),
// ).sound("gm_voice_oohs").vowel("a").gain(12)

//Pode ser reescrito como:

// note(`<
//     [c4 -!3] 
//     [-]!2 
//     [-!3 g4 g#4 g4 f4 eb4]
// >`).sound("gm_voice_oohs").vowel("a").gain(12)
