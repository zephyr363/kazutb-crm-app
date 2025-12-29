import ActionButton from "../components/home/ActionButton";
import ActivityItem from "../components/home/ActivityItem";
import StatCard from "../components/home/StatCard";

const HomeScreen = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            {/* Page container */}
            <div className="max-w-7xl mx-auto space-y-8">

                {/* Header */}
                <header>
                    <h1 className="text-2xl font-semibold text-blue-900">
                        Панель управления
                    </h1>
                    <p className="text-sm text-gray-500 mt-1">
                        CRM система Казахского университета технологии и бизнеса
                    </p>
                </header>

                {/* Stats */}
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <StatCard title="Студенты" value="2 154" />
                    <StatCard title="Преподаватели" value="186" />
                    <StatCard title="Факультеты" value="6" />
                    <StatCard title="Активные сессии" value="312" />
                </section>

                {/* Quick actions */}
                <section className="bg-white rounded-2xl shadow p-6">
                    <h2 className="text-lg font-medium text-blue-900 mb-4">
                        Быстрые действия
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <ActionButton label="Добавить студента" />
                        <ActionButton label="Добавить преподавателя" />
                        <ActionButton label="Создать группу" />
                        <ActionButton label="Отчёты" />
                    </div>
                </section>

                {/* Activity */}
                <section className="bg-white rounded-2xl shadow p-6">
                    <h2 className="text-lg font-medium text-blue-900 mb-4">
                        Последние действия
                    </h2>

                    <ul className="divide-y divide-gray-200 text-sm">
                        <ActivityItem text="Добавлен новый студент — Айбек Н." />
                        <ActivityItem text="Обновлён учебный план факультета ИТ" />
                        <ActivityItem text="Создана новая учебная группа" />
                        <ActivityItem text="Преподаватель вошёл в систему" />
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default HomeScreen;
