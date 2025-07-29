import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Zap, ExternalLink, Github, Globe, Users } from "lucide-react";
import Link from "next/link";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="space-y-12">
          {/* FeynmanAI Project */}
          <Card className="overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Zap className="w-6 h-6 text-emerald-600" />
                    FeynmanAI
                  </CardTitle>
                  <Badge className="bg-emerald-100 text-emerald-800">🏆 Published on PyPI</Badge>
                </div>
                <CardDescription className="text-lg mb-4">Command-line RAG Tool</CardDescription>
                <p className="text-gray-600 mb-6">
                  Robust command-line tool leveraging Retrieval-Augmented Generation for document interaction with
                  multi-format support (PDF, TXT, PPT, DOCX) and text-to-speech functionality. Features interactive
                  query system and quiz mode for knowledge reinforcement.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">RAG</Badge>
                  <Badge variant="outline">PyPI</Badge>
                  <Badge variant="outline">NLP</Badge>
                  <Badge variant="outline">CLI</Badge>
                </div>
                <div className="flex gap-3">
                  <Button asChild>
                    <Link href="https://pypi.org/project/feynmanai/" target="_blank">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View on PyPI
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="https://github.com/Oscar066" target="_blank">
                      <Github className="w-4 h-4 mr-2" />
                      Source Code
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="bg-gray-900 p-8 flex flex-col justify-center">
                <div className="bg-black rounded-lg p-4 font-mono text-sm text-green-400 overflow-x-auto">
                  <div className="mb-2 text-gray-500"># Install FeynmanAI</div>
                  <div className="mb-4">$ pip install feynmanai</div>
                  <div className="mb-2 text-gray-500"># Interactive document query</div>
                  <div className="mb-2">$ feynman --file document.pdf</div>
                  <div className="mb-2 text-blue-400">Loading document...</div>
                  <div className="mb-2 text-yellow-400">Ready for queries!</div>
                  <div className="mb-2">Query: What is machine learning?</div>
                  <div className="text-white">🤖 Machine learning is a subset of AI...</div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-white">5+</div>
                    <div className="text-sm text-gray-300">File Formats</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-white">1K+</div>
                    <div className="text-sm text-gray-300">Downloads</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* CubeSat Project */}
          <Card className="overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="order-2 lg:order-1 bg-gradient-to-br from-blue-900 to-purple-900 p-8">
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <img
                      src="/placeholder.svg?height=200&width=300"
                      alt="CubeSat in orbit"
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <div className="text-white text-sm">CubeSat Image Classification in Orbit</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-lg p-4">
                      <img
                        src="/placeholder.svg?height=100&width=150"
                        alt="CNN Architecture"
                        className="w-full h-20 object-cover rounded mb-2"
                      />
                      <div className="text-white text-xs">CNN Architecture</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <img
                        src="/placeholder.svg?height=100&width=150"
                        alt="Model Optimization"
                        className="w-full h-20 object-cover rounded mb-2"
                      />
                      <div className="text-white text-xs">Model Optimization</div>
                    </div>
                  </div>
                  <div className="bg-emerald-500/20 rounded-lg p-4 border border-emerald-400/30">
                    <div className="text-emerald-300 text-lg font-bold">0.03 MB</div>
                    <div className="text-emerald-200 text-sm">Final Model Size</div>
                    <div className="text-emerald-100 text-xs mt-1">99.7% size reduction achieved</div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 p-8">
                <div className="flex items-center justify-between mb-4">
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Globe className="w-6 h-6 text-emerald-600" />
                    CubeSat Image Classification
                  </CardTitle>
                  <Badge className="bg-yellow-100 text-yellow-800">🥇 1st Place Winner</Badge>
                </div>
                <CardDescription className="text-lg mb-4">Space Technology Innovation</CardDescription>
                <p className="text-gray-600 mb-6">
                  Ultra-compact ML model for satellite image classification under extreme bandwidth constraints.
                  Developed Sequential CNN with depthwise separable convolutions, achieving 0.03 MB model size through
                  advanced optimization techniques including TensorFlow TMOT pruning and quantization.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Model Accuracy</span>
                    <span className="font-semibold">94.2%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-emerald-600 h-2 rounded-full" style={{ width: "94.2%" }}></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Size Reduction</span>
                    <span className="font-semibold">99.7%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: "99.7%" }}></div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="outline">TensorFlow</Badge>
                  <Badge variant="outline">CNN</Badge>
                  <Badge variant="outline">Model Optimization</Badge>
                  <Badge variant="outline">Space Tech</Badge>
                </div>
                <div className="flex gap-3">
                  <Button asChild>
                    <Link href="https://github.com/Oscar066" target="_blank">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Link>
                  </Button>
                  <Button variant="outline">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Pata Mchumba Project */}
          <Card className="overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Users className="w-6 h-6 text-emerald-600" />
                    Pata Mchumba
                  </CardTitle>
                  <Badge className="bg-pink-100 text-pink-800">💝 Social Impact</Badge>
                </div>
                <CardDescription className="text-lg mb-4">Dating Recommender System</CardDescription>
                <p className="text-gray-600 mb-6">
                  Advanced hybrid recommender system moving beyond superficial matching to language-based
                  compatibility. Integrated matching functions with sigmoid similarity algorithms for sophisticated
                  user pairing, collaborating with Kenyan dating company to enhance user experience.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                    <span className="text-sm">Language-based compatibility matching</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm">Sigmoid similarity algorithms</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-sm">Real-time recommendation engine</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span className="text-sm">User behavior analytics</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">Machine Learning</Badge>
                  <Badge variant="outline">Recommendation Systems</Badge>
                  <Badge variant="outline">NLP</Badge>
                </div>
                <div className="flex gap-3">
                  <Button asChild>
                    <Link href="https://github.com/Oscar066" target="_blank">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Link>
                  </Button>
                  <Button variant="outline">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Case Study
                  </Button>
                </div>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-8">
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <img
                      src="/placeholder.svg?height=150&width=250"
                      alt="Dating App Interface"
                      className="w-full h-32 object-cover rounded-lg mb-3"
                    />
                    <div className="text-sm text-gray-600">Matching Algorithm Visualization</div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                      <div className="text-xl font-bold text-pink-600">87%</div>
                      <div className="text-xs text-gray-600">Match Accuracy</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                      <div className="text-xl font-bold text-purple-600">2.3x</div>
                      <div className="text-xs text-gray-600">Engagement Boost</div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-sm font-medium mb-2">Algorithm Performance</div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span>Language Similarity</span>
                        <span>92%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1">
                        <div className="bg-pink-500 h-1 rounded-full" style={{ width: "92%" }}></div>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span>Interest Matching</span>
                        <span>85%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1">
                        <div className="bg-purple-500 h-1 rounded-full" style={{ width: "85%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Additional Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <Card className="group hover:shadow-lg transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src="/placeholder.svg?height=200&width=300"
                  alt="Healthcare Chatbot"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-green-100 text-green-800">Healthcare AI</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <CardTitle className="mb-2">Nishauri Health Chatbot</CardTitle>
                <CardDescription className="mb-4">
                  AI-powered chatbot for people living with AIDS, deployed across WhatsApp, Telegram, and web.
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-xs">
                    NLP
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Healthcare
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Multi-platform
                  </Badge>
                </div>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Details
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src="/placeholder.svg?height=200&width=300"
                  alt="Rubik's Cube RL"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-blue-100 text-blue-800">Reinforcement Learning</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <CardTitle className="mb-2">Rubik's Cube Solver</CardTitle>
                <CardDescription className="mb-4">
                  Reinforcement Learning agent using PPO algorithm to solve Rubik's Cube for Zindi Africa Hackathon.
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-xs">
                    PPO
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    TensorFlow
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    RL
                  </Badge>
                </div>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  <Github className="w-4 h-4 mr-2" />
                  Source Code
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src="/placeholder.svg?height=200&width=300"
                  alt="Data Visualization"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-purple-100 text-purple-800">Data Science</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <CardTitle className="mb-2">Interactive Data Dashboards</CardTitle>
                <CardDescription className="mb-4">
                  Collection of interactive dashboards built with Tableau and Power BI for various business insights.
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-xs">
                    Tableau
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Power BI
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Analytics
                  </Badge>
                </div>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Gallery
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
} 