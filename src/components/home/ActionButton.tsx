interface ActionButtonProps {
    label: string;
}

const ActionButton = ({ label }: ActionButtonProps) => {
    return (
        <button
            className="
        w-full py-3 rounded-xl
        border border-blue-900
        text-blue-900 font-medium
        hover:bg-blue-900 hover:text-white
        transition
      "
        >
            {label}
        </button>
    );
};


export default ActionButton 