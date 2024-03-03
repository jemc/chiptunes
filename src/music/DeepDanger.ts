import { Onyx } from "@glass/onyx"

// Initial plan:

// Key: E-minor

// Intro chords:
// isus2 - - -

// Main chords:
// i - - - iv - v -
// i - - - VII - vsus4 -

// Mid chords
// VIsus2 - VIIsus4 VII
// vsus4 - ivdim7 VII
// ivsus4 - (sharp?)iidim(7?) -
// isus2 - - -               (this last segment is a reprise of the intro)

const bpm = 110
const key = Onyx.Key.of("E").minor.transferToTuning(Onyx.KeyTuning.edo(31))

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

const arp_isus2: Onyx.Riff = {
  bpm,
  key,
  div: "|   |   |   |   ",
  seq: "159512125112q5W2",
  oct: "24 24 34534 2434",
  vol: "86 86 86 86 6345",
}

const arp_i_i_iv_v: Onyx.Riff = {
  bpm,
  key,
  div: "|   |   |   |   |   |   |   |   ",
  seq: "15W51W5W215W15W214641W57205W75W2",
  oct: "24 25 25 34 443424 25 25 34 4434",
  vol: "86 86 86 86 634586 86 86 86 6345",
}

const arp_i_i_VII_vsus4: Onyx.Riff = {
  bpm,
  key,
  div: "|   |   |   |   |   |   |   |   ",
  seq: "15W51W5W215W15W214641W57205W75W2",
  oct: "24 25 25 34 443424 25 25 34 4434",
  vol: "86 86 86 86 634586 86 86 86 6345",
}

const introChimes: Onyx.Riff = {
  bpm,
  key,
  div: "|   |   |   |   ",
  seq: "1--2--w---W--5--",
  vol: "64364364316431",
  oct: "6",
}

const leadL_main1: Onyx.Riff = {
  bpm,
  key,
  div: "|   |   |   |   |   |   |   |   ",
  seq: "5---1-1---1---  2-------- 7-  6-",
  gls: "                          ,,2 ,2",
  vol: "64364364316431            321321",
  oct: "6                         5",
}

const leadR_main1: Onyx.Riff = {
  bpm,
  key,
  div: "|   |   |   |   |   |   |   |   ",
  seq: "2---W-3---3---    W---4---  2-0-",
  vol: "64364364316431              3212",
  oct: "6   5             6         5",
}

const leadL_main2: Onyx.Riff = {
  bpm,
  key,
  div: "|   |   |   |   |   |   |   |   ",
  seq: "5-------------Y----------4--5-7-",
  gls: ",,,,,,,,5     ,,w",
  vol: "643643643164313             6436",
  oct: "6                           5",
}

const leadR_main2: Onyx.Riff = {
  bpm,
  key,
  div: "|   |   |   |   |   |   |   |   ",
  seq: "W-------------    2---W--   2-5-",
  gls: ",,,,,,,,Y                       ",
  vol: "64364364316431              6436",
  oct: "6                 6         5",
}

const bass_i_i: Onyx.Riff = {
  bpm,
  key,
  div: "|   |   |   |   ",
  seq: "1---1-q-1---1---",
  vol: "@642@6@2@642@642",
  gls: "`7    `7  `7",
  oct: "1",
}

const bass_iv_v: Onyx.Riff = {
  bpm,
  key,
  div: "|   |   |   |   ",
  seq: "4----T-5---0-",
  vol: "@642@6@2@642@642",
  gls: "`7    `7  `7",
  oct: "1",
}

const bass_VII_vsus4: Onyx.Riff = {
  bpm,
  key,
  div: "|   |   |   |   ",
  seq: "7---4-q-9---0---",
  vol: "@642@6@2@642@642",
  gls: "`7    `7  `7",
  oct: "1",
}

const introDrums: Onyx.Riff = {
  bpm,
  key,
  div: "|       |       |       |       ",
  seq: "5-5 5 5 5 5 5 5 5 5 5 5 5 5 5 5  ",
  vol: "@64 3 3 3 3 6 3 3 6 3 3 5 5 6 6 ",
  oct: "2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 ",
}

export const DeepDanger: Onyx.Arrangement = {
  voices: {
    leadC: { timbre: 1.3, gain: 0.08, pan: 0 },
    leadL: { timbre: 3.5, gain: 0.08, pan: -0.4, vibrato: 0.5, vibratoFreq: 6 },
    leadR: { timbre: 3.5, gain: 0.08, pan: 0.4, vibrato: 0.5, vibratoFreq: 6 },
    bass: { timbre: 1.1, gain: 1.0, pan: 0.0 },
    noise: { timbre: 5, gain: 0.05, pan: 0.0, worklet: Onyx.NESNoise },
  },

  sections: {
    intro: {
      leadC: [arp_isus2],
      leadR: [introChimes],
      bass: [bass_i_i],
      noise: [introDrums],
    },
    main1: {
      leadC: [arp_i_i_iv_v],
      leadL: [leadL_main1],
      bass: [bass_i_i, bass_iv_v],
      noise: [introDrums, introDrums],
    },
    main2: {
      leadC: [arp_i_i_VII_vsus4],
      leadL: [leadL_main2],
      leadR: [leadR_main2],
      bass: [bass_i_i, bass_VII_vsus4],
      noise: [introDrums, introDrums],
    },
  },

  pre: ["intro", "intro", "intro", "intro"],
  loop: ["main1", "main2"],
}
