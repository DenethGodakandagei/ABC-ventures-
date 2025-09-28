"use client";
import React, { useEffect } from "react";
import { X, Check } from "lucide-react";

type SuccessPopupProps = {
  message: string;
  onClose: () => void;
  duration?: number;
};

const SuccessPopup: React.FC<SuccessPopupProps> = ({ message, onClose, duration = 3000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="relative w-[400px] bg-white rounded-xl shadow-lg p-6 text-center">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-[var(--color-brand)]"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Check Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 flex items-center justify-center border-2 border-green-500 rounded-full">
            <Check className="w-6 h-6 text-green-600" />
          </div>
        </div>

        {/* Success Message */}
        <h2 className="text-2xl font-semibold text-[var(--color-brand)] mb-2">Success !</h2>
        <p className="text-sm text-gray-700">{message}</p>
      </div>
    </div>
  );
};

export default SuccessPopup;
