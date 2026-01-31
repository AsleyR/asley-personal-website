import AboutSection from "./(components)/sections/AboutSection"
import Container from "./(components)/Container"
import Footer from "./(components)/Footer"
import HeroSection from "./(components)/sections/HeroSection"
import PortfolioSection from "./(components)/sections/PortfolioSection"
import ContactSection from "./(components)/sections/ContactSection"
import WorkSection from "./(components)/sections/WorkSection"
import getAllProjects from "./(actions)/projects/getAllProjects"
import getAllWorks from "./(actions)/works/getAllWorks"

export default async function Home() {
  const projects = await getAllProjects()
  const works = await getAllWorks()

  return (
    <>
      <HeroSection />
      <div className="bg-[#fafaf5] border-y border-gray-200 w-full 
        px-mobilex lg:px-normalx">
        <WorkSection works={works} />
      </div>
      <div className="-mt-5 drop-shadow-sm h-[8rem]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fbfbf2" fillOpacity="1" d="M0,128L120,122.7C240,117,480,107,720,122.7C960,139,1200,181,1320,202.7L1440,224L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
      </div>
      <Container className="h-full w-full">
        <PortfolioSection projects={projects} />
      </Container>
      <AboutSection />
      <ContactSection />
      <Footer />
    </>
  )
}
