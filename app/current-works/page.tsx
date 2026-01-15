// Sample current works data
const currentWorks = [
  {
    id: 1,
    title: 'Baroque Altarpiece Restoration',
    location: 'St. John\'s Co-Cathedral, Valletta',
    startDate: 'January 2026',
    status: 'In Progress',
    progress: 65,
    description: 'Comprehensive restoration of a 17th-century baroque altarpiece, including structural stabilization, cleaning, and gold leaf restoration.',
    updates: [
      { date: '2026-01-10', note: 'Completed initial cleaning phase' },
      { date: '2026-01-05', note: 'Structural assessment completed' },
    ],
  },
  {
    id: 2,
    title: 'Maritime Museum Collection Conservation',
    location: 'Malta Maritime Museum',
    startDate: 'December 2025',
    status: 'In Progress',
    progress: 40,
    description: 'Conservation treatment of multiple maritime artifacts including ship models, navigational instruments, and historical documents.',
    updates: [
      { date: '2026-01-08', note: 'Ship model restoration ongoing' },
      { date: '2025-12-20', note: 'Initial condition assessment completed' },
    ],
  },
  {
    id: 3,
    title: 'Contemporary Sculpture Maintenance',
    location: 'Private Collection',
    startDate: 'January 2026',
    status: 'Starting Soon',
    progress: 10,
    description: 'Preventive conservation and maintenance of a contemporary outdoor sculpture installation.',
    updates: [
      { date: '2026-01-12', note: 'Site visit and documentation completed' },
    ],
  },
];

export default function CurrentWorks() {
  return (
    <main className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif text-slate-900 mb-6">
            Current Works
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl">
            Follow our ongoing restoration and conservation projects. 
            We believe in transparency and sharing our process with the community.
          </p>
        </div>
      </section>

      {/* Current Projects */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          {currentWorks.map((work) => (
            <div key={work.id} className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="grid lg:grid-cols-3 gap-8 p-8">
                {/* Project Image */}
                <div className="lg:col-span-1">
                  <div className="aspect-square bg-slate-200 rounded-lg overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-slate-300 to-slate-400 flex items-center justify-center">
                      <span className="text-slate-500 text-sm">Project Image</span>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <div className="flex items-start justify-between mb-2">
                      <h2 className="text-3xl font-serif text-slate-900">
                        {work.title}
                      </h2>
                      <span className={`px-4 py-1 rounded-full text-sm font-semibold ${
                        work.status === 'In Progress' 
                          ? 'bg-blue-100 text-blue-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {work.status}
                      </span>
                    </div>
                    <p className="text-slate-600 mb-2">📍 {work.location}</p>
                    <p className="text-slate-500 text-sm">Started: {work.startDate}</p>
                  </div>

                  <p className="text-slate-700 leading-relaxed">
                    {work.description}
                  </p>

                  {/* Progress Bar */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-slate-700">Progress</span>
                      <span className="text-sm font-semibold text-slate-900">{work.progress}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                      <div 
                        className="bg-slate-900 h-full rounded-full transition-all duration-500"
                        style={{ width: `${work.progress}%` }}
                      />
                    </div>
                  </div>

                  {/* Recent Updates */}
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">Recent Updates</h3>
                    <div className="space-y-3">
                      {work.updates.map((update, index) => (
                        <div key={index} className="flex gap-4 text-sm">
                          <span className="text-slate-500 whitespace-nowrap">
                            {new Date(update.date).toLocaleDateString('en-GB', { 
                              day: 'numeric', 
                              month: 'short', 
                              year: 'numeric' 
                            })}
                          </span>
                          <span className="text-slate-700">{update.note}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            We're always excited to take on new restoration and conservation challenges.
          </p>
          <a 
            href="/contact"
            className="inline-block bg-slate-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-slate-800 transition-colors"
          >
            Discuss Your Project
          </a>
        </div>
      </section>
    </main>
  );
}
