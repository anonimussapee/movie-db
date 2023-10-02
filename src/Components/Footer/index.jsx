import { DevicePhoneMobileIcon, EnvelopeIcon,  GlobeAmericasIcon, PhoneIcon } from '@heroicons/react/24/solid';

const Footer = () => {

  return (
    <footer className='flex flex-col gap-6 w-[100%] h-[600px] bg-[#144552] p-6 text-[16px] text-white '>
      <p>&#169; JCDEVS</p>
      <a className='underline-offset-4 underline' href="https://www.jcdevs.net/" target='_blank'><GlobeAmericasIcon className='w-10 h-10 inline'/>Visita mi página web actual</a>
      <address>🇪🇨 Otavalo - Ecuador </address>
      <a href="https://api.whatsapp.com/send/?phone=593939349490&text&type=phone_number&app_absent=0" target='_blank'><PhoneIcon className='w-10 h-10 inline'/>+593 93 934 9490</a>
      <p><EnvelopeIcon className='w-10 h-10 inline'/> jdxevs@gmail.com  </p>
      <a className='underline-offset-4 underline' href="https://www.facebook.com/john.cordova.9081323" target='_blank'> <DevicePhoneMobileIcon className='w-10 h-10 inline'/>Facebook </a>
      <a className='underline-offset-4 underline' href="https://www.linkedin.com/in/john-malku-cordova-64a247245" target='_blank'> <DevicePhoneMobileIcon className='w-10 h-10 inline'/>LinkendIn</a>
      <a className='underline-offset-4 underline' href="https://youtube.com/@jdxdevs?si=drau0yNUYfFZ_zsa" target='_blank'> <DevicePhoneMobileIcon className='w-10 h-10 inline'/>YouTube</a>
      <a className='underline-offset-4 underline' href="https://www.tiktok.com/@jdxdevs?is_from_webapp=1&sender_device=pc" target='_blank'> <DevicePhoneMobileIcon className='w-10 h-10 inline'/>Tiktok</a>
    </footer>
  )
}

export {Footer};
