const reactChartJs =  require('react-chartjs-2');
const Line = reactChartJs.Line;
const React =  require('react');

const numberOfPoints = 100;
const randomnessExtent = 10000000000;
function randomNumbers() {
    let points = [];
    for (let i = 0; i < numberOfPoints; i ++) {
        points.push(Math.floor(Math.random() * randomnessExtent));
    }

    return points;
}

function randomLabels() {
    let points = [];
    for (let i = 0; i < numberOfPoints; i ++) {
        points.push('');
    }

    return points;
}

const data = {
    labels: randomLabels(),
    datasets: [{
        label: 'My First dataset',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(255,50,50,1)',
        borderWidth: 1,
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(0,0,255,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 0.5,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(0,0,255,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: randomNumbers()
    }]
};

class LineExample extends React.Component {
    render() {
        return (
            <div>
                <h2>Line Example</h2>
                    <Line data={data} />
            </div>
        );
    }
}

module.exports = {
    LineExample: LineExample
};
