import './Dashboard.scss';
import { LineChart } from '@mui/x-charts/LineChart';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
    'Page A',
    'Page B',
    'Page C',
    'Page D',
    'Page E',
    'Page F',
    'Page G',
];

function Dashboard() {
    return (
        <div className="App">
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={4}>
                    <Grid xs={12} md={6}>
                        <Typography variant="h2" gutterBottom className='h2-ttl'>
                            Today Sales
                        </Typography>
                        <div className="chart-holder">
                            <LineChart
                                series={[
                                    { curve: "linear", data: [0, 5, 2, 6, 3, 9.3] },
                                    { curve: "linear", data: [6, 3, 7, 9.5, 4, 2] },
                                ]}
                                height={300}
                                margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
                            />
                        </div>
                    </Grid>
                    <Grid xs={12} md={6}>
                        <Typography variant="h2" gutterBottom className='h2-ttl'>
                            Today Sales
                        </Typography>
                        <div className="chart-holder">
                            <LineChart
                                height={300}
                                series={[
                                    { curve: "linear", data: pData, label: 'pv' },
                                    { curve: "linear", data: uData, label: 'uv' },
                                ]}
                                xAxis={[{ scaleType: 'point', data: xLabels }]}
                            />
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default Dashboard;


