import React from 'react';
import { LineChart } from './LineChart';

function App() {
  return (
    <div className='container py-4'>
      <div className='row justify-content-center align-items-center'>
        <div className='col-12 col-md-6'>

          <div className='card shadow rounded'>
            <div className='card-body'>
              <h5 className='card-title'>Monthly Recurring Revenue</h5>
              <div className='card-content'>
                <LineChart />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div >
  );
}

export default App;
