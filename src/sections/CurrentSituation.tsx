import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";

export default function CurrentSituation() {
  return (
    <section id="current-situation">
      <SectionHeader
        number="2"
        title="Current Situation"
        subtitle="Where we're starting from and what needs to be built"
        icon="📊"
        color="bg-gradient-to-r from-blue-50 to-indigo-50 text-gray-900 border border-blue-200"
      />

      <div className="grid md:grid-cols-3 gap-5 mb-5">
        <Card className="border-l-4 border-l-green-500">
          <div className="text-2xl mb-2">✅</div>
          <h3 className="font-bold text-gray-900 mb-2">Google Business Profile</h3>
          <div className="text-sm text-green-700 bg-green-50 rounded-lg px-3 py-2 mb-2 font-semibold">Already Exists</div>
          <p className="text-xs text-gray-600">The client has an active Google Business Profile but it has not been fully optimised. It needs a proper audit, keyword-rich description, correct categories, menu items, photos, and regular posts to compete locally.</p>
        </Card>
        <Card className="border-l-4 border-l-red-400">
          <div className="text-2xl mb-2">❌</div>
          <h3 className="font-bold text-gray-900 mb-2">Facebook Page</h3>
          <div className="text-sm text-red-700 bg-red-50 rounded-lg px-3 py-2 mb-2 font-semibold">Does Not Exist Yet</div>
          <p className="text-xs text-gray-600">No Facebook page has been created. We will build this from scratch — including username, bio, cover photo, profile photo, contact info, and initial content to make it look credible from day one.</p>
        </Card>
        <Card className="border-l-4 border-l-red-400">
          <div className="text-2xl mb-2">❌</div>
          <h3 className="font-bold text-gray-900 mb-2">Instagram Account</h3>
          <div className="text-sm text-red-700 bg-red-50 rounded-lg px-3 py-2 mb-2 font-semibold">Does Not Exist Yet</div>
          <p className="text-xs text-gray-600">No Instagram account exists. We will create a business account, connect it to Facebook, set up the bio, highlights, and first 9 posts to create a professional grid appearance for new visitors.</p>
        </Card>
      </div>

      <Card className="mb-5">
        <h3 className="font-bold text-gray-900 mb-4 text-lg">🔍 Key Problems We Need to Solve</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { icon: "🗺️", title: "Low Google Maps Visibility", desc: "Without consistent posts, reviews, photos, and keyword-optimised descriptions, the business may not appear when local customers search for 'smash burgers near me' or 'halal burgers [suburb]'." },
            { icon: "📸", title: "No Social Proof", desc: "Customers search social media before visiting a restaurant. Without a Facebook or Instagram presence, Bun N Bite appears less established and loses trust to competitors who are already active online." },
            { icon: "📅", title: "No Content Consistency", desc: "Restaurants that post regularly signal to both Google and customers that they are active, relevant, and worth visiting. Inconsistent or absent posting hurts visibility and engagement." },
            { icon: "⭐", title: "Review Count Needs Growth", desc: "Google Maps rankings are heavily influenced by the number and quality of reviews. We need a structured, ethical strategy to grow genuine reviews from real customers." },
            { icon: "🥙", title: "Halal Positioning Not Maximised", desc: "Halal food is a strong niche in Australia. If the GBP and social profiles don't clearly communicate halal certification/status, a large local audience is being missed." },
            { icon: "🎓", title: "Student & Deal Market Untapped", desc: "Student discounts and meal deals are powerful local draw cards. These promotions need consistent content visibility to attract the right audience, especially near schools, colleges, or universities." },
          ].map((p) => (
            <div key={p.title} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4">
              <span className="text-2xl flex-shrink-0">{p.icon}</span>
              <div>
                <div className="font-semibold text-gray-900 text-sm mb-1">{p.title}</div>
                <p className="text-xs text-gray-600 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <h3 className="font-bold text-gray-900 mb-3 text-lg">🏁 Starting Point Summary</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 rounded-lg">
                <th className="text-left p-3 font-semibold text-gray-700">Platform / Asset</th>
                <th className="text-left p-3 font-semibold text-gray-700">Current Status</th>
                <th className="text-left p-3 font-semibold text-gray-700">Required Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ["Google Business Profile", "✅ Exists – not fully optimised", "Audit + full optimisation"],
                ["Facebook Page", "❌ Does not exist", "Create from scratch"],
                ["Instagram Account", "❌ Does not exist", "Create from scratch"],
                ["Food Photos (digital)", "⚠️ Unknown – client to confirm", "Request from client"],
                ["Menu (digital)", "⚠️ Unknown – client to confirm", "Request from client"],
                ["Logo / Brand Assets", "⚠️ Unknown – client to confirm", "Request from client"],
                ["Website / Order Link", "⚠️ Unknown – client to confirm", "Add to all profiles"],
                ["Google Reviews", "⚠️ Unknown – may be low", "Start review growth strategy"],
                ["Content Plan", "❌ None in place", "Build full 3-month calendar"],
              ].map(([asset, status, action], i) => (
                <tr key={i} className="hover:bg-gray-50 transition-colors">
                  <td className="p-3 font-medium text-gray-800">{asset}</td>
                  <td className="p-3 text-gray-600">{status}</td>
                  <td className="p-3 text-orange-700 font-medium">{action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </section>
  );
}
