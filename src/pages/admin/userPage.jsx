import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Loader } from "../../components/loader";

import {
    HiOutlineMail,
    HiOutlinePhone,
    HiOutlineUser,
    HiOutlineTrash,
    HiOutlineShieldCheck
} from "react-icons/hi";

function DeleteUserModal({ user, close, refresh }) {

    async function deleteUser() {

        try {

            const token = localStorage.getItem("token");

            await axios.delete(
                import.meta.env.VITE_API_URL + `/api/users/${user._id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            toast.success("User deleted successfully");
            close();
            refresh();

        } catch (error) {

            console.error(error);
            toast.error("Failed to delete user");
        }
    }

    return (

        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">

            <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-6">

                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                    Delete User
                </h2>

                <p className="text-gray-600 mb-6">
                    Are you sure you want to delete
                    <span className="font-semibold text-red-500">
                        {" "} {user.fullname}
                    </span>
                    ?
                </p>

                <div className="flex justify-end gap-3">

                    <button
                        onClick={close}
                        className="px-5 py-2 rounded-xl bg-gray-200 hover:bg-gray-300 transition"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={deleteUser}
                        className="px-5 py-2 rounded-xl bg-red-500 text-white hover:bg-red-600 transition"
                    >
                        Delete
                    </button>

                </div>

            </div>
        </div>
    );
}

export default function UserPage() {

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [selectedUser, setSelectedUser] = useState(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    useEffect(() => {

        if (isLoading) {

            const token = localStorage.getItem("token");

            axios.get(
                import.meta.env.VITE_API_URL + "/api/users",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            .then((response) => {

                setUsers(response.data);
                setIsLoading(false);

            })
            .catch((error) => {

                console.error(error);
                toast.error("Failed to fetch users");

            });
        }

    }, [isLoading]);

    return (

        <div className="w-full min-h-screen bg-gray-100 p-6 text-black">

            {/* Delete Modal */}
            {
                isDeleteModalOpen && selectedUser && (

                    <DeleteUserModal
                        user={selectedUser}
                        close={() => {
                            setIsDeleteModalOpen(false);
                            setSelectedUser(null);
                        }}
                        refresh={() => setIsLoading(true)}
                    />
                )
            }

            {/* Header */}
            <div className="mb-8">

                <h1 className="text-3xl font-bold text-gray-800">
                    Users
                </h1>

                <p className="text-gray-500 mt-1">
                    Manage all registered users
                </p>

            </div>

            {/* Content */}
            {
                isLoading ? (

                    <Loader />

                ) : (

                    <div className="bg-white rounded-3xl shadow-md border border-gray-200 overflow-hidden">

                        <div className="overflow-x-auto">

                            <table className="w-full">

                                {/* Table Head */}
                                <thead className="bg-gray-50 border-b">

                                    <tr className="text-gray-700">

                                        <th className="p-5 text-left font-semibold">
                                            User
                                        </th>

                                        <th className="p-5 text-left font-semibold">
                                            Email
                                        </th>

                                        <th className="p-5 text-left font-semibold">
                                            Phone
                                        </th>

                                        <th className="p-5 text-left font-semibold">
                                            Role
                                        </th>

                                        <th className="p-5 text-center font-semibold">
                                            Actions
                                        </th>

                                    </tr>
                                </thead>

                                {/* Table Body */}
                                <tbody>

                                    {
                                        users.map((user) => (

                                            <tr
                                                key={user._id}
                                                className="border-b hover:bg-gray-50 transition"
                                            >

                                                {/* User Info */}
                                                <td className="p-5">

                                                    <div className="flex items-center gap-4">

                                                        {/* Avatar */}
                                                        <div className="w-14 h-14 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center text-2xl">

                                                            <HiOutlineUser />

                                                        </div>

                                                        {/* Details */}
                                                        <div>

                                                            <h2 className="font-semibold text-lg text-gray-800">
                                                                {user.fullname}
                                                            </h2>

                                                            <p className="text-sm text-gray-500">
                                                                User ID: {user._id}
                                                            </p>

                                                        </div>

                                                    </div>

                                                </td>

                                                {/* Email */}
                                                <td className="p-5">

                                                    <div className="flex items-center gap-2 text-gray-700">

                                                        <HiOutlineMail className="text-lg text-orange-500" />

                                                        {user.email}

                                                    </div>

                                                </td>

                                                {/* Phone */}
                                                <td className="p-5">

                                                    <div className="flex items-center gap-2 text-gray-700">

                                                        <HiOutlinePhone className="text-lg text-orange-500" />

                                                        {user.phone || "Not Provided"}

                                                    </div>

                                                </td>

                                                {/* Role */}
                                                <td className="p-5">

                                                    <span
                                                        className={`px-4 py-1 rounded-full text-sm font-medium
                                                        ${
                                                            user.role === "admin"
                                                                ? "bg-purple-100 text-purple-700"
                                                                : "bg-green-100 text-green-700"
                                                        }`}
                                                    >

                                                        <div className="flex items-center gap-2">

                                                            <HiOutlineShieldCheck />

                                                            {user.role}

                                                        </div>

                                                    </span>

                                                </td>

                                                {/* Actions */}
                                                <td className="p-5">

                                                    <div className="flex justify-center">

                                                        <button
                                                            onClick={() => {

                                                                setSelectedUser(user);
                                                                setIsDeleteModalOpen(true);

                                                            }}
                                                            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-red-500 text-white hover:bg-red-600 transition"
                                                        >

                                                            <HiOutlineTrash />

                                                            Delete

                                                        </button>

                                                    </div>

                                                </td>

                                            </tr>
                                        ))
                                    }

                                </tbody>
                            </table>
                        </div>

                        {/* Empty State */}
                        {
                            users.length === 0 && (

                                <div className="p-10 text-center text-gray-500">
                                    No users found.
                                </div>
                            )
                        }

                    </div>
                )
            }
        </div>
    );
}