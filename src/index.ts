import { World } from "@glass/core"
import { Onyx } from "@glass/onyx"

import { BlossomingBlade } from "./music/BlossomingBlade"
import { BubbleMan } from "./music/BubbleMan"
import { StageSelectScreen } from "./music/StageSelectScreen"

import { setInterval } from "worker-timers"

const world = new World()
world.addSystems([Onyx.ArrangementPlaySystem(world)])

setInterval(() => {
  world.clock.tick(performance.now())
}, 500)

const musicEntity = world.create()
const playArrangement = (arrangement: Onyx.Arrangement) => {
  const play = new Onyx.ArrangementPlay(arrangement)
  play.setupVoicesIfNeeded(onyx)
  world.set(musicEntity, [onyx, play])
}

let onyx: Onyx.Context
Onyx.Context.setup().then((c) => {
  onyx = c

  const changeMusic = () => {
    console.log(window.location.hash)

    switch (window.location.hash) {
      case "#silence": {
        world.remove(musicEntity, [Onyx.ArrangementPlay])
        break
      }
      case "#blossoming-blade": {
        playArrangement(BlossomingBlade)
        break
      }
      case "#bubble-man": {
        playArrangement(BubbleMan)
        break
      }
      case "#stage-select-screen": {
        playArrangement(StageSelectScreen)
        break
      }
    }
  }

  window.addEventListener("hashchange", changeMusic)
  changeMusic()
})
