import { MantineProvider } from "@mantine/core";
import { BrowserRouter as Router } from "react-router-dom";
import MainRouter from "routes";
import theme from "theme";

function App() {
  return (
    <>
      <Router>
        <MantineProvider
          theme={theme}
          withCSSVariables
          withNormalizeCSS
          withGlobalStyles
        >
          <MainRouter />
        </MantineProvider>
      </Router>
    </>
  );
}

export default App;
