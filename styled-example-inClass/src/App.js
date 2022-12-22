import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Global.styled";
import Card from "./components/Card";
import Container from "./components/styles/Container.styled";
import data from "./data";
import Footer from "./components/Footer";

const style = {
  colors: {
    header: "#fff",
    body: "#fff",
    footer: "#8A1C4A",
  },
  margins: {},
  responsive: "768px",
};

const App = () => {
  return (
    <ThemeProvider theme={style}>
      <GlobalStyles />
      <Header />
      <Container>
        {data.map((item, index) => {
          return <Card {...item} key={index} />;
        })}
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
