import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { companies } from '@/data';

const Clients = () => {
    const testimonials = [
        {
          quote:
            "Working with Heri was an absolute game-changer for our project. His technical expertise, attention to detail, and commitment to delivering high-quality code were exceptional. He not only met but exceeded our expectations.",
          name: "Charles Robert",
          title: "CFO of discogs",
        },
        {
          quote:
            "I can't speak highly enough about Heri and his contribution to our software development project. From the outset, he demonstrated a deep understanding of our business needs and translated them into a seamless software solution.",
          name: "Thabiso Thabs",
          title: "COO of Aora",
        },
        {
          quote: "Choosing Heri for our software development needs was one of the best decisions we made. His technical ability to navigate complex challenges set them apart. He brought creativity with innovative solutions that improved the performance of our application.",
          name: " Grace Sharon",
          title: "CTO of Voom",
        },
        {
          quote: "Heri helped us build our website from scratch to production in a record 1 month time. They took our requirements and delivered a website we are proud of so much that we are thrilled.I couldn't be any happier. Highly recommended. ",
          name: "Tyler Durden2",
          title: "Founder at Project Mayhem"
        }
        
      ];
  return (
    <div className='py-20' id="clients">
       <h1 className="heading">
            Kind words from {' '}
            <span className='text-purple'>satisfied client</span>
       </h1>
       <div className="flex flex-col items-center max-lg:mt-10">
            <InfiniteMovingCards items={testimonials} direction='right' speed='slow' />   
            <div className="flex flex-wrap gap-3">
                {companies.map(({id, img, name, nameImg }) => (
                    <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
                        <img src={img} alt={name} className="md:w-10 w-5" />
                        <img src={nameImg} alt={name} className="md:w-24 w-20" />
                    </div>
                ))}
            </div>
       </div>       
    </div>
  )
}

export default Clients