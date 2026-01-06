const Sidebar = () => {
    return (
        <aside className="w-64 bg-white shadow-md p-6 hidden md:block">
            <h2 className="text-xl font-semibold text-blue-900 mb-6">Меню</h2>
            <nav className="space-y-2">
                <button className="w-full text-left px-4 py-2 rounded hover:bg-blue-50 text-blue-900 font-medium">
                    Панель управления
                </button>
                <button className="w-full text-left px-4 py-2 rounded hover:bg-blue-50 text-blue-900 font-medium">
                    Студенты
                </button>
                <button className="w-full text-left px-4 py-2 rounded hover:bg-blue-50 text-blue-900 font-medium">
                    Преподаватели
                </button>
                <button className="w-full text-left px-4 py-2 rounded hover:bg-blue-50 text-blue-900 font-medium">
                    Группы
                </button>
                <button className="w-full text-left px-4 py-2 rounded hover:bg-blue-50 text-blue-900 font-medium">
                    Отчёты
                </button>
            </nav>
        </aside>
    )
}

export default Sidebar