export default function CompanyPage() {
  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="mb-6">
            <h1 className="text-5xl font-bold text-gray-900 mb-2">ACME</h1>
            <p className="text-lg text-gray-600 tracking-wider">CORPORATION</p>
          </div>
          <h2 className="text-2xl text-gray-800 mb-4">Nuestra Empresa</h2>
          <div className="w-24 h-1 bg-gray-900 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-lg">👁️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Nuestra Visión
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Ser la empresa líder mundial en soluciones de gestión de datos,
              transformando la manera en que las organizaciones interactúan con
              su información más valiosa para el año 2030.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-lg">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Nuestra Misión
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Proporcionar tecnologías innovadoras y servicios de calidad
              excepcional que empoderen a nuestros clientes para alcanzar sus
              objetivos empresariales de manera eficiente y segura.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
            Estructura Organizacional
          </h3>
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white text-xl">👑</span>
              </div>
              <h4 className="font-semibold text-gray-900">
                Dirección Ejecutiva
              </h4>
              <p className="text-gray-600 text-sm">CEO & Fundadora</p>
            </div>

            <div className="grid md:grid-cols-4 gap-4 mt-8">
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="w-12 h-12 bg-gray-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white">💻</span>
                </div>
                <h5 className="font-medium text-gray-900 text-sm">
                  Tecnología
                </h5>
                <p className="text-gray-600 text-xs">CTO</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="w-12 h-12 bg-gray-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white">⚙️</span>
                </div>
                <h5 className="font-medium text-gray-900 text-sm">
                  Operaciones
                </h5>
                <p className="text-gray-600 text-xs">COO</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="w-12 h-12 bg-gray-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white">💼</span>
                </div>
                <h5 className="font-medium text-gray-900 text-sm">Comercial</h5>
                <p className="text-gray-600 text-xs">CCO</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="w-12 h-12 bg-gray-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white">👥</span>
                </div>
                <h5 className="font-medium text-gray-900 text-sm">
                  Recursos Humanos
                </h5>
                <p className="text-gray-600 text-xs">CHRO</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
            Certificaciones y Reconocimientos
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">
                Certificaciones
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mr-3"></span>
                  ISO 9001:2015 - Gestión de Calidad
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mr-3"></span>
                  ISO 27001:2013 - Seguridad de la Información
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mr-3"></span>
                  SOC 2 Type II - Controles de Seguridad
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mr-3"></span>
                  GDPR Compliant - Protección de Datos
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Premios</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mr-3"></span>
                  Tech Excellence Award 2023
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mr-3"></span>
                  Best Innovation in Data Management 2022
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mr-3"></span>
                  Customer Choice Award 2021
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mr-3"></span>
                  Workplace Excellence Recognition
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 text-white rounded-lg p-8 mb-8">
          <h3 className="text-xl font-semibold text-center mb-8">
            Presencia Global
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl mb-2">🏢</div>
              <h4 className="font-semibold mb-2">Sede Central</h4>
              <p className="text-gray-300 text-sm">
                San Francisco, California
                <br />
                Estados Unidos
              </p>
            </div>

            <div className="text-center">
              <div className="text-2xl mb-2">🌍</div>
              <h4 className="font-semibold mb-2">Oficinas Regionales</h4>
              <p className="text-gray-300 text-sm">
                Londres • Toronto • Sydney
                <br />
                São Paulo • Tokio
              </p>
            </div>

            <div className="text-center">
              <div className="text-2xl mb-2">☁️</div>
              <h4 className="font-semibold mb-2">Centros de Datos</h4>
              <p className="text-gray-300 text-sm">
                15 ubicaciones estratégicas
                <br />
                en 4 continentes
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
            Responsabilidad Social Corporativa
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-gray-600 text-xl">🌱</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Sostenibilidad
              </h4>
              <p className="text-gray-600 text-sm">
                Comprometidos con la neutralidad de carbono para 2030
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-gray-600 text-xl">🎓</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Educación</h4>
              <p className="text-gray-600 text-sm">
                Programas de becas y capacitación tecnológica
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-gray-600 text-xl">🤲</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Comunidad</h4>
              <p className="text-gray-600 text-sm">
                Apoyo a organizaciones sin fines de lucro locales
              </p>
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
