import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

interface ActionFormItemProps {
  icon?: string;
  options: Array<Option>;
}

export const ActionForm: React.FC<ActionFormItemProps> = ({
  icon,
  options,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAction = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="action">
      <div className="action-title" onClick={toggleAction}>
        <BsThreeDotsVertical />
      </div>
      {isOpen && (
        <div className="action-list-container text-sm bg-white font-semibold p-2">
          {options.map((option: Option) => {
            return (
              <button
                onClick={() => option.onClick()}
                className={`${option.color} action-list-btn`}
              >
                {option.value}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
