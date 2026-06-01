import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";

const weeks = [
  {
    week: "Week 5",
    theme: "Momentum & Menu Spotlight",
    color: "border-blue-400 bg-blue-50",
    badge: "bg-blue-500",
    tasks: [
      "Publish 2 Facebook posts: feature a signature burger + a combo meal deal",
      "Publish 2 Instagram posts: hero burger visual + 'what's your go-to order?' engagement post",
      "Publish 1 GBP post: highlight best-selling menu item with photo and price",
      "Create an Instagram Story poll: 'Single or Double patty?' (engagement tactic)",
      "Refine captions based on Month 1 data — use more action-driven language",
      "Start testing new hashtag sets for higher local reach",
      "Continue review requests — follow up QR code strategy from Week 3",
      "Respond to all Facebook and Instagram comments and messages within 24 hours",
    ]
  },
  {
    week: "Week 6",
    theme: "Halal Trust & Community Focus",
    color: "border-indigo-400 bg-indigo-50",
    badge: "bg-indigo-500",
    tasks: [
      "Publish a dedicated Halal trust content post — 'We're proud to serve 100% halal food'",
      "Create a Facebook post targeting the local Muslim community in the area",
      "Publish Instagram carousel or image set: 'What makes our burgers halal?'",
      "Publish GBP post: 'Halal food available — welcoming all customers'",
      "Engage with local Facebook groups (community groups, local suburb groups) — share page link if allowed",
      "Add Q&A entry to GBP: 'Is the food halal?' with a clear, confident answer",
      "Check GBP for new questions and answer them promptly",
      "Review follower growth on Facebook and Instagram — note what's driving it",
    ]
  },
  {
    week: "Week 7",
    theme: "Deals, Discounts & Late-Night Appeal",
    color: "border-purple-400 bg-purple-50",
    badge: "bg-purple-500",
    tasks: [
      "Create a 'Meal Deal of the Week' Facebook and Instagram post",
      "Promote student discount offer — image + caption: 'Show your student ID, save every visit'",
      "Publish GBP post: Meal deal promotion with price and photo",
      "Create a late-night food appeal post: 'Late-night cravings? We've got you covered 🍔'",
      "Test Reel or short video on Instagram if client has video footage",
      "Create an Instagram Story countdown or limited-time offer tease",
      "Review and update GBP opening hours if late-night hours need to be highlighted",
      "Monitor Google Maps ranking for key terms: 'halal burger [suburb]', 'smash burger near me'",
    ]
  },
  {
    week: "Week 8",
    theme: "Social Proof & Review Push",
    color: "border-teal-400 bg-teal-50",
    badge: "bg-teal-500",
    tasks: [
      "Share a customer review (screenshot or quote) as a social media post",
      "Create a 'Leave us a Google review!' call-to-action post with direct link",
      "Publish GBP post: Thank customers for support + milestone (e.g., first month on socials)",
      "Run an Instagram Story: 'Tag a friend who needs to try this 👇' — burger photo",
      "Compile Month 2 mid-point data: review count, GBP views, social followers, engagement",
      "Adjust content themes based on mid-month performance data",
      "Prepare Month 2 wrap-up report for client",
      "Plan Month 3 content direction and upgrade opportunities",
    ]
  },
];

export default function Month2Plan() {
  return (
    <section id="month2">
      <SectionHeader
        number="4"
        title="Month 2: Consistency & Local Growth"
        subtitle="Weeks 5–8 — Build momentum, grow trust, increase local visibility"
        icon="📈"
        color="bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
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
                  <span className="text-blue-500 font-bold flex-shrink-0 mt-0.5">→</span>
                  <span>{task}</span>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>

      <Card className="bg-blue-50 border border-blue-200">
        <h3 className="font-bold text-blue-900 mb-3 text-lg">📊 Month 2 Key Focus Areas</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { title: "Content Themes to Test", icon: "🎨", items: ["Behind-the-scenes food prep", "Customer 'tag a friend' posts", "Limited-time deal announcements", "Kids meal / family focus posts", "Comparison posts: single vs double smash"] },
            { title: "Hashtag Testing Groups", icon: "#️⃣", items: ["#SmashBurger #HalalFood #AustraliaEats", "#[Suburb]Food #[City]Burgers #LocalEats", "#StudentDeals #BudgetEats #MealDeal", "#HalalAustralia #HalalRestaurant", "#LateNightFood #TakeawayLife"] },
            { title: "Review Growth Targets", icon: "⭐", items: ["Target: 5–10 new reviews by end of Month 2", "Staff ask every dine-in customer", "QR code on packaging and counter", "WhatsApp/SMS follow-up to loyal customers", "Reply to every review — good or bad"] },
          ].map((g) => (
            <div key={g.title} className="bg-white rounded-xl p-4 shadow-sm">
              <div className="font-semibold text-gray-900 mb-2 flex items-center gap-2"><span>{g.icon}</span>{g.title}</div>
              <ul className="space-y-1">
                {g.items.map((item, i) => (
                  <li key={i} className="text-xs text-gray-600 flex items-start gap-1.5">
                    <span className="text-blue-400 flex-shrink-0 mt-0.5">•</span>{item}
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
