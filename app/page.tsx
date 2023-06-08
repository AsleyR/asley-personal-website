import AboutSection from "./(components)/sections/AboutSection"
import Container from "./(components)/Container"
import Footer from "./(components)/Footer"
import HeroSection from "./(components)/sections/HeroSection"
import PortfolioSection from "./(components)/sections/PortfolioSection"
import ContactSection from "./(components)/sections/ContactSection"
import getAllProjects from "./(actions)/projects/getAllProjects"

export default async function Home() {
  const projects = await getAllProjects()

  return (
    <>
      <HeroSection />
      <Container className="h-full w-full">
        <PortfolioSection projects={projects} />
        <AboutSection />
        <ContactSection />
      </Container>
      <Footer />
    </>
  )
}
