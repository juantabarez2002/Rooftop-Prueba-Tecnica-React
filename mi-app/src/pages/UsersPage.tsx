import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import UserTable from "../components/UserTable";
import UserSearch from "../components/UserSearch";
import { User } from "../services/User/models/user.model";
import { fetchUsers, searchUsers } from "../services/User/user.service";
import { useDebounce } from "../hooks/useDebounce";
import UserModal from "../components/UserModal";

export default function UsersPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [users, setUsers] = useState<User[]>([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const searchQuery = searchParams.get("search") ?? "";
  const currentPage = parseInt(searchParams.get("page") ?? "1", 10);
  const usersPerPage = parseInt(searchParams.get("limit") ?? "10", 10);

  const debouncedSearch = useDebounce(searchQuery, 400);
  const totalPages = Math.ceil(totalUsers / usersPerPage);

  const updateSearchParams = (
    params: Partial<{ search: string; page: number; limit: number }>
  ) => {
    const newParams = new URLSearchParams(searchParams.toString());

    if (params.search !== undefined) {
      if (params.search.trim() === "") {
        newParams.delete("search");
      } else {
        newParams.set("search", params.search);
      }
      if (params.search !== searchQuery) {
        newParams.set("page", "1");
      }
    }

    if (params.page !== undefined) {
      newParams.set("page", params.page.toString());
    }

    if (params.limit !== undefined) {
      newParams.set("limit", params.limit.toString());
      newParams.set("page", "1");
    }

    setSearchParams(newParams);
  };

  useEffect(() => {
    const skip = (currentPage - 1) * usersPerPage;
    setIsLoading(true);

    if (debouncedSearch.trim()) {
      searchUsers(debouncedSearch)
        .then((res) => {
          const startIndex = skip;
          const endIndex = startIndex + usersPerPage;
          setUsers(res.users.slice(startIndex, endIndex));
          setTotalUsers(res.total);
        })
        .catch((err) => console.error(err))
        .finally(() => setIsLoading(false));
    } else {
      fetchUsers(skip, usersPerPage)
        .then((res) => {
          setUsers(res.users);
          setTotalUsers(res.total);
        })
        .catch((err) => console.error(err))
        .finally(() => setIsLoading(false));
    }
  }, [currentPage, usersPerPage, debouncedSearch]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      updateSearchParams({ page });
    }
  };

  const handleItemsPerPageChange = (newLimit: number) => {
    updateSearchParams({ limit: newLimit, page: 1 });
  };

  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <div className="mb-6">
            <h1 className="text-5xl font-bold text-gray-900 mb-2">ACME</h1>
            <p className="text-lg text-gray-600 tracking-wider">CORPORATION</p>
          </div>
          <h2 className="text-2xl text-gray-800 mb-4">Gestión de Usuarios</h2>
          <div className="w-24 h-1 bg-gray-900 mx-auto mb-6"></div>
        </div>

        <div className="flex justify-center mb-6">
          <UserSearch
            value={searchQuery}
            onChange={(value) => updateSearchParams({ search: value })}
            placeholder="Buscar usuarios por nombre..."
          />
        </div>

        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <UserTable
            users={users}
            onNameClick={(user) => setSelectedUser(user)}
            isLoading={isLoading}
          />
        </div>

        {!isLoading && totalPages > 1 && (
          <div className="mt-4 bg-white border border-gray-200 rounded-lg p-4">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 flex items-center justify-center lg:justify-start">
                <span className="text-sm text-gray-600">
                  {(currentPage - 1) * usersPerPage + 1}-
                  {Math.min(currentPage * usersPerPage, totalUsers)} de{" "}
                  {totalUsers} usuarios
                </span>
              </div>

              <div className="flex-1 flex items-center justify-center space-x-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-3 bg-gray-900 text-white text-m font-mono py-0.5 border rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 cursor-pointer transition-colors"
                >
                  {"<"}
                </button>

                <span className="text-sm">
                  {currentPage} de {totalPages} páginas
                </span>

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-3 bg-gray-900 text-white text-m font-mono py-0.5 border rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 cursor-pointer transition-colors"
                >
                  {">"}
                </button>
              </div>

              <div className="flex-1 flex items-center justify-center lg:justify-end space-x-2">
                <span className="text-sm text-gray-600">Mostrando</span>
                <select
                  value={usersPerPage}
                  onChange={(e) =>
                    handleItemsPerPageChange(Number(e.target.value))
                  }
                  className="border border-gray-300 rounded px-2 py-1 text-sm cursor-pointer"
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                  <option value={30}>30</option>
                </select>
                <span className="text-sm text-gray-600">items por página</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {selectedUser && (
        <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
    </div>
  );
}
