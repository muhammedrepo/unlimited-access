import { useEffect } from "react";
import ReactDOM from "react-dom";
import { FaInfoCircle } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

function Modal({ children, onClose, title }) {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);
  //   top-0 left-0 right-0 z-50 w-full
  return ReactDOM.createPortal(
    <div>
      <div
        className="fixed z-40 inset-0 bg-gray-900 bg-opacity-50"
        onClick={onClose}
      ></div>
      <div className="fixed top-0 left-0 right-0 p-4 z-50 w-full overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full flex items-center justify-center">
        <div className="flex items-center justify-center">
          <div className="relative p-4 w-full max-w-xl h-full md:h-auto">
            <div className="relative bg-skin-base rounded-lg shadow">
              <div className="modal-header flex justify-between items-start p-4 rounded-t border-b">
                <h5 className="modal-title flex gap-x-2">
                  <FaInfoCircle className="text-skin-fill text-2xl" /> {title}
                </h5>
                <button type="button" onClick={onClose}>
                  <GrClose className=" text-xl" />
                </button>
              </div>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
}
export default Modal;
