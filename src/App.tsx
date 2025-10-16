import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import { Api, Install, Usage } from "./pages";
import { ThemeProvider } from "colbrush/client";

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Install />} />
          <Route path="api" element={<Api />} />
          <Route path="usage" element={<Usage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
