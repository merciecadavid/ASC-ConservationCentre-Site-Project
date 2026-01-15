import Image from 'next/image';
import Link from 'next/link';

// This will be replaced with actual data from a CMS or database
const portfolioItems = [
  {
    id: 1,
    title: '18th Century Oil Painting Restoration',
    category: 'Painting',
    year: '2024',
    description: 'Complete restoration of a damaged 18th-century oil painting, including cleaning, structural repair, and inpainting.',
    image: '/portfolio/project-1.jpg',
  },
  {
    id: 2,
    title: 'Bronze Sculpture Conservation',
    category: 'Sculpture',
    year: '2023',
    description: 'Conservation treatment of an outdoor bronze sculpture, including cleaning and protective coating.',
    image: '/portfolio/project-2.jpg',
  },
  {
    id: 3,
    title: 'Medieval Manuscript Preservation',
    category: 'Historical Artifact',
    year: '2024',
    description: 'Careful preservation and stabilization of a medieval manuscript with water damage.',
    image: '/portfolio/project-3.jpg',
  },
  {
    id: 4,
    title: 'Renaissance Fresco Restoration',
    category: 'Painting',
    year: '2023',
    description: 'On-site restoration of a Renaissance fresco in a historic church.',
    image: '/portfolio/project-4.jpg',
  },
  {
    id: 5,
    title: 'Antique Furniture Conservation',
    category: 'Furniture',
    year: '2024',
    description: 'Restoration of 17th-century wooden furniture with original gilding.',
    image: '/portfolio/project-5.jpg',
  },
  {
    id: 6,
    title: 'Contemporary Art Restoration',
    category: 'Painting',
    year: '2023',
    description: 'Restoration of a contemporary mixed-media artwork with complex materials.',
    image: '/portfolio/project-6.jpg',
  },
];

const categories = ['All', 'Painting', 'Sculpture', 'Historical Artifact', 'Furniture'];

export default function Portfolio() {
  return (
    <main className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif text-slate-900 mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl">
            Explore our collection of completed restoration and conservation projects. 
            Each piece represents our commitment to preserving cultural heritage with the highest standards of care.
          </p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 px-4 bg-white border-b border-slate-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-4 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border-2 border-slate-300 text-slate-700 hover:border-slate-900 hover:text-slate-900 transition-colors whitespace-nowrap"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <Link 
                key={item.id} 
                href={`/portfolio/${item.id}`}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/3] bg-slate-200 rounded-lg mb-4 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-slate-300 to-slate-400 group-hover:scale-110 transition-transform duration-500 flex items-center justify-center">
                    <span className="text-slate-500 text-sm">Image placeholder</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <span className="px-3 py-1 bg-slate-100 rounded-full">{item.category}</span>
                    <span>{item.year}</span>
                  </div>
                  <h3 className="text-xl font-serif text-slate-900 group-hover:text-slate-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-4">
            Interested in Our Services?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Contact us to discuss your restoration or conservation project.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-slate-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-slate-800 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
