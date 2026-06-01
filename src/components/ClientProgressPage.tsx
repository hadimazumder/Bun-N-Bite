import { useState } from "react";
import { weeklyDeliverableTasks, weeklyFocus } from "../data/campaignTasks";
import Card from "./Card";

const monthLabels = ["Foundation", "Growth", "Optimisation"];

export default function ClientProgressPage() {
  const [currentWeek, setCurrentWeek] = useState(() => {
    const storedWeek = localStorage.getItem("bnb-client-current-week") ?? localStorage.getItem("bnb-current-week");
    const week = storedWeek ? Number(storedWeek) : 1;
    return Number.isInteger(week) && week >= 1 && week <= 12 ? week : 1;
  });

  const updateCurrentWeek = (week: number) => {
    setCurrentWeek(week);
    localStorage.setItem("bnb-client-current-week", String(week));
  };

  const progress = Math.round((currentWeek / 12) * 100);
  const activeWeek = weeklyFocus[currentWeek - 1];
  const nextWeek = weeklyFocus[currentWeek] ?? null;
  const completedWeeks = currentWeek - 1;

  return (
    <div className="min-h-screen bg-gray-50 font-sans" style={{ fontFamily: "'Inter', sans-serif" }}>
      <header className="bg-gray-950 text-white">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-14">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-2">Client Progress Window</div>
              <h1 className="text-3xl md:text-5xl font-black leading-tight" style={{ fontFamily: "'Oswald', sans-serif" }}>
                Bun N Bite Smash Burgers
              </h1>
              <p className="text-gray-400 mt-3 max-w-2xl text-sm md:text-base">
                Weekly campaign progress, upcoming actions, and delivery status for the 3-month digital marketing plan.
              </p>
            </div>
            <div className="rounded-xl border border-white/15 bg-white/10 p-4 min-w-52">
              <div className="text-xs text-gray-400 font-bold uppercase tracking-wide">Current Stage</div>
              <div className="text-2xl font-black text-orange-400">Week {currentWeek}/12</div>
              <div className="text-sm text-gray-300">Month {Math.ceil(currentWeek / 4)} · {monthLabels[Math.ceil(currentWeek / 4) - 1]}</div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8 space-y-8">
        <Card>
          <div className="grid lg:grid-cols-[1fr_auto] gap-5 lg:items-center">
            <div>
              <div className="flex items-center justify-between gap-4 mb-3">
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-orange-600">Overall Campaign Progress</div>
                  <h2 className="text-2xl font-black text-gray-950">{progress}% complete</h2>
                </div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  View week
                  <select
                    value={currentWeek}
                    onChange={(event) => updateCurrentWeek(Number(event.target.value))}
                    className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-bold text-gray-900 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
                  >
                    {weeklyFocus.map((week) => (
                      <option key={week.week} value={week.week}>
                        {week.week}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <div className="h-4 overflow-hidden rounded-full bg-gray-200">
                <div className="h-full rounded-full bg-gradient-to-r from-orange-500 to-emerald-500" style={{ width: `${progress}%` }} />
              </div>
              <div className="mt-3 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-lg bg-green-50 border border-green-200 p-3">
                  <div className="text-2xl font-black text-green-700">{completedWeeks}</div>
                  <div className="text-xs font-semibold text-green-900">Weeks Complete</div>
                </div>
                <div className="rounded-lg bg-orange-50 border border-orange-200 p-3">
                  <div className="text-2xl font-black text-orange-700">1</div>
                  <div className="text-xs font-semibold text-orange-900">Current Week</div>
                </div>
                <div className="rounded-lg bg-gray-50 border border-gray-200 p-3">
                  <div className="text-2xl font-black text-gray-700">{12 - currentWeek}</div>
                  <div className="text-xs font-semibold text-gray-700">Weeks Remaining</div>
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-gray-950 text-white p-5 lg:w-72">
              <div className="text-xs font-bold uppercase tracking-widest text-orange-400">This Week</div>
              <div className="text-xl font-black mt-1">{activeWeek.title}</div>
              <p className="text-sm text-gray-400 mt-2">Main focus for Week {currentWeek}, with weekly content and profile activity continuing in parallel.</p>
            </div>
          </div>
        </Card>

        <section className="grid lg:grid-cols-[1.1fr_0.9fr] gap-5">
          <Card>
            <div className="flex items-center justify-between gap-3 mb-4">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-emerald-600">Weekly Calendar</div>
                <h2 className="text-xl font-black text-gray-950">12-Week Delivery Timeline</h2>
              </div>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">Client View</span>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              {weeklyFocus.map((week) => {
                const status = week.week < currentWeek ? "Complete" : week.week === currentWeek ? "In Progress" : "Upcoming";
                const statusClass =
                  status === "Complete"
                    ? "bg-green-50 border-green-200 text-green-800"
                    : status === "In Progress"
                      ? "bg-orange-50 border-orange-300 text-orange-900"
                      : "bg-white border-gray-200 text-gray-700";

                return (
                  <div key={week.week} className={`rounded-xl border p-4 ${statusClass}`}>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-xs font-black uppercase tracking-wide">Week {week.week}</div>
                        <div className="font-bold text-gray-950">{week.title}</div>
                      </div>
                      <span className="rounded-full bg-white/80 px-2 py-1 text-xs font-bold">{status}</span>
                    </div>
                    <ul className="mt-3 space-y-1.5">
                      {week.tasks.slice(0, 3).map((task) => (
                        <li key={task} className="flex gap-2 text-xs leading-relaxed">
                          <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-current" />
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </Card>

          <div className="space-y-5">
            <Card>
              <div className="text-xs font-bold uppercase tracking-widest text-orange-600">Current Week Priorities</div>
              <h2 className="text-xl font-black text-gray-950 mb-4">Week {currentWeek}: {activeWeek.title}</h2>
              <div className="space-y-2">
                {activeWeek.tasks.map((task, index) => (
                  <div key={task} className="flex gap-3 rounded-lg bg-orange-50 border border-orange-100 p-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-orange-500 text-xs font-black text-white">{index + 1}</span>
                    <span className="text-sm text-gray-800">{task}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <div className="text-xs font-bold uppercase tracking-widest text-blue-600">Weekly Activity Included</div>
              <h2 className="text-xl font-black text-gray-950 mb-4">Ongoing Deliverables</h2>
              <div className="space-y-2">
                {weeklyDeliverableTasks.slice(0, 6).map((task) => (
                  <div key={task} className="rounded-lg border border-gray-100 bg-gray-50 p-3 text-sm text-gray-800">
                    {task}
                  </div>
                ))}
              </div>
            </Card>

            {nextWeek && (
              <Card className="bg-gray-950 text-white border-gray-800">
                <div className="text-xs font-bold uppercase tracking-widest text-orange-400">Next Up</div>
                <h2 className="text-xl font-black mb-2">Week {nextWeek.week}: {nextWeek.title}</h2>
                <p className="text-sm text-gray-400">The next stage starts after the current week’s core tasks and recurring content actions are completed.</p>
              </Card>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
