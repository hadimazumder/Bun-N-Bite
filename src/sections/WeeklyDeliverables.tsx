import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import ActionCheckbox from "../components/ActionCheckbox";

const deliverables = [
  { item: "Google Business Profile Post", frequency: "1 per week", detail: "Photo + caption + CTA relevant to menu or offer", effort: "Low–Med" },
  { item: "Facebook Posts", frequency: "2 per week", detail: "Branded visual + caption + hashtags + CTA", effort: "Medium" },
  { item: "Instagram Posts", frequency: "2 per week", detail: "Same or adapted from Facebook content", effort: "Low–Med" },
  { item: "Instagram/Facebook Stories", frequency: "1–2 per week", detail: "Polls, behind-scenes, offers, engagement stickers", effort: "Low" },
  { item: "Caption Writing", frequency: "Every post", detail: "Custom written captions tailored to each platform", effort: "Medium" },
  { item: "Hashtag Set", frequency: "Every post", detail: "15–25 hashtags: local, niche, brand, food-specific", effort: "Low" },
  { item: "Menu / Deal Highlight", frequency: "Minimum 1 per week", detail: "Focus on a specific item, deal, or offer", effort: "Low" },
  { item: "Review Strategy Action", frequency: "Ongoing weekly", detail: "Script reminders, QR code, reply to reviews", effort: "Low" },
  { item: "Basic Performance Update", frequency: "End of each week", detail: "Quick internal log of posts live + notable metrics", effort: "Low" },
  { item: "Monthly Client Report", frequency: "End of each month", detail: "GBP data, social stats, best posts, next plan", effort: "High" },
];

const totalMatrix = [
  { label: "GBP Posts per Month", value: "~4", icon: "🗺️" },
  { label: "Facebook Posts per Month", value: "~8", icon: "📘" },
  { label: "Instagram Posts per Month", value: "~8", icon: "📸" },
  { label: "Stories per Month", value: "4–8", icon: "📱" },
  { label: "Captions Written per Month", value: "~20", icon: "✍️" },
  { label: "Reports Delivered per Month", value: "1", icon: "📊" },
];

export default function WeeklyDeliverables() {
  return (
    <section id="deliverables">
      <SectionHeader
        number="6"
        title="Weekly Deliverables"
        subtitle="What is included each week for the $500 AUD/month package"
        icon="📦"
        color="bg-gradient-to-r from-slate-700 to-gray-800 text-white"
      />

      <Card className="mb-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-gray-900 text-lg">Weekly Deliverables Table</h3>
          <span className="bg-orange-100 text-orange-800 text-xs font-bold px-3 py-1 rounded-full">$500 AUD / Month</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-900 text-white rounded-lg">
                <th className="text-left p-3 rounded-tl-lg font-semibold">Deliverable</th>
                <th className="text-left p-3 font-semibold">Frequency</th>
                <th className="text-left p-3 font-semibold">What's Included</th>
                <th className="text-left p-3 rounded-tr-lg font-semibold">Effort Level</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {deliverables.map((d, i) => (
                <tr key={i} className="hover:bg-orange-50 transition-colors">
                  <td className="p-3 font-medium text-gray-900">
                    <ActionCheckbox id={`weekly-deliverable-${i}`} label={d.item} tone="orange" />
                  </td>
                  <td className="p-3">
                    <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-2 py-1 rounded-full">{d.frequency}</span>
                  </td>
                  <td className="p-3 text-gray-600 text-xs">{d.detail}</td>
                  <td className="p-3">
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                      d.effort === "High" ? "bg-red-100 text-red-700" :
                      d.effort === "Medium" ? "bg-amber-100 text-amber-700" :
                      "bg-green-100 text-green-700"
                    }`}>{d.effort}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <div className="grid md:grid-cols-3 gap-4 mb-5">
        {totalMatrix.map((m) => (
          <div key={m.label} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
            <div className="text-3xl mb-2">{m.icon}</div>
            <div className="text-2xl font-black text-orange-600 mb-1">{m.value}</div>
            <div className="text-xs text-gray-600 font-medium">{m.label}</div>
          </div>
        ))}
      </div>

      <Card className="bg-amber-50 border border-amber-200">
        <h3 className="font-bold text-amber-900 mb-3">⚠️ Important Scope Notes</h3>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            { title: "What's Included", items: ["Caption writing for every post", "Hashtag strategy for every post", "GBP post copywriting", "Basic performance tracking", "Monthly client report", "Review strategy guidance", "Social media setup (Month 1)"], color: "text-green-700" },
            { title: "What's NOT Included", items: ["Paid advertising (Facebook Ads, Google Ads)", "Professional photography or video shoots", "Graphic design with custom illustrations", "Website design or development", "Guaranteed ranking or sales results", "Daily story management (unless agreed)", "Customer service or DM management"], color: "text-red-700" },
          ].map((section) => (
            <div key={section.title} className="bg-white rounded-xl p-4 shadow-sm">
              <div className={`font-bold mb-2 text-sm ${section.color}`}>{section.title}</div>
              <ul className="space-y-1">
                {section.items.map((item, i) => (
                  <li key={i} className="text-xs text-gray-700 flex items-start gap-1.5">
                    <span className={`font-bold flex-shrink-0 ${section.color}`}>{section.title.includes("NOT") ? "✗" : "✓"}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}
