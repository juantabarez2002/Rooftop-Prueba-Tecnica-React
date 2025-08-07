import { User } from "../services/User/models/user.model";
import React from "react";
import Spinner from "./Spinner";

interface Props {
  users: User[];
  onNameClick?: (user: User) => void;
  isLoading?: boolean;
}

export default function UserTable({
  users,
  onNameClick,
  isLoading = false,
}: Props) {
  return (
    <div className="overflow-x-auto rounded shadow bg-white">
      <table className="min-w-full text-sm text-left text-gray-700 table-fixed">
        <thead className="bg-gray-900 text-xs font-semibold text-white">
          <tr>
            <th
              className="px-4 py-3"
              style={{ width: "64px", minWidth: "64px", maxWidth: "64px" }}
            >
              #
            </th>
            <th
              className="px-4 py-3"
              style={{ width: "256px", minWidth: "256px", maxWidth: "256px" }}
            >
              Nombre completo
            </th>
            <th
              className="px-4 py-3"
              style={{ width: "288px", minWidth: "288px", maxWidth: "288px" }}
            >
              Email
            </th>
            <th
              className="px-4 py-3"
              style={{ width: "96px", minWidth: "96px", maxWidth: "96px" }}
            >
              Rol
            </th>
            <th
              className="px-4 py-3"
              style={{ width: "80px", minWidth: "80px", maxWidth: "80px" }}
            >
              Edad
            </th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan={5} className="px-4 py-8">
                <div className="flex justify-center items-center">
                  <Spinner size="md" text="Cargando usuarios..." />
                </div>
              </td>
            </tr>
          ) : users.length === 0 ? (
            <tr>
              <td colSpan={5} className="px-4 py-8 text-center">
                <div className="flex flex-col items-center justify-center space-y-2">
                  <div className="text-gray-600 font-medium">
                    No se encontraron usuarios
                  </div>
                  <div className="text-gray-400 text-sm">
                    Intenta ajustar los filtros de búsqueda
                  </div>
                </div>
              </td>
            </tr>
          ) : (
            users.map((user, index) => {
              const isAdmin = user.role === "admin";
              const rowClass = isAdmin ? "font-bold" : "";
              return (
                <tr
                  key={user.id}
                  className="border-t border-gray-200 hover:bg-gray-50 transition"
                >
                  <td
                    className="px-4 py-2 truncate"
                    style={{
                      width: "64px",
                      minWidth: "64px",
                      maxWidth: "64px",
                    }}
                  >
                    {user.id}
                  </td>
                  <td
                    className={`px-4 py-2 cursor-pointer ${rowClass} truncate`}
                    style={{
                      width: "256px",
                      minWidth: "256px",
                      maxWidth: "256px",
                    }}
                    onClick={() => onNameClick?.(user)}
                  >
                    {user.firstName} {user.lastName}
                  </td>
                  <td
                    className={`px-4 py-2 ${rowClass} truncate`}
                    style={{
                      width: "288px",
                      minWidth: "288px",
                      maxWidth: "288px",
                    }}
                  >
                    {user.email}
                  </td>
                  <td
                    className={`px-4 py-2 ${rowClass} truncate`}
                    style={{
                      width: "96px",
                      minWidth: "96px",
                      maxWidth: "96px",
                    }}
                  >
                    {user.role}
                  </td>
                  <td
                    className={`px-4 py-2 ${rowClass} truncate`}
                    style={{
                      width: "80px",
                      minWidth: "80px",
                      maxWidth: "80px",
                    }}
                  >
                    {user.age}
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}
