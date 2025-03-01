import styled from "styled-components"

export const ContainerMain = styled.div`
  height: 100dvh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;

  color: ${(props) => props.theme.white};
`

export const Title = styled.h1`
  font-size: 2.5rem;
`

export const StopwatchContainer = styled.div`
  font-size: 3.5rem;
`

export const StopwatchButtonsContainer = styled.div`
  display: flex;
  gap: 2.5rem;

  @media screen and (max-width: 470px) {
    flex-direction: column;
    gap: 1rem;
  }
`

const BaseButton = styled.button`
  padding: 3rem;
  border: 0;
  border-radius: 12px;
  cursor: pointer;
  background-color: ${(props) => props.theme["yellow-300"]};

  &:hover {
    opacity: 85%;
  }
`

export const PlayButton = styled(BaseButton)``

export const PauseButton = styled(BaseButton)``

export const ResetButton = styled(BaseButton)``
