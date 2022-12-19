import { TasksButton } from "../../components/dashboard";
import { BsPersonPlus } from "react-icons/bs";
import {
  FaDollarSign,
  FaLocationArrow,
  FaShareSquare,
  FaTasks,
} from "react-icons/fa";

const TasksReports = () => {
  return (
    <section className="mt-14">
      <div className="grid lg:grid-cols-3 gap-6">
        <TasksButton icon=<FaDollarSign /> title="Earnings" number="$2,541" />
        <TasksButton icon=<FaLocationArrow /> title="Clicks" number="60" />
        <TasksButton
          icon=<BsPersonPlus />
          title="Referrals & 15% COMMISSION"
          number="16 ($68)"
        />
        <TasksButton icon=<FaTasks /> title="Tasks" number="7" />
        <TasksButton icon=<FaShareSquare /> title="Posts" number="4" />
      </div>
    </section>
  );
};

export default TasksReports;
