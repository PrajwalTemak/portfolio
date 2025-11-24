import { Education as EducationType } from '@/types/database'
import { GraduationCap } from 'lucide-react'

interface EducationProps {
  education: EducationType[]
}

export default function Education({ education }: EducationProps) {
  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'Present'
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
    })
  }

  return (
    <section id="education" className="section-container bg-gradient-to-b from-white to-slate-50">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">Education</h2>
        <p className="text-xl text-gray-600">My academic journey and qualifications</p>
      </div>
      <div className="max-w-4xl mx-auto space-y-6">
        {education.length > 0 ? (
          education.map((edu) => (
            <div key={edu.id} className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100/50">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <GraduationCap className="text-indigo-600" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-purple-600 transition-colors">{edu.degree}</h3>
                  <p className="text-indigo-600 font-semibold mb-2">{edu.institution}</p>
                  {edu.field_of_study && (
                    <p className="text-gray-600 mb-2">{edu.field_of_study}</p>
                  )}
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-3">
                    <span>
                      {formatDate(edu.start_date)} - {formatDate(edu.end_date)}
                    </span>
                    {edu.grade && (
                      <span className="font-semibold text-indigo-600">
                        {edu.degree.toLowerCase().includes('bachelor') || edu.degree.toLowerCase().includes('technology') ? 'CGPA' : 'Percentage'}: {edu.grade}
                      </span>
                    )}
                  </div>
                  {edu.description && (
                    <p className="text-gray-700">{edu.description}</p>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <>
            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100/50">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <GraduationCap className="text-indigo-600" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-purple-600 transition-colors">B.E. in Computer Engineering</h3>
                  <p className="text-indigo-600 font-semibold mb-2">Government College of Engineering & Research Avsari</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-3">
                    <span>2023 - 2026</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100/50">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <GraduationCap className="text-indigo-600" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-purple-600 transition-colors">Diploma in Information Technology</h3>
                  <p className="text-indigo-600 font-semibold mb-2">Government Polytechnic, Pune</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-3">
                    <span>2020 - 2023</span>
                    <span className="font-semibold text-indigo-600">Percentage: 93.67%</span>
                  </div>
                  <p className="text-gray-700">Second rank holder</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
