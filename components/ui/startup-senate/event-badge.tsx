interface EventBadgeProps {
  label: string;
  className?: string;
}

export function EventBadge({ label, className = "" }: EventBadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 backdrop-blur-sm ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
      <span className="text-xs font-medium tracking-wide text-white/70">
        {label}
      </span>
    </div>
  );
}