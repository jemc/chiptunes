import { Onyx } from "@glass/onyx"

const bpm = 146
const key = Onyx.Key.of("B").minor.transferToTuning(Onyx.KeyTuning.edo(31))

// 31edo minor keyboard layout                                   + next octave
//
//     q Q     w W     e E       r R     t T     y Y       u U       q Q     w W     e E
//   a     A   s S   d     D   f     F   g G   h     H   j     J   a     A   s S   d     D
// 1         2     3         4         5     6         7         8         2     3         4

// 31edo major keyboard layout                                   + next octave
//
//     q Q       s S     e E     r R       t T       y Y     u U     q Q       s S     e E
//   a     A   w     W   d D   f     F   g     G   h     H   j J   a     A   w     W   d D
// 1         2         3     4         5         6         7     8         2         3     4

const drums_intro1: Onyx.Riff = {
  bpm,
  key,
  div: "|       |       |       |       |       |       |       |       ",
  seq: "  5 5 5   5 5 5   5 5 5   5 5 5 5-5 5 5   5 5 5   5 5 5   5 5 5 ",
  vol: "  3 4 6   3 4 6   3 4 6   3 4 6 @63 4 6   3 4 6   3 4 6   3 4 6 ",
  oct: "  8 8 8   8 8 8   8 8 8   8 8 8 1 8 8 8   8 8 8   8 8 8   8 8 8 ",
}

const bass_intro1: Onyx.Riff = {
  bpm,
  key,
  div: "|       |       |       |       |       |       |       |       ",
  seq: "                                1----                           ",
  gls: "                                `7                              ",
  oct: "1",
}

const drums_main1: Onyx.Riff = {
  bpm,
  key,
  div: "|       |       |       |       |       |       |       |       ",
  seq: "5-5 5 5 5-5 5 5 5-5 5 5 5-5 5 5 5-5 5 5 5-5 5 5 5-5 5 5 5-5 5 5 ",
  vol: "@63 4 6 @63 4 6 @63 4 6 @63 4 6 @63 4 6 @63 4 6 @63 4 6 @63 4 6 ",
  oct: "1 8 8 8 1 8 8 8 1 8 8 8 1 8 8 8 1 8 8 8 1 8 8 8 1 8 8 8 1 8 8 8 ",
}

const bass_intro2: Onyx.Riff = {
  bpm,
  key,
  div: "|       |       |       |       |       |       |       |       ",
  seq: "1----   1----   1----   1----   1----   1----   1----   1----   ",
  gls: "`7      `3      `7      `3      `7      `3      `7      `3      ",
  oct: "1",
}

const leadR_intro1: Onyx.Riff = {
  bpm,
  key,
  div: "|       |       |       |       |       |       |       |       ",
  seq: "1   1     1                     1   1     1   1 8 1 1           ",
  oct: "4                                                   3",
}

const leadL_intro1: Onyx.Riff = {
  bpm,
  key,
  div: "|       |       |       |       |       |       |       |       ",
  seq: "  1   1       1                   1   1     1   1 8 1 1         ",
  oct: "4                                                     3",
}

const leadR_intro3: Onyx.Riff = {
  bpm,
  key,
  div: "|       |       |       |       |       |       |       |       ",
  seq: "1 1 1 1   1   1   1 1  18 H 1 8     H H   8 8   2 2  HHH  181",
  oct: "4                                               5    545",
}

const leadL_intro3: Onyx.Riff = {
  bpm,
  key,
  div: "|       |       |       |       |       |       |       |       ",
  seq: " 1 1 1 1   1   1   1 1  18 H 1  81818181  81  81  8181 818 1 1  ",
  oct: "3",
}

const leadR_main1: Onyx.Riff = {
  bpm,
  key,
  div: "|       |       |       |       |       |       |       |       ",
  seq: "8 5 3 1   1   0 1-  3---            4-3-4-5-  3---  1----   7---",
  gls: "                ,;  ,;              ,Q  ,Q    ,Q            ,Q",
  oct: "3",
}

const leadL_main1: Onyx.Riff = {
  bpm,
  key,
  div: "|       |       |       |       |       |       |       |       ",
  seq: " 3 8 5 3   1   0 1-  3---          4-3-4-5-  3---  1----   7----",
  gls: "                 ,;  ,;            ,Q  ,Q    ,Q            ,Q   ",
  oct: "3 2",
}

const leadR_main2: Onyx.Riff = {
  bpm,
  key,
  div: "|       |       |       |       |       |       |       |       ",
  seq: "7---6-------5---    4---    2-----------    3----------------   ",
  gls: ",P                          ,Q",
  oct: "3                           4",
}

const leadL_main2: Onyx.Riff = {
  bpm,
  key,
  div: "|       |       |       |       |       |       |       |       ",
  seq: "7---8-------9---    7---    j-----------    1----------------   ",
  gls: ",P                          ,Q",
  oct: "2                           1               2",
}

const leadR_main4: Onyx.Riff = {
  bpm,
  key,
  div: "|       |       |       |       |       |       |       |       ",
  seq: "7---6-------5---    4---    2-----------    0----------------   ",
  gls: ",P                          ,Q",
  oct: "3                           4",
}

const leadL_main4: Onyx.Riff = {
  bpm,
  key,
  div: "|       |       |       |       |       |       |       |       ",
  seq: "5---4-------5-2-9-2-9-2-1-Q-S-e-4-F-6-H-U-a-2--------  07-0-----",
  gls: ",P                                                      ^-^-----",
  vol: "            @ 9 8                         9 @          2@",
  oct: "2                                         3 2",
}

const bass_main1: Onyx.Riff = {
  bpm,
  key,
  div: "|       |       |       |       |       |       |       |       ",
  seq: "1----   1----   1----   1---8-----1 1-- 1--     1----   1----   ",
  gls: "`7      `3      `7      `3  `3  ^---    `3      `7      `3      ",
  oct: "1",
}

const bass_main2: Onyx.Riff = {
  bpm,
  key,
  div: "|       |       |       |       |       |       |       |       ",
  seq: "7----   Y----   h----   G---j-----1 1-- 1--     1----   1----   ",
  gls: "`7      `3      `7      `3  `3  ^---    `3      `7      `3      ",
  oct: "0                           1",
}

const bass_main4: Onyx.Riff = {
  bpm,
  key,
  div: "|       |       |       |       |       |       |       |       ",
  seq: "7----   Y----   h----   G---5-----2 Q-- a--     0----   0----   ",
  gls: "`7      `3      `7      `3  `3  ^---    `3      `7      `3      ",
  oct: "0                           1",
}

export const SearchingSignal: Onyx.Arrangement = {
  voices: {
    leadC: { timbre: 1.3, gain: 0.07, pan: 0 },
    leadL: { timbre: 3.5, gain: 0.07, pan: -0.4 },
    leadR: { timbre: 3.5, gain: 0.07, pan: 0.4 },
    bass: { timbre: 1.0, gain: 0.8, pan: 0.0 },
    noise: { timbre: 5, gain: 0.04, pan: 0.0, worklet: Onyx.NESNoise },
  },

  sections: {
    intro1: {
      leadL: [leadL_intro1],
      leadR: [leadR_intro1],
      bass: [bass_intro1],
      noise: [drums_intro1],
    },
    intro2: {
      leadL: [leadL_intro1],
      leadR: [leadR_intro1],
      bass: [bass_intro2],
      noise: [drums_main1],
    },
    intro3: {
      leadL: [leadL_intro3],
      leadR: [leadR_intro3],
      bass: [bass_main1],
      noise: [drums_main1],
    },
    main1: {
      leadL: [leadL_main1],
      leadR: [leadR_main1],
      bass: [bass_main1],
      noise: [drums_main1],
    },
    main2: {
      leadL: [leadL_main2],
      leadR: [leadR_main2],
      bass: [bass_main2],
      noise: [drums_main1],
    },
    main4: {
      leadL: [leadL_main4],
      leadR: [leadR_main4],
      bass: [bass_main4],
      noise: [drums_main1],
    },
  },

  loop: [
    ...["intro1", "intro2"],
    ...["intro3", "intro3", "intro3", "intro3"],
    ...["main1", "main4", "main1", "main2"],
    ...["main1", "main4", "main1", "main2"],
  ],
}
