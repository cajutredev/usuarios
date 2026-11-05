import { useForm } from 'react-hook-form'
import type { LoginRequest } from '../../types';
import { useMutation } from '@tanstack/react-query';
import { login } from '../../api/UserApi';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from "../../context/AuthContext";

export default function Login() {

  const initialValues: LoginRequest = {
    "email": "",
    "password": ""
  }

  const { register, handleSubmit, formState: { errors } } = useForm<LoginRequest>({
    defaultValues: initialValues
  })

  const navigate = useNavigate();
  const location = useLocation();
  const { setAuthenticatedUser } = useAuth();
  const from = location.state?.from?.pathname || "/";
  const loginPetition = useMutation({
    mutationFn: login,
    onError: (error) => {
      toast.error(error.message)
    },
    onSuccess: (user) => {
      toast.success("Inicio de sesión exitoso")
      setAuthenticatedUser(user)
      navigate(from, {replace: true})
    }
  });

  const handleForm = (dataForm: LoginRequest) => {
    console.log("metodo")
    loginPetition.mutate(dataForm);
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12">
      <section className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200 sm:p-10">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Iniciar sesión
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Ingresa tus credenciales para continuar.
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit(handleForm)}>
          <div>
            <label
              className="mb-2 block text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Correo electrónico
            </label>
            <input
              autoComplete="username"
              className={`block w-full rounded-lg border px-3 py-2.5 text-gray-900 shadow-sm outline-none transition placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600/20 ${errors.email ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-indigo-600"
                }`}
              id="email"
              placeholder="nombre@ejemplo.com"
              type="email"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              {...register("email", {
                required: "El correo electrónico es obligatorio.",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Ingresa un correo electrónico válido.",
                },
              })}
            />
            {errors.email && (
              <p className="mt-1.5 text-sm text-red-600" id="email-error" role="alert">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label
              className="mb-2 block text-sm font-medium text-gray-700"
              htmlFor="password"
            >
              Contraseña
            </label>
            <input
              autoComplete="current-password"
              className={`block w-full rounded-lg border px-3 py-2.5 text-gray-900 shadow-sm outline-none transition placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600/20 ${errors.password ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-indigo-600"
                }`}
              id="password"
              placeholder="Ingresa tu contraseña"
              type="password"
              aria-invalid={Boolean(errors.password)}
              aria-describedby={errors.password ? "password-error" : undefined}
              {...register("password", {
                required: "La contraseña es obligatoria.",
              })}
            />
            {errors.password && (
              <p className="mt-1.5 text-sm text-red-600" id="password-error" role="alert">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            className="w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:cursor-not-allowed disabled:opacity-60"
            disabled={loginPetition.isPending}
            type="submit"
          >
            Log in
          </button>
        </form>
      </section>
    </main>
  );
}
