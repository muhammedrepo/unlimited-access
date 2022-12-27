import { useState } from "react";
import { Breadcrumb } from "../../components/dashboard";
import { Card, CardHeader } from "../../components/UI";
import { Quests, Time } from "../../features/daily-quests";
import { questResets } from "../../utils/data";

const DailyQuests = () => {
  const [quests, setQuests] = useState(questResets);

  return (
    <div>
      <Breadcrumb title="Quests" page="Daily Quests" />

      <section className="mt-10">
        <Card>
          <CardHeader
            title="Daily Quest Rewards"
            subtitle="Complete Quests on our site and redeem Money for completed Quests
              Daily."
          />

          <div className="card-body">
            <Time />
          </div>
        </Card>
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <Quests quests={quests} />
        </div>
      </section>
    </div>
  );
};

export default DailyQuests;
