import { kickoffDailyTasks, recurringDailyTasks, weeklyDeliverableTasks, weeklyFocus } from "../data/campaignTasks";
import ActionCheckbox from "./ActionCheckbox";
import Card from "./Card";

interface CampaignDashboardProps {
  currentWeek: number;
  onWeekChange: (week: number) => void;
}

const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export default function CampaignDashboard({ currentWeek, onWeekChange }: CampaignDashboardProps) {
  const progress = Math.round((currentWeek / 12) * 100);
  const focus = weeklyFocus[currentWeek - 1];
  const today = new Date();
  const dayName = dayNames[today.getDay()];
  const todayIndex = Math.max(today.getDay() - 1, 0);
  const kickoffTasks = currentWeek === 1 ? kickoffDailyTasks[todayIndex] : [];
  const todayTasks = [
    ...(kickoffTasks.length > 0
      ? kickoffTasks.map((task, index) => ({ task, id: `kickoff-day-${todayIndex}-${index}`, tone: "orange" as const }))
      : focus.tasks.slice(0, 2).map((task, index) => ({ task, id: `week-${currentWeek}-focus-${index}`, tone: "orange" as const }))),
    ...recurringDailyTasks.map((task, index) => ({ task, id: `daily-recurring-${currentWeek}-${today.getDay()}-${index}`, tone: "green" as const })),
    ...weeklyDeliverableTasks
      .slice(0, currentWeek % 4 === 0 ? 8 : 6)
      .map((task, index) => ({ task, id: `weekly-deliverable-${index}`, tone: "orange" as const })),
  ];

  return (
    <section id="daily-tasks">
      <div>
        <div className="grid lg:grid-cols-[1fr_1.25fr] gap-4">
          <Card className="p-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-orange-600">Campaign Progress</div>
                <h2 className="text-lg font-black text-gray-950">Week {currentWeek} of 12</h2>
              </div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                Week
                <select
                  value={currentWeek}
                  onChange={(event) => onWeekChange(Number(event.target.value))}
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

            <div className="h-3 overflow-hidden rounded-full bg-gray-200">
              <div className="h-full rounded-full bg-gradient-to-r from-orange-500 to-emerald-500" style={{ width: `${progress}%` }} />
            </div>
            <div className="mt-2 flex items-center justify-between text-xs font-semibold text-gray-500">
              <span>Month {Math.ceil(currentWeek / 4)}</span>
              <span>{progress}% complete</span>
            </div>

            <div className="mt-4 rounded-lg bg-orange-50 border border-orange-200 p-3">
              <div className="text-xs font-bold uppercase tracking-wide text-orange-700">This Week's Focus</div>
              <div className="font-bold text-gray-950">{focus.title}</div>
              <div className="mt-2 grid sm:grid-cols-2 gap-2">
                {focus.tasks.map((task, index) => (
                  <ActionCheckbox key={task} id={`week-${currentWeek}-focus-${index}`} label={task} tone="orange" compact />
                ))}
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center justify-between gap-3 mb-3">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-emerald-600">Today's Task View</div>
                <h2 className="text-lg font-black text-gray-950">{dayName} Actions</h2>
              </div>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
                {todayTasks.length} tasks
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-2">
              {todayTasks.map((item, index) => (
                <div key={`${item.id}-${index}`} className="rounded-lg border border-gray-100 bg-gray-50 p-2">
                  <ActionCheckbox id={item.id} label={item.task} tone={item.tone} compact />
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
