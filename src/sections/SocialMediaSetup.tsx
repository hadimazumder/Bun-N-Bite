import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import ActionCheckbox from "../components/ActionCheckbox";

const fbChecklist = [
  { item: "Page Name", action: "Bun N Bite Smash Burgers", note: "Exact legal/trading name" },
  { item: "Username / Handle", action: "@bunnbitesmashburgers or @bunnbiteburgers", note: "Keep short, memorable, and search-friendly" },
  { item: "Business Category", action: "Fast Food Restaurant / Burger Restaurant", note: "Helps Facebook show you in relevant searches" },
  { item: "Profile Photo", action: "Brand logo — clear, centred, high resolution", note: "180x180px minimum — no blurry images" },
  { item: "Cover Photo", action: "Branded hero burger image or graphic", note: "820x312px — include name and tagline if possible" },
  { item: "About / Bio Description", action: "Short, punchy: halal smash burgers, wraps, meal deals, student discount, [suburb/city]", note: "255 characters max" },
  { item: "Contact Number", action: "Business mobile or landline", note: "Displayed on page for click-to-call" },
  { item: "Business Address", action: "Full address with suburb, state, postcode", note: "Enables map/check-in feature" },
  { item: "Opening Hours", action: "Set accurate hours including late-night", note: "Customers check this constantly" },
  { item: "Website/Order Link", action: "Add to 'Website' field + set as CTA button", note: "Use 'Order Now' as the CTA button type" },
  { item: "Page CTA Button", action: "Order Now / Call Now / Learn More", note: "Drives direct action from the page" },
  { item: "WhatsApp Link (optional)", action: "Add WhatsApp number if used for orders", note: "Very common in Australian halal food businesses" },
  { item: "Services Tab", action: "Add: Dine-In, Takeaway, Online Ordering (if applicable)", note: "Adds credibility and completeness" },
  { item: "Enable Reviews", action: "Turn on Facebook Reviews feature", note: "Social proof for new page visitors" },
  { item: "First 3 Posts (pre-launch)", action: "Publish before promoting the page", note: "Avoid sending people to an empty page" },
  { item: "Pin a Post", action: "Pin the most important post (intro, deal, or brand post)", note: "First impression for new visitors" },
  { item: "Page Credibility Elements", action: "Verify business if eligible, add business story, complete all sections", note: "A complete page ranks better in Facebook search" },
];

const igChecklist = [
  { item: "Account Type", action: "Instagram Business Account (not personal)", note: "Required for analytics and CTA buttons" },
  { item: "Username", action: "@bunnbite or @bunnbitesmashburgers", note: "Match Facebook handle if possible" },
  { item: "Display Name", action: "Bun N Bite Smash Burgers", note: "Shows above posts — use full name" },
  { item: "Profile Photo", action: "Same logo as Facebook — consistency is key", note: "110x110px displayed, upload 500x500px" },
  { item: "Bio Line 1", action: "🍔 Halal Smash Burgers — [Suburb/City]", note: "Immediately tells them who you are" },
  { item: "Bio Line 2", action: "Wraps | Meal Deals | Sides | Kids Meals", note: "Menu categories at a glance" },
  { item: "Bio Line 3", action: "🎓 Student Discount Available", note: "Targets a key customer group" },
  { item: "Bio Line 4", action: "🕐 Open [Hours] | 📍 [Suburb]", note: "Answers the two most common questions" },
  { item: "Bio Line 5 (CTA)", action: "👇 Order or find us below", note: "Points to link in bio" },
  { item: "Link in Bio", action: "Website, ordering link, or Linktree with all links", note: "Update regularly for promotions" },
  { item: "Connect to Facebook", action: "Link Instagram to Facebook Business page", note: "Enables cross-posting and Meta insights" },
  { item: "Contact Options", action: "Add email, phone, and business address", note: "Visible on business profile" },
  { item: "Story Highlights", action: "Create: 📖 Menu | 🔥 Deals | ✅ Halal | ⭐ Reviews | 🕐 Hours", note: "Pre-create even if empty — fill as content grows" },
  { item: "First 9 Posts (Grid)", action: "Plan a cohesive grid: 3 burgers, 2 deals, 1 halal, 1 student, 1 wraps, 1 brand intro", note: "First 9 posts = your storefront impression" },
  { item: "Category / Industry", action: "Set to: Restaurant / Fast Food Restaurant", note: "Shown under your name on profile" },
  { item: "Professional Dashboard", action: "Enable Instagram Insights for tracking", note: "Needed for weekly reporting" },
];

const grid9 = [
  { pos: "1", theme: "Brand Introduction", desc: "Who we are — bold burger graphic with name and tagline" },
  { pos: "2", theme: "Hero Burger Shot", desc: "Your best-looking signature smash burger, close-up" },
  { pos: "3", theme: "Halal Announcement", desc: "Clean graphic: '100% Halal Food' with logo" },
  { pos: "4", theme: "Meal Deal Promo", desc: "Best value combo — burger + fries + drink, with price" },
  { pos: "5", theme: "Wrap Spotlight", desc: "A wrap option to show menu variety" },
  { pos: "6", theme: "Student Discount", desc: "'Student ID = Savings' — relatable and shareable" },
  { pos: "7", theme: "Behind the Scenes", desc: "Burger being smashed on the grill (video or photo)" },
  { pos: "8", theme: "Customer Favourite", desc: "'Our #1 seller' post — most popular item highlighted" },
  { pos: "9", theme: "CTA / Visit Us", desc: "Opening hours + address + 'Come find us' graphic" },
];

export default function SocialMediaSetup() {
  return (
    <section id="social-setup">
      <SectionHeader
        number="7"
        title="Facebook & Instagram Setup Checklist"
        subtitle="Everything needed to launch both pages professionally from day one"
        icon="📱"
        color="bg-gradient-to-r from-blue-500 to-pink-500 text-white"
      />

      <div className="grid md:grid-cols-2 gap-5 mb-5">
        <Card>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">📘</span>
            <h3 className="font-bold text-gray-900 text-lg">Facebook Page Setup</h3>
          </div>
          <div className="space-y-2">
            {fbChecklist.map((item, i) => (
              <div key={i} className="border border-gray-100 rounded-lg p-3 hover:bg-blue-50 transition-colors">
                <div className="flex items-start gap-2">
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">
                      <ActionCheckbox id={`facebook-setup-${i}`} label={item.item} tone="blue" />
                    </div>
                    <div className="text-xs text-blue-700 font-medium mt-0.5">{item.action}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{item.note}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">📸</span>
            <h3 className="font-bold text-gray-900 text-lg">Instagram Account Setup</h3>
          </div>
          <div className="space-y-2">
            {igChecklist.map((item, i) => (
              <div key={i} className="border border-gray-100 rounded-lg p-3 hover:bg-pink-50 transition-colors">
                <div className="flex items-start gap-2">
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">
                      <ActionCheckbox id={`instagram-setup-${i}`} label={item.item} tone="pink" />
                    </div>
                    <div className="text-xs text-pink-700 font-medium mt-0.5">{item.action}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{item.note}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card>
        <h3 className="font-bold text-gray-900 mb-4 text-lg">📸 First 9-Post Grid Plan (Instagram)</h3>
        <p className="text-sm text-gray-600 mb-4">Your Instagram grid is your shop window. Plan the first 9 posts to make an instant, professional impression on new visitors.</p>
        <div className="grid grid-cols-3 gap-3">
          {grid9.map((post) => (
            <div key={post.pos} className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-xl p-3 text-center">
              <div className="text-xs font-bold text-orange-600 mb-1">Post #{post.pos}</div>
              <div className="text-xs font-bold text-gray-900 mb-1">{post.theme}</div>
              <div className="text-xs text-gray-600 leading-tight">{post.desc}</div>
            </div>
          ))}
        </div>
        <div className="mt-4 bg-amber-50 rounded-xl p-3 border border-amber-200">
          <p className="text-xs text-amber-800">
            <strong>Pro tip:</strong> Post all 9 at launch (or spread over the first 2 weeks) before actively promoting the page. Sending people to a page with no content damages first impressions and reduces follow rate significantly.
          </p>
        </div>
      </Card>
    </section>
  );
}
