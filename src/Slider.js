import { useState } from 'react';

export default function Slider(){


    return(
        <div className="slider">
            <div className="homeValue">
                <label htmlFor="homeValue">Home Value</label>
                <p>$ 3000</p>
                <input 
                    type="range" 
                    min={1000} 
                    max={10000} 
                />
                <div className="rangeValue">
                    <p>$ 1000</p>
                    <p>$ 10000</p>
                </div>
            </div>
            <div className="downPayment">
                <label htmlFor="down payment">Down Payment</label>
                <p>$ 540</p>
                <input 
                    type="range" 
                    min={0} 
                    max={2700} 
                />
                <div className="rangeValue">
                    <p>$ 0</p>
                    <p>$ 2700</p>
                </div>
            </div>
            <div className="loanAmount">
                <label htmlFor="loan amount">Loan Amount</label>
                <p>$ 2160</p>
                <input 
                    type="range" 
                    min={0} 
                    max={2700} 
                />
                <div className="rangeValue">
                    <p>$ 0</p>
                    <p>$ 2700</p>
                </div>
            </div>
            <div className="intRate">
                <label htmlFor="interest rate">Interest Rate</label>
                <p>% 5</p>
                <input 
                    type="range" 
                    min= {2} 
                    max= {18} 
                />
                <div className="rangeValue">
                    <p>% 2</p>
                    <p>% 18</p>
                </div>
            </div>
            <div className="tenure">
                <label htmlFor="loan tenure">Tenure (Years)</label>
                <select name="years" id="years">
                    <option value="5">5 years</option>
                    <option value="10">10 years</option>
                    <option value="15">15 years</option>
                    <option value="20">20 years</option>
                    <option value="25">25 years</option>
                </select>
            </div>
        </div>
    );
}