import { z } from "zod";

export const rolSchema = z.object({
  id: z.number().int().positive(),
  nombre: z.string().min(1).max(50),
  descripcion: z.string().max(255).nullable().optional(),
  activo: z.boolean(),
});

export const departamentoSchema = z.object({
  id: z.number().int().positive(),
  nombre: z.string().min(1).max(100),
  descripcion: z.string().max(255).nullable().optional(),
  activo: z.boolean(),
});

export const loginSchema = z.object({
  email: z.string().min(1),
  password: z.string().min(1)
});

export const authoritySchema = z.object({
  authority: z.string(),
  issuedAt: z.iso.datetime({offset: true}).optional()
});

export const loginResponseSchema = z.object({
  message: z.string(),
  email: z.string(),
  authorities: z.array(authoritySchema)
});

export const userSchema = z.object({
  id: z.number().int().positive().optional(),
  nombre: z.string().min(1).max(64),
  primerApellido: z.string().min(1).max(100),
  segundoApellido: z.string().max(100).nullable().optional(),
  email: z.email().max(150),
  password: z.string().optional(),
  telefono: z.string().max(20).nullable().optional(),
  fechaNacimiento: z.iso.date().nullable().optional(),
  activo: z.boolean().optional(),
  fechaCreacion: z.iso.datetime({ offset: true }).nullable().optional(),
  fechaActualizacion: z.iso.datetime({ offset: true }).nullable().optional(),
  departamentoId: z.number().int().positive(),
  rolId: z.number().int().positive(),
});

export const userListItemSchema = userSchema.pick({
  id: true,
  nombre: true,
  primerApellido: true,
  segundoApellido: true,
  email: true,
  activo: true,
});

export const paginatedUsersSchema = z.object({
  content: z.array(userListItemSchema),
  lasted: z.boolean(),
  pageNumber: z.number().int().nonnegative(),
  pageSize: z.number().int().positive(),
  totalElements: z.number().int().nonnegative(),
  totalPages: z.number().int().nonnegative(),
})

export type User = z.infer<typeof userSchema>;
export type Rol = z.infer<typeof rolSchema>;
export type Departamento = z.infer<typeof departamentoSchema>;
export type LoginRequest = z.infer<typeof loginSchema>;
export type LoginResponse = z.infer<typeof loginResponseSchema>;
export type CatalogosProps = {
    roles: Rol[],
    departamentos: Departamento[]
}
export type UserFormType = Pick<
  User,
  "id" | "nombre" | "primerApellido" | "segundoApellido" | "email" | 
  "password" | "telefono" | "fechaNacimiento" | 
  "departamentoId" | "rolId" | "activo"
>;
export type UserListItem = Pick<
  User,
  "id" | "nombre" | "primerApellido" | "segundoApellido" | "email" | "activo"
>;

export type PaginatedResponse = z.infer<typeof paginatedUsersSchema>
