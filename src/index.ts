import { World } from "@glass/core"
import { Onyx } from "@glass/onyx"

import { BubbleMan } from "./music/BubbleMan"
import { BlossomingBlade } from "./music/BlossomingBlade"

const world = new World()
world.addSystems([Onyx.ArrangementPlaySystem(world)])

const tickAndKeepRunning = (timestamp: number) => {
  world.clock.tick(timestamp)
  requestAnimationFrame(tickAndKeepRunning)
}

requestAnimationFrame(tickAndKeepRunning)

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

    if (window.location.hash === "#bubble-man") {
      playArrangement(BubbleMan)
    } else if (window.location.hash === "#blossoming-blade") {
      playArrangement(BlossomingBlade)
    }
  }

  window.addEventListener("hashchange", changeMusic)
  changeMusic()
})
