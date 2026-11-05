import { useForm } from 'react-hook-form'
import type { CatalogosProps, User, UserFormType } from '../../types'
import UserForm from './UserForm'
import { getUserById } from '../../api/UserApi'
import { useQuery, type UseMutationResult, type UseQueryResult } from '@tanstack/react-query'
import { useEffect } from 'react'


type UserModalProps = {
    onClose: () => void,
    saveMutation: UseMutationResult<any, Error, UserFormType, unknown>,
    editMutation: UseMutationResult<any, Error, UserFormType, unknown>,
    selectedUserId: User['id'],
    dataCatalogs: CatalogosProps
}

export default function UserModal() {

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-gray-900/50 p-4">
            <section
                aria-labelledby="user-modal-title"
                aria-modal="true"
                className="flex max-h-[calc(100vh-2rem)] w-full max-w-2xl flex-col rounded-xl bg-white shadow-xl"
                role="dialog"
            >
                <form
                    className="flex min-h-0 flex-col"
                    onSubmit=""
                    noValidate>
                    <header className="flex shrink-0 items-start justify-between border-b border-gray-200 px-6 py-5">
                        <div>
                            <h2
                                className="text-xl font-semibold text-gray-900"
                                id="user-modal-title"
                            >
                                Agregar usuario
                            </h2>
                            <p className="mt-1 text-sm text-gray-600">
                                Completa la información para registrar un nuevo usuario.
                            </p>
                        </div>
                        <button
                            aria-label="Cerrar"
                            className="rounded-md p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            onClick=""
                            type="button"
                        >
                            <span aria-hidden="true" className="text-2xl leading-none">
                                &times;
                            </span>
                        </button>
                    </header>

                    <div className="min-h-0 overflow-y-auto overscroll-contain">
                        <div className="px-6 py-6">
                            UserForm
                        </div>
                    </div>

                    <footer className="flex shrink-0 justify-end gap-3 border-t border-gray-200 px-6 py-4">
                        <button
                            className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            onClick=""
                            type="button"
                        >
                            Cancelar
                        </button>
                        <button
                            className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            type="submit"
                        >
                            Guardar usuario
                        </button>
                    </footer>
                </form>
            </section>
        </div>
    );
}
