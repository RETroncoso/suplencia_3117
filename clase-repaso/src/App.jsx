import Counter from "./components/counter/Counter";
import { CountContextProvider } from "./context/counterContext";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <>
    <CountContextProvider>
      <Counter/>
    </CountContextProvider>
      
      <GlobalStyle />
    </>
  );
}

export default App;