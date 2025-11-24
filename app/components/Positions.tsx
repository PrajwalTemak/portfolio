import { Position } from '@/types/database'
import { Users, Code, BookOpen, GraduationCap } from 'lucide-react'

interface PositionsProps {
  positions: Position[]
}

export default function Positions({ positions }: PositionsProps) {
  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'Present'
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
    })
  }

  const getIcon = (index: number) => {
    const icons = [
      <Users key="users" className="text-blue-400" size={24} />,
      <Code key="code" className="text-blue-400" size={24} />,
      <BookOpen key="book" className="text-blue-400" size={24} />,
      <GraduationCap key="grad" className="text-blue-400" size={24} />,
    ]
    return icons[index % icons.length]
  }

  const defaultPositions = [
    {
      id: '1',
      title: 'IoT and DSA Head',
      organization: 'ERC Club at Geoera',
      start_date: null,
      end_date: null,
      current: true,
      description: 'Leading IoT and Data Structures & Algorithms initiatives at the ERC club.',
      achievements: [],
    },
    {
      id: '2',
      title: 'E-Yantra Alumni',
      organization: 'Government Polytechnic, Pune',
      start_date: null,
      end_date: null,
      current: false,
      description: 'Alumni of the prestigious E-Yantra program at Government Polytechnic, Pune.',
      achievements: [],
    },
  ]

  const displayPositions = positions.length > 0 ? positions : defaultPositions

  return (
    <section id="leadership" className="section-container bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">Positions of Responsibility</h2>
        <p className="text-gray-600">Leadership roles and community contributions</p>
      </div>
      <div className="max-w-4xl mx-auto space-y-6">
        {displayPositions.map((position, index) => (
          <div key={position.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                {getIcon(index)}
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{position.title}</h3>
                  <span className="text-sm text-gray-500">
                    {formatDate(position.start_date)} - {position.current ? 'Present' : formatDate(position.end_date)}
                  </span>
                </div>
                <p className="text-teal-600 font-semibold mb-3">{position.organization}</p>
                {position.description && (
                  <p className="text-gray-700 mb-4">{position.description}</p>
                )}
                {position.achievements && position.achievements.length > 0 && (
                  <div className="mt-4">
                    <h4 className="font-semibold mb-2 text-gray-900">Key Achievements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {position.achievements.map((achievement, achIndex) => (
                        <li key={achIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
