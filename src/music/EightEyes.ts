import { Onyx } from "@glass/onyx"

const bpm = 150
const key = Onyx.Key.of("G").minor
const keyForMajorVariant = Onyx.Key.of("Ab").major

const preLeadL: Onyx.Riff = {
  bpm,
  key,
  div: "||",
  seq: "5-",
  oct: "3",
}

const preLeadR: Onyx.Riff = {
  bpm,
  key,
  div: "||",
  seq: "4-",
  oct: "3",
}

const mainLeadL_1: Onyx.Riff = {
  bpm,
  key,
  div: "|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   ",
  seq: "1---------1-2-3-2---5-------2---321-------------------------5---",
  oct: "4                                                           3   ",
}

const mainLeadR_1: Onyx.Riff = {
  bpm,
  key,
  div: "|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   ",
  seq: "3---1---5-3-2-1-5---2---u---4---543-1---3---5---2---4---5---4---",
  oct: "3",
}

const mainBass_i_ii_i_v7: Onyx.Riff = {
  bpm,
  key,
  div: "||||||||||||||||",
  seq: "1-3-0-5-1-5-0-5-",
  oct: "2 2 2 - 2 2 2 - ",
}

const mainLeadL_2: Onyx.Riff = {
  bpm,
  key,
  div: "|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   ",
  seq: "1---------1-2-3-4-------2---0---545-------------------------5---",
  oct: "4                                                           3   ",
}

const mainLeadR_2: Onyx.Riff = {
  bpm,
  key,
  div: "|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   ",
  seq: "3---1---5-3-2-1-2---0---4---5---7---5---3---5---u---4---2---4---",
  oct: "3",
}

const mainBass_i_VII_III_V7: Onyx.Riff = {
  bpm,
  key,
  div: "||||||||||||||||",
  seq: "1-3-0---3-5-2-5-",
  oct: "2 2 2   2 2 2 - ",
}

const mainLeadL_3: Onyx.Riff = {
  bpm,
  key,
  div: "|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   ",
  seq: "1---------1-2-3-2---5-------2---34321-----------------------5---",
  oct: "4                                                           3   ",
}

const mainLeadR_3: Onyx.Riff = {
  bpm,
  key,
  div: "|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   ",
  seq: "3---1---5-3-2-1-5---2---u---4---5---3---1---3---2---4---5---4---",
  oct: "3",
}

// here in main3, mainBass_i_ii_i_v7 again

const mainLeadL_4: Onyx.Riff = {
  bpm,
  key,
  div: "|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   ",
  seq: "1---------1-2-3-2-------0---2---321-------------------------5---",
  oct: "4",
}

const mainLeadR_4: Onyx.Riff = {
  bpm,
  key,
  div: "|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   ",
  seq: "3---1---5-3-2-1-6---4---2---0---543-------------853---------3---",
  oct: "3                                                           4   ",
}

const mainBass_i_VII_i_i: Onyx.Riff = {
  bpm,
  key,
  div: "||||||||||||||||",
  seq: "1-3-0-2-1-5-1-5-",
  oct: "2 2 2 2 2 - 2 - ",
}

const midLeadL_1: Onyx.Riff = {
  bpm,
  key,
  div: "|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   ",
  seq: "8-------7---6---78765-------5---6-------4---7---5-----------5---",
  oct: "4",
}

const midLeadR_1: Onyx.Riff = {
  bpm,
  key,
  div: "|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   ",
  seq: "4---2-------4---56543-------7---4-----4-2---2---32343-------3---",
  oct: "4",
}

const midBass_VI_III_VII_III: Onyx.Riff = {
  bpm,
  key,
  div: "||||||||||||||||",
  seq: "6-47303-20-43037",
  oct: "1   2 2 2 - 2 - ",
}

const midLeadL_2: Onyx.Riff = {
  bpm,
  key,
  div: "|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   ",
  seq: "8-------7---6---54345-------5---r-------2---y---uy5---------5---",
  oct: "4                                                           3   ",
}

const midLeadR_2: Onyx.Riff = {
  bpm,
  key,
  div: "|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   ",
  seq: "4-------3---2---76567-------3---y-----y-r---y---4---2---p---4---",
  oct: "4               3           4   3               4           3   ",
}

const midBass_VI_III_CTo7_V7: Onyx.Riff = {
  // Or, in the relative major key: IV I CT7(♯iio7) III7
  // The third chord is acting as a common tone diminished seventh chord.
  // See https://en.wikipedia.org/wiki/Diminished_seventh_chord#Common-tone_diminished_seventh_chord
  bpm,
  key,
  div: "||||||||||||||||",
  seq: "64043-0-2-y-5-  ",
  oct: "2   2 2 2 -     ",
}

export const EightEyes: Onyx.Arrangement = {
  voices: {
    leadL: { timbre: 3.5, gain: 0.06, pan: -0.33 },
    leadR: { timbre: 3.5, gain: 0.06, pan: 0.33 },
    bass: { timbre: 1.0, gain: 0.6, pan: 0.0 },
    noise: { timbre: 0, gain: 0.08, pan: 0.0, worklet: Onyx.NESNoise },
  },

  sections: {
    pre: {
      leadL: [preLeadL],
      leadR: [preLeadR],
    },
    main1: {
      leadL: [mainLeadL_1],
      leadR: [mainLeadR_1],
      bass: [mainBass_i_ii_i_v7],
    },
    main2: {
      leadL: [mainLeadL_2],
      leadR: [mainLeadR_2],
      bass: [mainBass_i_VII_III_V7],
    },
    main3: {
      leadL: [mainLeadL_3],
      leadR: [mainLeadR_3],
      bass: [mainBass_i_ii_i_v7],
    },
    main4: {
      leadL: [mainLeadL_4],
      leadR: [mainLeadR_4],
      bass: [mainBass_i_VII_i_i],
    },
    mid1: {
      leadL: [midLeadL_1],
      leadR: [midLeadR_1],
      bass: [midBass_VI_III_VII_III],
    },
    mid2: {
      leadL: [midLeadL_2],
      leadR: [midLeadR_2],
      bass: [midBass_VI_III_CTo7_V7],
    },
  },
  pre: ["pre"],
  loop: ["main1", "main2", "main3", "main4", "mid1", "mid2"],
}

export const EightEyesMajor: Onyx.Arrangement = {
  ...EightEyes,

  sections: Object.fromEntries(
    Object.entries(EightEyes.sections).map(([sectionName, section]) => [
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
