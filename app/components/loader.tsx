// app/components/Loader.tsx
'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface LoaderProps {
  children: React.ReactNode;
}

const Loader: React.FC<LoaderProps> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate content loading or wait for actual content to load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust timing as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
          <Image 
            src="/LegalX-black.svg" 
            alt="LegalX Logo" 
            width={200}
            height={50}
            className="mb-4"
            priority
          />
          <div className="w-8 h-8 border-4 border-gray-200 border-t-yellow-500 rounded-full animate-spin" />
          <style jsx>{`
            @keyframes spin {
              to {
                transform: rotate(360deg);
              }
            }
            .animate-spin {
              animation: spin 1s linear infinite;
            }
          `}</style>
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default Loader;