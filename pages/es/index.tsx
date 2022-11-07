import type { NextPage } from 'next'
import { Box, Container } from '@mui/material'
import { PlantillaLayoutEs } from '../../components/layout'
import { SlideHome } from '../../components/slides'
import { Technologies } from '../../components/technologies'
import { Testimonials } from '../../components/testimonials'
import { SectionAbout } from '../../components/about'
import { ServiceSection } from '../../components/service'
import { SectionContact } from '../../components/contact'
import { CompanySummary } from '../../components/companySummary'
import { CalledToContact } from '../../components/calledToContact'

const HomePage: NextPage = () => {
  return (
    <PlantillaLayoutEs title={'EJC - Home'} contentPage={'Servicios de construcción'}>
      <Box sx={{mt: {xs: 13, sm: 14, md: 15}}}>
        <SlideHome 
          titleSlide1={'EJC | Home Improvement Corp'}
          descriptionService1={'Somos EJC Home Improvement Corp. una empresa consolidada, con personal que cuenta con una gran trayectoria, con sede principal en el Estado de Nueva York. Nuestro enfoque se orienta a la gestión y ejecución de servicios de construcción, remodelación y reparación de infraestructuras....'}
          servicePath1={'/informacion-empresa/nosotros'}
          titleSlide2={'Vía muerta'}
          descriptionService2={'Con nuestro servicio de siding tus muros y paredes tendrán los materiales adecuados para contar con fachadas de buena calidad y estética...'}
          servicePath2={'/es/servicios/via-muerta'}
          titleSlide3={'Canalones'}
          descriptionService3={'En EJC Home Improvement Corp no solo realizamos instalaciones de canaletas para lluvia en tu casa, sino que también nos encargarnos de su mantenimiento, reparación y limpieza para alargar su durabilidad gracias a nuestros especialistas capacitados...'}
          servicePath3={'/es/servicios/canalones'}
          start={'Leer más'}
        />
      </Box>
      
      <Box sx={{py: 5}}>
        <Container>
          <ServiceSection
            serviceSectionTitle={'Servicios'}
            service1Title={'Techumbre'}
            service1Description={'La construcción y reemplazo de techos en EJC Home Improvement Corp. es una de las mejores inversiones...'}
            service1Link={'/es/servicios/techumbre'}
            service2Title={'Vía muerta'}
            service2Description={'Con nuestro servicio de siding tus muros y paredes tendrán los materiales adecuados para contar con fachadas...'}
            service2Link={'/es/servicios/via-muerta'}
            service3Title={'Canalones'}
            service3Description={'En EJC Home Improvement Corp no solo realizamos instalaciones de canaletas para lluvia en tu casa, sino...'}
            service3Link={'/es/servicios/canalones'}
            textBtn={'Visitar Página'}
          />
        </Container>
      </Box>
      
      <Box sx={{mb: -1, height: 'auto', position: 'relative'}}>
        <SectionAbout 
          aboutTitle={'Sobre Nosotros'}
          aboutSemiDescription={'Somos EJC Home Improvement Corp. una empresa consolidada, con...'}
          aboutVisitBTN={'Visitar Página'}
          aboutLinkBtn={'/es/informacion-empresa/nosotros'}
        />
      </Box>
      
      <Box sx={{py:10, backgroundColor: 'primary.dark', position:'relative'}}>
        <CalledToContact 
          calledToContactText={'Cotiza con nosotros'}
          textCalled={'¿Quieres más información de nuestros servicios? envíanos un mensaje por whatsApp'}
          textButton={'Enviar mensaje a WhatsApp'}
        />
      </Box>

      <Box sx={{mb: -1, height: 'auto', position: 'relative'}}>
        <SectionContact 
          contactTitle={'Contáctanos'}
          contactSemiDescription={'Revisa las diferentes formas de contactarnos...'}
          contactVisitBTN={'Visitar Página'}
          contactLinkBtn={'/es/informacion-empresa/contacto'}
        />
      </Box>
    </PlantillaLayoutEs>
  )
}

export default HomePage
