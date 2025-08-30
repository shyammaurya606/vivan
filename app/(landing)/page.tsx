// import Link from 'next/link'
// import { Button } from '@/components/ui/button';
// import { LandingNavbar } from '@/components/landing-navbar';
// import { LandingHero } from '@/components/landing-hero';
// import { LandingContent } from '@/components/landing-content';
// import { LandingFooter } from '@/components/landing-footer';

// const LandingPage = () => {
//     return (
//         <div className='h-full w-full'>
//             <LandingNavbar />
//             <LandingHero />
//             <LandingContent />
//             {/* <LandingFooter /> */}
           
//         </div>
//     )
// }

// export default LandingPage;


import { LandingNavbar } from '@/components/landing-navbar';
import { LandingHero } from '@/components/landing-hero';
import { LandingContent } from '@/components/landing-content';
import { LandingFooter } from '@/components/landing-footer';

const LandingPage = () => {
  return (
    <div className="h-full bg-[#111827]">
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
      <LandingFooter />
    </div>
  )
}

export default LandingPage;
