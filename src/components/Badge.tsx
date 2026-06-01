interface BadgeProps {
  label: string;
  color?: string;
}

export default function Badge({ label, color = "bg-orange-100 text-orange-800" }: BadgeProps) {
  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${color}`}>
      {label}
    </span>
  );
}
