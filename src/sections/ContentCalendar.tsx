import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";

const calendar = [
  { week: 1, month: "M1", theme: "Brand Launch", gbp: "Welcome to Bun N Bite — who we are + photo", social: "Brand introduction post + Halal announcement", caption: "First impression, bold and welcoming", cta: "Visit Us / Order Now", asset: "Logo, hero burger photo, storefront photo" },
  { week: 2, month: "M1", theme: "GBP Optimisation + First Menu Posts", gbp: "Signature burger spotlight with price", social: "Hero burger photo + brand intro story", caption: "Make them crave it immediately", cta: "Come Try It", asset: "Best burger photo, menu with prices" },
  { week: 3, month: "M1", theme: "Halal Trust + Student Discount Launch", gbp: "Halal food announcement post", social: "Halal post + Student discount post", caption: "Community-first, inclusive tone", cta: "Visit Us / Save Today", asset: "Halal-themed graphic or text design" },
  { week: 4, month: "M1", theme: "Meal Deal Focus + Review Ask", gbp: "Meal deal of the week post", social: "Combo deal post + Review request story", caption: "Value-driven, urgency tone", cta: "Order Now / Leave a Review", asset: "Combo meal photo, Google review QR code" },
  { week: 5, month: "M2", theme: "Menu Spotlight — Burgers", gbp: "Double smash burger highlight", social: "Best burger post + 'What's your order?' poll", caption: "Craving-trigger language", cta: "Try It Today", asset: "Close-up burger photo" },
  { week: 6, month: "M2", theme: "Halal Community + Local Engagement", gbp: "Halal food — welcoming all customers", social: "Halal trust post + local community shoutout", caption: "Warm, community-driven tone", cta: "Come Find Us", asset: "Halal-themed visual or quote graphic" },
  { week: 7, month: "M2", theme: "Deals + Late Night Appeal", gbp: "Late-night food offer post", social: "Meal deal + late-night craving post", caption: "Bold, fun, late-night energy", cta: "Order Now", asset: "Food photo at night / moody lighting" },
  { week: 8, month: "M2", theme: "Social Proof + Review Push", gbp: "Customer appreciation post", social: "Review screenshot post + tag-a-friend post", caption: "Warm, grateful, trust-building", cta: "Leave a Review / Tag a Friend", asset: "Review screenshot, customer photo (with permission)" },
  { week: 9, month: "M3", theme: "Best Performers Re-Run + Data Insights", gbp: "Refreshed version of best Month 1/2 GBP post", social: "Re-post best performing content with fresh caption", caption: "Tested language from top posts", cta: "Order Now / Visit Us", asset: "Reuse best photo with updated design" },
  { week: 10, month: "M3", theme: "Conversion Offer + FOMO Content", gbp: "Limited time or weekend offer post", social: "Time-sensitive deal post + 'Don't miss out' story", caption: "Urgency, FOMO-driven tone", cta: "Get It Before It's Gone", asset: "Deal graphic or styled offer image" },
  { week: 11, month: "M3", theme: "Behind the Scenes + Brand Trust", gbp: "Fresh ingredients / team appreciation post", social: "Kitchen prep video/photo + staff intro post", caption: "Authentic, humanising, proud tone", cta: "Visit Your Local Bun N Bite", asset: "BTS kitchen photo or short video clip" },
  { week: 12, month: "M3", theme: "3-Month Milestone + Thank You", gbp: "Thank you post — '3 months of serving you 🙏'", social: "Milestone celebration + future teaser post", caption: "Grateful, confident, forward-looking", cta: "Stay Tuned / Keep Following", asset: "Stats graphic or milestone design" },
];

export default function ContentCalendar() {
  return (
    <section id="content-calendar">
      <SectionHeader
        number="10"
        title="12-Week Content Calendar"
        subtitle="Week-by-week content plan across all platforms"
        icon="📅"
        color="bg-gradient-to-r from-indigo-600 to-blue-600 text-white"
      />

      <Card className="mb-4 bg-amber-50 border border-amber-200">
        <p className="text-sm text-amber-800">
          <strong>📌 How to Use This Calendar:</strong> Use this as your weekly content roadmap. Each week has one core theme. All content across GBP, Facebook, and Instagram should follow the same theme to reinforce the message. Adjust specific posts based on what's happening at the restaurant that week (specials, events, new items).
        </p>
      </Card>

      <div className="space-y-3">
        {calendar.map((row) => {
          const monthColors: Record<string, string> = {
            "M1": "bg-orange-500",
            "M2": "bg-blue-600",
            "M3": "bg-emerald-600",
          };
          const monthLabels: Record<string, string> = {
            "M1": "Month 1",
            "M2": "Month 2",
            "M3": "Month 3",
          };
          return (
            <Card key={row.week} className="hover:shadow-md transition-shadow">
              <div className="flex flex-wrap gap-3 items-start">
                <div className="flex items-center gap-2 min-w-[100px]">
                  <div className={`${monthColors[row.month]} text-white text-xs font-bold px-2 py-1 rounded-full`}>{monthLabels[row.month]}</div>
                  <div className="bg-gray-900 text-white text-xs font-black px-2 py-1 rounded-full">W{row.week}</div>
                </div>
                <div className="flex-1 min-w-[200px]">
                  <div className="font-bold text-gray-900 text-sm mb-2">{row.theme}</div>
                  <div className="grid md:grid-cols-2 gap-2 text-xs">
                    <div className="bg-green-50 rounded-lg p-2">
                      <div className="font-semibold text-green-700 mb-1">🗺️ GBP Post</div>
                      <div className="text-gray-700">{row.gbp}</div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-2">
                      <div className="font-semibold text-blue-700 mb-1">📱 Facebook / Instagram</div>
                      <div className="text-gray-700">{row.social}</div>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-2">
                      <div className="font-semibold text-purple-700 mb-1">✍️ Caption Angle</div>
                      <div className="text-gray-700">{row.caption}</div>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-2">
                      <div className="font-semibold text-orange-700 mb-1">📣 CTA</div>
                      <div className="text-gray-700">{row.cta}</div>
                    </div>
                  </div>
                  <div className="mt-2 bg-gray-50 rounded-lg p-2 text-xs">
                    <span className="font-semibold text-gray-600">📎 Asset Needed: </span>
                    <span className="text-gray-700">{row.asset}</span>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
