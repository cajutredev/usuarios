import { Link } from "react-router-dom";

type NavMenuTableProps = {
  pageNumber: number;
  totalPages: number;
};

export default function NavMenuTable({
  pageNumber,
  totalPages,
}: NavMenuTableProps) {
  if (totalPages < 1) {
    return null;
  }

  const firstVisiblePage = Math.max(
    0,
    Math.min(pageNumber - 1, totalPages - 3),
  );
  console.log("first: ", firstVisiblePage)
  const visiblePages = Array.from(
    { length: Math.min(3, totalPages) },
    (_, index) => firstVisiblePage + index,
  );
  const isFirstPage = pageNumber <= 0;
  const isLastPage = pageNumber >= totalPages - 1;

  const pageLinkClassName =
    "inline-flex min-w-10 items-center justify-center rounded-lg px-3 py-2 text-sm font-semibold";
  const mutedLinkClassName = `${pageLinkClassName} text-green-600 hover:bg-green-100`;

  return (
    <nav
      aria-label="Paginación de usuarios"
      className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm"
    >
      <div className="flex items-center gap-1">
        {isFirstPage ? (
          <span className={`${mutedLinkClassName} cursor-not-allowed opacity-40`} aria-disabled="true">
            « Primera
          </span>
        ) : (
          <Link to="?pageNumber=0" className={mutedLinkClassName}>
            « Primera
          </Link>
        )}
        {isFirstPage ? (
          <span className={`${mutedLinkClassName} cursor-not-allowed opacity-40`} aria-disabled="true">
            ‹ Anterior
          </span>
        ) : (
          <Link
            to={`?pageNumber=${pageNumber - 1}`}
            className={mutedLinkClassName}
          >
            ‹ Anterior
          </Link>
        )}
      </div>

      <div className="flex items-center gap-1" aria-label="Páginas">
        {visiblePages.map((page) =>
          page === pageNumber ? (
            <span
              key={page}
              aria-current="page"
              className={`${pageLinkClassName} bg-indigo-600 text-white shadow-md ring-2 ring-indigo-200`}
            >
              {page + 1}
            </span>
          ) : (
            <Link
              key={page}
              to={`?pageNumber=${page}`}
              className={`${pageLinkClassName} text-gray-700 hover:bg-indigo-50 hover:text-indigo-700`}
            >
              {page + 1}
            </Link>
          ),
        )}
      </div>

      <div className="flex items-center gap-1">
        {isLastPage ? (
          <span className={`${mutedLinkClassName} cursor-not-allowed opacity-40`} aria-disabled="true">
            Siguiente ›
          </span>
        ) : (
          <Link
            to={`?pageNumber=${pageNumber + 1}`}
            className={mutedLinkClassName}
          >
            Siguiente ›
          </Link>
        )}
        {isLastPage ? (
          <span className={`${mutedLinkClassName} cursor-not-allowed opacity-40`} aria-disabled="true">
            Última »
          </span>
        ) : (
          <Link
            to={`?pageNumber=${totalPages - 1}`}
            className={mutedLinkClassName}
          >
            Última »
          </Link>
        )}
      </div>
    </nav>
  );
}