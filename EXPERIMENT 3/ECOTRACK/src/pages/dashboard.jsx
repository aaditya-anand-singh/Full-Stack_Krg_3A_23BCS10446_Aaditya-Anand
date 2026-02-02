import { logs } from '../data/logs';

const Dashboard = () => {
    const totalcarbon = logs.reduce((total, log) => total + log.carbon, 0);

    return (
        <div className="dashboard">
            <header className="dashboard-header">
                <h2 className="dashboard-title">Dashboard</h2>
                <p className="dashboard-summary">Total Carbon Footprint: <strong>{totalcarbon} kg CO2</strong></p>
            </header>

            <section className="logs">
                <ul className="log-list">
                    {logs.map((log) => (
                        <li className="log-item" key={log.id}>
                            <span className="activity">{log.activity}</span>
                            <span className="carbon">{log.carbon} kg CO2</span>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default Dashboard;