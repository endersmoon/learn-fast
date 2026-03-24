import { Routes, Route } from 'react-router-dom'
import Home from './screens/Home'
import Onboarding from './screens/Onboarding'
import Search from './screens/Search'
import VideoPlayer from './screens/VideoPlayer'
import Paywall from './screens/Paywall'
import Collection from './screens/Collection'
import Landing from './screens/Landing'
import NotFound from './screens/NotFound'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="/search" element={<Search />} />
      <Route path="/video/:id" element={<VideoPlayer />} />
      <Route path="/paywall" element={<Paywall />} />
      <Route path="/collection" element={<Collection />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
