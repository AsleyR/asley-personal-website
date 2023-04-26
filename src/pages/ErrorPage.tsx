import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <main className='grid px-[1rem] py-[9rem]'>
      <article>
        <h1 className='text-center text-8xl font-bold'>404</h1>
        <p className='text-center text-lg pt-4'>Oops! We Couldn't Find The Page You Were Looking For.</p>
        <p className='text-center pt-1'>Perhaps, return to the &#20;
          <span className='inline-flex'>
            <Link to={'/'} className="underline md:no-underline group text-blue-500 transition duration-300">
              homepage
              <span className="md:block max-w-0 group-hover:max-w-full transition-all duration-300 h-[1px] bg-blue-500"></span>
            </Link>
          </span>
          ?
        </p>
      </article>
    </main>
  )
}



export default ErrorPage
