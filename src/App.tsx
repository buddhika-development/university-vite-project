import './App.css'
import Greeting from './components/Greeting'
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import Card from './components/Card'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'
import heroImg from './assets/hero.png'
import viteV8Img from './assets/vite_v8.webp'
import communityImg from './assets/community.jpg'

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

        <div style={{ display: 'flex', gap: '20px', width: '100%', marginTop: '40px' }}>
          <Card 
            title="Vite Version 8 is Here!" 
            description="Discover the new features and performance improvements in the latest major release of Vite."
            imageUrl={viteV8Img}
            linkUrl="https://vite.dev/"
          />
          <Card 
            title="Join the Community" 
            description="Engage with other developers, ask questions, and share your projects in our GitHub discussions."
            imageUrl={communityImg}
            linkUrl="https://github.com/vitejs/vite/discussions"
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
