import Activities from "./components/Activities";
import DonateCta from "./components/DonateCta";
import Events from "./components/Events";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import VolunteerForm from "./components/VolunteerForm";



export default function Home(){

  return(
    <>
    <Header/>
    <main>
      <Hero/>
      <Activities/>
      <Events/>
      <VolunteerForm/>
      <DonateCta/>

    </main>
    <Footer/>
    </>
  )
}