setcpm(140/4)

$: s("<[bd bd sd -] [bd@3 bd sd bd - -]>").bank("akailinn").delay(".2:.25:.1")

$: cat(
    note("[c2, c1]@6 - [d2, d1]"),
    note("eb2, eb1"), 
    note("ab2, ab1"), 
    note("g2, g1"), 
).sound("gm_voice_oohs").gain(1.5).adsr(".05:.7:.1:.15").room(1.2)

$: cat(
    note("- - g4 -"),
    note("- - g4 -"),
    note("- - g#4 -"),
    note("g4@3 d4@2 d4 - -"),
).sound("gm_voice_oohs").gain(1.5).delay(".2:.25:.1")

$: cat(
    note("c4 - - -"),
    note("-"),
    note("-"),
    note("- - - g4 g#4 g4 f4 eb4"),
).sound("gm_voice_oohs").vowel("a").gain(12)
