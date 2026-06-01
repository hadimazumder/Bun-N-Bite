import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";

const materials = [
  {
    category: "Access & Admin",
    icon: "🔑",
    color: "bg-red-50 border-red-200",
    badgeColor: "bg-red-500",
    priority: "URGENT — Needed Before Anything Else",
    items: [
      { item: "Google Business Profile Access", detail: "Invite us as a Manager on GBP — we need this to optimise and post. Client keeps Owner status.", required: true },
      { item: "Facebook Business Account Access", detail: "Either create a Business Page and add us as Admin, or we create it and transfer ownership to client.", required: true },
      { item: "Instagram Account Access", detail: "If client creates it: add us as admin. If we create it: login credentials shared securely.", required: true },
      { item: "Meta Business Suite Access", detail: "For scheduling, analytics, and Instagram management via desktop. Grant editor or admin access.", required: true },
    ]
  },
  {
    category: "Brand Assets",
    icon: "🎨",
    color: "bg-purple-50 border-purple-200",
    badgeColor: "bg-purple-600",
    priority: "High Priority — Needed in Week 1",
    items: [
      { item: "Business Logo", detail: "High-resolution PNG with transparent background. If unavailable, request from whoever made it or we can use text-based alternative.", required: true },
      { item: "Brand Colour Preferences", detail: "Any specific colours used? Existing brand style? Or are we free to establish one?", required: false },
      { item: "Font Preferences", detail: "Any existing fonts used in branding? Or give us direction: bold, modern, fun, etc.", required: false },
    ]
  },
  {
    category: "Food & Menu Photos",
    icon: "📷",
    color: "bg-orange-50 border-orange-200",
    badgeColor: "bg-orange-500",
    priority: "High Priority — Content Quality Depends on This",
    items: [
      { item: "High-Quality Food Photos", detail: "Minimum 10–15 photos: signature burgers, wraps, sides, drinks, meal combos. Natural light or professional studio preferred.", required: true },
      { item: "Short Food Videos", detail: "Even phone-recorded: burger being smashed, food being assembled, chips coming out hot. These are gold for social media.", required: false },
      { item: "Storefront / Interior Photos", detail: "Exterior of the restaurant, signage, dining area, counter — builds local trust on GBP.", required: true },
      { item: "Kitchen / Behind-the-Scenes Photos", detail: "Optional but highly effective for authenticity content.", required: false },
      { item: "Team Photo", detail: "Staff photo (if client is comfortable) — humanises the brand.", required: false },
    ]
  },
  {
    category: "Menu & Pricing",
    icon: "📋",
    color: "bg-green-50 border-green-200",
    badgeColor: "bg-green-600",
    priority: "High Priority — Needed for GBP and Social Content",
    items: [
      { item: "Full Menu with Item Names", detail: "All burgers, wraps, sides, drinks, kids meals, desserts — full list.", required: true },
      { item: "Current Prices", detail: "Accurate pricing for every menu item. Must be correct before posting publicly.", required: true },
      { item: "Meal Deals / Combo Offers", detail: "Any existing combo deals with pricing — these are key promotional content.", required: true },
      { item: "Student Discount Details", detail: "Exact discount amount or percentage, any conditions (e.g., valid student ID required).", required: true },
      { item: "Special Offers or Seasonal Items", detail: "Any limited-time items, seasonal specials, or rotating menu items.", required: false },
      { item: "Menu PDF or Photo of Printed Menu", detail: "Even a photo of the printed menu is useful as a starting point.", required: false },
    ]
  },
  {
    category: "Business Information",
    icon: "🏠",
    color: "bg-blue-50 border-blue-200",
    badgeColor: "bg-blue-600",
    priority: "Essential — Cannot Launch Without These",
    items: [
      { item: "Full Business Address", detail: "Street number, street name, suburb, state, postcode. Must match GBP, Facebook, Instagram, and website.", required: true },
      { item: "Business Phone Number", detail: "The main customer contact number. Must be Australian format and currently active.", required: true },
      { item: "Opening Hours", detail: "Exact hours for every day of the week including late-night hours and any days closed.", required: true },
      { item: "Website URL", detail: "If the business has a website or online ordering page — share the link.", required: false },
      { item: "Online Ordering Platform Link", detail: "DoorDash, Uber Eats, Mr Yum, Hey You, or any ordering platform being used.", required: false },
      { item: "Halal Certification Status", detail: "Is the business halal certified by a body? Or self-declared halal? We need to know what we can and cannot claim.", required: true },
    ]
  },
  {
    category: "Content Direction",
    icon: "💡",
    color: "bg-amber-50 border-amber-200",
    badgeColor: "bg-amber-600",
    priority: "Helpful — Better Content Output",
    items: [
      { item: "Competitor Awareness", detail: "Any local smash burger or halal restaurants nearby that the client is aware of? Helps us position content strategically.", required: false },
      { item: "Target Customer Profile", detail: "Who is their ideal customer? Students? Families? Young professionals? Night owls? The more specific, the better the content.", required: false },
      { item: "Upcoming Events or Promotions", detail: "Any planned deals, events, new menu launches, or seasonal offers coming up in the next 3 months.", required: false },
      { item: "Content Preferences", detail: "Any content styles the client definitely does NOT want? (e.g., no competitor mentions, no alcohol references, etc.)", required: false },
      { item: "Social Media Accounts to Follow / Be Inspired By", detail: "Any restaurants or brands they admire online? Gives us brand direction.", required: false },
    ]
  },
];

export default function ClientMaterials() {
  return (
    <section id="client-materials">
      <SectionHeader
        number="14"
        title="Client Material Request List"
        subtitle="Everything we need from the client to start and deliver quality work"
        icon="📁"
        color="bg-gradient-to-r from-gray-700 to-gray-900 text-white"
      />

      <Card className="mb-5 bg-red-50 border border-red-200">
        <div className="flex items-start gap-3">
          <span className="text-2xl">⚠️</span>
          <div>
            <h3 className="font-bold text-red-900 mb-1">Important Note for Client</h3>
            <p className="text-sm text-red-800">
              The quality and speed of our work is directly tied to the materials provided. Missing photos, incorrect information, or delayed access to platforms will slow down delivery and reduce content quality. We recommend providing all required assets in Week 1 before any work begins publicly.
            </p>
          </div>
        </div>
      </Card>

      <div className="space-y-5">
        {materials.map((cat) => (
          <Card key={cat.category} className={`border ${cat.color}`}>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-2xl">{cat.icon}</span>
              <h3 className="font-bold text-gray-900 text-lg">{cat.category}</h3>
              <span className={`${cat.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full ml-auto`}>{cat.priority}</span>
            </div>
            <div className="space-y-2">
              {cat.items.map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-3 border border-gray-100 flex items-start gap-3">
                  <span className={`font-bold text-sm flex-shrink-0 mt-0.5 ${item.required ? "text-red-500" : "text-gray-400"}`}>
                    {item.required ? "★" : "○"}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-semibold text-gray-900 text-sm">{item.item}</span>
                      {item.required && <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-0.5 rounded-full">Required</span>}
                      {!item.required && <span className="bg-gray-100 text-gray-600 text-xs font-bold px-2 py-0.5 rounded-full">Optional but helpful</span>}
                    </div>
                    <p className="text-xs text-gray-600 mt-1">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>

      <Card className="mt-5 bg-gray-50 border border-gray-200">
        <h3 className="font-bold text-gray-900 mb-3">📤 How to Send Materials</h3>
        <div className="grid md:grid-cols-3 gap-3 text-sm text-gray-700">
          {[
            { method: "Google Drive", detail: "Create a shared folder and drop all files in — photos, videos, menu PDFs, logo files" },
            { method: "WhatsApp / Dropbox", detail: "Good for quick photo sharing but may compress quality — use for low-res reference only" },
            { method: "Email", detail: "For text information: menu, prices, hours, contact details, links" },
          ].map((m) => (
            <div key={m.method} className="bg-white rounded-xl p-3 border border-gray-100">
              <div className="font-semibold text-gray-800 mb-1">📎 {m.method}</div>
              <p className="text-xs text-gray-600">{m.detail}</p>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}
