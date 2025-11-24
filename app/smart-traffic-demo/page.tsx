'use client'

import { useState } from 'react'
import { ArrowLeft, Car, Shield, Camera, FileText, Code, Play, Pause, Download, Github, ExternalLink, Sparkles, Zap, Eye } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function SmartTrafficDemoPage() {
  const [isPlaying, setIsPlaying] = useState(false)

  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Helmet Detection',
      description: 'First detects bikes, then checks for helmet presence. If helmet not found, proceeds to number plate OCR'
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: 'Number Plate Detection',
      description: 'Automated identification and extraction of vehicle number plates from images'
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'OCR Processing',
      description: 'Optical Character Recognition to extract text from number plates for vehicle identification'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Real-time Processing',
      description: 'Fast and efficient processing pipeline for live traffic monitoring'
    }
  ]

  const technologies = [
    'YOLO v-8',
    'Computer Vision',
    'OCR (Optical Character Recognition)',
    'Python',
    'OpenCV',
    'Deep Learning',
    'TensorFlow/PyTorch',
    'Image Processing'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl shadow-sm border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/#projects" 
              className="flex items-center gap-2 text-gray-700 hover:text-purple-600 transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to Portfolio</span>
            </Link>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-purple-600" />
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Smart Traffic Systems
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm mb-6">
              <Car className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-semibold text-gray-700">AI-Powered Traffic Management</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
              <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Smart Traffic Systems
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Advanced AI solution for automated helmet detection, number plate recognition, and traffic violation monitoring using YOLO v-8 and OCR technology
            </p>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Demo
            </h2>
            <p className="text-xl text-gray-600">System output and detection results</p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Demo Container */}
            <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl shadow-2xl p-1 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 opacity-50 blur-xl animate-pulse"></div>
              
              <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12">
                {/* System Output Display */}
                <div className="space-y-6">
                  {/* Console Output */}
                  <div className="bg-gray-900 rounded-2xl p-6 font-mono text-sm overflow-x-auto">
                    <div className="text-green-400 mb-2">$ python smart_traffic_system.py</div>
                    <div className="space-y-1 text-gray-300">
                      <div className="text-cyan-400">→ Step 1: Detecting vehicles...</div>
                      <div className="text-yellow-400">✓ Motorcycle detected (640x352, 1039.5ms)</div>
                      <div className="text-gray-400">Speed: 3.7ms preprocess, 1039.5ms inference, 0.9ms postprocess per image at shape (1, 3, 640, 352)</div>
                      <div className="text-blue-400">&lt;class &lsquo;ultralytics.engine.results.Boxes&rsquo;&gt;</div>
                      <div className="text-cyan-400 mt-2">→ Step 2: Checking for helmet...</div>
                      <div className="text-purple-400">Class: 1</div>
                      <div className="text-red-400 font-semibold">⚠ Helmet not found</div>
                      <div className="text-gray-500 mt-4">---</div>
                      <div className="text-yellow-400">0: 640x384 1 Without Helmet, 1042.3ms</div>
                      <div className="text-gray-400">Speed: 4.2ms preprocess, 1042.3ms inference, 1.1ms postprocess per image at shape (1, 3, 640, 384)</div>
                      <div className="text-red-400 font-semibold">⚠ Helmet not present - Proceeding to OCR</div>
                      <div className="text-cyan-400 mt-2">→ Step 3: Number plate detection and OCR...</div>
                      <div className="text-green-400 mt-2">✓ Number plate detected: EL95US9</div>
                      <div className="text-cyan-400">→ OCR Processing completed</div>
                    </div>
                  </div>

                  {/* Detection Images */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Detected Head */}
                    <div className="bg-gray-100 rounded-xl p-4 border-2 border-red-300">
                      <div className="text-xs font-semibold text-red-600 mb-2 uppercase tracking-wide">Detected Head</div>
                      <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                        <Image
                          src="/smart-traffic-demo/head-detection.jpg"
                          alt="Detected head"
                          width={200}
                          height={200}
                          className="w-full h-full object-cover"
                          unoptimized
                        />
                      </div>
                      <div className="mt-2 text-xs text-gray-600">Confidence: 0.95</div>
                    </div>

                    {/* Motorcycle View */}
                    <div className="bg-gray-100 rounded-xl p-4 border-2 border-yellow-300">
                      <div className="text-xs font-semibold text-yellow-600 mb-2 uppercase tracking-wide">Motorcycle Detection</div>
                      <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                        <Image
                          src="/smart-traffic-demo/motorcycle.jpg"
                          alt="Motorcycle detection"
                          width={200}
                          height={200}
                          className="w-full h-full object-cover"
                          unoptimized
                        />
                      </div>
                      <div className="mt-2 text-xs text-gray-600">Plate: EL95US9</div>
                    </div>

                    {/* Number Plate OCR */}
                    <div className="bg-gray-100 rounded-xl p-4 border-2 border-blue-300">
                      <div className="text-xs font-semibold text-blue-600 mb-2 uppercase tracking-wide">Number Plate OCR</div>
                      <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                        <Image
                          src="/smart-traffic-demo/number-plate.jpg"
                          alt="Number plate OCR"
                          width={200}
                          height={200}
                          className="w-full h-full object-cover"
                          unoptimized
                        />
                      </div>
                      <div className="mt-2 text-xs text-gray-600">Extracted: EL95US9</div>
                    </div>
                  </div>

                  {/* Detection Summary */}
                  <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 border-2 border-red-200">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Shield className="w-6 h-6 text-red-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-2">Detection Summary</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                            <span className="text-gray-700"><strong>Status:</strong> Helmet violation detected</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                            <span className="text-gray-700"><strong>Vehicle:</strong> Motorcycle detected</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            <span className="text-gray-700"><strong>Number Plate:</strong> EL95US9 (OCR extracted)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            <span className="text-gray-700"><strong>Processing Time:</strong> ~1040ms per frame</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* System Info */}
                <div className="mt-6 p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Code className="w-5 h-5 text-indigo-600" />
                    <span className="font-semibold text-indigo-900">System Information</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <div className="text-gray-600">Platform</div>
                      <div className="font-semibold text-gray-900">Raspberry Pi</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Model</div>
                      <div className="font-semibold text-gray-900">YOLO v-8</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Resolution</div>
                      <div className="font-semibold text-gray-900">640x352/384</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Inference</div>
                      <div className="font-semibold text-gray-900">~1040ms</div>
                    </div>
                  </div>
                </div>

                {/* Demo Controls */}
                <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl transition-all duration-300 font-medium hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                    {isPlaying ? 'Stop' : 'Start Demo'}
                  </button>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-200 hover:border-indigo-500 text-gray-700 hover:text-indigo-600 rounded-xl transition-all duration-300 font-medium hover:scale-105 shadow-md hover:shadow-lg"
                  >
                    <Github size={20} />
                    View Source Code
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-200 hover:border-purple-500 text-gray-700 hover:text-purple-600 rounded-xl transition-all duration-300 font-medium hover:scale-105 shadow-md hover:shadow-lg"
                  >
                    <Download size={20} />
                    Download Report
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Key Features
            </h2>
            <p className="text-xl text-gray-600">Advanced capabilities powered by AI and computer vision</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100/50"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-indigo-600">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-purple-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Technologies Used
            </h2>
            <p className="text-xl text-gray-600">Built with cutting-edge AI and computer vision technologies</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-4 justify-center">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-6 py-3 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 text-lg rounded-full font-semibold border-2 border-indigo-200 hover:border-indigo-400 hover:from-indigo-100 hover:to-purple-100 transition-all duration-300 hover:scale-105"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Interested in This Project?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Check out the code, explore more projects, or get in touch
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 rounded-xl transition-all duration-300 font-semibold hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              <Github size={20} />
              View on GitHub
            </a>
            <Link
              href="/#projects"
              className="flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl transition-all duration-300 font-semibold hover:bg-white/20 hover:scale-105"
            >
              <Eye size={20} />
              More Projects
            </Link>
            <Link
              href="/#contact"
              className="flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl transition-all duration-300 font-semibold hover:bg-white/20 hover:scale-105"
            >
              <Code size={20} />
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/" className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent hover:from-indigo-300 hover:to-purple-300 transition-all">
            Back to Portfolio
          </Link>
        </div>
      </footer>
    </div>
  )
}

