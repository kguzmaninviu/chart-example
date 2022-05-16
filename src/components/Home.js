
import React from 'react';
import { TERMS } from '../constants/commons';
import ChartContainer from './ChartContainer/ChartContainer';
 
function Home (){
    return (
        <div>
            <ChartContainer terms={TERMS} />
        </div>
    )
}
 
export default Home;