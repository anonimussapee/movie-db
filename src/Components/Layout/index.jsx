const Layout = ({children}) => {
  
  return (
    <div className='w-[100%]  min-w-[320px] h-full flex flex-col justify-center items-center relative'>
      {children}
    </div>
  )
} 

const LayoutW90 = ({children, optionalClass}) => {
  
  return (
    <section className={`w-[90%] mx-auto  min-w-[320px] max-w-[1000px] flex flex-col justify-center items-center relative ${optionalClass} `}>
      {children}
    </section>
  )
} 


export {Layout, LayoutW90}