import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import SolutionsPage from './pages/solutions';
import ProductsPage from './pages/products';
import AICapabilitiesPage from './pages/ai-capabilities';
import NewsPage from './pages/news';
import NewsDetailPage from './pages/news/[id]';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/ai-capabilities" element={<AICapabilitiesPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:id" element={<NewsDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}