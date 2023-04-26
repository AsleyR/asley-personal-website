import { Fade } from 'react-awesome-reveal'
import Socials from '../../components/Socials'
import SectionTag from '../../components/SectionTag'

const Contact = () => {
  return (
    <article className='py-[6rem]' id='contact'>
      <SectionTag title='CONTACT ME' />
      <Fade direction='up' triggerOnce={true}>
        <section className='grid grid-cols-auto gap-5 pr-0 lg:pr-[25rem] mt-16 transition-all'>
          <address className='text-2xl md:text-4xl font-bold hover:scale-[1.02] origin-bottom-left transition-all'>
            <a className='not-italic hover:text-gray-700 duration-50' href="mailto:asleyrobleto@gmail.com">asleyrobleto@gmail.com</a>
          </address>
          <p className='text-lg md:text-xl leading-9 transition-all'>
            I'm always down to collaborate when I have the time. I dream of becoming a great developer and one day disrupt the tech ecosystem with a cool project.
          </p>
          <Socials />
        </section>
      </Fade>
    </article>
  )
}

export default Contact
