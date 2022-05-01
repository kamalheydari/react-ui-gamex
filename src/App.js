import {
  About,
  Header,
  Hero,
  SectionWrapper,
  Tournament,
  Gallery,
  Team,
  Gears,
  NewsLatter,
  Footer,
} from "./components";

//? global style
import GlobalStyle from "./styles/GlobalStyle";
function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <Hero />
        <SectionWrapper>
          <About />
          <Tournament />
          <Gallery />
          <Team />
          <Gears />
          <NewsLatter />
          <Footer />
        </SectionWrapper>
      </main>
    </>
  );
}

export default App;
