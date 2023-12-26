
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";



 function Charts({data}){

    ChartJS.register(ArcElement, Tooltip, Legend);
    const { homeValue, loanAmount, years, rate } = data;

    let interestPerMonth = (rate/100)/12;
    let totalLoanMonths = (years * 12);
    let monthlyPayment = (loanAmount * interestPerMonth *(1 + interestPerMonth) ** totalLoanMonths) / ((1 + interestPerMonth) ** totalLoanMonths - 1);
    let totalInterestGenerated = monthlyPayment * totalLoanMonths - loanAmount;

    const pieChartData = {
        labels: ["Principle", "Interest"],
        datasets: [
            {
            label: "Ratio of Principle and Interest",
            data: [homeValue, totalInterestGenerated],
            backgroundColor: ["rgba(22, 255, 0, 0.4)", "rgba(208, 212, 202, 0.4)"],
            borderColor: ["rgba(22, 255, 0, 1)", "rgba(208, 212, 202, 1)"],
            borderWidth: 2,
            },
        ],
    };
    return(
        <Pie data={pieChartData} />
    );

}

export default Charts;