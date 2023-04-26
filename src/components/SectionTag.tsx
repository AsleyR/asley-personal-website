const SectionTag = ({ title }: { title: string }) => {
  return (
    <h1 className='flex items-center gap-2'>
      <span className='w-[25px] md:w-[50px] h-[1px] bg-black inline-block'></span>
      <p className='text-sm md:text-base'>{title}</p>
    </h1>
  )
}

export default SectionTag
