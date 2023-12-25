import { useState } from 'react';
import Charts from './Chart'

export default function Slider(){

    //todo ----- state varriable declaration -----
    let[monthlyPayment, setMonthlyPayment] = useState(45.29);
    let[data, setData] = useState({
        homeValue: 3000,
        downPayment: 3000 * 0.2,
        loanAmount: 3000 * 0.8,
        rate: 5,
        years: 5
    });
    //todo ----- home loan activaion -----
    function changeHomeLoan(e){
        let newData = {...data};
        const newVal = e.target.value;
        setData({...newData, 
            homeValue: newVal,
            downPayment: newVal * 0.2,
            loanAmount: newVal * 0.8,
        });
    }
    //todo ----- down payment activaion -----
    function changeDownPayment(e){
        let newData = {...data};
        newData.downPayment = e.target.value;
        newData.loanAmount = newData.homeValue - newData.downPayment;
        setData(newData);
    }
    //todo ----- loan amount activaion -----
    function changeLoanAmount(e){
        let newData = {...data};
        newData.loanAmount = e.target.value;
        newData.downPayment = newData.homeValue - newData.loanAmount;
        setData(newData);
    }
    //todo ----- interest rate activation -----
    function changeInteresetRate(e){
        let newData = {...data}
        newData.rate = e.target.value;   
        setData(newData);     
       
        

    
    }

    // let interestPerMonth = (newData.rate/100)/12;
    // let loanAmount = newData.loanAmount;
    // let totalLoanMonths = (newData.years * 12);
    // let monthlyPay = (loanAmount * interestPerMonth *(1 + interestPerMonth) ** totalLoanMonths) / ((1 + interestPerMonth) ** totalLoanMonths - 1);
    // setMonthlyPayment((monthlyPay).toFixed(2));
    // let totalInterestGenerated = monthlyPayment * totalLoanMonths - loanAmount;

    return(
        <div className='container'>
            <div className="slider">
                <div className="homeValue">
                    <label htmlFor="homeValue">Home Value</label>
                    <p>$ {data.homeValue}</p>
                    <input 
                        type="range" 
                        min={1000} 
                        max={10000}
                        step = {100}
                        value={data.homeValue}
                        onChange={(e)=>changeHomeLoan(e)}
                    />
                    <div className="rangeValue">
                        <p>$ 1000</p>
                        <p>$ 10000</p>
                    </div>
                </div>
                <div className="downPayment">
                    <label htmlFor="down payment">Down Payment</label>
                    <p>$ {data.downPayment}</p>
                    <input 
                        type="range" 
                        min={0} 
                        max={data.homeValue} 
                        value={data.downPayment}
                        step = {100}
                        onChange={(e)=> changeDownPayment(e)}
                    />
                    <div className="rangeValue">
                        <p>$ 0</p>
                        <p>$ {data.homeValue}</p>
                    </div>
                </div>
                <div className="loanAmount">
                    <label htmlFor="loan amount">Loan Amount</label>
                    <p>$ {data.loanAmount}</p>
                    <input 
                        type="range" 
                        min={0} 
                        max={data.homeValue} 
                        value={data.loanAmount}
                        step = {100}
                        onChange={(e)=>changeLoanAmount(e)}
                    />
                    <div className="rangeValue">
                        <p>$ 0</p>
                        <p>$ {data.homeValue}</p>
                    </div>
                </div>
                <div className="intRate">
                    <label htmlFor="interest rate">Interest Rate</label>
                    <p>% {data.rate}</p>
                    <input 
                        type="range" 
                        min= {2} 
                        max= {18} 
                        value = {data.rate}
                        onChange={(e)=>changeInteresetRate(e)}
                    />
                    <div className="rangeValue">
                        <p>2%</p>
                        <p>18%</p>
                    </div>
                </div>
                <div className="tenure">
                    <label htmlFor="loan tenure">Tenure (Years)</label>
                    <select name="years" id="years">
                        <option value={5}>5 years</option>
                        <option value={10}>10 years</option>
                        <option value={15}>15 years</option>
                        <option value={20}>20 years</option>
                        <option value={25}>25 years</option>
                    </select>
                </div>
            </div>
            <div className="pieChart">
                <h3>Monthly Payment : {monthlyPayment} </h3>
                <Charts data={data}/>
            </div>
        </div>
    );
}