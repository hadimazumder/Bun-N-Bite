import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";

export default function ExecutiveSummary() {
  return (
    <section id="executive-summary">
      <SectionHeader
        number="1"
        title="Executive Summary"
        subtitle="The overall objective and purpose of this 3-month engagement"
        icon="🎯"
        color="bg-gradient-to-r from-orange-50 to-red-50 text-gray-900 border border-orange-200"
      />
      <div className="grid md:grid-cols-2 gap-5 mb-5">
        <Card className="border-l-4 border-l-orange-500">
          <h3 className="font-bold text-gray-900 mb-3 text-lg">📌 What This Plan Is About</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            This is a 3-month digital marketing execution plan for <strong>Bun N Bite Smash Burgers</strong>, a halal smash burger restaurant/takeaway based in Australia. The goal is to build a strong, consistent, and visible online presence that attracts local customers — without relying on paid advertising.
          </p>
        </Card>
        <Card className="border-l-4 border-l-red-500">
          <h3 className="font-bold text-gray-900 mb-3 text-lg">💼 Budget & Scope</h3>
          <div className="space-y-2 text-sm text-gray-700">
            <div className="flex justify-between border-b pb-2"><span>Monthly Retainer</span><span className="font-bold text-orange-600">$500 AUD/month</span></div>
            <div className="flex justify-between border-b pb-2"><span>Total Investment</span><span className="font-bold text-orange-600">$1,500 AUD</span></div>
            <div className="flex justify-between border-b pb-2"><span>Duration</span><span className="font-bold">3 Months</span></div>
            <div className="flex justify-between"><span>Paid Ads</span><span className="font-bold text-gray-400">Not Included</span></div>
          </div>
        </Card>
      </div>

      <Card className="mb-5">
        <h3 className="font-bold text-gray-900 mb-4 text-lg">🚀 The 3 Core Goals</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { month: "Month 1", title: "Foundation & Setup", desc: "Audit and optimise Google Business Profile. Create Facebook and Instagram from scratch. Establish brand tone, visual direction, and first content batch.", color: "bg-orange-50 border-orange-200" },
            { month: "Month 2", title: "Consistency & Growth", desc: "Post consistently across all platforms. Build local community awareness. Push halal credibility, student deals, and meal offers. Grow review count.", color: "bg-red-50 border-red-200" },
            { month: "Month 3", title: "Optimisation & Conversion", desc: "Use real data to focus on what's working. Strengthen Google Maps ranking signals. Create offer-driven content. Deliver 3-month performance review.", color: "bg-amber-50 border-amber-200" },
          ].map((g) => (
            <div key={g.month} className={`rounded-xl p-4 border ${g.color}`}>
              <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">{g.month}</div>
              <div className="font-bold text-gray-900 mb-2">{g.title}</div>
              <p className="text-xs text-gray-600 leading-relaxed">{g.desc}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <h3 className="font-bold text-gray-900 mb-3 text-lg">✅ What Success Looks Like After 3 Months</h3>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            "Google Business Profile fully optimised with menu, photos, posts, and description",
            "Facebook and Instagram pages live, branded, and consistently active",
            "At least 12 Google Business posts published across 3 months",
            "Minimum 24–36 social media posts across Facebook and Instagram",
            "Improved local visibility on Google Maps through consistent SEO signals",
            "A growing review count from real customers",
            "Clear brand identity: halal, smash burgers, local, affordable",
            "A content strategy the client can continue long-term",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2 text-sm text-gray-700">
              <span className="text-green-500 font-bold flex-shrink-0 mt-0.5">✓</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}
