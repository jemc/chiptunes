import { Onyx } from "@glass/onyx"

const bpm = 124
const key = Onyx.Key.of("C").minor
const keyForWeirdmerVariant = Onyx.Key.of("F#").mode("Bothian")

const mainMelody1: Onyx.Riff = {
  bpm,
  key,
  div: "|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   ",
  seq: "1-    2-    3-    4-    3-  4-  r- 5- r- 5- 4-3-r- 5- r- 5- 4-3-",
  gls: ",,p         ,,1                 ,,p             ,,p             ",
  vol: "@",
  oct: "4",
}

const mainMelody2: Onyx.Riff = {
  bpm,
  key,
  div: "|   |   |   |   |   |   |   |   ",
  seq: "u- 8- y- 7- 5 3-23 4 51       11",
  gls: ",,2                             ",
  vol: "@",
  oct: "4",
}

const mainMelody3: Onyx.Riff = {
  bpm,
  key,
  div: "|   |   |   |   |   |   |   |   ",
  seq: "55 y 5-7 y 5-345                ",
  gls: ",p     ,2  `p                   ",
  vol: "@",
  oct: "4",
}

const mainMelody4: Onyx.Riff = {
  bpm,
  key,
  div: "|   |   |   |   |   |   |   |   ",
  seq: "5545      5545 47757      7757 7",
  gls: ",p              ,2              ",
  vol: "@",
  oct: "4",
}

const mainArpL: Onyx.Riff = {
  bpm,
  key,
  div: "|       |       |       |       ",
  seq: "7-8   8-    5-7   7-5   7-8     ",
  vol: "@",
  oct: "4",
}

const mainArpR: Onyx.Riff = {
  bpm,
  key,
  div: "|       |       |       |       ",
  seq: "1-5   5-    1-5   1 5-1 y-  y-  ",
  vol: "8",
  oct: "4",
}

const mainArpL2: Onyx.Riff = {
  bpm,
  key,
  div: "|       |       |       |       ",
  seq: "4-  3-4-  3-4-  3-4-  3-5-  3-  ",
  vol: "6",
  oct: "4",
}

const mainArpR2: Onyx.Riff = {
  bpm,
  key,
  div: "|       |       |       |       ",
  seq: "1-4   4-    1-3   1 3-1 3-  4-  ",
  gls: ",p    ,p",
  vol: "@",
  oct: "4",
}

const mainArpL3: Onyx.Riff = {
  bpm,
  key,
  div: "|       |       |       |       ",
  seq: "1-  0-1-  0-1-  0-1-  0-3-  0-  ",
  vol: "8",
  oct: "4",
}

const mainArpR3: Onyx.Riff = {
  bpm,
  key,
  div: "|       |       |       |       ",
  seq: "5-8   8-    5-7   5 7-5 7-  8-  ",
  gls: ",p    ,p",
  vol: "@",
  oct: "3",
}

const mainArpL4: Onyx.Riff = {
  bpm,
  key,
  div: "|       |       |       |       |       |       |       |       ",
  seq: "5-5-4-5-            5-5-4-5-  4-7-7-5-7-            7-7-5-7-  7-",
  gls: ",p                              ",
  vol: "@",
  oct: "3",
}

const mainArpR4: Onyx.Riff = {
  bpm,
  key,
  div: "|       |       |       |       |       |       |       |       ",
  seq: "2-2-1-2-            2-2-1-2-  1-2-2-1-2-            2-2-1-2-  2-",
  gls: ",p                              ",
  vol: "@",
  oct: "4",
}

const mainBass: Onyx.Riff = {
  bpm,
  key,
  div: "|               |               |               |               ",
  seq: "1---    1---    0-- 1---    0-- 1---    1---    7--             ",
  gls: "``8             ``8             ``8             ```8            ",
  vol: "@                                               6               ",
  oct: "2",
}

const mainBass2: Onyx.Riff = {
  bpm,
  key,
  div: "|               |               |               |               ",
  seq: "4---    4---    3-- 4---    3-- 4---    4---    3--             ",
  gls: "``8             ``8             ``8             ```8            ",
  vol: "@                                               6               ",
  oct: "1                                               2               ",
}

const mainBass4: Onyx.Riff = {
  bpm,
  key,
  div: "|       |       |       |       |       |       |       |       ",
  seq: "5-5 3-5---          5-5 3-5---  5-5 3-5---          5-5 3-5---  ",
  gls: "``8 `8``8           ``8 `8``8   ``8 `8``8           ``8 `8``8   ",
  vol: "8                                                               ",
  oct: "1                                                               ",
}

const mainDrums: Onyx.Riff = {
  bpm,
  key,
  div: "|       |       |       |       ",
  seq: "5-  1-  5-  1-  5-      5-1-  1-",
  gls: "    ``8     ``8           ``8 ``8",
  oct: "3   5   3   5   3       3 5   5 ",
  vol: "@2  31  @2  31  @2      @231  31",
}

const mainDrums4: Onyx.Riff = {
  bpm,
  key,
  div: "|       |       |       |       ",
  seq: "5-  1-5-    5-  1-5-    5-  1-5-",
  gls: "    ``8         ``8         ``8 ",
  oct: "3   5 3     3   5 3     3   5 3 ",
  vol: "@2  31@2    @2  31@2    @2  31@2",
}

export const Lemmings2OpeningTheme: Onyx.Arrangement = {
  voices: {
    leadL: { timbre: 3.75, gain: 0.05, pan: -1.0 },
    leadR: { timbre: 3.75, gain: 0.05, pan: 1.0 },
    leadC: { timbre: 2.25, gain: 0.1, pan: 0.0 },
    bass: { timbre: 1.5, gain: 0.5, pan: 0.0 },
    noise: { timbre: 0, gain: 0.08, pan: 0.0, worklet: Onyx.NESNoise },
  },

  sections: {
    intro: {
      leadL: [mainArpL, mainArpL, mainArpL, mainArpL],
      leadR: [mainArpR, mainArpR, mainArpR, mainArpR],
      bass: [mainBass, mainBass, mainBass, mainBass],
      noise: [mainDrums, mainDrums, mainDrums, mainDrums],
    },
    main1: {
      leadC: [mainMelody1],
      leadL: [mainArpL, mainArpL, mainArpL, mainArpL],
      leadR: [mainArpR, mainArpR, mainArpR, mainArpR],
      bass: [mainBass, mainBass, mainBass, mainBass],
      noise: [mainDrums, mainDrums, mainDrums, mainDrums],
    },
    main2: {
      leadC: [mainMelody2],
      leadL: [mainArpL2, mainArpL2],
      leadR: [mainArpR2, mainArpR2],
      bass: [mainBass2, mainBass2],
      noise: [mainDrums, mainDrums],
    },
    main3: {
      leadC: [mainMelody3],
      leadL: [mainArpL3, mainArpL3],
      leadR: [mainArpR3, mainArpR3],
      bass: [mainBass, mainBass],
      noise: [mainDrums, mainDrums],
    },
    main4: {
      leadC: [mainMelody4],
      leadL: [mainArpL4],
      leadR: [mainArpR4],
      bass: [mainBass4],
      noise: [mainDrums4, mainDrums4],
    },
  },

  pre: ["intro"],
  loop: ["main1", "main1", "main2", "main3", "main2", "main4"],

  // loop: ["main2"],
}

export const Lemmings2OpeningThemeWeirdmer: Onyx.Arrangement = {
  ...Lemmings2OpeningTheme,

  sections: Object.fromEntries(
    Object.entries(Lemmings2OpeningTheme.sections).map(
      ([sectionName, section]) => [
        sectionName,
        Object.fromEntries(
          Object.entries(section).map(([voiceName, riffs]) => [
            voiceName,
            riffs.map((riff) => ({ ...riff, key: keyForWeirdmerVariant })),
          ]),
        ),
      ],
    ),
  ),
}
