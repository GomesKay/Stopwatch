import { toast } from "sonner"
import { useEffect, useState } from "react"
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
  const [seconds, setSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let interval: ReturnType<typeof setTimeout> | undefined

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1)
      }, 1000)
    } else {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [isRunning])

  function handleStartTime() {
    setIsRunning(true)
    toast.success("Cronômetro iniciado!")
  }

  function handlePauseTime() {
    setIsRunning(false)
    toast.info("Cronômetro pausado")
  }

  function handleResetTime() {
    setIsRunning(false)
    setSeconds(0)
    toast.warning("Cronômetro resetado")
  }

  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const remainingSeconds = seconds % 60
  const formatNumber = (num: number) => String(num).padStart(2, "0")

  return (
    <ContainerMain>
      <Title>Stopwatch</Title>

      <StopwatchContainer>
        <span>{formatNumber(hours)}</span>
        <span>:</span>
        <span>{formatNumber(minutes)}</span>
        <span>:</span>
        <span>{formatNumber(remainingSeconds)}</span>
      </StopwatchContainer>

      <StopwatchButtonsContainer>
        <PlayButton onClick={handleStartTime} disabled={isRunning}>
          <Play />
        </PlayButton>
        <PauseButton onClick={handlePauseTime} disabled={!isRunning}>
          <Pause />
        </PauseButton>
        <ResetButton onClick={handleResetTime} disabled={!isRunning}>
          <TimerReset />
        </ResetButton>
      </StopwatchButtonsContainer>
    </ContainerMain>
  )
}
