import { Onyx } from "@glass/onyx"

const bpm = 173
const key = Onyx.Key.of("Bb").minor
const keyForMajorVariant = Onyx.Key.of("B").major
const keyForLocrianVariant = Onyx.Key.of("D#").mode("Locrian")

const introLeadL: Onyx.Riff = {
  bpm,
  key,
  div: "|   |   |   |   |   |   |   |   ",
  seq: "5-555-553-5-  4-  7-7-7-7-7-5-5-",
  gls: ",,1               ,,p   ,,p ",
  vol: "@ 86@ 86  8       @ 8 8 @ 8 9 6",
  oct: "4                 -",
}

const introLeadR: Onyx.Riff = {
  bpm,
  key,
  div: "|   |   |   |   |   |   |   |   ",
  seq: "8-531-815-3-  2- ",
  gls: ",,1              ",
  vol: "2 424 646 8      ",
  oct: "4       5        ",
}

const introDrums: Onyx.Riff = {
  bpm,
  key,
  div: "|   |   |   |   |   |   |   |   ",
  seq: "5 1-- 551-- 5 1----- ",
  gls: "  ,,,8  ,,,8  ,,,,,,8",
  oct: "7 6   766   6 7   ",
  vol: "6 @   68@   4 987631",
}

const introBass: Onyx.Riff = {
  bpm,
  key,
  div: "|   |   |   |   |   |   |   |   ",
  seq: "1---  1---  1-2---",
  gls: "`9    `9    `9,1  ",
  vol: "@@6@  @@6@  @6@@6@",
  oct: "1",
}

const introNoise: Onyx.Riff = {
  bpm,
  key,
  div: "||||||       |   ||",
  seq: "         0-247---",
  vol: "         3 59@631",
  oct: "9",
}

const oneNoise: Onyx.Riff = {
  bpm,
  key,
  div: "|       |       ",
  seq: "0-247-------",
  vol: "3 59@ 6 3 1 ",
  oct: "9",
}

const mainDrums: Onyx.Riff = {
  bpm,
  key,
  div: "|   |   |   |   |   |   |   |   ",
  seq: "5 5 1-5 5 5 1-5 5 5 1-5 5 5 1-5 ",
  gls: "    ,,8     ,,8     ,,8     ,,8 ",
  oct: "7   6 7 7   6 7 7   6 7 7   6 7 ",
  vol: "6   @ 6 6   @ 6 6   @ 6 6   @ 6 ",
}

const mainBass: Onyx.Riff = {
  bpm,
  key,
  div: "|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   ",
  seq: "1-1-1-1-  1-3-5-0-0 0-0 4-4-1-1-6-6-6-6-  6-1-3-0-0-0-0-  0-4-7-",
  vol: "@6@6@6@6  @6@   @6@ @6@ @6@6@6@6@6@6@6@6  @6@   @6@6@6@6  @6@   ",
  gls: "`9    `9    `7  `9      `9  `9  `9    `9    `7  `9    `9    `6  ",
  oct: "1                       0       0         0 1   1         1     ",
}

const mainArpL: Onyx.Riff = {
  bpm,
  key,
  div: "| | | | | | | | | | | | | | | | ",
  seq: "51035451045337206313487479742904",
  oct: "24423234244142442442424424424244",
  vol: "456",
}

const mainArpR: Onyx.Riff = {
  bpm,
  key,
  div: "|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   ",
  seq: "8-531-815-3-  2-  815-3-  2-  0-8-631-816-3-  2-  7-  4-  7-    ",
  gls: ",,1                                                             ",
  vol: "4 626 846 8       646 8   6   2 4 624 646 8       6             ",
  oct: "4       5         4 5           4       5         4             ",
}

const main1LeadC: Onyx.Riff = {
  bpm,
  key,
  div: "|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   ",
  seq: "5-------- 1-3-7-  6-  5---3-4-5------ 8------ 9------ 4------",
  vol: "@49382716 @4@4@4  @4  @493@4@4@493827 @493827 @493827 @493827",
  gls: ",q",
}

const main2LeadC: Onyx.Riff = {
  bpm,
  key,
  div: "|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   ",
  seq: "  9---8-5---7-8-3-2---3---2-3-5-----------4-2-7-----------9-7-4-",
  vol: "  @49382@493@49382@493@4938271@493827161417182@4938271614193@4@4",
  gls: "  ,,1                                                     ,1    ",
  oct: "4               5                                           4   ",
}

const main3LeadC: Onyx.Riff = {
  bpm,
  key,
  div: "|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   ",
  seq: "5-------- 1-3-7-  6-  5---3-4-5------ 8------ 9---4-7-9-7------",
  vol: "@49382716 @4@4@4  @4  @493@4@4@493827 @493827 @493827   @493827",
  gls: ",q                                                      ,q",
  oct: "4                                                       5",
}

const main4LeadC: Onyx.Riff = {
  bpm,
  key,
  div: "|       |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   ",
  seq: "    7-7-3-7-5------                                           3-3-3-",
  vol: "    @4@48   @493827                                           7193@4",
  gls: "    ,p      ,,1                                               ,1    ",
  oct: "4           5                                                       ",
}

const midDrums: Onyx.Riff = {
  bpm,
  key,
  div: "|   |   |   |   |   |   |   |   ",
  seq: "1-5---1-5---1-5---5 5 5 5 5 5 5 ",
  gls: ",,5   ,,5   ,,5                 ",
  oct: "6     6     6     7   7   7   7 ",
  vol: "@86421@86421@864214 5 6 7 8 9 @ ",
}

const midBass_VI_i: Onyx.Riff = {
  bpm,
  key,
  div: "|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   ",
  seq: "6---6-6-  5-6---  1-6-5-  4-  3-1---1-1-  0-1---",
  vol: "@686@6@6  @6@     @6@ @6  @6    @686@6@6  @6@   ",
  gls: "`9    `9    `9      `3    `1    `9    `9    `9",
  oct: "0                 1             1",
}

const midBass_iv_VII: Onyx.Riff = {
  bpm,
  key,
  div: "|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   ",
  seq: "4---4-4-  3-4---  1-7-4-  3-  8-7---7-7-  6-7---",
  vol: "@ 8 @6@6  @6@     @6@ @6  @6    @ 8 @6@6  @6@   ",
  gls: "`9    `9    `9      `2    `2    `9    `9    `9",
  oct: "0                 1             0",
}

const midBass_iv_V7: Onyx.Riff = {
  bpm,
  key,
  div: "|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   ",
  seq: "4---4-4-  3-4---  6-------5-4-3-5---5-5-  4-5---",
  vol: "@ 8 @6@6  @6@     @8      @8@8@8@ 8 @6@6  @6@   ",
  gls: "`9    `9    `9    `3  `3  `4    `9    `9    `9",
  oct: "0                 1             0",
}

const midArp_VI_i: Onyx.Riff = {
  bpm,
  key,
  div: "| | | | | | | | | | | | | | | | ",
  seq: "61313638034373715013038597355193",
  oct: "24424424254144242442442424424424",
  vol: "6",
}

const midArp_iv_VII: Onyx.Riff = {
  bpm,
  key,
  div: "| | | | | | | | | | | | | | | | ",
  seq: "61414863442664714012028497244092",
  oct: "24424425255144242442442424424424",
  vol: "6",
}

const midArp_iv_V7: Onyx.Riff = {
  bpm,
  key,
  div: "| | | | | | | | | | | | | | | | ",
  seq: "61414863442664715p1p254u295u425p",
  oct: "24424425255144242442443434424424",
  vol: "6",
}

const mid1LeadC: Onyx.Riff = {
  bpm,
  key,
  div: "|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   ",
  seq: "3---3---3-5---4---2---    1-4-5-------    1-4-7-----  9-------- ",
  gls: ",,1       `p      `p      ,,1             ,,1                   ",
  vol: "@ 93@ 93@4@ 93@ 93@ 93    @ @4@ 93        @ @4@ 93    @ 93      ",
  oct: "5",
}

const mid1LeadR: Onyx.Riff = {
  bpm,
  key,
  div: "|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   ",
  seq: "      3-- 2-- 3-- 4-5-0-----      1-4-5-----  7---6---5---4---3-",
  gls: "                  ,,2                         ,,2               ",
  vol: "      31  31  31  3   3 21        5   5 41    5 415 415 415 41  ",
}

const mid2LeadC: Onyx.Riff = {
  bpm,
  key,
  div: "|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   ",
  seq: "  3---2-5---          6---5-3-7-------                    3-3-3-",
  vol: "  @ 93@4@ 93          @ 93@4@4@ 92                        7193@4",
  gls: "  ,,q                 ,,q                                 ,1    ",
  oct: "  6     5                                                       ",
}

const mid2LeadR: Onyx.Riff = {
  bpm,
  key,
  div: "|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   ",
  seq: "          3---2-5-------          3-4-6---5-3-1-5-----4-------- ",
  gls: "          ,,q                                                   ",
  vol: "          5 41545 41              3 4 5 415 4 3 5 41  5 41      ",
  oct: "          5     4",
}

export const BlossomingBlade: Onyx.Arrangement = {
  voices: {
    leadL: { timbre: 2.75, gain: 0.08, pan: -0.7 },
    leadR: { timbre: 2.75, gain: 0.08, pan: 0.7 },
    leadC: { timbre: 3.0, gain: 0.1, pan: 0.0 },
    bass: { timbre: 1.1, gain: 0.5, pan: 0.0 },
    drums: { timbre: 0, gain: 0.08, pan: 0.0, worklet: Onyx.NESNoise },
    noise: { timbre: 5, gain: 0.1, pan: 0.0, worklet: Onyx.NESNoise },
  },

  sections: {
    intro: {
      leadL: [introLeadL],
      leadR: [introLeadR],
      bass: [introBass],
      drums: [introDrums],
      noise: [introNoise],
    },
    main1: {
      leadC: [main1LeadC],
      leadL: [mainArpL],
      leadR: [mainArpR],
      bass: [mainBass],
      drums: [mainDrums, mainDrums],
    },
    main2: {
      leadC: [main2LeadC],
      leadL: [mainArpL],
      leadR: [mainArpR],
      bass: [mainBass],
      drums: [mainDrums, mainDrums],
    },
    main3: {
      leadC: [main3LeadC],
      leadL: [mainArpL],
      leadR: [mainArpR],
      bass: [mainBass],
      drums: [mainDrums, mainDrums],
    },
    main4: {
      leadC: [main4LeadC],
      leadL: [mainArpL],
      leadR: [mainArpR],
      bass: [mainBass],
      drums: [mainDrums, mainDrums],
    },
    mid1: {
      leadC: [mid1LeadC],
      leadL: [midArp_VI_i],
      leadR: [mid1LeadR],
      bass: [midBass_VI_i],
      drums: [midDrums, midDrums],
    },
    mid2: {
      leadC: [mid2LeadC],
      leadL: [midArp_iv_VII],
      leadR: [mid2LeadR],
      bass: [midBass_iv_VII],
      drums: [midDrums, midDrums],
    },
    mid4: {
      leadL: [midArp_iv_V7],
      bass: [midBass_iv_V7],
      drums: [midDrums, midDrums],
    },
  },

  pre: ["intro"],
  // loop: ["main1", "main2", "main3", "main4"],
  // loop: ["mid1", "mid2", "mid1", "mid4"],
  loop: ["main1", "main2", "main3", "main4", "mid1", "mid2", "mid1", "mid4"],

  // loop: ["main4", "mid1"],
  // loop: ["mid2", "mid1"],
}

export const BlossomingBladeMajor: Onyx.Arrangement = {
  ...BlossomingBlade,

  sections: Object.fromEntries(
    Object.entries(BlossomingBlade.sections).map(([sectionName, section]) => [
      sectionName,
      Object.fromEntries(
        Object.entries(section).map(([voiceName, riffs]) => [
          voiceName,
          riffs.map((riff) => ({ ...riff, key: keyForMajorVariant })),
        ]),
      ),
    ]),
  ),
}

export const BlossomingBladeLocrian: Onyx.Arrangement = {
  ...BlossomingBlade,

  sections: Object.fromEntries(
    Object.entries(BlossomingBlade.sections).map(([sectionName, section]) => [
      sectionName,
      Object.fromEntries(
        Object.entries(section).map(([voiceName, riffs]) => [
          voiceName,
          riffs.map((riff) => ({ ...riff, key: keyForLocrianVariant })),
        ]),
      ),
    ]),
  ),
}
