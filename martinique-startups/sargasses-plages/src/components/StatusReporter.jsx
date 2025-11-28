import React from 'react';
import { Camera, MapPin } from 'lucide-react';

export default function StatusReporter({ onReport }) {
    return (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 pb-8 z-50">
            <button
                onClick={onReport}
                className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-amber-200 flex items-center justify-center gap-2 text-lg transition"
            >
                <Camera size={24} />
                Signaler des sargasses
            </button>
        </div>
    );
}
