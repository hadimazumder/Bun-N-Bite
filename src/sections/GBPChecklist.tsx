import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import ActionCheckbox from "../components/ActionCheckbox";

const categories = [
  { section: "Business Information", icon: "🏷️", color: "bg-orange-50 border-orange-200", items: [
    { task: "Primary Category", detail: "Set to: Hamburger Restaurant", priority: "Critical" },
    { task: "Secondary Categories", detail: "Add: Fast Food Restaurant, Takeaway Restaurant, Halal Restaurant", priority: "Critical" },
    { task: "Business Name", detail: "Exact name: Bun N Bite Smash Burgers — no keyword stuffing in name", priority: "Critical" },
    { task: "Business Description", detail: "750-character keyword-rich description including: smash burgers, halal, takeaway, [suburb], wraps, deals, student discount, family friendly", priority: "Critical" },
    { task: "Phone Number", detail: "Australian mobile or landline — must match what's on website", priority: "High" },
    { task: "Website URL", detail: "Add ordering site, website, or Facebook page if no website", priority: "High" },
    { task: "Business Address", detail: "Exact street address — matches what's on all other platforms", priority: "Critical" },
    { task: "Service Area (if delivery)", detail: "Set delivery radius suburbs if offering delivery", priority: "Medium" },
  ]},
  { section: "Opening Hours & Attributes", icon: "🕐", color: "bg-blue-50 border-blue-200", items: [
    { task: "Regular Opening Hours", detail: "Set accurate hours for every day of the week", priority: "Critical" },
    { task: "Late Night Hours", detail: "If open late — make this visible. Huge advantage for late-night food searches", priority: "High" },
    { task: "Special/Public Holiday Hours", detail: "Update for public holidays to avoid misleading customers", priority: "Medium" },
    { task: "Business Attributes", detail: "Enable: Halal food, Takeaway available, Good for groups, Kids friendly, Accepts credit cards", priority: "High" },
    { task: "Accessibility Attributes", detail: "Add wheelchair access info if applicable", priority: "Low" },
    { task: "Ordering Attributes", detail: "Enable: Has menu, Dine-in, Takeout, Online ordering (if applicable)", priority: "High" },
  ]},
  { section: "Photos & Visual Content", icon: "📷", color: "bg-purple-50 border-purple-200", items: [
    { task: "Logo Photo", detail: "Upload clear, high-res logo as the logo image", priority: "Critical" },
    { task: "Cover/Banner Photo", detail: "Professional hero burger image — strong visual impact", priority: "Critical" },
    { task: "Food Photos", detail: "Minimum 10 high-quality photos: burgers, wraps, sides, meal deals", priority: "Critical" },
    { task: "Interior/Exterior Photos", detail: "Photo of storefront, dining area, counter — builds trust", priority: "High" },
    { task: "Team/Kitchen Photos", detail: "Behind-the-scenes — adds authenticity", priority: "Medium" },
    { task: "Photo Captions", detail: "Add descriptive captions to photos (e.g., 'Halal Double Smash Burger')", priority: "Medium" },
    { task: "Video Upload", detail: "Short 30–60 sec video of food being made — very high engagement", priority: "Medium" },
  ]},
  { section: "Menu & Products", icon: "🍔", color: "bg-red-50 border-red-200", items: [
    { task: "Menu Sections", detail: "Create sections: Burgers, Wraps, Sides, Drinks, Meal Deals, Kids Meals", priority: "Critical" },
    { task: "Menu Items", detail: "Add each item with name, description, and price", priority: "Critical" },
    { task: "Product/Service Listings", detail: "Add key items as 'Products' with photo and price", priority: "High" },
    { task: "Halal Label", detail: "Mention 'Halal' in menu section description or individual item descriptions", priority: "High" },
    { task: "Deals/Combos", detail: "List meal deals separately with pricing", priority: "High" },
    { task: "Menu PDF Link (optional)", detail: "Upload or link to a full menu PDF if available", priority: "Low" },
  ]},
  { section: "Google Business Posts", icon: "📝", color: "bg-green-50 border-green-200", items: [
    { task: "Post Frequency", detail: "Minimum 1 post per week — Google notices inactivity", priority: "Critical" },
    { task: "Post Types to Use", detail: "Use: What's New, Offer, Event — rotate between all three", priority: "High" },
    { task: "Post Content", detail: "Feature: new items, deals, student specials, halal messaging, opening hours reminders", priority: "High" },
    { task: "Post Photos", detail: "Always include a high-quality photo with every GBP post", priority: "Critical" },
    { task: "Post CTA", detail: "Every post must have a CTA: Order Now, Learn More, Call Now, Get Offer", priority: "High" },
    { task: "Offer Posts", detail: "Create GBP offers with start/end date and promo description for limited deals", priority: "Medium" },
  ]},
  { section: "Reviews & Q&A", icon: "⭐", color: "bg-amber-50 border-amber-200", items: [
    { task: "Google Review Link", detail: "Generate and share the direct review link with customers", priority: "Critical" },
    { task: "Respond to ALL Reviews", detail: "Reply to every review — positive and negative — within 48 hours", priority: "Critical" },
    { task: "Q&A Section", detail: "Add common questions and answers: 'Is the food halal?', 'Do you have student discounts?', 'Do you do delivery?'", priority: "High" },
    { task: "Review Response Tone", detail: "Positive: thank them warmly. Negative: acknowledge + invite them back professionally", priority: "High" },
    { task: "Flag Fake Reviews", detail: "Flag any spam or fake reviews through GBP — never respond aggressively", priority: "Medium" },
  ]},
  { section: "SEO & Keywords", icon: "🔍", color: "bg-teal-50 border-teal-200", items: [
    { task: "Target Keywords", detail: "Smash burgers [suburb], halal burger [suburb], halal takeaway [city], burger near me, best smash burger [area]", priority: "Critical" },
    { task: "Keyword Usage", detail: "Include target keywords naturally in: description, posts, product names, Q&A answers, and review responses", priority: "Critical" },
    { task: "Local Suburb Targeting", detail: "Mention surrounding suburbs in posts and description to capture wider local searches", priority: "High" },
    { task: "NAP Consistency", detail: "Ensure Name, Address, Phone is IDENTICAL across GBP, Facebook, Instagram, and website", priority: "Critical" },
    { task: "GBP Insights Tracking", detail: "Monitor monthly: search impressions, views, clicks, calls, directions", priority: "High" },
    { task: "Search Query Report", detail: "Check what queries customers use to find the listing — monthly", priority: "High" },
  ]},
];

export default function GBPChecklist() {
  return (
    <section id="gbp-checklist">
      <SectionHeader
        number="8"
        title="Google Business Profile SEO Checklist"
        subtitle="Every element needed to maximise Google Maps visibility"
        icon="🗺️"
        color="bg-gradient-to-r from-green-600 to-emerald-600 text-white"
      />

      <div className="space-y-5">
        {categories.map((cat) => (
          <Card key={cat.section} className={`border ${cat.color}`}>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">{cat.icon}</span>
              <h3 className="font-bold text-gray-900 text-lg">{cat.section}</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-2 font-semibold text-gray-700 rounded-l">Task</th>
                    <th className="text-left p-2 font-semibold text-gray-700">What to Do</th>
                    <th className="text-left p-2 font-semibold text-gray-700 rounded-r">Priority</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {cat.items.map((item, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="p-2 font-medium text-gray-900 text-xs align-top">
                        <ActionCheckbox id={`gbp-${cat.section}-${i}`} label={item.task} tone="green" compact />
                      </td>
                      <td className="p-2 text-gray-600 text-xs align-top">{item.detail}</td>
                      <td className="p-2 align-top">
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                          item.priority === "Critical" ? "bg-red-100 text-red-700" :
                          item.priority === "High" ? "bg-orange-100 text-orange-700" :
                          item.priority === "Medium" ? "bg-blue-100 text-blue-700" :
                          "bg-gray-100 text-gray-600"
                        }`}>{item.priority}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        ))}
      </div>

      <Card className="mt-5 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200">
        <h3 className="font-bold text-green-900 mb-3">🚀 GBP SEO Quick Wins (Do These First)</h3>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            "Write a complete 750-character keyword-rich business description",
            "Set correct primary and secondary categories immediately",
            "Upload minimum 10 high-quality food photos before promoting",
            "Add all menu items with names, descriptions, and prices",
            "Enable Halal food attribute under business attributes",
            "Start responding to any existing reviews immediately",
            "Add Q&A: 'Is your food halal?' with a clear, confident answer",
            "Set up and share the direct Google Review link with customers",
          ].map((tip, i) => (
            <div key={i} className="flex items-start gap-2 bg-white rounded-lg p-3 shadow-sm">
              <span className="font-bold text-green-600 flex-shrink-0">#{i + 1}</span>
              <span className="text-sm text-gray-700">{tip}</span>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}
