
import NavMenuTable from "../NavMenuTable";
import type { User, UserListItem } from "../../types";
import type { UseMutationResult } from "@tanstack/react-query";

type ListUserProps = {
  users?: UserListItem[];
  isError: boolean;
  isLoading: boolean;
  pageNumber: number;
  totalPages: number;
  deleteMutation: UseMutationResult<void, Error, number | undefined, unknown>
  setSelectedUserId: React.Dispatch<React.SetStateAction<number | undefined>>
  setIsCreateModalOpen: React.Dispatch<React.SetStateAction<boolean>>
};

export default function ListUser({}) {

  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        
          <p className="px-6 py-8 text-center text-sm text-gray-600">
            Cargando usuarios...
          </p>
        
          <p className="px-6 py-8 text-center text-sm font-medium text-red-700" role="alert">
            No fue posible cargar los usuarios. Inténtalo de nuevo más tarde.
          </p>
        
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 text-left">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-gray-600">
                    Nombre
                  </th>
                  <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-gray-600">
                    Primer apellido
                  </th>
                  <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-gray-600">
                    Segundo apellido
                  </th>
                  <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-gray-600">
                    Email
                  </th>
                  <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-gray-600">
                    Estado
                  </th>
                  <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-gray-600">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                
                  <tr
                    key={user.id ?? user.email}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50/70"}
                  >
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-700">
                
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-700">
                
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-700">
                      
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm">
                      <span
                        className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${user.activo === undefined
                          ? "bg-gray-100 text-gray-700"
                          : user.activo
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                          }`}
                      >

                      </span>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm">
                      <div className="flex items-center gap-2">
                          Botones
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="px-6 py-8 text-center text-sm text-gray-600">
            No hay usuarios para mostrar.
          </p>

      </div>
        Barra de navegacion
    </div>
  );
}
