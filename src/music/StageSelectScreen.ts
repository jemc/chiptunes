import { Onyx } from "@glass/onyx"

const bpm = 241
const key = "D-minor"

const mainMelody1: Onyx.Riff = {
  bpm,
  key,
  div: "| | | | | | | | | | | | | | | | ",
  seq: "0135----5431----4310----1-------",
  gls: ",p      `p       ",
  vol: "@89@ 2  @89@ 2  @89@ 2  @ 282622",
  oct: "5",
}

const mainMelody3: Onyx.Riff = {
  bpm,
  key,
  div: "| | | | | | | | | | | | | | | | ",
  seq: "0135----5431----4310----7-------",
  gls: ",p      `p              ,,q",
  vol: "@89@ 2  @89@ 2  @89@ 2  @ 282622",
  oct: "5",
}

const mainMelody4: Onyx.Riff = {
  bpm,
  key,
  div: "| | | | | | | | | | | | | | | | ",
  seq: "7540----4435----3479 8-7--------",
  gls: ",p      ,p              ",
  vol: "@89@ 2  @89@ 2  @89@   @ 282622",
  oct: "5",
}

const mainArpL: Onyx.Riff = {
  bpm,
  key,
  div: "|   |   |   |   |   |   |   |   ",
  seq: "1-- 0-1-3-- 1-3-5-7-5-  4-  3-  ",
  gls: ",,1             ,,1",
  vol: "",
  oct: "4",
}

const mainArpR: Onyx.Riff = {
  bpm,
  key,
  div: "|   |   |   |   |   |   |   |   ",
  seq: "5-- 4-5-8-- 5-1-3-5-3-  2-  1-  ",
  gls: ",,1             ,,1",
  vol: "",
  oct: "4             5",
}

const mainBass: Onyx.Riff = {
  bpm,
  key,
  div: "|   |   |   |   |   |   |   |   ",
  seq: "1---  1---  1-----------        ",
  gls: "`9    `9    ````````````8       ",
  vol: "@@6@  @@6@  @6@@6@              ",
  oct: "2",
}

const mainDrums: Onyx.Riff = {
  bpm,
  key,
  div: "|   |   |   |   |   |   |   |   ",
  seq: "5 2 2 5 2 2 1---5 2 2 5 2 1-1---",
  gls: "            ,,8           ,8,,8 ",
  oct: "7     7     6   7     7   6 6   ",
  vol: "6 3 3 6 3 3 @7536 3 3 6 3 @7@753",
}

export const StageSelectScreen: Onyx.Arrangement = {
  voices: {
    leadL: { timbre: 3.75, gain: 0.05, pan: -0.33 },
    leadR: { timbre: 3.75, gain: 0.05, pan: 0.33 },
    leadC: { timbre: 2.5, gain: 0.1, pan: 0.0, vibrato: -0.5, vibratoFreq: 6 },
    bass: { timbre: 1.0, gain: 0.5, pan: 0.0 },
    noise: { timbre: 0, gain: 0.08, pan: 0.0, worklet: Onyx.NESNoise },
  },

  sections: {
    main1: {
      leadL: [mainArpL, mainArpL],
      leadR: [mainArpR, mainArpR],
      leadC: [mainMelody1],
      bass: [mainBass, mainBass],
      noise: [mainDrums, mainDrums],
    },
    main3: {
      leadL: [mainArpL, mainArpL],
      leadR: [mainArpR, mainArpR],
      leadC: [mainMelody3],
      bass: [mainBass, mainBass],
      noise: [mainDrums, mainDrums],
    },
    main4: {
      // leadL: [mainArpL, mainArpL],
      // leadR: [mainArpR, mainArpR],
      leadC: [mainMelody4],
      bass: [mainBass, mainBass],
      noise: [mainDrums, mainDrums],
    },
  },

  loop: ["main1", "main1", "main3", "main4"],
  // loop: ["intro", "main"],
}
