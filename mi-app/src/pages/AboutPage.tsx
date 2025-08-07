export default function AboutPage() {
  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="mb-6">
            <h1 className="text-5xl font-bold text-gray-900 mb-2">ACME</h1>
            <p className="text-lg text-gray-600 tracking-wider">CORPORATION</p>
          </div>
          <h2 className="text-2xl text-gray-800 mb-4">Sobre Nosotros</h2>
          <div className="w-24 h-1 bg-gray-900 mx-auto"></div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
          <div className="flex items-start space-x-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl font-bold">A</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Nuestra Historia
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Fundada en 1987, ACME Corporation nació con la visión de
                revolucionar la gestión empresarial a través de la tecnología.
                Lo que comenzó como una pequeña empresa de consultoría
                tecnológica, se ha convertido en líder mundial en soluciones de
                gestión de datos y usuarios.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Durante más de tres décadas, hemos ayudado a empresas de todos
                los tamaños a optimizar sus procesos, mejorar la eficiencia y
                tomar decisiones basadas en datos confiables.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 text-xl">🎯</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Precisión
            </h3>
            <p className="text-gray-600 text-sm">
              Cada dato cuenta. Nos enfocamos en la exactitud y confiabilidad en
              cada proceso que desarrollamos.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-green-600 text-xl">🚀</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Innovación
            </h3>
            <p className="text-gray-600 text-sm">
              Constantemente evolucionamos nuestras tecnologías para estar a la
              vanguardia del sector.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-purple-600 text-xl">🤝</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Confianza
            </h3>
            <p className="text-gray-600 text-sm">
              Construimos relaciones duraderas basadas en la transparencia y el
              compromiso con nuestros clientes.
            </p>
          </div>
        </div>

        <div className="bg-gray-900 text-white rounded-lg p-8 mb-8">
          <h3 className="text-xl font-semibold text-center mb-8">
            ACME en Números
          </h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">37+</div>
              <div className="text-gray-300 text-sm">Años de Experiencia</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">500K+</div>
              <div className="text-gray-300 text-sm">Usuarios Gestionados</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">150+</div>
              <div className="text-gray-300 text-sm">Empresas Clientes</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">99.9%</div>
              <div className="text-gray-300 text-sm">Tiempo de Actividad</div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
            Nuestro Equipo Directivo
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-600 text-2xl">👤</span>
              </div>
              <h4 className="font-semibold text-gray-900">Sarah Johnson</h4>
              <p className="text-gray-600 text-sm">CEO & Fundadora</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-600 text-2xl">👤</span>
              </div>
              <h4 className="font-semibold text-gray-900">Michael Chen</h4>
              <p className="text-gray-600 text-sm">CTO</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-600 text-2xl">👤</span>
              </div>
              <h4 className="font-semibold text-gray-900">Ana Rodriguez</h4>
              <p className="text-gray-600 text-sm">Directora de Operaciones</p>
            </div>
          </div>
        </div>

        <div className="text-center pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            © 2024 ACME Corporation. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </div>
  );
}
