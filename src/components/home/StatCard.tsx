interface StatCardProps {
    title: string;
    value: string;
}

const StatCard = ({ title, value }: StatCardProps) => {
    return (
        <div className="bg-white rounded-2xl shadow p-6">
            <p className="text-sm text-gray-500">{title}</p>
            <p className="text-2xl font-semibold text-blue-900 mt-2">
                {value}
            </p>
        </div>
    );
};


export default StatCard