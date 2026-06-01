import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";

const weeks = [
  {
    week: "Week 1",
    theme: "Audit & Account Creation",
    color: "border-orange-400 bg-orange-50",
    badge: "bg-orange-500",
    tasks: [
      { category: "Google Business Profile", items: [
        "Full audit of existing GBP listing — categories, description, phone, address, hours, website link",
        "Check and fix any incorrect or missing information",
        "Review current photo quality and count",
        "Review current Google review count and recent responses",
        "Identify missing services, products, and menu items",
        "Note any competitor GBP listings for comparison",
      ]},
      { category: "Facebook Setup", items: [
        "Create Facebook Business Page under client's business account",
        "Set business name: Bun N Bite Smash Burgers",
        "Choose category: Fast Food Restaurant / Burger Restaurant",
        "Upload profile photo (logo or brand image from client)",
        "Upload cover photo (burger hero image or branded graphic)",
        "Write bio/description: halal, smash burgers, meal deals, wraps, student discount",
        "Add contact number, location, opening hours, website/order link",
        "Enable reviews, messaging, and page CTA button",
      ]},
      { category: "Instagram Setup", items: [
        "Create Instagram Business Account connected to Facebook page",
        "Set username: @bunnbite or @bunnbitesmashburgers (check availability)",
        "Upload profile photo (same as Facebook for brand consistency)",
        "Write Instagram bio: 5-line format — halal | smash burgers | wraps | student deals | order link",
        "Add link in bio (website, order page, or Linktree)",
        "Set up Story Highlights placeholders: Menu, Deals, Halal, Reviews, Hours",
        "Enable professional dashboard and contact options",
      ]},
      { category: "Brand Direction", items: [
        "Define brand colour palette: bold reds, yellows, black — fast food energy",
        "Define font style: bold, chunky headings for impact",
        "Agree on brand voice: fun, local, confident, crave-worthy",
        "Create a simple style brief document for content consistency",
      ]},
    ]
  },
  {
    week: "Week 2",
    theme: "GBP Optimisation & First Content",
    color: "border-red-400 bg-red-50",
    badge: "bg-red-500",
    tasks: [
      { category: "Google Business Profile Optimisation", items: [
        "Write keyword-rich business description (750 characters) including: smash burgers, halal, takeaway, [suburb], wraps, meal deals, student discount",
        "Set primary category: Hamburger Restaurant",
        "Add secondary categories: Fast Food Restaurant, Takeaway Restaurant, Halal Restaurant",
        "Upload minimum 10 high-quality food photos (burgers, wraps, sides, storefront)",
        "Add menu items with names, descriptions, and prices",
        "Add services list: Dine-In, Takeaway, Online Ordering (if applicable)",
        "Set accurate opening hours including late-night if applicable",
        "Add business attributes: Halal, Takeaway Available, Good for Students",
        "Create first Google Business Post: Welcome / Grand digital launch post",
      ]},
      { category: "Social Media — First Content Batch", items: [
        "Create 3 Facebook posts (scheduled or live): brand intro, hero burger post, halal announcement",
        "Create 3 Instagram posts (same content adapted for IG format)",
        "Write captions with local hashtags, emojis, and strong CTA",
        "Design or source 3 visually strong content assets (photos or designed graphics)",
        "Write first caption for Halal-verified post — build trust immediately",
        "Set up first Instagram Story with brand intro content",
      ]},
    ]
  },
  {
    week: "Week 3",
    theme: "Consistent Posting & Positioning",
    color: "border-amber-400 bg-amber-50",
    badge: "bg-amber-500",
    tasks: [
      { category: "Content Posting", items: [
        "Post 2x on Facebook this week (best burger highlight + meal deal)",
        "Post 2x on Instagram this week (same content, adapted captions)",
        "Publish 1 Google Business Profile post (menu item or limited-time offer)",
        "Create Instagram Story content (behind-the-scenes or daily special)",
        "Ensure all posts have CTA: 'Order Now', 'Visit Us', 'Tag a Friend'",
      ]},
      { category: "Halal & Student Positioning", items: [
        "Create a dedicated 'Halal Certified / Halal Food' post with messaging and visuals",
        "Create a student discount post: 'Show your student ID and save!'",
        "Use hashtags: #HalalFood #HalalBurgers #AustraliaHalal #StudentDeals",
        "Add student discount mention to GBP business description if not already done",
      ]},
      { category: "Review Strategy — Launch Phase", items: [
        "Create a simple review request script for front-of-house staff to use",
        "Set up a QR code for Google Review link (for counter or packaging)",
        "Begin asking every dine-in and repeat customer for a Google review",
        "Monitor and respond to any existing reviews on GBP",
      ]},
    ]
  },
  {
    week: "Week 4",
    theme: "Review, Report & Month 2 Prep",
    color: "border-green-400 bg-green-50",
    badge: "bg-green-500",
    tasks: [
      { category: "Performance Review", items: [
        "Pull GBP Insights: total views, search queries, calls, direction requests",
        "Review Facebook page reach, followers, post engagement",
        "Review Instagram followers, post reach, profile visits",
        "Identify which posts performed best and why",
        "Check review count — how many new reviews were received this month",
      ]},
      { category: "Month 2 Preparation", items: [
        "Plan Month 2 content calendar based on Month 1 learnings",
        "Request new food photos or videos from client if needed",
        "Identify upcoming promotions, specials, or seasonal content opportunities",
        "Refine caption and hashtag strategy based on engagement data",
      ]},
      { category: "Client Reporting", items: [
        "Prepare and send Month 1 performance report to client",
        "Include: work completed, posts live, GBP metrics, social growth, review count",
        "Note any blockers (e.g., missing photos, delayed approvals)",
        "Outline Month 2 plan overview for client awareness",
      ]},
    ]
  },
];

export default function Month1Plan() {
  return (
    <section id="month1">
      <SectionHeader
        number="3"
        title="Month 1: Foundation & Setup"
        subtitle="Weeks 1–4 — Audit, build, launch, and establish the online presence"
        icon="🏗️"
        color="bg-gradient-to-r from-orange-500 to-red-500 text-white"
      />

      <div className="space-y-6">
        {weeks.map((w) => (
          <Card key={w.week} className={`border-l-4 ${w.color}`}>
            <div className="flex items-center gap-3 mb-4">
              <span className={`${w.badge} text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider`}>{w.week}</span>
              <h3 className="font-bold text-gray-900 text-lg">{w.theme}</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {w.tasks.map((task) => (
                <div key={task.category} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                  <div className="font-semibold text-gray-800 text-sm mb-3 border-b border-gray-100 pb-2">{task.category}</div>
                  <ul className="space-y-2">
                    {task.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-gray-700">
                        <span className="text-orange-500 font-bold flex-shrink-0 mt-0.5">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>

      <Card className="mt-5 bg-orange-50 border border-orange-200">
        <h3 className="font-bold text-orange-900 mb-2">📌 Month 1 Success Markers</h3>
        <div className="grid md:grid-cols-4 gap-3 text-center">
          {[
            { metric: "GBP Fully Optimised", icon: "🗺️" },
            { metric: "Facebook Page Live", icon: "📘" },
            { metric: "Instagram Account Live", icon: "📸" },
            { metric: "8–12 Posts Published", icon: "📝" },
          ].map((m) => (
            <div key={m.metric} className="bg-white rounded-xl p-3 shadow-sm">
              <div className="text-2xl mb-1">{m.icon}</div>
              <div className="text-xs font-semibold text-gray-800">{m.metric}</div>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}
