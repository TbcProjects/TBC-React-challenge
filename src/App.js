import Layout from "./components/Layout/Layout";
import ContactView from "./components/ContactView/ContactView";
import { ContextProvider } from "./contexts/ContextProvider";
import { useContext } from "react";
import { DataContext } from "./contexts/ContextProvider";
import "./App.css";

function App() {
  const context = useContext(DataContext);
  const { darkTheme } = context;

  return (
    <ContextProvider>
      <Layout>
        <ContactView />
      </Layout>
    </ContextProvider>
  );
}

export default App;
