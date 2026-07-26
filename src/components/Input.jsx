import { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

export default function Input({
    label,
    id,
    type = "text",
    error,
    rightSlot,
    className = "",
    ...props
}) {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === "password";
    const inputType = isPassword ? (showPassword ? "text" : "password") : type;

    return (
        <div className="flex flex-col gap-2">
            {label && (
                <div className="flex justify-between items-center px-1 pt-4">
                    <label htmlFor={id} className="font-label-caps text-label-caps text-on-surface-variant">
                        {label}
                    </label>
                    <p className="font-medium text-primary-container cursor-pointer">{rightSlot}</p>
                </div>
            )}

            <div className="relative">
                <input
                    id={id}
                    type={inputType}
                    className={`w-full px-4 py-2 bg-surface-container-low border rounded-lg text-body-sm font-body-md focus:ring-0 focus:outline-none transition-all duration-150 ${error
                        ? "border-error focus:border-error"
                        : "border-outline-variant focus:border-primary"
                        } ${className}`}
                    {...props}
                />

                {isPassword && (
                    <button
                        type="button"
                        onClick={() => setShowPassword((s) => !s)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-outline-variant hover:text-outline transition-colors cursor-pointer"
                    >
                        {showPassword ? <MdVisibilityOff size={14} /> : <MdVisibility size={14} />}
                    </button>
                )}
            </div>

            {error && <p className="font-body-sm text-body-sm text-error px-1">{error}</p>}
        </div>
    );
}