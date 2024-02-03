import { Onyx } from "@glass/onyx"

const bpm = 181
const key = "C-minor"

const mainDrums: Onyx.Riff = {
  bpm,
  key,
  div: "|   |   |   |   |   |   |   |   ",
  seq: "5 5 1-5 5 5 1-5 5 5 1-5 5 5 1-5 ",
  gls: "    ,,8     ,,8     ,,8     ,,8 ",
  oct: "7   6 7 7   6 7 7   6 7 7   6 7 ",
  vol: "6   @ 6 6   @ 6 6   @ 6 6   @ 6 ",
}

const mainBass_i: Onyx.Riff = {
  bpm,
  key,
  div: "| | | | | | | | ",
  seq: "3533513553335335",
  oct: "2442444244244244",
}

const mainBass_v7: Onyx.Riff = {
  bpm,
  key,
  div: "| | | | | | | | ",
  seq: "2422402542224224",
  oct: "2442444244244244",
}

const echoBass_i: Onyx.Riff = {
  bpm,
  key,
  div: "|   |   |   |   |   |   |   |   ",
  seq: " 3-5-3-3-5-1-3-5-5-3-3-3-5-3-3-5",
  oct: " 2 4 4 2 4 4 4 2 4 4 2 4 4 2 4 4",
  vol: "8",
}

const echoBass_v7: Onyx.Riff = {
  bpm,
  key,
  div: "|   |   |   |   |   |   |   |   ",
  seq: " 2-4-2-2-4-0-2-5-4-2-2-2-4-2-2-4",
  oct: " 2 4 4 2 4 4 4 2 4 4 2 4 4 2 4 4",
  vol: "8",
}

const walkLeadL_i: Onyx.Riff = {
  bpm,
  key,
  div: "|   |   |   |   |   |   |   |   ",
  seq: "1---3-1-  0-3-1-1---3-1-  0-3-1-",
  gls: "    ``5     ``5     ``5     ``5 ",
}

const walkLeadL_v7: Onyx.Riff = {
  bpm,
  key,
  div: "|   |   |   |   |   |   |   |   ",
  seq: "2---3-2-  1-3-2-2---3-2-  1-3-2-",
  gls: "    ``5     ``5     ``5     ``5 ",
}

const walkLeadL_v7_V7: Onyx.Riff = {
  bpm,
  key,
  div: "|   |   |   |   |   |   |   |   ",
  seq: "2---3-2-  1-3-2-p---3-2-  p-3-2-",
  gls: "    ``5     ``5     ``5     ``5 ",
}

export const BubbleMan: Onyx.Arrangement = {
  voices: {
    leadL: { timbre: 3.0, gain: 0.1, pan: -0.33 },
    leadR: { timbre: 3.0, gain: 0.08, pan: 0.33 },
    leadC: { timbre: 3, gain: 0.08, pan: 0.0 },
    bass: { timbre: 1.0, gain: 0.5, pan: 0.0 },
    noise: { timbre: 0, gain: 0.08, pan: 0.0, worklet: Onyx.NESNoise },
  },

  sections: {
    walk: {
      leadL: [walkLeadL_i, walkLeadL_v7, walkLeadL_i, walkLeadL_v7_V7],
      leadR: [echoBass_i, echoBass_v7, echoBass_i, echoBass_v7],
      bass: [mainBass_i, mainBass_v7, mainBass_i, mainBass_v7],
      noise: [mainDrums, mainDrums, mainDrums, mainDrums],
    },
  },

  loop: ["walk"],
}
