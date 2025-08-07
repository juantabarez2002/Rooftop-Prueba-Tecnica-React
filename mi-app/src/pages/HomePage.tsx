import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="mb-6">
            <h1 className="text-5xl font-bold text-gray-900 mb-2">ACME</h1>
            <p className="text-lg text-gray-600 tracking-wider">CORPORATION</p>
          </div>

          <h2 className="text-2xl text-gray-800 mb-4">
            Bienvenido a nuestro Sistema de Gestión
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Administra y gestiona usuarios de manera eficiente con nuestras
            herramientas corporativas. Accede a toda la información que
            necesitas desde un solo lugar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Link
            to="/usuarios"
            className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow group"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Gestión de Usuarios
                </h3>
                <p className="text-gray-600 text-sm">
                  Consulta, busca y administra todos los usuarios del sistema
                </p>
              </div>
              <div className="text-gray-400 group-hover:text-gray-600 transition-colors">
                →
              </div>
            </div>
          </Link>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-500 mb-2">
                  Reportes
                </h3>
                <p className="text-gray-400 text-sm">Próximamente disponible</p>
              </div>
              <div className="text-gray-300">→</div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Acerca de ACME Corporation
          </h3>

          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Nuestra Misión</h4>
              <p className="text-gray-600">
                Proporcionar soluciones tecnológicas innovadoras que
                simplifiquen la gestión empresarial.
              </p>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-2">Servicios</h4>
              <ul className="text-gray-600 space-y-1">
                <li>• Gestión de usuarios</li>
                <li>• Administración de datos</li>
                <li>• Reportes y análisis</li>
                <li>• Soporte técnico</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-2">Contacto</h4>
              <div className="text-gray-600 space-y-1">
                <p>📧 info@acmecorp.com</p>
                <p>📞 +1 (555) 123-4567</p>
                <p>🌐 www.acmecorp.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            © 2024 ACME Corporation. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </div>
  );
}
