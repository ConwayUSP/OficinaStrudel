setcpm(115)
//https://musescore.com/hicco-friskmada/scores/3239046

//modelo
let name = stack(
  n(`<
  0
  >`)
  .scale("G4:minor")
,
  n(`<
  0
  >`)
  .scale("F3:minor")
).sound("gm_piano")


let bergentrückung = stack(
  n(`<
   [[-2,-7] -7] [[ 0,-5] -5] [-1,-4]@2 
   [[-3,-8] -8] [[-1,-5] -5] [-2,-7]@2
   [[-4,-8] -8] [[-2,-5] -5] [-3, [-5 -6] [-8 -7]]@2
   [[-5,-8] -9] [[-4,-8] -7] [-7]@2 
   [[-2,-7] -7] [[ 0,-5] -5] [-1,-4]@2 
   [[2,-3] -3] [[-1,-5] -5] [0, -2 -1]@2
   [[0,-3] [-1,-4]] [[0,-5] [2,-3]] [3,-3] [3,5]
   [4, [2@2 5 4 3@4]] [[2,-1] [4,2]] [3]@2
   ~@8
   [[-2,-7] -7] [[0,-5] -5]
  >`)
  .scale("G4:minor")
,
  n(`<
   -3 -2 -5@2
   -4 -2 -3@2
   -5 -4 -5@2
   -7 -4 -3@2
   -3 -2 -5@2
   -4 -2 -3@2
   -6 -4 -5@2
   -7 -4 [1,-3]@2
   ~@8
   -3 -2
    >`)
  .scale("F3:minor")
  .gain("<0.25@8 0.5@8 0.75@8 1@8 0@8 1>")
).sound("gm_piano")

let intro = stack(
  n(`<
  [[-1,-4]@3 0]@2 [-4@1.5 -3@1.5 -2]@2
  0@2 -2 0
  [[-1]@3 0]@2 [-4@1.5 -3@1.5 2]@2
  0@2 [[0,5] 0] [[1,6] 1]
  [[2,5,9]@3 [3,6,10]]@2 [[-2,0,5]@1.5 [-1,2,6]@1.5 [0,3,7]]@2
  [[2,4,9]@3 [3,5,10]]@2 [[-3,-1,4]@1.5 [4,6,11]@1.5 [2,4,9]]@2
  [0,3,5,7]@3.5 [[1,8] [0,7]]@0.5
  -@4
  >`)
  .scale("G4:minor")
  ,
  n(`<
     -@28
     [-1,2,4,6]@2 [[-7,-2] -7] [[0,-5] -5]
     -@28
     [-1,2,4,6]@2 [[-7,-2] -2] [[-3,-8] -3]
     >`).scale("G4:minor")
// ,
//   n(`<
//   [-12 -8 -5 -8]


//   >`)
//   .scale("F3:minor")
//   .sound("gm_piano")
).sound("gm_piano")


let heartache0 = stack(
  n(`<
  0
  >`)
  .scale("G4:minor")
,
  n(`<
  0
  >`)
  .scale("F3:minor")
).sound("gm_piano")


let heartache2 = stack(
  n(`<
  0
  >`)
  .scale("G4:minor")
,
  n(`<
  0
  >`)
  .scale("F3:minor")
).sound("gm_piano")

let piano = stack(
  n(`<
  0
  >`)
  .scale("G4:minor")
,
  n(`<
  0
  >`)
  .scale("F3:minor")
).sound("gm_piano")

let final = stack(
  n(`<
  0
  >`)
  .scale("G4:minor")
,
  n(`<
  0
  >`)
  .scale("F3:minor")
).sound("gm_piano")





arrange(
  [42, bergentrückung], //0-9
  [64, intro] //10-18
  // [0, heartache0] //19-26
  // [0, heartache1] //27-34
  // [0, heartache2] //35-40
  // [0, piano] //41-56
  // [0, final] //57-60
)