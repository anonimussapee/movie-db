const Layout = ({children}) => {
  
  return (
    <div className='w-[100%]  min-w-[320px]  flex flex-col justify-center items-center'>
      {children}
    </div>
  )
} 

const LayoutW90 = ({children}) => {
  
  return (
    <div className='w-[90%] mx-auto  min-w-[320px] max-w-[900px] flex flex-col justify-center items-center'>
      {children}
    </div>
  )
} 

export {Layout, LayoutW90}