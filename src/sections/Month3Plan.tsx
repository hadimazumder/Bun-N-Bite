import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";

const weeks = [
  {
    week: "Week 9",
    theme: "Data-Led Optimisation",
    color: "border-emerald-400 bg-emerald-50",
    badge: "bg-emerald-500",
    tasks: [
      "Review full 2-month analytics: which posts got highest reach and engagement",
      "Double down on the top 2 performing content themes from Month 1 & 2",
      "Publish best-performing menu item post (updated, refreshed visual)",
      "Update GBP business description with any new keywords or seasonal terms",
      "Publish 1 GBP post: 'New month, same cravings — come visit us!'",
      "Audit GBP photos — replace any low-quality images with better ones if available",
      "Push for more Google reviews — send follow-up to known loyal customers",
      "Check local Google Maps search ranking for key target keywords",
    ]
  },
  {
    week: "Week 10",
    theme: "Conversion-Focused Content",
    color: "border-rose-400 bg-rose-50",
    badge: "bg-rose-500",
    tasks: [
      "Create offer-focused posts: 'This week only' or 'Weekend special' deals",
      "Publish a value post: 'Best meal deal in [suburb] for under $15'",
      "Publish GBP post with a time-sensitive offer to drive in-store visits",
      "Create a 'Top 3 reasons to try Bun N Bite' Facebook/Instagram carousel",
      "Test a Story-based offer with a countdown or 'limited offer' sticker",
      "Promote any seasonal items, school holiday specials, or event-based content",
      "Encourage 'share this post' content — e.g., 'Tag someone who needs a smash burger today'",
      "Review and update Instagram bio link and Highlights if needed",
    ]
  },
  {
    week: "Week 11",
    theme: "Brand Trust & Community Building",
    color: "border-violet-400 bg-violet-50",
    badge: "bg-violet-500",
    tasks: [
      "Share a customer review or testimonial post — 'What our customers are saying ❤️'",
      "Publish a 'thank you' milestone post: '3 months of sharing our love for smash burgers'",
      "Publish GBP post: Appreciation post for customer support",
      "Feature a staff or kitchen behind-the-scenes post for authenticity",
      "Create a 'Did you know?' post about the smash burger cooking method",
      "Share a family/kids meal post targeting parents in the area",
      "Final push on reviews: 'Help us grow — leave a Google review in 60 seconds'",
      "Prepare assets and data for final 3-month report",
    ]
  },
  {
    week: "Week 12",
    theme: "3-Month Wrap-Up & Future Planning",
    color: "border-amber-400 bg-amber-50",
    badge: "bg-amber-600",
    tasks: [
      "Publish final week content: bold, engaging, high-visual impact posts",
      "Publish GBP post: month-end wrap-up or new offer for the next month",
      "Compile all 3 months of GBP Insights data into client report",
      "Compile all 3 months of Facebook and Instagram performance data",
      "Document total reviews gained, top posts, top search queries, total reach",
      "Identify what worked best — content types, timing, themes, hashtags",
      "Prepare 'Next 3 Months' growth plan recommendation for client",
      "Send professional 3-month performance review report to client",
      "Book client review call or send voice note summary",
    ]
  },
];

export default function Month3Plan() {
  return (
    <section id="month3">
      <SectionHeader
        number="5"
        title="Month 3: Optimisation & Conversion Focus"
        subtitle="Weeks 9–12 — Use data, sharpen content, drive results, deliver final review"
        icon="🔥"
        color="bg-gradient-to-r from-emerald-600 to-teal-600 text-white"
      />

      <div className="space-y-5 mb-5">
        {weeks.map((w) => (
          <Card key={w.week} className={`border-l-4 ${w.color}`}>
            <div className="flex items-center gap-3 mb-4">
              <span className={`${w.badge} text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider`}>{w.week}</span>
              <h3 className="font-bold text-gray-900 text-lg">{w.theme}</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-2">
              {w.tasks.map((task, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-gray-700 bg-white rounded-lg p-2.5 border border-gray-100">
                  <span className="text-emerald-500 font-bold flex-shrink-0 mt-0.5">→</span>
                  <span>{task}</span>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>

      <Card className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200">
        <h3 className="font-bold text-emerald-900 mb-4 text-lg">📋 Final 3-Month Report Should Include</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { title: "Google Business Profile", items: ["Total search impressions (Month 1 vs Month 3)", "Total profile views", "Direction requests and phone calls", "New photos added", "Total GBP posts published", "Review count start vs end"] },
            { title: "Social Media Growth", items: ["Facebook page likes/followers at Month 1 vs Month 3", "Instagram followers at Month 1 vs Month 3", "Total posts published across 3 months", "Average post reach per month", "Best performing post (all time)", "Most used hashtags by reach"] },
            { title: "Review Performance", items: ["Total Google reviews at start", "Total Google reviews at end", "Average star rating change", "Number of reviews responded to", "Review sentiment summary", "QR code usage (if trackable)"] },
            { title: "Content Performance", items: ["Best performing content pillar", "Best day/time for posting", "Highest engagement post", "Most saved/shared post", "Caption style that worked best", "Recommended content for Month 4+"] },
          ].map((section) => (
            <div key={section.title} className="bg-white rounded-xl p-4 shadow-sm">
              <div className="font-semibold text-gray-900 mb-2 text-sm">{section.title}</div>
              <ul className="space-y-1">
                {section.items.map((item, i) => (
                  <li key={i} className="text-xs text-gray-600 flex items-start gap-1.5">
                    <span className="text-emerald-400 flex-shrink-0 mt-0.5">✓</span>{item}
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
