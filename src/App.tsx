import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/theme/default"
import { GlobalStyle } from "./styles/global"
import { Home } from "./pages/Home"
import { Toaster } from "sonner"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Home />
      <Toaster richColors />
    </ThemeProvider>
  )
}
