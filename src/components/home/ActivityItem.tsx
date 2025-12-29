interface ActivityItemProps {
    text: string;
}

const ActivityItem = ({ text }: ActivityItemProps) => {
    return (
        <li className="py-3 text-gray-700">
            {text}
        </li>
    );
};


export default ActivityItem