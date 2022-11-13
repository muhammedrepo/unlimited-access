import { useAppContext } from "../context/appContext";

const Alert = () => {
  const { alertType, alertText } = useAppContext();
  return (
    <div
      className={`flex justify-between p-4 mb-4 bg-${alertType}-100 rounded-lg`}
    >
      <div className={`text-sm font-medium text-${alertType}-700`}>
        <dl>
          <dd>{alertText}</dd>
        </dl>
      </div>
      <button
        type="button"
        className={`ml-auto -mx-1.5 -my-1.5 bg-${alertType}-100 text-${alertType}-500 rounded-lg focus:ring-2 focus:ring-${alertType}-400 p-1.5 hover:bg-${alertType}-200 inline-flex h-8 w-8`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          className="w-5 h-5"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default Alert;
