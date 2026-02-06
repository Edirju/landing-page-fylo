import { 
  Header, 
  Hero, 
  Features, 
  MoreInformation, 
  Testimonials, 
  Form,
  Footer,

} from "./components";

function App() {  

  return (
    <main className="m-auto">
      <section className="bg-Navy-850 p-6 h-105 relative md:h-160 ">
        <Header />

        <img
          src="/images/illustration-intro.png"
          alt="intro ilustration"
          className="relative z-10 mt-12 w-[320px] md:w-112.5 mx-auto"
        />

        <img
          src="/images/bg-curvy-mobile.svg"
          alt="background"
          className="absolute bottom-0 left-0 w-full xl:hidden"
        />
        <img
          src="/images/bg-curvy-desktop.svg"
          alt="background"
          className="absolute bottom-0 left-0 w-full hidden xl:block"
        />
      </section>

      <section className="bg-Navy-900 p-6 pb-75">
        <Hero />
        <Features />
        <MoreInformation />
        <Testimonials />
      </section>

      <section className="bg-Navy-950 p-6 relative ">
        <Form />
        <Footer />
      </section>
    </main>
  );
}

export default App
