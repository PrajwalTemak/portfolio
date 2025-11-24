import { Project } from '@/types/database'
import { Github, ExternalLink, ShoppingBag, CheckSquare, MessageSquare, Palette, Car, Sparkles } from 'lucide-react'

interface ProjectsProps {
  projects: Project[]
}

export default function Projects({ projects }: ProjectsProps) {
  const getProjectIcon = (index: number, title?: string) => {
    // Use specific icons based on project title
    if (title?.toLowerCase().includes('ai') || title?.toLowerCase().includes('assistant')) {
      return <MessageSquare key="ai" className="text-purple-500" size={32} />
    }
    if (title?.toLowerCase().includes('print')) {
      return <CheckSquare key="print" className="text-green-500" size={32} />
    }
    
    const icons = [
      <ShoppingBag key="shop" className="text-blue-500" size={32} />,
      <CheckSquare key="check" className="text-green-500" size={32} />,
      <MessageSquare key="message" className="text-purple-500" size={32} />,
      <Palette key="palette" className="text-pink-500" size={32} />,
    ]
    return icons[index % icons.length]
  }

  const displayProjects = projects.length > 0 ? projects : [
    {
      id: 'featured',
      title: 'Smart Traffic Systems',
      description: 'Developed a comprehensive traffic management module using YOLO v-8 for helmet detection. The system detects bikes without helmets, identifies number plates, and performs OCR to extract vehicle information. This AI-powered solution enhances road safety and traffic law enforcement.',
      technologies: ['YOLO v-8', 'Computer Vision', 'OCR', 'Python', 'OpenCV', 'Deep Learning'],
      github_url: '#',
      project_url: '#',
      isFeatured: true,
    },
    {
      id: '1',
      title: 'AI based personal assistant (CREO)',
      description: 'Developed an AI-driven chatbot using PyTorch with NLP and various automation tasks including IoT support via Arduino and HC05. Project won first place at state level project competition DIPEX.',
      technologies: ['PyTorch', 'Python', 'TensorFlow', 'NLP'],
      github_url: '#',
      project_url: '/CREO',
    },
    {
      id: '2',
      title: 'One Click Print',
      description: 'Automated document printing system, reducing manual efforts by 90%. Streamlined document management workflow.',
      technologies: ['HTML', 'JavaScript', 'PHP', 'Electron', 'Node.js'],
      github_url: '#',
      project_url: '/CREO',
    },
  ]

  // Separate featured project from others
  const featuredProject = displayProjects.find((p: any) => p.isFeatured || p.title.toLowerCase().includes('smart traffic'))
  const otherProjects = displayProjects.filter((p: any) => !p.isFeatured && !p.title.toLowerCase().includes('smart traffic')).slice(0, 3)

  return (
    <section id="projects" className="section-container bg-gradient-to-b from-white to-slate-50">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-xl text-gray-600">A showcase of my work and contributions to various projects</p>
      </div>
      
      {/* Featured Project - Full Width Highlight */}
      {featuredProject && (
        <div className="max-w-6xl mx-auto mb-12">
          <div className="group relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl shadow-2xl p-1 hover:shadow-3xl transition-all duration-500 overflow-hidden">
            {/* Animated gradient border */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 opacity-50 blur-xl animate-pulse"></div>
            
            <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-start gap-8">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <Car className="text-white" size={40} />
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <Sparkles className="w-5 h-5 text-purple-600" />
                    <span className="px-4 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-sm font-bold rounded-full border border-indigo-200">
                      Featured Project
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 group-hover:text-purple-600 transition-colors">
                    {featuredProject.title}
                  </h3>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    {featuredProject.description}
                  </p>
                  
                  {/* Technologies */}
                  {featuredProject.technologies && featuredProject.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-3 mb-6">
                      {featuredProject.technologies.map((tech: string, techIndex: number) => (
                        <span
                          key={techIndex}
                          className="px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-sm rounded-full font-semibold border-2 border-indigo-200 hover:border-indigo-400 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Links */}
                  <div className="flex gap-4">
                    {featuredProject.github_url && (
                      <a
                        href={featuredProject.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-xl transition-all duration-300 font-medium hover:scale-105 shadow-lg hover:shadow-xl"
                      >
                        <Github size={18} />
                        View Code
                      </a>
                    )}
                    <a
                      href="/smart-traffic-demo"
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl transition-all duration-300 font-medium hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      <ExternalLink size={18} />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Other Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {otherProjects.map((project, index) => (
          <div key={project.id} className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100/50">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0">
                {getProjectIcon(index, project.title)}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-purple-600 transition-colors">{project.title}</h3>
                <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
            
            {/* Technologies */}
            {project.technologies && project.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-4 py-1.5 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 text-sm rounded-full font-medium border border-indigo-100 hover:border-indigo-300 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            {/* Links */}
            <div className="flex gap-3">
              {project.github_url && (
                <a
                  href={project.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl transition-all duration-300 text-sm font-medium hover:scale-105 shadow-sm hover:shadow-md"
                >
                  <Github size={16} />
                  Code
                </a>
              )}
              {project.project_url && (
                <a
                  href={project.project_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl transition-all duration-300 text-sm font-medium hover:scale-105 shadow-md hover:shadow-lg"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
