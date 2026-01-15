import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-serif mb-4">ASC Conservation Centre</h3>
            <p className="text-slate-400 text-sm">
              Expert fine arts restoration and conservation services, preserving cultural heritage for future generations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/portfolio" className="text-slate-400 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="/current-works" className="text-slate-400 hover:text-white transition-colors">Current Works</Link></li>
              <li><Link href="/articles" className="text-slate-400 hover:text-white transition-colors">Articles</Link></li>
              <li><Link href="/contact" className="text-slate-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Painting Restoration</li>
              <li>Sculpture Conservation</li>
              <li>Historical Artifacts</li>
              <li>Consultation Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Email: info@ascconservation.com</li>
              <li>Phone: +356 XXXX XXXX</li>
              <li>Malta</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} ASC Conservation Centre. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
