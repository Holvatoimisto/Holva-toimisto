import { Routes, Route } from 'react-router'
import { HelmetProvider } from 'react-helmet-async'
import { ModalProvider, useModal } from './context/ModalContext'
import Navbar from './components/Navbar'
import CTAModal from './components/CTAModal'
import Home from './pages/Home'
import Meista from './pages/Meista'
import CaseEsimerkit from './pages/CaseEsimerkit'
import Prosessi from './pages/Prosessi'
import Contact from './pages/Contact'

export default function App() {
  return (
    <HelmetProvider>
      <ModalProvider>
        <div className="min-h-[100dvh]" style={{ backgroundColor: 'var(--bg-primary)' }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/meista" element={<Meista />} />
            <Route path="/case-esimerkit" element={<CaseEsimerkit />} />
            <Route path="/prosessi" element={<Prosessi />} />
            <Route path="/ota-yhteytta" element={<Contact />} />
          </Routes>
          <GlobalModal />
        </div>
      </ModalProvider>
    </HelmetProvider>
  )
}

function GlobalModal() {
  const { open, closeModal } = useModal()
  return <CTAModal open={open} onClose={closeModal} />
}
