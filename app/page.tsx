import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10"></div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-serif text-white mb-6 tracking-tight">
            ASC Conservation Centre
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 font-light">
            Fine Arts Restoration & Conservation
          </p>
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
            Preserving cultural heritage through expert restoration and conservation of fine art, 
            paintings, sculptures, and historical artifacts.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link 
              href="/portfolio" 
              className="bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-all transform hover:scale-105"
            >
              View Our Work
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 text-slate-900">
            Our Expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-slate-200 rounded-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-2xl font-serif mb-4 text-slate-900">Painting Restoration</h3>
              <p className="text-slate-600">
                Expert restoration of oil paintings, watercolors, and mixed media artworks, 
                preserving the artist's original intent while ensuring longevity.
              </p>
            </div>
            <div className="p-8 border border-slate-200 rounded-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🗿</div>
              <h3 className="text-2xl font-serif mb-4 text-slate-900">Sculpture Conservation</h3>
              <p className="text-slate-600">
                Specialized care for sculptures in various materials including stone, bronze, 
                wood, and contemporary materials.
              </p>
            </div>
            <div className="p-8 border border-slate-200 rounded-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">📜</div>
              <h3 className="text-2xl font-serif mb-4 text-slate-900">Historical Artifacts</h3>
              <p className="text-slate-600">
                Careful preservation and restoration of historical artifacts, documents, 
                and cultural heritage items.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900">
              Featured Restorations
            </h2>
            <Link 
              href="/portfolio" 
              className="text-slate-600 hover:text-slate-900 font-semibold flex items-center gap-2"
            >
              View All <span>→</span>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group cursor-pointer">
                <div className="aspect-square bg-slate-200 rounded-lg mb-4 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-slate-300 to-slate-400 group-hover:scale-110 transition-transform duration-500"></div>
                </div>
                <h3 className="text-xl font-serif text-slate-900 mb-2">
                  Restoration Project {item}
                </h3>
                <p className="text-slate-600">
                  Click to view detailed restoration process
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Have a Restoration Project?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            We'd love to discuss how we can help preserve your valuable artwork or artifacts.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-all transform hover:scale-105"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </main>
  );
}
