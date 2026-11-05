import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { deleteUser, editUser, getUsers, saveUser } from "../../api/UserApi";
import ListUser from "../../components/users/ListUser";
import UserModal from "../../components/users/UserModal";
import { toast } from "react-toastify";
import type { CatalogosProps, User } from "../../types";
import { getDeparments, getRoles } from "../../api/CatalogsApi";

export default function Index() {

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<User['id']>();

  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const requestedPage = Number(searchParams.get("pageNumber") ?? 0);
  const pageNumber =
    Number.isInteger(requestedPage) && requestedPage >= 0 ? requestedPage : 0;

  const {
    data: usersPage,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["users", pageNumber],
    queryFn: () => getUsers(pageNumber),
  });
  const { data: dataCatalogs, } = useQuery<CatalogosProps>({
    queryKey: ['catalogos'],
    queryFn: async () => {
      const [roles, departamentos] = await Promise.all([
        getRoles(),
        getDeparments()
      ])
      return {roles, departamentos}
    }
  })

  const deleteMutation = useMutation({
    mutationFn: deleteUser,
    onError: (error) => {
      toast.error(error.message)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['users']
      })
      toast.success("El usuario se elimino con exito")
    }
  });
  const editMutation = useMutation({
    mutationFn: editUser,
    onError: (error) => {
      toast.error(error.message)
    },
    onSuccess: () => {
      setIsCreateModalOpen(false)
      toast.success("El usuario se actualizó correctamente")
      queryClient.invalidateQueries({
        queryKey: ['users']
      })
    }

  })
  const saveMutation = useMutation({
    mutationFn: saveUser,
    onError: (error) => {
      toast.error(error.message)
    },
    onSuccess: () => {
      setIsCreateModalOpen(false)
      toast.success("Se guardo el usuario correctamente");
      queryClient.invalidateQueries({
        queryKey: ['users']
      })
    }
  })

  if (usersPage) return (
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
          onClick={() => setIsCreateModalOpen(true)}
          type="button"
        >
          Agregar usuario
        </button>
      </div>

      {isCreateModalOpen && dataCatalogs && (
        <UserModal
          selectedUserId={selectedUserId}
          dataCatalogs={dataCatalogs}
          saveMutation={saveMutation}
          editMutation={editMutation}
          onClose={() => {
            setIsCreateModalOpen(false);
            setSelectedUserId(undefined);
          }}
        />
      )}

      <ListUser
        users={usersPage.content}
        isError={isError}
        isLoading={isLoading}
        pageNumber={usersPage?.pageNumber ?? pageNumber}
        totalPages={usersPage?.totalPages ?? 0}
        deleteMutation={deleteMutation}
        setSelectedUserId={setSelectedUserId}
        setIsCreateModalOpen={setIsCreateModalOpen}
      />
    </main>
  );
}
