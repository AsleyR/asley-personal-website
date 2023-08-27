import AboutSection from "./(components)/sections/AboutSection"
import Container from "./(components)/Container"
import Footer from "./(components)/Footer"
import HeroSection from "./(components)/sections/HeroSection"
import PortfolioSection from "./(components)/sections/PortfolioSection"
import ContactSection from "./(components)/sections/ContactSection"
import fetchProjects from "./(libs)/fetchProjects"
import WorkSection from "./(components)/sections/WorkSection"
import fetchWorks from "./(libs)/fetchWorks"
import getAllProjects from "./(actions)/projects/getAllProjects"
import getAllWorks from "./(actions)/works/getAllWorks"

export default async function Home() {
  // const projects = await fetchProjects()
  // const works = await fetchWorks()

  const projects = await getAllProjects()
  const works = await getAllWorks()

  return (
    <>
      <HeroSection />
      <Container className="h-full w-full">
        <WorkSection works={works} />
        <PortfolioSection projects={projects} />
        <AboutSection />
        <ContactSection />
      </Container>
      <Footer />
    </>
  )
}
