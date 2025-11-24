import { PersonalInfo } from '@/types/database'
import { User } from 'lucide-react'

interface AboutProps {
  personalInfo: PersonalInfo | null
}

export default function About({ personalInfo }: AboutProps) {
  return (
    <section id="about" className="section-container bg-white dark:bg-gray-900">
      <h2 className="section-title">About Me</h2>
      <div className="max-w-3xl mx-auto">
        <div className="card">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
              <User className="text-primary-600 dark:text-primary-400" size={24} />
            </div>
            <div className="flex-1">
              {personalInfo?.bio ? (
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                  {personalInfo.bio}
                </p>
              ) : (
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Welcome to my portfolio! I&apos;m a passionate developer who loves creating
                  innovative solutions and building amazing user experiences. This space
                  showcases my journey, projects, and skills in the world of technology.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

