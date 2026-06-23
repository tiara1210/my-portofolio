"use client";

import { ArrowUpRight, Loader2, Clock } from "lucide-react";

interface LivePreviewButtonProps {
  demoUrl: string;
  isProduction?: boolean;
}

export default function LivePreviewButton({
  demoUrl,
  isProduction = true,
}: LivePreviewButtonProps) {
  // For BNN System - not yet in production
  if (!isProduction) {
    return (
      <button
        disabled
        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gray-400 text-white text-sm font-semibold rounded-xl cursor-not-allowed shadow-sm"
      >
        <Clock className="w-4 h-4" />
        In Progress
      </button>
    );
  }

  return (
    <a
      href={demoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gray-900 text-white text-sm font-semibold rounded-xl hover:bg-red transition-all shadow-sm"
    >
      Live Preview
      <ArrowUpRight className="w-4 h-4" />
    </a>
  );
}
