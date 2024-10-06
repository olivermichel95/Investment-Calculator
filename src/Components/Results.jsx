import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";

const Results = ({ input }) => {
  const resultsData = calculateInvestmentResults(input);
  console.log(resultsData);
  const initialInvestmentResults =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>

      <tbody>
        {resultsData.map(yearData => {
          const totalInvested =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvestmentResults;
          const totalAmountInvested = yearData.valueEndOfYear - totalInvested;
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInvested)}</td>
              <td>{formatter.format(yearData.annualInvestment)}</td>
            </tr>
          );
        })}
        {/* ; /*{" "}
        {resultsData.map(({ year, interest }, index) => (
          <tr key={index}>
            <td>{year}</td>
            <td>{interest.toFixed(2)}</td>
          </tr>
        ))}{" "} */}
        */
      </tbody>
      <tfoot>
        <tr>
          <td>Total Interest Earned</td>
          <td>
            {resultsData
              .reduce((total, { interest }) => total + interest, 0)
              .toFixed(2)}
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default Results;
