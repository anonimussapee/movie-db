import './index.css'

const ContainerScrollX = ({children, optionalClass }) => {

  return (
  <div className={`ContainerScrollX w-[100%] py-5 h-auto scroll-x-container flex gap-3 ${optionalClass} `} >
    {children}
  </div>
  )
}

export {ContainerScrollX}