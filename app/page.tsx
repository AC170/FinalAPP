"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Check,
  Star,
  BookOpen,
  Trophy,
  Clock,
  ArrowRight,
  Menu,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Play,
  Globe,
  Target,
  Calculator,
  Microscope,
  ExternalLink,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import PreviewPage from "@/components/preview-page"

export default function HistoriaAppLanding() {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [showPreview, setShowPreview] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "¡Hola! 👋 Soy Ana, tu asistente de HistoriaApp. ¿Te gustaría conocer nuestros cursos?",
      isBot: true,
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return

    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      isBot: false,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")

    setTimeout(() => {
      const botResponse = getBotResponse(inputMessage.toLowerCase())
      const botMessage = {
        id: messages.length + 2,
        text: botResponse,
        isBot: true,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
    }, 1000)
  }

  const getBotResponse = (userInput: string) => {
    if (
      userInput.includes("curso") ||
      userInput.includes("historia") ||
      userInput.includes("matematica") ||
      userInput.includes("ciencia")
    ) {
      return "¡Excelente! 📚 Tenemos 3 cursos increíbles:\n\n🔢 **Matemática para Niños** (4-10 años)\n🏛️ **Historia** (8+ años)\n🔬 **Ciencias** (6+ años)\n\n¿Cuál te interesa más? También puedo contarte sobre precios, horarios o cómo empezar."
    }

    if (userInput.includes("niños") || userInput.includes("matematica")) {
      return "🧮 **Matemática para Niños** es perfecto para edades 4-10 años:\n\n✅ Números del 1 al 100\n✅ Sumas y restas divertidas\n✅ Formas geométricas\n✅ Juegos interactivos\n✅ Videos explicativos\n\n💰 **Precio**: Gratis para empezar, Premium $4.99/mes\n⏰ **Duración**: 5-10 min por lección\n\n¿Te gustaría probarlo gratis?"
    }

    if (userInput.includes("historia")) {
      return "🏛️ **Historia** es fascinante para edades 8+ años:\n\n✅ Civilizaciones antiguas (Egipto, Roma, Grecia)\n✅ Geografía mundial interactiva\n✅ Grandes descubrimientos\n✅ Personajes históricos\n✅ Líneas de tiempo visuales\n\n💰 **Precio**: Gratis para empezar, Premium $4.99/mes\n⏰ **Duración**: 10-15 min por lección\n\n¿Quieres conocer más detalles?"
    }

    if (userInput.includes("ciencia")) {
      return "🔬 **Ciencias** es increíble para edades 6+ años:\n\n✅ Sistema solar y planetas\n✅ Reino animal y ecosistemas\n✅ Cuerpo humano\n✅ Plantas y fotosíntesis\n✅ Experimentos virtuales seguros\n\n💰 **Precio**: Gratis para empezar, Premium $4.99/mes\n⏰ **Duración**: 8-12 min por lección\n\n¿Te interesa algún tema en particular?"
    }

    if (userInput.includes("precio") || userInput.includes("costo") || userInput.includes("plan")) {
      return "💰 **Nuestros Planes**:\n\n🆓 **BÁSICO - GRATIS**\n• 5 lecciones por día\n• 1 curso completo\n• Progreso guardado\n\n⭐ **PREMIUM - $4.99/mes**\n• Lecciones ilimitadas\n• Todos los cursos\n• Sin anuncios\n• Contenido exclusivo\n• Modo offline\n\n👨‍👩‍👧‍👦 **FAMILIAR - $9.99/mes**\n• Hasta 6 perfiles\n• Todo de Premium\n• Controles parentales\n• Reportes de progreso\n\n¿Cuál te conviene más?"
    }

    if (userInput.includes("instagram") || userInput.includes("insta")) {
      return "📸 **¡Síguenos en Instagram!**\n\n🔗 **@eduapp_oficial**\n📱 https://instagram.com/eduapp_oficial\n\n📅 **Contenido diario**:\n• Tips educativos\n• Datos curiosos\n• Retos matemáticos\n• Historias fascinantes\n• Experimentos caseros\n• Sorteos y premios\n\n💬 **Escríbenos por DM** para:\n• Crear tu cuenta gratis\n• Resolver dudas\n• Soporte técnico\n• Sugerencias\n\n¡Te esperamos! 🎉"
    }

    if (userInput.includes("tiktok") || userInput.includes("tik tok")) {
      return "🎵 **¡Estamos en TikTok!**\n\n🔗 **@eduapp_kids**\n📱 https://tiktok.com/@eduapp_kids\n\n🎬 **Contenido viral**:\n• Datos históricos sorprendentes\n• Trucos matemáticos\n• Experimentos rápidos\n• Challenges educativos\n• Bailes con números\n• Historia en 60 segundos\n\n💬 **Comenta nuestros videos** para:\n• Pedir temas específicos\n• Participar en challenges\n• Ganar acceso premium\n\n¡Síguenos para aprender bailando! 💃🕺"
    }

    if (userInput.includes("whatsapp") || userInput.includes("whats")) {
      return "📱 **WhatsApp - Soporte Directo**\n\n🔗 **+1 (555) 123-4567**\n📱 https://wa.me/15551234567\n\n⚡ **Respuesta inmediata para**:\n• Crear cuenta gratis\n• Problemas técnicos\n• Dudas sobre cursos\n• Cambiar de plan\n• Recuperar contraseña\n• Soporte familiar\n\n🕐 **Horarios de atención**:\n• Lunes a Viernes: 8am - 8pm\n• Sábados: 9am - 5pm\n• Domingos: 10am - 3pm\n\n💬 **Escríbenos ahora**: '¡Hola! Quiero información sobre EduApp'"
    }

    if (userInput.includes("horario") || userInput.includes("tiempo") || userInput.includes("cuando")) {
      return "⏰ **Horarios Flexibles**:\n\n🌅 **Mañana** (8am - 12pm)\n• Matemáticas (mejor concentración)\n• Ciencias (experimentos)\n\n🌞 **Tarde** (2pm - 6pm)\n• Historia (cuentos y aventuras)\n• Repaso general\n\n🌙 **Noche** (7pm - 9pm)\n• Actividades relajantes\n• Lectura de historias\n\n📱 **¡Tú decides!** La app está disponible 24/7\n⏱️ **Recomendado**: 15-30 min diarios\n🎯 **Meta**: Constancia > Intensidad"
    }

    if (userInput.includes("edad") || userInput.includes("años") || userInput.includes("niño")) {
      return "👶 **Edades Recomendadas**:\n\n🔢 **Matemática para Niños**: 4-10 años\n• Preescolar: Números y formas\n• Primaria: Sumas, restas, multiplicación\n\n🏛️ **Historia**: 8+ años\n• Primaria: Civilizaciones básicas\n• Secundaria: Historia completa\n\n🔬 **Ciencias**: 6+ años\n• Inicial: Animales y plantas\n• Avanzado: Sistema solar y cuerpo humano\n\n👨‍👩‍👧‍👦 **Plan Familiar**: Perfecto para hermanos de diferentes edades\n\n¿Qué edad tiene tu pequeño/a?"
    }

    if (userInput.includes("gratis") || userInput.includes("free") || userInput.includes("empezar")) {
      return "🎉 **¡Empezar es GRATIS!**\n\n📱 **3 formas de crear tu cuenta**:\n\n1️⃣ **WhatsApp** (Más rápido)\n📱 https://wa.me/15551234567\n💬 Mensaje: 'Quiero cuenta gratis'\n\n2️⃣ **Instagram** (Más visual)\n📸 @eduapp_oficial\n💬 DM: 'Cuenta gratis por favor'\n\n3️⃣ **TikTok** (Más divertido)\n🎵 @eduapp_kids\n💬 Comenta: 'Quiero cuenta' en cualquier video\n\n⚡ **En menos de 2 minutos tendrás**:\n✅ Acceso inmediato\n✅ 5 lecciones gratis diarias\n✅ 1 curso completo\n✅ Sin tarjeta de crédito\n\n¿Por cuál prefieres empezar?"
    }

    if (userInput.includes("contacto") || userInput.includes("contactar") || userInput.includes("ayuda")) {
      return "📞 **Contáctanos - Estamos aquí para ti**:\n\n📱 **WhatsApp**: +1 (555) 123-4567\n📸 **Instagram**: @eduapp_oficial\n🎵 **TikTok**: @eduapp_kids\n📧 **Email**: hola@eduapp.com\n\n🆘 **Soporte Urgente**:\n• Problemas técnicos\n• Cuenta bloqueada\n• Pagos y facturación\n\n💬 **Consultas Generales**:\n• Información de cursos\n• Sugerencias\n• Colaboraciones\n\n🎯 **Respuesta garantizada en menos de 2 horas**\n\n¿En qué podemos ayudarte específicamente?"
    }

    if (userInput.includes("descuento") || userInput.includes("oferta") || userInput.includes("promocion")) {
      return "🎁 **¡OFERTAS ESPECIALES!**\n\n🔥 **PROMOCIÓN ACTUAL**:\n• 50% OFF primer mes Premium\n• Solo $2.49 en lugar de $4.99\n• Código: APRENDE50\n\n🎯 **Ofertas por Redes Sociales**:\n\n📸 **Instagram**: Sorteo mensual de 1 año gratis\n🎵 **TikTok**: Challenges con premios\n📱 **WhatsApp**: Descuentos exclusivos\n\n👨‍👩‍👧‍👦 **Plan Familiar**:\n• 3 meses gratis al pagar anual\n• $99/año (normalmente $119.88)\n\n⏰ **¡Ofertas limitadas!** ¿Te interesa alguna?"
    }

    return "🤖 **¡Hola! Soy Ana, tu asistente educativa**\n\nPuedo ayudarte con:\n\n📚 **Cursos**: Matemática, Historia, Ciencias\n💰 **Precios**: Planes y ofertas\n📱 **Redes**: Instagram, TikTok, WhatsApp\n⏰ **Horarios**: Cuándo y cómo estudiar\n👶 **Edades**: Qué curso es mejor\n🎁 **Ofertas**: Descuentos actuales\n📞 **Contacto**: Todas las formas de comunicarnos\n\n¿Qué te gustaría saber? 😊"
  }

  if (showPreview) {
    return <PreviewPage onClose={() => setShowPreview(false)} />
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header estilo Apple */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/80">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              EduApp
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#caracteristicas"
              className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors"
            >
              Características
            </Link>
            <Link
              href="#testimonios"
              className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors"
            >
              Testimonios
            </Link>
            <Link href="#precios" className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors">
              Precios
            </Link>
            <Link
              href="#contacto"
              className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contacto
            </Link>
          </nav>

          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              className="hidden md:inline-flex font-semibold rounded-full px-6"
              onClick={() => setShowLoginModal(true)}
            >
              Iniciar Sesión
            </Button>
            <Button
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-full px-6 shadow-lg"
              onClick={() => setShowPreview(true)}
            >
              Prueba Gratis
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden rounded-full">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section estilo Apple */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 rounded-full px-4 py-2 font-semibold">
                  🚀 Nuevo: 3 Cursos Disponibles
                </Badge>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                  Aprende
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                    Jugando
                  </span>
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                  La forma más divertida de aprender matemáticas, historia y ciencias. Lecciones interactivas diseñadas
                  para niños y jóvenes.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold text-lg px-8 py-4 rounded-2xl shadow-xl transform hover:scale-105 transition-all"
                  onClick={() => setShowPreview(true)}
                >
                  Comenzar Gratis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-4 rounded-2xl border-2 font-semibold hover:bg-gray-50 bg-transparent"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Ver Demo
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="font-medium">Gratis para siempre</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="font-medium">Sin anuncios</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="font-medium">A tu ritmo</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur-3xl opacity-20"></div>
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="EduApp Interface"
                width={800}
                height={600}
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100 rounded-full px-4 py-2 font-semibold">
              Cursos
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Elige tu aventura de aprendizaje</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tres cursos diseñados especialmente para diferentes edades y intereses
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 rounded-3xl overflow-hidden">
              <CardHeader className="pb-4">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center mb-4 shadow-lg">
                  <Calculator className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Matemática para Niños</CardTitle>
                <CardDescription className="text-gray-600">
                  Números, sumas, formas y más. Perfecto para edades 4-10 años.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Números del 1 al 100</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Sumas y restas básicas</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Formas geométricas</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Juegos interactivos</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 rounded-3xl overflow-hidden">
              <CardHeader className="pb-4">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 flex items-center justify-center mb-4 shadow-lg">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Historia</CardTitle>
                <CardDescription className="text-gray-600">
                  Civilizaciones, geografía y descubrimientos fascinantes.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Civilizaciones antiguas</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Geografía mundial</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Grandes descubrimientos</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Líneas de tiempo</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 rounded-3xl overflow-hidden">
              <CardHeader className="pb-4">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center mb-4 shadow-lg">
                  <Microscope className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Ciencias</CardTitle>
                <CardDescription className="text-gray-600">
                  Explora el universo, la naturaleza y el cuerpo humano.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Sistema solar</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Reino animal</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Cuerpo humano</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Experimentos virtuales</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section estilo Duolingo */}
      <section id="caracteristicas" className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100 rounded-full px-4 py-2 font-semibold">
              Características
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Aprende como nunca antes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Metodología probada que combina gamificación y tecnología educativa
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 rounded-3xl">
              <CardHeader>
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mb-4 shadow-lg">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Lecciones Interactivas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Lecciones de 5-10 minutos con juegos y actividades que hacen el aprendizaje adictivo.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 rounded-3xl">
              <CardHeader>
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center mb-4 shadow-lg">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Sistema de Logros</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Gana medallas, desbloquea contenido y compite con amigos mientras aprendes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 rounded-3xl">
              <CardHeader>
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center mb-4 shadow-lg">
                  <Play className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Videos Educativos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Videos explicativos cortos y entretenidos para cada tema y lección.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 rounded-3xl">
              <CardHeader>
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center mb-4 shadow-lg">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">A Tu Ritmo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Aprende cuando quieras, donde quieras. Sin presión, solo diversión.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="py-20 md:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-green-100 text-green-700 hover:bg-green-100 rounded-full px-4 py-2 font-semibold">
              Testimonios
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Lo que dicen las familias</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Miles de niños y padres ya están disfrutando del aprendizaje
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-0 shadow-xl rounded-3xl">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    alt="María González"
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold">María González</h4>
                    <p className="text-sm text-gray-600">Madre de Sofía (7 años)</p>
                  </div>
                </div>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "Mi hija ahora ama las matemáticas. Antes lloraba con las tareas, ahora me pide jugar más lecciones.
                  ¡Increíble!"
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl rounded-3xl">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    alt="Carlos Ruiz"
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold">Carlos Ruiz</h4>
                    <p className="text-sm text-gray-600">Profesor de Primaria</p>
                  </div>
                </div>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "Uso EduApp en mi clase. Los niños están más motivados y aprenden más rápido. Es una herramienta
                  fantástica."
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl rounded-3xl">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    alt="Ana Martínez"
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold">Ana Martínez</h4>
                    <p className="text-sm text-gray-600">Madre de gemelos (9 años)</p>
                  </div>
                </div>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "Mis hijos compiten sanamente entre ellos. Ahora saben más de historia que yo. ¡Es genial!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section estilo Apple */}
      <section id="precios" className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 rounded-full px-4 py-2 font-semibold">
              Precios
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Elige tu plan de aprendizaje</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comienza gratis y desbloquea todo el potencial cuando estés listo
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            <Card className="border-2 hover:border-blue-200 transition-all duration-300 rounded-3xl shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Básico</CardTitle>
                <CardDescription>Perfecto para comenzar la aventura</CardDescription>
                <div className="mt-4">
                  <span className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                    Gratis
                  </span>
                  <span className="text-gray-600">/siempre</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>5 lecciones por día</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>1 curso completo</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Logros básicos</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Progreso guardado</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full rounded-2xl font-semibold py-3 bg-transparent"
                  variant="outline"
                  onClick={() => setShowPreview(true)}
                >
                  Comenzar Gratis
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-2 border-blue-500 relative hover:border-blue-600 transition-all duration-300 rounded-3xl shadow-2xl transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-500 text-white px-4 py-2 rounded-full font-semibold">Más Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Premium</CardTitle>
                <CardDescription>Para estudiantes serios</CardDescription>
                <div className="mt-4">
                  <span className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    $4.99
                  </span>
                  <span className="text-gray-600">/mes</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Lecciones ilimitadas</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Todos los cursos</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Contenido exclusivo</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Sin anuncios</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Modo offline</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-2xl py-3 shadow-lg"
                  onClick={() => setShowPreview(true)}
                >
                  Comenzar Premium
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-2 hover:border-purple-200 transition-all duration-300 rounded-3xl shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Familiar</CardTitle>
                <CardDescription>Perfecto para toda la familia</CardDescription>
                <div className="mt-4">
                  <span className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    $9.99
                  </span>
                  <span className="text-gray-600">/mes</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Hasta 6 perfiles</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Todo de Premium</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Controles parentales</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Reportes de progreso</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Competencias familiares</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full rounded-2xl font-semibold py-3 bg-transparent"
                  variant="outline"
                  onClick={() => setShowPreview(true)}
                >
                  Plan Familiar
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">¿Listo para la aventura?</h2>
            <p className="text-xl text-blue-100 leading-relaxed">
              Únete a miles de familias que ya están disfrutando del aprendizaje. Comienza tu aventura educativa hoy
              mismo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold text-lg px-8 py-4 rounded-2xl shadow-xl transform hover:scale-105 transition-all"
                onClick={() => setShowPreview(true)}
              >
                Comenzar Gratis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold text-lg px-8 py-4 rounded-2xl bg-transparent border-2"
              >
                <Play className="mr-2 h-5 w-5" />
                Ver Demo
              </Button>
            </div>
            <p className="text-sm text-blue-100">
              Gratis para siempre • Sin tarjeta de crédito • Cancela cuando quieras
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="bg-gray-900 text-white py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold">EduApp</span>
              </div>
              <p className="text-gray-400 max-w-xs">
                La forma más divertida de aprender matemáticas, historia y ciencias.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Mail className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Cursos</h4>
              <div className="space-y-2">
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Matemática para Niños
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Historia
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Ciencias
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Para Educadores
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Empresa</h4>
              <div className="space-y-2">
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Acerca de
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Carreras
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Prensa
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Soporte</h4>
              <div className="space-y-2">
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Centro de Ayuda
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Comunidad
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Contacto
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Estado del Servicio
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} EduApp. Todos los derechos reservados.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Política de Privacidad
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Términos de Servicio
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-md shadow-2xl border-0 rounded-3xl">
            <CardHeader className="text-center pb-6">
              <div className="flex justify-between items-center mb-4">
                <div></div>
                <Button variant="ghost" size="icon" onClick={() => setShowLoginModal(false)} className="rounded-full">
                  ✕
                </Button>
              </div>
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold">Iniciar Sesión</CardTitle>
              <p className="text-gray-600">Elige tu forma favorita de acceder</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center space-y-4">
                <p className="text-gray-700 font-medium">🚀 **Acceso rápido y seguro**</p>

                <div className="space-y-3">
                  <Button
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 rounded-2xl flex items-center justify-center space-x-3 shadow-lg transform hover:scale-105 transition-all"
                    onClick={() =>
                      window.open(
                        "https://wa.me/15551234567?text=Hola,%20quiero%20iniciar%20sesión%20en%20EduApp",
                        "_blank",
                      )
                    }
                  >
                    <span className="text-xl">📱</span>
                    <span>Iniciar con WhatsApp</span>
                    <ExternalLink className="h-4 w-4" />
                  </Button>

                  <Button
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-4 rounded-2xl flex items-center justify-center space-x-3 shadow-lg transform hover:scale-105 transition-all"
                    onClick={() => window.open("https://instagram.com/eduapp_oficial", "_blank")}
                  >
                    <span className="text-xl">📸</span>
                    <span>Iniciar con Instagram</span>
                    <ExternalLink className="h-4 w-4" />
                  </Button>

                  <Button
                    className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-4 rounded-2xl flex items-center justify-center space-x-3 shadow-lg transform hover:scale-105 transition-all"
                    onClick={() => window.open("https://tiktok.com/@eduapp_kids", "_blank")}
                  >
                    <span className="text-xl">🎵</span>
                    <span>Iniciar con TikTok</span>
                    <ExternalLink className="h-4 w-4" />
                  </Button>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">o</span>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full border-2 font-semibold py-4 rounded-2xl flex items-center justify-center space-x-3 bg-transparent hover:bg-gray-50 transform hover:scale-105 transition-all"
                    onClick={() => setIsChatOpen(true)}
                  >
                    <span className="text-xl">💬</span>
                    <span>Hablar con Ana (Asistente)</span>
                  </Button>
                </div>

                <div className="pt-4 border-t">
                  <p className="text-sm text-gray-500 leading-relaxed">
                    🔒 **Seguro y privado**
                    <br />⚡ **Acceso en menos de 30 segundos**
                    <br />🎁 **Cuenta gratis incluida**
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Chatbox */}
      {isChatOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md h-[600px] flex flex-col">
            {/* Header del Chat */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-t-3xl flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <BookOpen className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Ana - EduApp</h3>
                  <p className="text-xs text-blue-100">Asistente Virtual</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsChatOpen(false)}
                className="text-white hover:bg-white hover:bg-opacity-20 rounded-full"
              >
                ✕
              </Button>
            </div>

            {/* Mensajes */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}>
                  <div
                    className={`max-w-[80%] p-4 rounded-2xl ${
                      message.isBot
                        ? "bg-gray-100 text-gray-800"
                        : "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    <p className={`text-xs mt-2 ${message.isBot ? "text-gray-500" : "text-blue-100"}`}>
                      {message.timestamp.toLocaleTimeString("es-ES", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Input de mensaje */}
            <div className="p-6 border-t">
              <div className="flex space-x-3">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Escribe tu pregunta..."
                  className="flex-1 p-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Button
                  onClick={handleSendMessage}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-2xl px-6 font-semibold"
                >
                  Enviar
                </Button>
              </div>

              {/* Sugerencias rápidas */}
              <div className="flex flex-wrap gap-2 mt-4">
                <button
                  onClick={() => setInputMessage("¿Qué cursos tienen?")}
                  className="text-xs bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full transition-colors font-medium"
                >
                  📚 Cursos
                </button>
                <button
                  onClick={() => setInputMessage("Instagram")}
                  className="text-xs bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full transition-colors font-medium"
                >
                  📸 Instagram
                </button>
                <button
                  onClick={() => setInputMessage("TikTok")}
                  className="text-xs bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full transition-colors font-medium"
                >
                  🎵 TikTok
                </button>
                <button
                  onClick={() => setInputMessage("WhatsApp")}
                  className="text-xs bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full transition-colors font-medium"
                >
                  📱 WhatsApp
                </button>
                <button
                  onClick={() => setInputMessage("Precios")}
                  className="text-xs bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full transition-colors font-medium"
                >
                  💰 Precios
                </button>
                <button
                  onClick={() => setInputMessage("Empezar gratis")}
                  className="text-xs bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full transition-colors font-medium"
                >
                  🎁 Gratis
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
