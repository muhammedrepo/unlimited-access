import { TasksButton } from '../../components/dashboard';
import { taskReportData } from '../../utils/data';

const TasksReports = () => {
  const renderedTasks = taskReportData.map((task) => {
    const { title, icon, number } = task;
    return (
      <TasksButton key={title} icon={icon} title={title} number={number} />
    );
  });

  return (
    <section className='mt-14'>
      <div className='grid lg:grid-cols-3 gap-6'>{renderedTasks}</div>
    </section>
  );
};

export default TasksReports;
