
export default function ErrorMessage({children} : {children: React.ReactNode}) {
  return (
    <div className="rounded-md bg-red-50 p-3 text-sm text-red-700" role="alert">
      {children}
    </div>
  )
}
