import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";

export default function ReviewStrategy() {
  return (
    <section id="review-strategy">
      <SectionHeader
        number="12"
        title="Review Growth Strategy"
        subtitle="A simple, ethical, and effective approach to growing genuine Google reviews"
        icon="⭐"
        color="bg-gradient-to-r from-yellow-500 to-amber-500 text-white"
      />

      <Card className="mb-5 border-l-4 border-l-yellow-400 bg-yellow-50">
        <h3 className="font-bold text-gray-900 mb-2">Why Reviews Matter for Google Maps Ranking</h3>
        <p className="text-sm text-gray-700 leading-relaxed">
          Google uses reviews as a significant local ranking signal. The more genuine, recent, and keyword-rich reviews a business has, the more likely it is to appear in the Google Maps 3-pack for searches like "smash burger near me" or "halal food [suburb]". Reviews also directly influence customer trust — 88% of people trust online reviews as much as personal recommendations.
        </p>
      </Card>

      <div className="grid md:grid-cols-2 gap-5 mb-5">
        <Card>
          <h3 className="font-bold text-gray-900 mb-4 text-lg flex items-center gap-2">🕐 When to Ask for a Review</h3>
          <div className="space-y-3">
            {[
              { timing: "Right After Payment", detail: "If the customer seems happy and is waiting for their order — this is the perfect moment. Natural, not forced." },
              { timing: "When Food Is Collected", detail: "If they comment positively on the food — 'Thanks! If you enjoy it, we'd really appreciate a Google review 🙏'" },
              { timing: "After a Repeat Visit", detail: "Loyal customers are the most likely to leave a review and the most credible reviewers. Ask after their 2nd or 3rd visit." },
              { timing: "Post-Delivery (if applicable)", detail: "Send a follow-up WhatsApp or SMS: 'Hope you enjoyed it! A quick Google review would help us a lot.'" },
              { timing: "When Someone Compliments the Food", detail: "This is your golden moment. Don't let it pass. 'We're so glad! Would you mind popping that on Google? Takes 30 seconds!'" },
            ].map((item, i) => (
              <div key={i} className="bg-yellow-50 rounded-xl p-3 border border-yellow-200">
                <div className="font-semibold text-yellow-900 text-sm mb-1">{item.timing}</div>
                <p className="text-xs text-gray-700">{item.detail}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h3 className="font-bold text-gray-900 mb-4 text-lg flex items-center gap-2">💬 What to Say — Script Templates</h3>
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
              <div className="font-semibold text-gray-800 text-sm mb-2">In-Store Verbal Script</div>
              <blockquote className="text-sm text-gray-700 italic border-l-4 border-yellow-400 pl-3">
                "Thanks for coming in! We're a local business trying to grow — if you enjoyed your meal, we'd really appreciate a quick Google review. It only takes about 30 seconds and it helps us a lot. Here's the link on this card!"
              </blockquote>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
              <div className="font-semibold text-gray-800 text-sm mb-2">WhatsApp / SMS Template</div>
              <blockquote className="text-sm text-gray-700 italic border-l-4 border-green-400 pl-3">
                "Hey! Thanks for visiting Bun N Bite 🍔 Hope you loved your order! If you have 60 seconds, we'd love a Google review — it helps our small team grow. Here's the direct link: [LINK] Thanks so much! 🙏"
              </blockquote>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
              <div className="font-semibold text-gray-800 text-sm mb-2">Instagram DM Template</div>
              <blockquote className="text-sm text-gray-700 italic border-l-4 border-pink-400 pl-3">
                "Thanks for the follow/comment! Really appreciate your support 🙏 If you've tried our food and enjoyed it, a Google review would mean everything to us. Here's the link: [LINK] — takes under a minute! ❤️"
              </blockquote>
            </div>
          </div>
        </Card>
      </div>

      <Card className="mb-5">
        <h3 className="font-bold text-gray-900 mb-4 text-lg">🛠️ Review Tools & Tactics</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { title: "QR Code Card", icon: "📱", detail: "Create a QR code that links directly to the Google Review page. Print on small cards, stickers, or on packaging. Place at counter and include in takeaway bags.", action: "Set up in Week 1" },
            { title: "Counter Sign", icon: "🪧", detail: "A small A5 sign at the point of payment: 'Loved your meal? Scan to leave us a review ⭐'. Non-pushy and always visible.", action: "Set up in Week 1" },
            { title: "WhatsApp Follow-Up", icon: "💬", detail: "If the business has repeat customers on WhatsApp, send a personal (not bulk spam) message asking for a review. Keep it genuine and personal.", action: "Ongoing" },
            { title: "Instagram Story CTA", icon: "📸", detail: "Once per month, post an Instagram Story with a link sticker directing followers to leave a Google review. Non-aggressive when used monthly.", action: "Monthly" },
            { title: "Facebook Post Ask", icon: "📘", detail: "Post a review request on Facebook once per month max — include the direct link and a genuine thank you message.", action: "Monthly" },
            { title: "Google Review Direct Link", icon: "🔗", detail: "Generate the direct review link from GBP. Share in bio, on packaging, in emails, WhatsApp, and store signage.", action: "Always active" },
          ].map((tool) => (
            <div key={tool.title} className="bg-amber-50 rounded-xl p-4 border border-amber-200">
              <div className="text-2xl mb-2">{tool.icon}</div>
              <div className="font-semibold text-gray-900 text-sm mb-1">{tool.title}</div>
              <p className="text-xs text-gray-600 mb-2 leading-relaxed">{tool.detail}</p>
              <span className="bg-amber-200 text-amber-900 text-xs font-bold px-2 py-0.5 rounded-full">{tool.action}</span>
            </div>
          ))}
        </div>
      </Card>

      <Card className="mb-5">
        <h3 className="font-bold text-gray-900 mb-4 text-lg">🚫 What NOT to Do — Review Integrity</h3>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            { rule: "Never Buy Reviews", detail: "Paid or fake reviews violate Google's policies and risk your GBP being suspended or penalised. Not worth it." },
            { rule: "Never Ask Staff to Post Reviews", detail: "Google can detect patterns from the same Wi-Fi network or IP address. Staff leaving reviews looks suspicious and can be flagged." },
            { rule: "Never Force or Pressure Customers", detail: "Asking once is fine. Pressuring or incentivising with discounts in exchange for reviews crosses Google's policy line." },
            { rule: "Never Ignore Negative Reviews", detail: "Always respond to negative reviews calmly and professionally. Not responding is worse than a bad review in Google's eyes." },
            { rule: "Never Delete Negative Reviews Requests", detail: "You can flag reviews that are clearly fake or violate policy. But don't request removal of genuine unhappy customer reviews." },
            { rule: "Never Use Review Gating Software", detail: "Only sending review links to customers who say they're happy (and hiding the link from unhappy ones) is against Google's policy." },
          ].map((item) => (
            <div key={item.rule} className="flex items-start gap-3 bg-red-50 rounded-xl p-3 border border-red-200">
              <span className="text-red-500 font-bold flex-shrink-0 mt-0.5">✗</span>
              <div>
                <div className="font-semibold text-gray-900 text-sm">{item.rule}</div>
                <p className="text-xs text-gray-600 mt-0.5">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="bg-green-50 border border-green-200">
        <h3 className="font-bold text-green-900 mb-3">🎯 Review Growth Targets (3-Month Realistic)</h3>
        <div className="grid grid-cols-3 gap-4 text-center">
          {[
            { month: "Month 1", target: "3–5", label: "New Reviews", note: "Build the habit, set up QR codes" },
            { month: "Month 2", target: "5–8", label: "New Reviews", note: "Momentum building, word of mouth growing" },
            { month: "Month 3", target: "8–12", label: "New Reviews", note: "Consistent system now in place" },
          ].map((t) => (
            <div key={t.month} className="bg-white rounded-xl p-4 shadow-sm border border-green-100">
              <div className="text-xs font-bold text-green-700 uppercase tracking-wide mb-1">{t.month}</div>
              <div className="text-3xl font-black text-green-600 mb-1">{t.target}</div>
              <div className="text-sm font-medium text-gray-800 mb-1">{t.label}</div>
              <div className="text-xs text-gray-500">{t.note}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-600 mt-3 text-center">* These are realistic targets for an organic strategy. Actual results depend on customer volume, staff engagement with the ask, and local competition.</p>
      </Card>
    </section>
  );
}
