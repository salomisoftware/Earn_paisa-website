"use client";

import { useState } from "react";

export default function DeleteAccount() {
    const [email, setEmail] = useState("");
    const [showConfirm, setShowConfirm] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleDeleteClick = () => {
        if (!email) {
            setError("Email is required");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            setError("Enter valid email");
            return;
        }

        setError("");
        setShowConfirm(true);
    };

    const confirmDelete = () => {
        setShowConfirm(false);

        // 👉 yaha future me API / Firebase call kar sakta hai
        console.log("Delete request for:dddjddjv", email);

        setShowSuccess(true);
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="max-w-md mx-auto p-6 bg-white shadow rounded-2xl">
                <h2 className="text-2xl font-bold mb-4 text-red-600">
                    Delete My Account
                </h2>

                <p className="text-gray-600 mb-4">
                    Enter your registered email to request account deletion.
                </p>

                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border p-3 rounded-lg mb-4 outline-none focus:ring-2 focus:ring-red-400"
                />
                {error && (
                    <p className="text-red-500 text-sm mb-2">{error}</p>
                )}

                <div className="flex gap-3">
                    <button
                        onClick={() => setEmail("")}
                        className="w-1/2 border py-2 rounded-lg hover:bg-gray-100"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={handleDeleteClick}
                        className="w-1/2 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700"
                    >
                        Delete
                    </button>
                </div>

                {/* Confirm Popup */}
                {showConfirm && (
                    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
                        <div className="bg-white p-6 rounded-xl w-[90%] max-w-sm text-center">
                            <h3 className="text-lg font-semibold mb-3">
                                Are you sure?
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Do you really want to delete your account?
                            </p>

                            <div className="flex gap-3">
                                <button
                                    onClick={() => setShowConfirm(false)}
                                    className="w-1/2 border py-2 rounded-lg"
                                >
                                    Cancel
                                </button>

                                <button
                                    onClick={confirmDelete}
                                    className="w-1/2 bg-red-600 text-white py-2 rounded-lg"
                                >
                                    Confirm
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Success Popup */}
                {showSuccess && (
                    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
                        <div className="bg-white p-6 rounded-xl w-[90%] max-w-sm text-center">
                            <h3 className="text-lg font-semibold mb-3 text-green-600">
                                Request Submitted
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Your request is submitted. Your account will be deleted within 24 hours.
                            </p>

                            <button
                                onClick={() => setShowSuccess(false)}
                                className="w-full bg-black text-white py-2 rounded-lg"
                            >
                                OK
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}