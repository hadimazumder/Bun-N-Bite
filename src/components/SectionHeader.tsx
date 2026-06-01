interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
  icon: string;
  color: string;
}

export default function SectionHeader({ number, title, subtitle, icon, color }: SectionHeaderProps) {
  return (
    <div className={`rounded-2xl p-6 mb-6 ${color}`}>
      <div className="flex items-center gap-4">
        <div className="text-4xl">{icon}</div>
        <div>
          <div className="text-xs font-bold uppercase tracking-widest opacity-70 mb-1">Section {number}</div>
          <h2 className="text-2xl md:text-3xl font-black leading-tight">{title}</h2>
          {subtitle && <p className="mt-1 text-sm opacity-80">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
}
