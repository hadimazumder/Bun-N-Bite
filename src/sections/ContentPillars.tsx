import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";

const pillars = [
  {
    number: "01",
    title: "Signature Smash Burgers",
    icon: "🍔",
    color: "bg-orange-500",
    textColor: "text-orange-500",
    borderColor: "border-orange-200",
    bgLight: "bg-orange-50",
    description: "Showcase your hero products — the burgers that make Bun N Bite different. Focus on the smash technique, juicy patties, melted cheese, and layered flavours.",
    posts: [
      "Close-up video of the burger being smashed on the flat-top grill",
      "'This is why smash burgers hit different 🔥' — showcase double smash",
      "Burger cross-section photo: layers of patty, cheese, sauce, fresh bun",
      "'Our #1 seller' post — name your best burger, tell its story",
      "Before & after: raw patty vs finished smash burger",
      "'What's inside our [Signature Burger Name]?' — ingredient breakdown post",
    ],
    hashtags: "#SmashBurger #SmashBurgerAustralia #BurgerLovers #BurgerLife"
  },
  {
    number: "02",
    title: "Meal Deals & Value Offers",
    icon: "💰",
    color: "bg-red-500",
    textColor: "text-red-500",
    borderColor: "border-red-200",
    bgLight: "bg-red-50",
    description: "Deals drive decisions. Show customers they get great value at Bun N Bite. This pillar is crucial for attracting price-conscious locals, students, and families.",
    posts: [
      "'Meal deal alert 🚨 — Burger + Fries + Drink for $[X]' with photo",
      "'Feed the whole family under $[X]' — family combo deal post",
      "'Best lunch deal in [Suburb]' — value-positioning post",
      "'Combo Monday' (or any deal day) — regular series to build habit",
      "Comparison post: 'Skip the drive-thru, get more at Bun N Bite'",
      "Weekend deal post: 'Saturday sorted 🍟' with image of combo",
    ],
    hashtags: "#MealDeal #BudgetEats #ValueFood #CheapEats #AustraliaFood"
  },
  {
    number: "03",
    title: "Halal Food & Trust",
    icon: "✅",
    color: "bg-green-600",
    textColor: "text-green-600",
    borderColor: "border-green-200",
    bgLight: "bg-green-50",
    description: "Halal is a major differentiator in the Australian market. Build clear, consistent trust with the Muslim community and anyone seeking halal-certified options.",
    posts: [
      "'Proud to be 100% Halal 🌙' — clean brand graphic with the message",
      "'Craving a smash burger? We've got you — fully halal, always fresh'",
      "'No compromise on quality or faith — Bun N Bite is halal certified'",
      "Halal awareness post around Ramadan or Eid with special message",
      "'What makes our food halal?' — educational explainer post",
      "'Your family deserves halal food done right' — trust-building post",
    ],
    hashtags: "#HalalFood #HalalAustralia #HalalBurger #HalalEats #HalalMelbourne #HalalSydney"
  },
  {
    number: "04",
    title: "Student Discount & Youth Appeal",
    icon: "🎓",
    color: "bg-blue-600",
    textColor: "text-blue-600",
    borderColor: "border-blue-200",
    bgLight: "bg-blue-50",
    description: "Students are loyal, social, and budget-conscious. This pillar targets them directly — and they share content, tag friends, and build word-of-mouth faster than any paid ad.",
    posts: [
      "'Show your student ID and save!' — with % or dollar amount off",
      "'Broke but hungry? We got you 🎓🍔' — relatable student post",
      "'Study break = Bun N Bite time' — lifestyle/relatable post",
      "End of term celebration post: 'Survived your exams? You deserve this'",
      "'Tag a student who needs this today 👇' — high engagement post",
      "Back to school seasonal post — targeting parents and students",
    ],
    hashtags: "#StudentDeals #StudentDiscount #StudentLife #UniLife #CollegeFood"
  },
  {
    number: "05",
    title: "Wraps, Sides & Snacks",
    icon: "🌯",
    color: "bg-amber-500",
    textColor: "text-amber-600",
    borderColor: "border-amber-200",
    bgLight: "bg-amber-50",
    description: "Not everyone wants a burger every visit. Show the full menu — wraps, sides, and snacks — to capture more occasions and cater to variety seekers.",
    posts: [
      "'Not just burgers 🌯 — have you tried our wraps?' intro post",
      "Wrap highlight: name, fillings, price — clean and appetising photo",
      "'Chips, gravy, and a smash burger — that's the combo 🔥'",
      "Sides spotlight: loaded fries, onion rings, cheese sauce — post per item",
      "'What's your go-to side?' — engagement poll on Stories",
      "'Build your own meal — mix and match' — upsell content idea",
    ],
    hashtags: "#Wraps #HalalWrap #LoadedFries #Sides #TakeawayAustralia"
  },
  {
    number: "06",
    title: "Kids & Family Meals",
    icon: "👨‍👩‍👧",
    color: "bg-pink-500",
    textColor: "text-pink-600",
    borderColor: "border-pink-200",
    bgLight: "bg-pink-50",
    description: "Families are high-value customers. A kids meal option and family-friendly positioning makes Bun N Bite a dinner destination, not just a quick stop.",
    posts: [
      "'The whole family sorted — kids meals + family combos available'",
      "'Kids eat the good stuff too 🍔❤️' — kids meal highlight",
      "Weekend family outing post: 'Where's dinner tonight? Easy.'",
      "'Little ones approved ✅' — photo of kids meal with drink and toy/treat",
      "'Bring the family — we've got something for everyone'",
      "Holiday post: 'School holidays? Treat the kids at Bun N Bite'",
    ],
    hashtags: "#FamilyMeals #KidsMeal #FamilyDinner #HalalFamily #AustralianFamily"
  },
  {
    number: "07",
    title: "Behind the Scenes",
    icon: "🍳",
    color: "bg-violet-500",
    textColor: "text-violet-600",
    borderColor: "border-violet-200",
    bgLight: "bg-violet-50",
    description: "People trust businesses they can see behind the scenes. Authentic kitchen content builds credibility, humanises the brand, and performs extremely well on social media.",
    posts: [
      "Video: burgers being smashed and pressed on the grill — satisfying content",
      "'Here's what happens before you take that first bite 🍔' — prep process",
      "Early morning setup: 'We're getting ready for you 🔥'",
      "Staff/team introduction post: 'The people behind your food'",
      "'Fresh ingredients, every day' — showing the quality of produce",
      "Time-lapse of a busy dinner service (if video available)",
    ],
    hashtags: "#BehindTheScenes #KitchenLife #FoodPrep #FreshFood #SmashBurgerMade"
  },
  {
    number: "08",
    title: "Customer Reviews & Social Proof",
    icon: "⭐",
    color: "bg-yellow-500",
    textColor: "text-yellow-700",
    borderColor: "border-yellow-200",
    bgLight: "bg-yellow-50",
    description: "Nothing sells a restaurant better than real customer words. Feature reviews, ratings, and customer moments to build trust with people who haven't visited yet.",
    posts: [
      "Screenshot or quote of a 5-star Google review as a social post",
      "'This is why we do what we do ❤️' — reacting to a great review",
      "'Don't take our word for it — here's what customers say ⭐'",
      "Monthly review milestone: 'We just hit [X] Google reviews — thank you!'",
      "Customer selfie or food photo repost (with permission): 'Your vibes ❤️'",
      "'Leave us a review — takes 60 seconds, means the world to us'",
    ],
    hashtags: "#CustomerLove #Reviews #FoodReview #HappyCustomers #5Stars"
  },
];

export default function ContentPillars() {
  return (
    <section id="content-pillars">
      <SectionHeader
        number="9"
        title="Content Pillars"
        subtitle="8 core content themes to guide every post, every week"
        icon="🏛️"
        color="bg-gradient-to-r from-violet-600 to-purple-600 text-white"
      />

      <div className="grid md:grid-cols-2 gap-5">
        {pillars.map((pillar) => (
          <Card key={pillar.number} className={`border ${pillar.borderColor}`}>
            <div className="flex items-start gap-3 mb-4">
              <div className={`${pillar.color} text-white rounded-xl w-12 h-12 flex items-center justify-center text-xl font-black flex-shrink-0`}>
                {pillar.icon}
              </div>
              <div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Pillar {pillar.number}</div>
                <h3 className={`font-black text-lg ${pillar.textColor}`}>{pillar.title}</h3>
              </div>
            </div>

            <p className="text-sm text-gray-600 mb-4 leading-relaxed">{pillar.description}</p>

            <div className={`${pillar.bgLight} rounded-xl p-3 mb-3`}>
              <div className="text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">Post Ideas</div>
              <ul className="space-y-1.5">
                {pillar.posts.map((post, i) => (
                  <li key={i} className="flex items-start gap-1.5 text-xs text-gray-700">
                    <span className={`font-bold flex-shrink-0 ${pillar.textColor}`}>→</span>
                    {post}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-2">
              <div className="text-xs font-semibold text-gray-500 mb-1">Sample Hashtags</div>
              <div className="text-xs text-gray-600 font-mono">{pillar.hashtags}</div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
