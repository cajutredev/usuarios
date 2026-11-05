
export default function Index() {

  return (
    <main className="space-y-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Usuarios
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Listado de usuarios registrados.
          </p>
        </div>
        <button
          className="shrink-0 rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={}
          type="button"
        >
          Agregar usuario
        </button>
      </div>
    </main>
  );
}
