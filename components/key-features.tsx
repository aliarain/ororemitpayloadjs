'use client'

export function KeyFeatures() {
  const features = [
    {
      title: 'Built for speed, security, and simplicity',
      description: 'Get the most out of every dollar. Oro Remit offers transparent, up-to-the-minute rates so you always know what your recipient will receive no surprises.',
      color: 'from-primary to-purple-600'
    },
    {
      title: 'Security',
      description: 'Your personal data and funds are protected with industry-standard encryption and secure processing backed by compliance regulations.',
      color: 'from-primary to-blue-600'
    },
    {
      title: 'Quick & Easy',
      description: 'Send money in just a few taps',
      color: 'from-accent to-emerald-600'
    }
  ]

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Our Key Features
          </h2>
        </div>

        <div className="space-y-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-gradient-to-r ${feature.color} rounded-3xl p-12 text-white relative overflow-hidden`}
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -mr-24 -mt-24 pointer-events-none" />
              
              <div className="relative z-10 max-w-2xl">
                <h3 className="text-3xl sm:text-4xl font-bold mb-4">{feature.title}</h3>
                <p className="text-lg opacity-90">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
