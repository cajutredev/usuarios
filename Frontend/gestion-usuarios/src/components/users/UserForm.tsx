import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { Departamento, Rol, UserFormType } from "../../types";
import ErrorMessage from "../ErrorMessage";

type UserFormProps = {
    register: UseFormRegister<UserFormType>
    errors: FieldErrors<UserFormType>
    roles: Rol[]
    departamentos: Departamento[]
}
export default function UserForm() {
    return (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
                <label
                    className="mb-1.5 block text-sm font-medium text-gray-700"
                    htmlFor="nombre"
                >
                    Nombre
                </label>
                <input
                    autoComplete="given-name"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 shadow-sm outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                    id="nombre"
                    maxLength={64}
                    required
                    type="text"
                    aria-invalid={Boolean(errors.nombre)}
                    aria-describedby={errors.nombre ? "nombre-error" : undefined}
                />
                    Errores
            </div>

            <div>
                <label
                    className="mb-1.5 block text-sm font-medium text-gray-700"
                    htmlFor="primerApellido"
                >
                    Primer apellido
                </label>
                <input
                    autoComplete="family-name"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 shadow-sm outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                    id="primerApellido"
                    maxLength={100}
                    required
                    type="text"
                    aria-invalid={Boolean(errors.primerApellido)}
                    aria-describedby={errors.primerApellido ? "primerApellido-error" : undefined}
                />
            </div>

            <div>
                <label
                    className="mb-1.5 block text-sm font-medium text-gray-700"
                    htmlFor="segundoApellido"
                >
                    Segundo apellido
                </label>
                <input
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 shadow-sm outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                    id="segundoApellido"
                    maxLength={100}
                    type="text"
                    aria-invalid={Boolean(errors.segundoApellido)}
                    aria-describedby={errors.segundoApellido ? "segundoApellido-error" : undefined}
                    {...register("segundoApellido", {
                        maxLength: { value: 100, message: "El segundo apellido no puede exceder 100 caracteres." },
                    })}
                />
                {errors.segundoApellido && (
                    <div id="segundoApellido-error">
                        <ErrorMessage>{errors.segundoApellido.message}</ErrorMessage>
                    </div>
                )}
            </div>

            <div>
                <label
                    className="mb-1.5 block text-sm font-medium text-gray-700"
                    htmlFor="email"
                >
                    Correo electrónico
                </label>
                <input
                    autoComplete="email"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 shadow-sm outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                    id="email"
                    maxLength={150}
                    required
                    type="email"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    {...register("email", {
                        required: "El correo electrónico es obligatorio.",
                        maxLength: { value: 150, message: "El correo electrónico no puede exceder 150 caracteres." },
                        pattern: {
                            value: /^\S+@\S+\.\S+$/,
                            message: "Ingresa un correo electrónico válido.",
                        },
                    })}
                />
                {errors.email && (
                    <div id="email-error">
                        <ErrorMessage>{errors.email.message}</ErrorMessage>
                    </div>
                )}
            </div>

            <div>
                <label
                    className="mb-1.5 block text-sm font-medium text-gray-700"
                    htmlFor="password"
                >
                    Contraseña
                </label>
                <input
                    autoComplete="new-password"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 shadow-sm outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                    id="password"
                    type="password"
                    aria-invalid={Boolean(errors.password)}
                    aria-describedby={errors.password ? "password-error" : undefined}
                    {...register("password")}
                />
                {errors.password && (
                    <div id="password-error">
                        <ErrorMessage>{errors.password.message}</ErrorMessage>
                    </div>
                )}
            </div>

            <div>
                <label
                    className="mb-1.5 block text-sm font-medium text-gray-700"
                    htmlFor="telefono"
                >
                    Teléfono
                </label>
                <input
                    autoComplete="tel"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 shadow-sm outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                    id="telefono"
                    maxLength={20}
                    type="tel"
                    aria-invalid={Boolean(errors.telefono)}
                    aria-describedby={errors.telefono ? "telefono-error" : undefined}
                    {...register("telefono", {
                        maxLength: { value: 20, message: "El teléfono no puede exceder 20 caracteres." },
                    })}
                />
                {errors.telefono && (
                    <div id="telefono-error">
                        <ErrorMessage>{errors.telefono.message}</ErrorMessage>
                    </div>
                )}
            </div>

            <div>
                <label
                    className="mb-1.5 block text-sm font-medium text-gray-700"
                    htmlFor="fechaNacimiento"
                >
                    Fecha de nacimiento
                </label>
                <input
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                    id="fechaNacimiento"
                    type="date"
                    aria-invalid={Boolean(errors.fechaNacimiento)}
                    aria-describedby={errors.fechaNacimiento ? "fechaNacimiento-error" : undefined}
                    {...register("fechaNacimiento")}
                />
                {errors.fechaNacimiento && (
                    <div id="fechaNacimiento-error">
                        <ErrorMessage>{errors.fechaNacimiento.message}</ErrorMessage>
                    </div>
                )}
            </div>

            <div>
                <label
                    className="mb-1.5 block text-sm font-medium text-gray-700"
                    htmlFor="departamentoId"
                >
                    Departamento
                </label>
                <select
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                    id="departamentoId"
                    required
                    aria-invalid={Boolean(errors.departamentoId)}
                    aria-describedby={errors.departamentoId ? "departamentoId-error" : undefined}
                    {...register("departamentoId", {
                        required: "Selecciona un departamento.",
                        valueAsNumber: true,
                    })}
                >
                    {departamentos.map((departamento) => (
                        <option key={departamento.id} value={departamento.id}>
                            {departamento.nombre}
                        </option>
                    ))}
                </select>
                {errors.departamentoId && (
                    <div id="departamentoId-error">
                        <ErrorMessage>{errors.departamentoId.message}</ErrorMessage>
                    </div>
                )}
            </div>

            <div>
                <label
                    className="mb-1.5 block text-sm font-medium text-gray-700"
                    htmlFor="rolId"
                >
                    Rol
                </label>
                <select
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                    id="rolId"
                    required
                    aria-invalid={Boolean(errors.rolId)}
                    aria-describedby={errors.rolId ? "rolId-error" : undefined}
                    {...register("rolId", {
                        required: "Selecciona un rol.",
                        valueAsNumber: true,
                    })}
                >
                    {roles.map((rol) => (
                        <option key={rol.id} value={rol.id}>
                            {rol.nombre}
                        </option>
                    ))}
                </select>
                {errors.rolId && (
                    <div id="rolId-error">
                        <ErrorMessage>{errors.rolId.message}</ErrorMessage>
                    </div>
                )}
            </div>

            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 sm:col-span-2">
                <input
                    className="size-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    defaultChecked
                    type="checkbox"
                    {...register("activo")}
                />
                Usuario activo
            </label>
        </div>
    )
}
