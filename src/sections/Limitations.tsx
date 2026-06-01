import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";

export default function Limitations() {
  return (
    <section id="limitations">
      <SectionHeader
        number="15"
        title="Important Limitations"
        subtitle="What this service does not include and what cannot be guaranteed"
        icon="⚠️"
        color="bg-gradient-to-r from-gray-600 to-gray-800 text-white"
      />

      <Card className="mb-5 bg-amber-50 border border-amber-300">
        <div className="flex items-start gap-3">
          <span className="text-3xl">📌</span>
          <p className="text-sm text-amber-900 leading-relaxed">
            <strong>Please read this section carefully.</strong> These limitations are not disclaimers designed to underdeliver — they are honest, professional boundaries that protect both the agency and the client. Understanding these upfront prevents misaligned expectations and ensures the relationship remains healthy throughout the 3 months.
          </p>
        </div>
      </Card>

      <div className="space-y-4 mb-5">
        {[
          {
            title: "No Paid Advertising Included",
            icon: "💰",
            color: "bg-red-50 border-red-200",
            titleColor: "text-red-800",
            detail: "This package does not include Facebook Ads, Instagram Ads, Google Ads, or any form of paid boosting. All visibility strategies are 100% organic — Google Business Profile SEO, content posting, and community engagement. If the client wants to run paid ads, this would require a separate budget and a separate service agreement.",
            impact: "Organic growth is slower than paid. Realistic follower and reach growth in 3 months without ads is modest — measured in hundreds, not thousands.",
          },
          {
            title: "No Guaranteed Google Maps Ranking",
            icon: "🗺️",
            color: "bg-orange-50 border-orange-200",
            titleColor: "text-orange-800",
            detail: "Google Maps rankings are determined by Google's algorithm — not by any marketing agency. While consistent GBP optimisation, keyword usage, photo uploads, regular posts, and review growth all positively influence ranking, no agency can guarantee a specific position. Anyone who does is misleading the client.",
            impact: "Ranking improvement is realistic over 3 months with consistent effort, but the timeline and position depend on local competition, search volume, and Google's algorithm updates.",
          },
          {
            title: "No Guaranteed Sales or Revenue Increase",
            icon: "💵",
            color: "bg-yellow-50 border-yellow-200",
            titleColor: "text-yellow-800",
            detail: "Digital marketing creates visibility and awareness — it does not guarantee customers walking in the door or placing orders. Sales are influenced by many factors outside our control: pricing, product quality, customer service, location foot traffic, competition, weather, and local events.",
            impact: "Increased visibility should lead to more customer enquiries over time, but conversion from enquiry to purchase depends entirely on the in-store experience the client provides.",
          },
          {
            title: "No Viral Results Promised",
            icon: "📱",
            color: "bg-purple-50 border-purple-200",
            titleColor: "text-purple-800",
            detail: "Social media virality is unpredictable and cannot be engineered on a $500/month budget. Our job is to create consistent, quality content that builds a loyal local following over time. Some posts may perform exceptionally well — others may reach only a small audience. Both outcomes are normal.",
            impact: "Content quality and consistency over 3 months is what builds a real audience. Not one viral post.",
          },
          {
            title: "Results Depend on Client Cooperation",
            icon: "🤝",
            color: "bg-blue-50 border-blue-200",
            titleColor: "text-blue-800",
            detail: "The quality of food photography, the accuracy of menu and pricing information, and the promptness of client approvals all directly impact what we can deliver. If photos are low quality, posts will look low quality. If the client takes 2 weeks to approve content, posts will be delayed. We cannot deliver on schedule without timely responses.",
            impact: "Delays in client asset delivery or approval will push back the content calendar and may reduce deliverables for that period.",
          },
          {
            title: "Photos and Video Are the Client's Responsibility",
            icon: "📷",
            color: "bg-teal-50 border-teal-200",
            titleColor: "text-teal-800",
            detail: "This package does not include a professional photographer or videographer. High-quality photos are the single most important factor in social media performance for food businesses. The client is responsible for providing usable food photography. We can direct and advise on what to capture, but we cannot shoot it.",
            impact: "Poor quality photos = poor engagement, no matter how good the caption is. We strongly recommend a one-time professional food photo shoot as an investment.",
          },
          {
            title: "Website and Online Ordering Are Not Included",
            icon: "🌐",
            color: "bg-gray-50 border-gray-200",
            titleColor: "text-gray-800",
            detail: "This package covers Google Business Profile, Facebook, and Instagram only. Website design, SEO for websites, e-commerce, or online ordering system setup are outside the scope of this agreement and would require separate engagement and budget.",
            impact: "Not having a website or online ordering may limit the effectiveness of some CTAs. We will link to whatever the client has available — delivery platforms, booking tools, etc.",
          },
        ].map((item) => (
          <Card key={item.title} className={`border ${item.color}`}>
            <div className="flex items-start gap-3">
              <span className="text-3xl flex-shrink-0">{item.icon}</span>
              <div className="flex-1">
                <h3 className={`font-bold text-lg mb-2 ${item.titleColor}`}>{item.title}</h3>
                <p className="text-sm text-gray-700 mb-3 leading-relaxed">{item.detail}</p>
                <div className="bg-white rounded-lg p-3 border border-gray-200">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">Impact / What This Means: </span>
                  <span className="text-xs text-gray-700">{item.impact}</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <h3 className="font-bold text-white mb-3 text-lg">✅ What We Are Committed To</h3>
        <div className="grid md:grid-cols-2 gap-2">
          {[
            "Showing up every week with consistent, quality content",
            "Being transparent in reporting — good results and bad",
            "Communicating proactively if something isn't working",
            "Applying best-practice SEO and content strategy throughout",
            "Responding to client messages within 24–48 business hours",
            "Delivering every item listed in the weekly deliverables table",
            "Protecting client account security at all times",
            "Recommending improvements honestly, not just telling clients what they want to hear",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2 text-sm text-gray-300">
              <span className="text-green-400 font-bold flex-shrink-0">✓</span>
              {item}
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}
