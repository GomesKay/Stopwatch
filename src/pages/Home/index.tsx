import { Pause, Play, TimerReset } from "lucide-react"
import {
  ContainerMain,
  PauseButton,
  PlayButton,
  ResetButton,
  StopwatchButtonsContainer,
  StopwatchContainer,
  Title,
} from "./styles"

export function Home() {
  return (
    <ContainerMain>
      <Title>Stopwatch</Title>

      <StopwatchContainer>
        <span>0</span>
        <span>0</span>
        <span>:</span>
        <span>0</span>
        <span>0</span>
      </StopwatchContainer>

      <StopwatchButtonsContainer>
        <PlayButton>
          <Play />
        </PlayButton>
        <PauseButton>
          <Pause />
        </PauseButton>
        <ResetButton>
          <TimerReset />
        </ResetButton>
      </StopwatchButtonsContainer>
    </ContainerMain>
  )
}
