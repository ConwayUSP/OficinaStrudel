setcpm(140/4)

//Noggin (percussão)
$: s(`<
    [bd bd sd -]
    [bd@3 bd sd bd - -]
>`).bank("akailinn").delay(".2:.25:.1")

//Mammot (Vocal 1)
$: note(`<
    [[c2, c1]@6 - [d2, d1]]
    [eb2, eb1]
    [ab2, ab1]
    [g2, g1]
>`).sound("gm_voice_oohs").gain(1.5).adsr(".05:.7:.1:.15").room(1.2)

//Toe Jammer (Vocal 2)
$: note(`<
    [-!2 g4 -]!2 
    [-!2 g#4 -]
    [g4@3 d4@2 d4 -!2]
>`).sound("gm_voice_oohs").gain(1.5).delay(".2:.25:.1")

//Fwog (Vocal 3)
$: note(`<
    [c4 -!3] 
    [-]!2 
    [-!3 g4 g#4 g4 f4 eb4]
>`).sound("gm_voice_oohs").vowel("a").gain(12)