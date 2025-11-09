import Navbar from './components/Navbar'
import NewHero from './components/NewHero'
import PlatformOverview from './components/PlatformOverview'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <NewHero />
        <PlatformOverview />
      </main>
      <Footer />
    </div>
  )
}

export default App
