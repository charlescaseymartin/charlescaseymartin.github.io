import Service, { ServiceItemType } from '@/components/cards/service';
import Container from '@/components/shared/container';
import Paragraph from '@/components/shared/paragraph';
import Title from '@/components/shared/title';




const Icon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
    </svg>
  )
}

const services: ServiceItemType[] = [
  {
    title: 'Web Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti qui soluta cupiditate',
    icon: <Icon />,
  },
  {
    title: 'Web Development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti qui soluta cupiditate',
    icon: <Icon />,
  },
  {
    title: 'SEO',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti qui soluta cupiditate',
    icon: <Icon />,
  },
]

export default function Services() {
  return (
    <section id='services' className='py-5 my-16'>
      <Container className='space-y-10 md:sapce-y-12'>
        <div className='text-center max-w-3xl mx-auto space-y-4'>
          <Title>What we offer</Title>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Paragraph>
        </div>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
          {services.map((service, idx) => <Service key={`${idx}-${service.title}`} {...service} />)}
        </div>
      </Container>
    </section>
  )
}