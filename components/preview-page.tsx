"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Play,
  CheckCircle,
  XCircle,
  Calculator,
  Globe,
  Trophy,
  Star,
  Volume2,
  ArrowRight,
  Microscope,
} from "lucide-react"

interface PreviewPageProps {
  onClose: () => void
}

export default function PreviewPage({ onClose }: PreviewPageProps) {
  const [selectedCourse, setSelectedCourse] = useState<"matematica-ninos" | "historia" | "ciencias">("matematica-ninos")
  const [currentGame, setCurrentGame] = useState(0)
  const [score, setScore] = useState(0)
  const [gameCompleted, setGameCompleted] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [showResult, setShowResult] = useState(false)

  const courses = {
    "matematica-ninos": {
      name: "Matemática para Niños",
      color: "from-green-400 to-blue-500",
      bgColor: "bg-gradient-to-br from-green-50 to-blue-50",
      icon: Calculator,
    },
    historia: {
      name: "Historia",
      color: "from-amber-400 to-orange-500",
      bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
      icon: Globe,
    },
    ciencias: {
      name: "Ciencias",
      color: "from-purple-400 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
      icon: Microscope,
    },
  }

  const games = {
    "matematica-ninos": [
      {
        id: 1,
        title: "Números del 1 al 10",
        videoPlaceholder: "/placeholder.svg?height=200&width=300",
        question: "¿Cuántas manzanas hay?",
        options: ["3", "4", "5", "6"],
        correct: "4",
        explanation: "¡Muy bien! Hay 4 manzanas. Puedes contarlas una por una: 1, 2, 3, 4.",
      },
      {
        id: 2,
        title: "Sumas Fáciles",
        videoPlaceholder: "/placeholder.svg?height=200&width=300",
        question: "¿Cuánto es 2 + 3?",
        options: ["4", "5", "6", "7"],
        correct: "5",
        explanation: "¡Excelente! 2 + 3 = 5. Puedes usar tus dedos para contar.",
      },
      {
        id: 3,
        title: "Formas Geométricas",
        videoPlaceholder: "/placeholder.svg?height=200&width=300",
        question: "¿Qué forma tiene una pelota?",
        options: ["Cuadrado", "Triángulo", "Círculo", "Rectángulo"],
        correct: "Círculo",
        explanation: "¡Correcto! Una pelota tiene forma de círculo porque es redonda.",
      },
      {
        id: 4,
        title: "Restas Simples",
        videoPlaceholder: "/placeholder.svg?height=200&width=300",
        question: "Si tienes 5 caramelos y comes 2, ¿cuántos te quedan?",
        options: ["2", "3", "4", "5"],
        correct: "3",
        explanation: "¡Muy bien! 5 - 2 = 3. Te quedan 3 caramelos para después.",
      },
      {
        id: 5,
        title: "Comparar Números",
        videoPlaceholder: "/placeholder.svg?height=200&width=300",
        question: "¿Cuál número es mayor: 7 o 4?",
        options: ["7", "4", "Son iguales", "No sé"],
        correct: "7",
        explanation: "¡Perfecto! 7 es mayor que 4. Puedes contarlo con tus dedos.",
      },
    ],
    historia: [
      {
        id: 1,
        title: "Geografía de Europa",
        videoPlaceholder: "/placeholder.svg?height=200&width=300",
        question: "¿Cuál es la capital de Francia?",
        options: ["Londres", "París", "Madrid", "Roma"],
        correct: "París",
        explanation: "París es la capital y ciudad más poblada de Francia, famosa por la Torre Eiffel.",
      },
      {
        id: 2,
        title: "Imperio Romano",
        videoPlaceholder: "/placeholder.svg?height=200&width=300",
        question: "¿Quién fue el primer emperador romano?",
        options: ["Julio César", "Augusto", "Nerón", "Marco Aurelio"],
        correct: "Augusto",
        explanation: "Augusto fue el primer emperador romano, gobernó desde el 27 a.C.",
      },
      {
        id: 3,
        title: "Edad Media",
        videoPlaceholder: "/placeholder.svg?height=200&width=300",
        question: "¿Cómo se llamaban los guerreros medievales?",
        options: ["Soldados", "Caballeros", "Vikingos", "Gladiadores"],
        correct: "Caballeros",
        explanation: "Los caballeros eran guerreros nobles que luchaban a caballo en la Edad Media.",
      },
      {
        id: 4,
        title: "Descubrimientos",
        videoPlaceholder: "/placeholder.svg?height=200&width=300",
        question: "¿Quién descubrió América?",
        options: ["Cristóbal Colón", "Marco Polo", "Vasco da Gama", "Fernando Magallanes"],
        correct: "Cristóbal Colón",
        explanation: "Cristóbal Colón llegó a América en 1492, aunque buscaba una ruta a Asia.",
      },
      {
        id: 5,
        title: "Civilizaciones Antiguas",
        videoPlaceholder: "/placeholder.svg?height=200&width=300",
        question: "¿Dónde se construyeron las pirámides más famosas?",
        options: ["México", "Egipto", "China", "Perú"],
        correct: "Egipto",
        explanation: "Las pirámides de Giza en Egipto son las más famosas del mundo antiguo.",
      },
    ],
    ciencias: [
      {
        id: 1,
        title: "El Sistema Solar",
        videoPlaceholder: "/placeholder.svg?height=200&width=300",
        question: "¿Cuál es el planeta más cercano al Sol?",
        options: ["Venus", "Tierra", "Mercurio", "Marte"],
        correct: "Mercurio",
        explanation: "Mercurio es el planeta más cercano al Sol y también el más pequeño.",
      },
      {
        id: 2,
        title: "Los Animales",
        videoPlaceholder: "/placeholder.svg?height=200&width=300",
        question: "¿Qué animal es el rey de la selva?",
        options: ["Tigre", "León", "Elefante", "Gorila"],
        correct: "León",
        explanation: "El león es conocido como el rey de la selva por su fuerza y majestuosidad.",
      },
      {
        id: 3,
        title: "El Cuerpo Humano",
        videoPlaceholder: "/placeholder.svg?height=200&width=300",
        question: "¿Cuántos huesos tiene el cuerpo humano adulto?",
        options: ["156", "206", "256", "306"],
        correct: "206",
        explanation: "El cuerpo humano adulto tiene 206 huesos que forman nuestro esqueleto.",
      },
      {
        id: 4,
        title: "Las Plantas",
        videoPlaceholder: "/placeholder.svg?height=200&width=300",
        question: "¿Qué necesitan las plantas para hacer fotosíntesis?",
        options: ["Solo agua", "Solo luz", "Luz y agua", "Solo tierra"],
        correct: "Luz y agua",
        explanation: "Las plantas necesitan luz solar, agua y dióxido de carbono para la fotosíntesis.",
      },
      {
        id: 5,
        title: "El Clima",
        videoPlaceholder: "/placeholder.svg?height=200&width=300",
        question: "¿Cómo se forma la lluvia?",
        options: ["Las nubes lloran", "El agua se evapora y condensa", "Los ríos suben", "El viento trae agua"],
        correct: "El agua se evapora y condensa",
        explanation: "La lluvia se forma cuando el agua se evapora, sube a las nubes y se condensa.",
      },
    ],
  }

  const currentCourse = courses[selectedCourse]
  const currentGameData = games[selectedCourse][currentGame]

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer)
    setShowResult(true)

    if (answer === currentGameData.correct) {
      setScore(score + 1)
    }

    setTimeout(() => {
      if (currentGame < 4) {
        setCurrentGame(currentGame + 1)
        setSelectedAnswer(null)
        setShowResult(false)
      } else {
        setGameCompleted(true)
      }
    }, 2500)
  }

  const resetGame = () => {
    setCurrentGame(0)
    setScore(0)
    setGameCompleted(false)
    setSelectedAnswer(null)
    setShowResult(false)
  }

  if (gameCompleted) {
    return (
      <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
        <div className={`min-h-screen ${currentCourse.bgColor} flex items-center justify-center p-4`}>
          <Card className="w-full max-w-2xl shadow-2xl border-0">
            <CardHeader className="text-center pb-8">
              <div
                className={`mx-auto w-24 h-24 bg-gradient-to-r ${currentCourse.color} rounded-full flex items-center justify-center mb-6 shadow-lg`}
              >
                <Trophy className="h-12 w-12 text-white" />
              </div>
              <CardTitle className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                ¡Increíble!
              </CardTitle>
              <p className="text-xl text-gray-600 mt-2">Completaste {currentCourse.name}</p>
            </CardHeader>
            <CardContent className="text-center space-y-8">
              <div className={`bg-gradient-to-r ${currentCourse.color} bg-opacity-10 rounded-2xl p-8`}>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Tu Puntuación</h3>
                <div className="text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-4">
                  {score}/5
                </div>
                <div className="flex justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-8 w-8 ${i < score ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-xl text-gray-700 font-medium">
                  {score === 5
                    ? "¡Perfecto! Eres un genio 🧠"
                    : score >= 3
                      ? "¡Muy bien! Sigue así 👏"
                      : "¡Buen intento! Practica más 💪"}
                </p>
                <p className="text-gray-600 text-lg">
                  Esto es solo una pequeña muestra. La versión completa tiene cientos de lecciones interactivas.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  size="lg"
                  className={`bg-gradient-to-r ${currentCourse.color} hover:opacity-90 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg transform hover:scale-105 transition-all`}
                >
                  Comenzar Curso Completo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={resetGame}
                  className="px-8 py-4 rounded-2xl border-2 font-semibold hover:bg-gray-50 bg-transparent"
                >
                  Jugar de Nuevo
                </Button>
                <Button size="lg" variant="ghost" onClick={onClose} className="px-8 py-4 rounded-2xl font-semibold">
                  Volver al Inicio
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
      {/* Header estilo Apple/Duolingo */}
      <div className={`bg-gradient-to-r ${currentCourse.color} text-white p-6 shadow-lg`}>
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-white hover:bg-white/20 rounded-full p-2"
            >
              <ArrowLeft className="h-6 w-6" />
            </Button>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <currentCourse.icon className="h-6 w-6" />
              </div>
              <div>
                <span className="text-2xl font-bold">{currentCourse.name}</span>
                <p className="text-white/80 text-sm">Lección {currentGame + 1} de 5</p>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="text-right">
              <div className="text-sm text-white/80">Puntuación</div>
              <div className="text-2xl font-bold">{score}/5</div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Selection estilo Duolingo */}
      <div className="bg-white border-b-2 border-gray-100 p-4 sticky top-0 z-10">
        <div className="container mx-auto">
          <div className="flex justify-center space-x-3">
            {Object.entries(courses).map(([key, course]) => {
              const CourseIcon = course.icon
              return (
                <Button
                  key={key}
                  variant={selectedCourse === key ? "default" : "outline"}
                  onClick={() => {
                    setSelectedCourse(key as any)
                    resetGame()
                  }}
                  className={`${
                    selectedCourse === key
                      ? `bg-gradient-to-r ${course.color} text-white shadow-lg`
                      : "border-2 hover:bg-gray-50"
                  } px-6 py-3 rounded-2xl font-semibold transition-all transform hover:scale-105`}
                >
                  <CourseIcon className="mr-2 h-5 w-5" />
                  {course.name}
                </Button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Game Content estilo Apple */}
      <div className={`${currentCourse.bgColor} min-h-screen p-6`}>
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Video Section */}
            <div className="space-y-6">
              <Card className="shadow-xl border-0 rounded-3xl overflow-hidden">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center space-x-3 text-2xl">
                    <div
                      className={`w-8 h-8 bg-gradient-to-r ${currentCourse.color} rounded-full flex items-center justify-center`}
                    >
                      <Play className="h-4 w-4 text-white" />
                    </div>
                    <span>{currentGameData.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-inner">
                    <img
                      src={currentGameData.videoPlaceholder || "/placeholder.svg"}
                      alt="Video explicativo"
                      className="w-full h-56 object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                      <Button
                        size="lg"
                        className="rounded-full w-16 h-16 bg-white/90 hover:bg-white text-gray-900 shadow-2xl"
                      >
                        <Play className="h-8 w-8" />
                      </Button>
                    </div>
                  </div>
                  <div
                    className={`mt-6 p-4 bg-gradient-to-r ${currentCourse.color} bg-opacity-10 rounded-2xl border-l-4 border-gradient-to-b ${currentCourse.color}`}
                  >
                    <p className="text-gray-700 font-medium flex items-center">
                      <Volume2 className="inline h-5 w-5 mr-2" />
                      Aquí pondrás tu video explicativo sobre {currentGameData.title.toLowerCase()}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Question Section estilo Duolingo */}
            <div className="space-y-6">
              <Card className="shadow-xl border-0 rounded-3xl">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline" className="px-4 py-2 text-sm font-semibold rounded-full border-2">
                      Pregunta {currentGame + 1} de 5
                    </Badge>
                    <div className="flex-1 ml-4">
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className={`bg-gradient-to-r ${currentCourse.color} h-3 rounded-full transition-all duration-500 shadow-sm`}
                          style={{ width: `${((currentGame + 1) / 5) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-8">
                  <h3 className="text-2xl font-bold text-gray-800 leading-relaxed">{currentGameData.question}</h3>

                  <div className="grid gap-4">
                    {currentGameData.options.map((option, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className={`p-6 h-auto text-left justify-start transition-all duration-300 rounded-2xl border-2 font-semibold text-lg ${
                          selectedAnswer === option
                            ? option === currentGameData.correct
                              ? "bg-green-50 border-green-400 text-green-700 shadow-lg"
                              : "bg-red-50 border-red-400 text-red-700 shadow-lg"
                            : showResult && option === currentGameData.correct
                              ? "bg-green-50 border-green-400 text-green-700 shadow-lg"
                              : "hover:bg-gray-50 hover:border-gray-300 hover:shadow-md transform hover:scale-102"
                        }`}
                        onClick={() => !showResult && handleAnswerSelect(option)}
                        disabled={showResult}
                      >
                        <div className="flex items-center space-x-4 w-full">
                          <div
                            className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-sm font-bold ${
                              selectedAnswer === option
                                ? option === currentGameData.correct
                                  ? "border-green-400 bg-green-100 text-green-700"
                                  : "border-red-400 bg-red-100 text-red-700"
                                : showResult && option === currentGameData.correct
                                  ? "border-green-400 bg-green-100 text-green-700"
                                  : "border-gray-400"
                            }`}
                          >
                            {String.fromCharCode(65 + index)}
                          </div>
                          <span className="flex-1">{option}</span>
                          {showResult && option === currentGameData.correct && (
                            <CheckCircle className="h-6 w-6 text-green-600" />
                          )}
                          {showResult && selectedAnswer === option && option !== currentGameData.correct && (
                            <XCircle className="h-6 w-6 text-red-600" />
                          )}
                        </div>
                      </Button>
                    ))}
                  </div>

                  {showResult && (
                    <div className="mt-6 p-6 bg-blue-50 rounded-2xl border-l-4 border-blue-400 shadow-inner">
                      <h4 className="font-bold text-blue-800 mb-3 text-lg flex items-center">
                        <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center mr-2">
                          <span className="text-white text-xs">💡</span>
                        </div>
                        Explicación:
                      </h4>
                      <p className="text-blue-700 text-lg leading-relaxed">{currentGameData.explanation}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Progress Indicators estilo Apple */}
          <div className="mt-12 flex justify-center space-x-3">
            {games[selectedCourse].map((_, index) => (
              <div
                key={index}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index < currentGame
                    ? "bg-green-500 shadow-lg"
                    : index === currentGame
                      ? `bg-gradient-to-r ${currentCourse.color} shadow-lg`
                      : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
