import { useState } from "react";
import ExecutiveSummary from "./sections/ExecutiveSummary";
import CurrentSituation from "./sections/CurrentSituation";
import Month1Plan from "./sections/Month1Plan";
import Month2Plan from "./sections/Month2Plan";
import Month3Plan from "./sections/Month3Plan";
import WeeklyDeliverables from "./sections/WeeklyDeliverables";
import SocialMediaSetup from "./sections/SocialMediaSetup";
import GBPChecklist from "./sections/GBPChecklist";
import ContentPillars from "./sections/ContentPillars";
import ContentCalendar from "./sections/ContentCalendar";
import CaptionHashtags from "./sections/CaptionHashtags";
import ReviewStrategy from "./sections/ReviewStrategy";
import ReportingFormat from "./sections/ReportingFormat";
import ClientMaterials from "./sections/ClientMaterials";
import Limitations from "./sections/Limitations";
import FinalActionPlan from "./sections/FinalActionPlan";
import CampaignDashboard from "./components/CampaignDashboard";

const navSections = [
  { id: "executive-summary", label: "Executive Summary", icon: "🎯", short: "Summary" },
  { id: "current-situation", label: "Current Situation", icon: "📊", short: "Situation" },
  { id: "month1", label: "Month 1 Plan", icon: "🏗️", short: "Month 1" },
  { id: "month2", label: "Month 2 Plan", icon: "📈", short: "Month 2" },
  { id: "month3", label: "Month 3 Plan", icon: "🔥", short: "Month 3" },
  { id: "deliverables", label: "Weekly Deliverables", icon: "📦", short: "Deliverables" },
  { id: "social-setup", label: "Social Media Setup", icon: "📱", short: "Social Setup" },
  { id: "gbp-checklist", label: "GBP SEO Checklist", icon: "🗺️", short: "GBP SEO" },
  { id: "content-pillars", label: "Content Pillars", icon: "🏛️", short: "Pillars" },
  { id: "content-calendar", label: "12-Week Calendar", icon: "📅", short: "Calendar" },
  { id: "captions-hashtags", label: "Caption & Hashtags", icon: "✍️", short: "Captions" },
  { id: "review-strategy", label: "Review Strategy", icon: "⭐", short: "Reviews" },
  { id: "reporting", label: "Reporting Format", icon: "📊", short: "Reports" },
  { id: "client-materials", label: "Client Materials", icon: "📁", short: "Materials" },
  { id: "limitations", label: "Limitations", icon: "⚠️", short: "Limits" },
  { id: "final-action", label: "7-Day Kickoff", icon: "🚀", short: "Kickoff" },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentWeek, setCurrentWeek] = useState(() => {
    const storedWeek = localStorage.getItem("bnb-current-week");
    const week = storedWeek ? Number(storedWeek) : 1;
    return Number.isInteger(week) && week >= 1 && week <= 12 ? week : 1;
  });

  const updateCurrentWeek = (week: number) => {
    setCurrentWeek(week);
    localStorage.setItem("bnb-current-week", String(week));
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* HERO */}
      <div className="relative overflow-hidden bg-gray-950">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/34407495/pexels-photo-34407495.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/80 via-gray-950/90 to-gray-950" />
        <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-orange-500 rounded-2xl w-16 h-16 flex items-center justify-center text-3xl flex-shrink-0 shadow-xl">🍔</div>
            <div>
              <div className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-1">Confidential — Client Strategy Document</div>
              <h1 className="text-3xl md:text-5xl font-black text-white leading-tight" style={{ fontFamily: "'Oswald', sans-serif" }}>
                BUN N BITE<br />
                <span className="text-orange-400">SMASH BURGERS</span>
              </h1>
            </div>
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-200 mb-4">
            3-Month Digital Marketing Execution Plan
          </h2>
          <p className="text-gray-400 max-w-2xl mb-8 text-sm md:text-base leading-relaxed">
            A complete, week-by-week execution roadmap covering Google Business Profile SEO, Google Maps optimisation, Facebook & Instagram setup from scratch, content strategy, review growth, and weekly reporting — for $500 AUD/month over 3 months.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            {[
              { label: "Google Maps SEO", icon: "🗺️" },
              { label: "Social Media Launch", icon: "📱" },
              { label: "Halal Positioning", icon: "✅" },
              { label: "Review Growth", icon: "⭐" },
              { label: "Content Strategy", icon: "📅" },
              { label: "$500/Month Package", icon: "💼" },
            ].map((tag) => (
              <span key={tag.label} className="flex items-center gap-1.5 bg-white/10 backdrop-blur text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20">
                {tag.icon} {tag.label}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { number: "16", label: "Detailed Sections" },
              { number: "12", label: "Weeks Planned" },
              { number: "8", label: "Content Pillars" },
              { number: "6", label: "Caption Templates" },
            ].map((s) => (
              <div key={s.label} className="bg-white/10 backdrop-blur rounded-xl p-3 text-center border border-white/20">
                <div className="text-2xl md:text-3xl font-black text-orange-400">{s.number}</div>
                <div className="text-xs text-gray-400 font-medium mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* STICKY NAV */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-2">
              <span className="text-orange-500 font-black text-lg">🍔</span>
              <span className="font-bold text-gray-900 text-sm hidden md:block">Bun N Bite — 3-Month Plan</span>
            </div>
            {/* Mobile menu toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden bg-orange-500 text-white px-3 py-1.5 rounded-lg text-xs font-bold"
            >
              {menuOpen ? "✕ Close" : "☰ Sections"}
            </button>
            {/* Desktop scroll nav */}
            <div className="hidden md:flex items-center gap-1 overflow-x-auto">
              {navSections.slice(0, 8).map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className="text-xs text-gray-600 hover:text-orange-600 hover:bg-orange-50 px-2 py-1 rounded-lg transition-colors whitespace-nowrap font-medium"
                >
                  {s.icon} {s.short}
                </button>
              ))}
              <span className="text-gray-300">|</span>
              {navSections.slice(8).map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className="text-xs text-gray-600 hover:text-orange-600 hover:bg-orange-50 px-2 py-1 rounded-lg transition-colors whitespace-nowrap font-medium"
                >
                  {s.icon} {s.short}
                </button>
              ))}
            </div>
          </div>
        </div>
        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-2 px-4 grid grid-cols-2 gap-1">
            {navSections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="text-left text-xs text-gray-700 hover:text-orange-600 hover:bg-orange-50 px-3 py-2 rounded-lg transition-colors font-medium"
              >
                {s.icon} {s.short}
              </button>
            ))}
          </div>
        )}
      </div>

      <CampaignDashboard currentWeek={currentWeek} onWeekChange={updateCurrentWeek} />

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-12">
        <ExecutiveSummary />
        <CurrentSituation />
        <Month1Plan />
        <Month2Plan />
        <Month3Plan />
        <WeeklyDeliverables />
        <SocialMediaSetup />
        <GBPChecklist />
        <ContentPillars />
        <ContentCalendar />
        <CaptionHashtags />
        <ReviewStrategy />
        <ReportingFormat />
        <ClientMaterials />
        <Limitations />
        <FinalActionPlan />
      </div>

      {/* FOOTER */}
      <footer className="bg-gray-950 text-gray-500 text-center py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-2xl mb-2">🍔</div>
          <div className="font-bold text-white mb-1">Bun N Bite Smash Burgers</div>
          <div className="text-sm mb-1">3-Month Digital Marketing Execution Plan</div>
          <div className="text-xs text-gray-600">Confidential Strategy Document · $500 AUD/month · 3-Month Prepaid Package · Australia</div>
          <div className="mt-4 text-xs text-gray-700">
            No guaranteed ranking, sales, or viral results. Results depend on consistency, content quality, client cooperation, and market conditions.
          </div>
        </div>
      </footer>
    </div>
  );
}
