import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import ActionCheckbox from "../components/ActionCheckbox";

const kickoffDays = [
  {
    day: "Day 1",
    label: "Monday",
    icon: "🔑",
    color: "bg-red-500",
    tasks: [
      "Send client a welcome email with this plan attached",
      "Request all access: Google Business Profile Manager invite",
      "Send client the material request list — photos, logo, menu, hours, pricing",
      "Confirm business address, phone number, and website/order link",
      "Set up internal project tracker (Trello/Notion/Google Sheet) for the 3-month plan",
    ]
  },
  {
    day: "Day 2",
    label: "Tuesday",
    icon: "🗺️",
    color: "bg-orange-500",
    tasks: [
      "Begin Google Business Profile audit once access is granted",
      "Document all issues: missing info, wrong category, low photo count, review status",
      "Check current GBP ranking for target keywords: 'smash burger [suburb]', 'halal burger [suburb]'",
      "Identify top 3 local competitors on Google Maps and review their GBP profiles",
      "Screenshot current GBP Insights data as baseline before any changes",
    ]
  },
  {
    day: "Day 3",
    label: "Wednesday",
    icon: "📘",
    color: "bg-blue-600",
    tasks: [
      "Create Facebook Business Page (once logo/profile photo received from client)",
      "Set up all profile fields: name, category, bio, contact, hours, address",
      "Upload profile photo and cover photo",
      "Set page CTA button to Order Now or Call Now",
      "Prepare welcome post copy for review before publishing",
    ]
  },
  {
    day: "Day 4",
    label: "Thursday",
    icon: "📸",
    color: "bg-pink-600",
    tasks: [
      "Create Instagram Business Account (connect to Facebook page)",
      "Set up username, bio, profile photo, link in bio",
      "Create Story Highlight cover placeholders: Menu, Deals, Halal, Reviews, Hours",
      "Draft first 3 Instagram post captions for client review",
      "Plan the first 9-post grid layout for visual direction",
    ]
  },
  {
    day: "Day 5",
    label: "Friday",
    icon: "✍️",
    color: "bg-purple-600",
    tasks: [
      "Write keyword-optimised GBP business description draft — send to client for approval",
      "Begin drafting Month 1 Week 1–2 social media content captions",
      "Prepare GBP audit report (what's wrong, what needs fixing, what we'll change)",
      "Set up content scheduling tool (Meta Business Suite, Buffer, or Later)",
      "Send client a progress update: 'Here's what we've done and what we need from you'",
    ]
  },
  {
    day: "Day 6",
    label: "Saturday",
    icon: "🚀",
    color: "bg-emerald-600",
    tasks: [
      "Apply all GBP optimisations (description, categories, hours, attributes)",
      "Upload any food photos already received to GBP",
      "Schedule first Facebook and Instagram posts for early next week",
      "Create the Week 1 Google Business Profile post and schedule it",
      "Set up Google Review QR code link — ready to share with client for counter use",
    ]
  },
  {
    day: "Day 7",
    label: "Sunday",
    icon: "📋",
    color: "bg-gray-700",
    tasks: [
      "Review everything done this week — is it all correct and professional?",
      "Confirm what assets are still missing from the client",
      "Prepare Week 2 task list and priorities",
      "Send a brief kickoff summary to the client: what's live, what's coming, what we need",
      "Add all 12-week content themes to your content scheduler as placeholder entries",
    ]
  },
];

export default function FinalActionPlan() {
  return (
    <section id="final-action">
      <SectionHeader
        number="16"
        title="Final Action Plan"
        subtitle="7-day kickoff checklist — start executing this week"
        icon="🚀"
        color="bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 text-white"
      />

      <Card className="mb-5 bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200">
        <div className="flex items-start gap-3">
          <span className="text-2xl">⚡</span>
          <p className="text-sm text-gray-800 leading-relaxed">
            <strong>The most important week of any project is Week 1.</strong> This is when first impressions are set, momentum is built, and the client's trust is either won or lost. Follow this 7-day kickoff plan precisely and you will enter Month 1 with everything in place to deliver results.
          </p>
        </div>
      </Card>

      <div className="space-y-4 mb-6">
        {kickoffDays.map((d) => (
          <Card key={d.day} className="hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className={`${d.color} text-white rounded-xl w-16 h-16 flex flex-col items-center justify-center flex-shrink-0 shadow-sm`}>
                <div className="text-xl">{d.icon}</div>
                <div className="text-xs font-bold">{d.day}</div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-bold text-gray-900">{d.label}</h3>
                  <span className="text-xs text-gray-400 font-medium">— {d.tasks.length} tasks</span>
                </div>
                <div className="grid md:grid-cols-2 gap-2">
                  {d.tasks.map((task, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-gray-700 bg-gray-50 rounded-lg p-2">
                      <span className="text-gray-400 flex-shrink-0 font-mono text-xs mt-0.5">{String(i + 1).padStart(2, "0")}.</span>
                      <ActionCheckbox id={`kickoff-${d.day}-${i}`} label={task} tone="orange" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <h3 className="font-bold text-white text-xl mb-4">🎯 End of Week 1 — You Should Have:</h3>
        <div className="grid md:grid-cols-2 gap-3 mb-4">
          {[
            "✅ Google Business Profile access confirmed and audit completed",
            "✅ GBP optimisations started or fully applied",
            "✅ Facebook Business Page live with all profile fields complete",
            "✅ Instagram Business Account live and connected to Facebook",
            "✅ First post scheduled or published on both platforms",
            "✅ First GBP post live",
            "✅ Content calendar Week 1–4 drafted",
            "✅ Client materials list sent and first assets received",
            "✅ Brand tone, colour, and style direction agreed",
            "✅ Google Review QR code ready to hand to client",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2 text-sm text-gray-300">
              <span className="font-bold text-green-400 flex-shrink-0">{item.split(" ")[0]}</span>
              <span>{item.split(" ").slice(1).join(" ")}</span>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-700 pt-4 text-center">
          <div className="text-orange-400 font-bold text-lg mb-1">💡 Final Reminder</div>
          <p className="text-gray-400 text-sm">Consistency beats perfection. A good post that goes out on time beats a perfect post that goes out 2 weeks late. Start. Ship. Improve. Repeat.</p>
        </div>
      </Card>
    </section>
  );
}
