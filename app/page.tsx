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
      <div className="md:bg-gray-100 md:border-y border-gray-200 w-full px-mobilex lg:px-normalx">
        <WorkSection works={works} />
      </div>
      <Container className="h-full w-full">
        <PortfolioSection projects={projects} />
        <AboutSection />
        <ContactSection />
      </Container>
      <Footer />
    </>
  )
}
