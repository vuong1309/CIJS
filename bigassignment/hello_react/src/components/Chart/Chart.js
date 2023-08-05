import { Progress } from 'rsuite';
import './Chart.css';

const Chart = () => {
    return (
        <div className="chart-wrapper">
            <div className="chart-item">
                <div className="line-vertical-wrapper">
                    <Progress.Line className="progress-bar"
                        vertical
                        percent={80}
                        showInfo={false}
                        strokeWidth={15}
                    />
                    <p>Jan</p>
                </div>
            </div>
        </div>
    );
};

export default Chart;