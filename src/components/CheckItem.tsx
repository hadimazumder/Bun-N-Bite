interface CheckItemProps {
  text: string;
  note?: string;
  status?: "done" | "action" | "info";
}

export default function CheckItem({ text, note, status = "done" }: CheckItemProps) {
  const icons: Record<string, string> = {
    done: "✅",
    action: "🔧",
    info: "ℹ️",
  };
  return (
    <div className="flex items-start gap-3 py-2 border-b border-gray-50 last:border-0">
      <span className="text-base mt-0.5 flex-shrink-0">{icons[status]}</span>
      <div>
        <p className="text-sm font-medium text-gray-800">{text}</p>
        {note && <p className="text-xs text-gray-500 mt-0.5">{note}</p>}
      </div>
    </div>
  );
}
