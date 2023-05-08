import AboutSection from "./(components)/sections/AboutSection"
import Container from "./(components)/Container"
import Footer from "./(components)/Footer"
import HeroSection from "./(components)/sections/HeroSection"
import PortfolioSection from "./(components)/sections/PortfolioSection"
import ContactSection from "./(components)/sections/ContactSection"

export default function Home() {
  return (
    <>
      <HeroSection />
      <Container className="h-full w-full">
        <PortfolioSection />
        <AboutSection />
        <ContactSection />
      </Container>
      <Footer />
    </>
  )
}
