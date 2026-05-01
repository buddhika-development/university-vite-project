import './App.css'
import Greeting from './components/Greeting'
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import Card from './components/Card'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'
import heroImg from './assets/hero.png'

function App() {
  return (
    <>
      <NavBar />
      <div style={{ paddingTop: '80px', paddingBottom: '20px', maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
        <Greeting />
        
        <Banner 
          message="Welcome to our new platform! Sign up today." 
          ctaText="Get Started" 
          ctaLink="https://vite.dev/guide/"
          backgroundImage={heroImg}
        />

        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '40px' }}>
          <Card 
            title="Premium Plan" 
            description="Access all our premium features and get priority support."
            imageUrl="https://placehold.co/400x200?text=Premium+Plan"
          />
          <Card 
            title="Basic Plan" 
            description="Perfect for individuals just getting started with our platform."
            imageUrl="https://placehold.co/400x200?text=Basic+Plan"
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
          <Testimonial 
            quote="This service completely transformed the way I manage my projects. Highly recommended!"
            authorName="Jane Doe"
            authorPhotoUrl="https://placehold.co/100x100?text=JD"
          />
        </div>

      </div>
      <Footer />
    </>
  )
}

export default App
