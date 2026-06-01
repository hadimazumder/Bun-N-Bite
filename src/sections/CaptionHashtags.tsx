import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";

const captions = [
  {
    type: "Burger Post",
    icon: "🍔",
    color: "border-orange-400 bg-orange-50",
    badgeColor: "bg-orange-500",
    caption: `🔥 This is what a proper smash burger looks like.

Thin, crispy-edged beef patties. Gooey melted cheese. Fresh-stacked and made to order — every single time.

This isn't just a burger. It's a Bun N Bite smash burger. And once you try one, you'll know the difference.

📍 Find us at [Address]
⏰ Open [Hours]
🛒 Order via link in bio

#SmashBurger #BunNBite #HalalBurger #SmashBurgerAustralia #BurgerLovers`,
    tips: ["Open with a bold visual statement", "Use sensory language to trigger cravings", "Always include address, hours, and CTA", "End with local + niche hashtags"],
  },
  {
    type: "Meal Deal Post",
    icon: "💰",
    color: "border-red-400 bg-red-50",
    badgeColor: "bg-red-500",
    caption: `💥 MEAL DEAL ALERT 💥

Burger + Fries + Drink — all for just $[X].

That's a full feed for less. Whether it's lunch, dinner, or a late-night mission — we've got you covered without the big spend.

📍 [Suburb] | ⏰ Open [Hours]
👇 Order now via link in bio

#MealDeal #BunNBite #BudgetEats #HalalFood #CheapEatsAustralia #TakeawayAustralia`,
    tips: ["Lead with the deal and price immediately", "Use excitement language — caps and emojis for attention", "Mention multiple meal occasions (lunch, dinner, late-night)", "Always show the price — removes hesitation"],
  },
  {
    type: "Halal Food Post",
    icon: "✅",
    color: "border-green-400 bg-green-50",
    badgeColor: "bg-green-600",
    caption: `🌙 Halal. Always.

At Bun N Bite, there's no guessing. No questions. Our food is 100% halal — because you and your family deserve to eat with confidence.

Great smash burgers. Great wraps. Great deals. And always halal.

Come in and taste the difference 🍔
📍 [Address] | ⏰ [Hours]

#HalalFood #HalalBurger #HalalAustralia #HalalEats #HalalFoodAustralia #BunNBite #HalalTakeaway`,
    tips: ["Be clear, confident, and non-defensive about halal status", "Use inclusive, community language", "Repeat the word 'halal' naturally — it matters for searchability", "Don't over-explain — keep it simple and trustworthy"],
  },
  {
    type: "Student Discount Post",
    icon: "🎓",
    color: "border-blue-400 bg-blue-50",
    badgeColor: "bg-blue-600",
    caption: `🎓 Student? You already earn a discount here.

Just show us your student ID and we'll sort you out 🍔🔥

Because between assignments, lectures, and life — you deserve a proper feed without emptying your wallet.

📍 Come see us at [Address]
⏰ Open [Hours]
👇 Share this with a hungry student 👇

#StudentDiscount #StudentLife #UniLife #HalalStudents #BunNBite #StudentDeals #BrokeButHungry`,
    tips: ["Speak their language — casual, fun, relatable", "Make the offer crystal clear", "Encourage sharing — students share with friends", "Use the emoji at the very bottom as a natural share CTA"],
  },
  {
    type: "Opening Hours Post",
    icon: "🕐",
    color: "border-purple-400 bg-purple-50",
    badgeColor: "bg-purple-600",
    caption: `📍 Where to find us — and when to come hungry.

🏠 [Full Business Address]
📞 [Phone Number]
⏰ Mon–Fri: [Hours]
⏰ Sat–Sun: [Hours]
🌙 Late night? We're here for you.

No planning required. Just show up — we'll handle the rest 🍔

#BunNBite #[SuburbFood] #HalalFood #SmashBurger #TakeawayAustralia #OpenNow`,
    tips: ["This type of post performs well as a pinned post", "Always include the phone number so customers can call", "Mention late-night hours prominently if applicable", "Use this post type monthly — update as hours change"],
  },
  {
    type: "Review Request Post",
    icon: "⭐",
    color: "border-yellow-400 bg-yellow-50",
    badgeColor: "bg-yellow-500",
    caption: `⭐ Love your Bun N Bite order? Tell the world.

If we've fed you right — a Google review takes less than 60 seconds and means the world to our small team 🙏

Your words help other hungry locals find us, trust us, and try us.

👇 Leave a review here: [Google Review Link]

And if something wasn't perfect — please reach out directly. We always want to make it right 💪

#BunNBite #GoogleReview #LocalBusiness #SupportSmallBusiness #HalalFood #AustraliaEats`,
    tips: ["Make it easy — include the direct link every time", "Be humble and genuine — not transactional", "Always offer to resolve issues directly before they become bad reviews", "Post this once per month — not weekly or it feels desperate"],
  },
];

const hashtagGroups = [
  {
    name: "Brand & Business",
    tags: "#BunNBite #BunNBiteSmashBurgers #SmashBurgerAU #SmashBurgerAustralia #BurgerJoint",
    color: "bg-orange-50 border-orange-200"
  },
  {
    name: "Food & Cuisine",
    tags: "#SmashBurger #SmashBurgers #BurgerLovers #BurgerLife #CheeseBurger #DoublePattie #SmashPatty #FoodPhotography #FoodPorn #FoodAustralia",
    color: "bg-red-50 border-red-200"
  },
  {
    name: "Halal Specific",
    tags: "#HalalFood #HalalBurger #HalalEats #HalalAustralia #HalalFoodAustralia #HalalFoodie #HalalCertified #HalalTakeaway #HalalMelbourne #HalalSydney #HalalBrisbane",
    color: "bg-green-50 border-green-200"
  },
  {
    name: "Local & Location-Based",
    tags: "#[SuburbName]Food #[SuburbName]Eats #[CityName]Food #[CityName]Burgers #LocalEats #LocalFood #AustraliaFood #AustralianFood #EatLocal",
    color: "bg-blue-50 border-blue-200"
  },
  {
    name: "Deals & Value",
    tags: "#MealDeal #ComboMeal #BudgetEats #CheapEats #ValueMeal #AffordableFood #FoodDeals #TakeawayAustralia #TakeawayLife",
    color: "bg-amber-50 border-amber-200"
  },
  {
    name: "Student & Youth",
    tags: "#StudentDeals #StudentDiscount #StudentFood #StudentLife #UniLife #CollegeFood #BrokeButHungry #StudyBreak",
    color: "bg-violet-50 border-violet-200"
  },
  {
    name: "Late Night & Casual",
    tags: "#LateNightFood #LateNightEats #MidnightSnack #HungryAtNight #NightFood #AfterHoursFood #WeekendFood",
    color: "bg-indigo-50 border-indigo-200"
  },
  {
    name: "Family & Community",
    tags: "#FamilyMeal #KidsMeal #FamilyFood #FamilyFriendly #HalalFamily #FeedTheFamily #SundayDinner",
    color: "bg-pink-50 border-pink-200"
  },
];

export default function CaptionHashtags() {
  return (
    <section id="captions-hashtags">
      <SectionHeader
        number="11"
        title="Caption & Hashtag Strategy"
        subtitle="Ready-to-use captions and hashtag groups for every content type"
        icon="✍️"
        color="bg-gradient-to-r from-rose-500 to-orange-500 text-white"
      />

      <div className="space-y-5 mb-6">
        {captions.map((c) => (
          <Card key={c.type} className={`border-l-4 ${c.color}`}>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">{c.icon}</span>
              <div>
                <span className={`${c.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>{c.type}</span>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Sample Caption</div>
                <div className="bg-white rounded-xl p-4 border border-gray-100 text-sm text-gray-800 font-mono leading-relaxed whitespace-pre-line shadow-sm">
                  {c.caption}
                </div>
              </div>
              <div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Caption Writing Tips</div>
                <div className="space-y-2">
                  {c.tips.map((tip, i) => (
                    <div key={i} className="flex items-start gap-2 bg-white rounded-lg p-2.5 border border-gray-100 text-sm text-gray-700">
                      <span className="font-bold text-green-500 flex-shrink-0">✓</span>
                      {tip}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card>
        <h3 className="font-bold text-gray-900 mb-4 text-lg">🔖 Hashtag Groups Library</h3>
        <p className="text-sm text-gray-600 mb-4">Use 15–25 hashtags per Instagram post. Mix groups: always include Brand + Food + Halal + Local. Rotate the others based on the post type.</p>
        <div className="grid md:grid-cols-2 gap-3">
          {hashtagGroups.map((group) => (
            <div key={group.name} className={`rounded-xl p-4 border ${group.color}`}>
              <div className="font-semibold text-gray-900 text-sm mb-2">{group.name}</div>
              <div className="text-xs text-gray-600 font-mono leading-relaxed">{group.tags}</div>
            </div>
          ))}
        </div>
        <div className="mt-4 bg-gray-50 rounded-xl p-4 border border-gray-200">
          <div className="font-semibold text-gray-900 mb-2 text-sm">⚠️ Replace Placeholders Before Posting</div>
          <div className="grid md:grid-cols-3 gap-2 text-xs text-gray-700">
            <div><code className="bg-gray-200 px-1 rounded">[SuburbName]</code> → e.g., Sunshine, Dandenong, Bankstown</div>
            <div><code className="bg-gray-200 px-1 rounded">[CityName]</code> → e.g., Melbourne, Sydney, Brisbane</div>
            <div><code className="bg-gray-200 px-1 rounded">[Hours]</code> → your actual business hours</div>
          </div>
        </div>
      </Card>
    </section>
  );
}
