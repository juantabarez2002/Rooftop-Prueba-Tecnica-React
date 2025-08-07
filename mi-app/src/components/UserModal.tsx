import React from "react";
import { User } from "../services/User/models/user.model";

interface Props {
  user: User;
  onClose: () => void;
}

export default function UserModal({ user, onClose }: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-md bg-white rounded-xl shadow-2xl p-6 sm:p-8 mx-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl cursor-pointer w-8 h-8 flex items-center justify-center"
          aria-label="Cerrar"
        >
          &times;
        </button>

        <div>
          <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6">
            {user.firstName} {user.lastName}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 text-sm">
            <div>
              <span className="block text-gray-500 font-medium">Username</span>
              <span>{user.username}</span>
            </div>
            <div>
              <span className="block text-gray-500 font-medium">Rol</span>
              <span className="capitalize">{user.role}</span>
            </div>
            <div>
              <span className="block text-gray-500 font-medium">Género</span>
              <span className="capitalize">{user.gender}</span>
            </div>
            <div>
              <span className="block text-gray-500 font-medium">Teléfono</span>
              <span>{user.phone}</span>
            </div>
            <div>
              <span className="block text-gray-500 font-medium">
                Nacimiento
              </span>
              <span>{user.birthDate}</span>
            </div>
            <div>
              <span className="block text-gray-500 font-medium">Edad</span>
              <span>{user.age}</span>
            </div>
            <div className="col-span-1 sm:col-span-2 text-center">
              <span className="block text-gray-500 font-medium">Email</span>
              <span className="break-words">{user.email}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
