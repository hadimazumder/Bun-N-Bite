import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";

export default function ReportingFormat() {
  return (
    <section id="reporting">
      <SectionHeader
        number="13"
        title="Reporting Format"
        subtitle="Weekly and monthly report template for client transparency"
        icon="📊"
        color="bg-gradient-to-r from-slate-700 to-slate-900 text-white"
      />

      <Card className="mb-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-gray-900 text-lg">📋 Weekly Performance Report Template</h3>
          <span className="bg-slate-100 text-slate-700 text-xs font-bold px-3 py-1 rounded-full">Sent every Monday or Friday</span>
        </div>

        <div className="space-y-4">
          {[
            {
              section: "1. Work Completed This Week",
              color: "bg-blue-50 border-blue-200",
              headerColor: "text-blue-800",
              fields: [
                { label: "GBP Posts Published", placeholder: "e.g., 1 post — Meal Deal photo post" },
                { label: "Facebook Posts Published", placeholder: "e.g., 2 posts — Burger spotlight + Student discount" },
                { label: "Instagram Posts Published", placeholder: "e.g., 2 posts — Same as Facebook" },
                { label: "Stories Posted", placeholder: "e.g., 1 Instagram Story — Poll: single or double?" },
                { label: "Reviews Responded To", placeholder: "e.g., 2 reviews — 1 positive (responded), 1 negative (responded professionally)" },
                { label: "Other Actions Taken", placeholder: "e.g., Updated GBP opening hours, added 3 new menu items" },
              ]
            },
            {
              section: "2. Google Business Profile Performance",
              color: "bg-green-50 border-green-200",
              headerColor: "text-green-800",
              fields: [
                { label: "Total Profile Views (this week)", placeholder: "e.g., 142 views" },
                { label: "Search Impressions", placeholder: "e.g., 89 searches found the profile" },
                { label: "Direction Requests", placeholder: "e.g., 12 customers asked for directions" },
                { label: "Phone Calls via GBP", placeholder: "e.g., 5 calls made from GBP listing" },
                { label: "New Google Reviews", placeholder: "e.g., 2 new reviews — both 5 stars" },
                { label: "Total Review Count", placeholder: "e.g., Now at 14 total reviews / 4.7 average" },
              ]
            },
            {
              section: "3. Social Media Performance",
              color: "bg-purple-50 border-purple-200",
              headerColor: "text-purple-800",
              fields: [
                { label: "Facebook Page Likes/Followers", placeholder: "e.g., 87 followers (+12 from last week)" },
                { label: "Facebook Post Reach (combined)", placeholder: "e.g., 420 total reach this week" },
                { label: "Facebook Engagement (likes/comments/shares)", placeholder: "e.g., 34 interactions" },
                { label: "Instagram Followers", placeholder: "e.g., 61 followers (+9 from last week)" },
                { label: "Instagram Post Reach (combined)", placeholder: "e.g., 380 reach this week" },
                { label: "Instagram Engagement", placeholder: "e.g., 42 likes, 6 comments, 3 saves" },
              ]
            },
            {
              section: "4. Best-Performing Content",
              color: "bg-orange-50 border-orange-200",
              headerColor: "text-orange-800",
              fields: [
                { label: "Best Post This Week", placeholder: "e.g., Student discount post — reached 280 people, 18 likes, 4 shares" },
                { label: "Why It Performed Well", placeholder: "e.g., Relatable content, strong emoji use, shared by followers to friends" },
                { label: "Worst Performing Post", placeholder: "e.g., Opening hours post — only 45 reach" },
                { label: "Reason / Learning", placeholder: "e.g., Text-heavy, no strong visual. Will improve next time." },
              ]
            },
            {
              section: "5. Issues / Blockers",
              color: "bg-red-50 border-red-200",
              headerColor: "text-red-800",
              fields: [
                { label: "Any Delays This Week", placeholder: "e.g., None — all posts delivered on schedule" },
                { label: "Assets Still Needed from Client", placeholder: "e.g., Still waiting on updated menu prices and wrap photos" },
                { label: "Client Approvals Pending", placeholder: "e.g., Month 2 content calendar sent — awaiting sign-off" },
                { label: "Technical Issues", placeholder: "e.g., GBP verification still processing — following up with Google support" },
              ]
            },
            {
              section: "6. Next Week's Plan",
              color: "bg-teal-50 border-teal-200",
              headerColor: "text-teal-800",
              fields: [
                { label: "GBP Post Planned", placeholder: "e.g., Wrap spotlight — chicken wrap with price + photo" },
                { label: "Facebook/Instagram Posts Planned", placeholder: "e.g., Halal community post + Kids meal post" },
                { label: "Stories Planned", placeholder: "e.g., Behind-the-scenes story: burger prep process" },
                { label: "Review Push Planned", placeholder: "e.g., Share review QR code in story + remind counter staff" },
                { label: "Other Actions", placeholder: "e.g., Update GBP with new specials menu, add Q&A entry" },
              ]
            },
          ].map((section) => (
            <div key={section.section} className={`rounded-xl border p-4 ${section.color}`}>
              <h4 className={`font-bold text-sm mb-3 ${section.headerColor}`}>{section.section}</h4>
              <div className="space-y-2">
                {section.fields.map((field, i) => (
                  <div key={i} className="bg-white rounded-lg p-3 border border-gray-100">
                    <div className="text-xs font-semibold text-gray-700 mb-1">{field.label}</div>
                    <div className="text-xs text-gray-400 italic">{field.placeholder}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="bg-slate-50 border border-slate-200">
        <h3 className="font-bold text-gray-900 mb-3 text-lg">📌 Reporting Guidelines</h3>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            { title: "Frequency", detail: "Weekly update (brief) + Monthly full report at end of each month" },
            { title: "Format", detail: "PDF, Google Doc, or simple email — agree with client on preferred format" },
            { title: "Delivery Day", detail: "Send every Monday (previous week summary) or Friday (same week wrap-up)" },
            { title: "Data Sources", detail: "GBP Insights dashboard + Meta Business Suite (Facebook/Instagram)" },
            { title: "Language", detail: "Keep it simple. No marketing jargon. Client must understand it at a glance." },
            { title: "Honest Reporting", detail: "If something underperformed — say so. Explain why and what you'll do differently. Builds client trust." },
          ].map((g) => (
            <div key={g.title} className="flex items-start gap-3 bg-white rounded-xl p-3 border border-gray-100">
              <span className="font-bold text-slate-600 text-lg flex-shrink-0">→</span>
              <div>
                <div className="font-semibold text-gray-900 text-sm">{g.title}</div>
                <div className="text-xs text-gray-600">{g.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}
