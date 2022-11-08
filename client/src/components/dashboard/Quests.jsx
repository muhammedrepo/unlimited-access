import Quest from "./Quest";

const Quests = ({ quests }) => {
  return (
    <>
      {quests.map((quest) => {
        return <Quest key={quest.id} {...quest} />;
      })}
    </>
  );
};

export default Quests;
