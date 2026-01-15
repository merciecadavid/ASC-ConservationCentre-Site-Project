import Link from 'next/link';

// Sample articles data
const articles = [
  {
    id: 1,
    title: 'The Art and Science of Painting Conservation',
    excerpt: 'Exploring the delicate balance between preserving historical integrity and ensuring longevity in oil painting restoration.',
    author: 'Dr. Amy Sciberras',
    date: '2024-12-15',
    category: 'Conservation Techniques',
    readTime: '8 min read',
    image: '/articles/article-1.jpg',
  },
  {
    id: 2,
    title: 'Understanding Baroque Gilding Techniques',
    excerpt: 'A deep dive into the traditional methods of gold leaf application used in baroque altarpieces and how we preserve them today.',
    author: 'Dr. Amy Sciberras',
    date: '2024-11-20',
    category: 'Historical Techniques',
    readTime: '10 min read',
    image: '/articles/article-2.jpg',
  },
  {
    id: 3,
    title: 'Climate Control in Art Conservation',
    excerpt: 'The critical role of environmental monitoring and control in preventing deterioration of fine art and historical artifacts.',
    author: 'Conservation Team',
    date: '2024-10-10',
    category: 'Preventive Conservation',
    readTime: '6 min read',
    image: '/articles/article-3.jpg',
  },
  {
    id: 4,
    title: 'Restoring Malta\'s Cultural Heritage',
    excerpt: 'Our ongoing commitment to preserving Malta\'s rich artistic and cultural heritage through expert conservation practices.',
    author: 'Dr. Amy Sciberras',
    date: '2024-09-05',
    category: 'Case Studies',
    readTime: '12 min read',
    image: '/articles/article-4.jpg',
  },
  {
    id: 5,
    title: 'Modern Materials in Contemporary Art Conservation',
    excerpt: 'Addressing the unique challenges of conserving contemporary artworks made with non-traditional materials.',
    author: 'Conservation Team',
    date: '2024-08-18',
    category: 'Contemporary Conservation',
    readTime: '7 min read',
    image: '/articles/article-5.jpg',
  },
  {
    id: 6,
    title: 'The Ethics of Art Restoration',
    excerpt: 'Examining the ethical considerations and decision-making processes involved in restoration work.',
    author: 'Dr. Amy Sciberras',
    date: '2024-07-22',
    category: 'Professional Practice',
    readTime: '9 min read',
    image: '/articles/article-6.jpg',
  },
];

const categories = ['All', 'Conservation Techniques', 'Historical Techniques', 'Preventive Conservation', 'Case Studies', 'Contemporary Conservation', 'Professional Practice'];

export default function Articles() {
  return (
    <main className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif text-slate-900 mb-6">
            Articles & Insights
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl">
            Explore our published articles, research, and insights into the world of fine arts conservation. 
            We share our knowledge and expertise with the conservation community and art enthusiasts.
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

      {/* Featured Article */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-50 rounded-lg overflow-hidden grid lg:grid-cols-2 gap-8">
            <div className="aspect-video lg:aspect-auto bg-slate-200">
              <div className="w-full h-full bg-gradient-to-br from-slate-300 to-slate-400 flex items-center justify-center">
                <span className="text-slate-500">Featured Article Image</span>
              </div>
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <span className="text-sm font-semibold text-slate-600 mb-2">FEATURED ARTICLE</span>
              <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-4">
                {articles[0].title}
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {articles[0].excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                <span>{articles[0].author}</span>
                <span>•</span>
                <span>{new Date(articles[0].date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                <span>•</span>
                <span>{articles[0].readTime}</span>
              </div>
              <Link 
                href={`/articles/${articles[0].id}`}
                className="inline-block bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors w-fit"
              >
                Read Article
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif text-slate-900 mb-8">Recent Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(1).map((article) => (
              <Link 
                key={article.id}
                href={`/articles/${article.id}`}
                className="group"
              >
                <article className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="aspect-video bg-slate-200">
                    <div className="w-full h-full bg-gradient-to-br from-slate-300 to-slate-400 group-hover:scale-110 transition-transform duration-500 flex items-center justify-center">
                      <span className="text-slate-500 text-sm">Article Image</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
                      {article.category}
                    </span>
                    <h3 className="text-xl font-serif text-slate-900 mt-2 mb-3 group-hover:text-slate-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-slate-500">
                      <span>{article.author}</span>
                      <span>•</span>
                      <span>{new Date(article.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Subscribe to our newsletter to receive the latest articles and conservation insights.
          </p>
          <form className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg text-slate-900 outline-none"
              required
            />
            <button
              type="submit"
              className="bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
