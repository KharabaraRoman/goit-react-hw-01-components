import React from "react";
import { StyledTable, StyledHead, StyledTableHeader, StyledTableCell } from './TransactionHistory.styled'
import PropTypes from "prop-types";



export const TransactionHistory = ({ items }) => {
    return (
        <StyledTable>
            <StyledHead>
                <tr>
                    <StyledTableHeader>Type</StyledTableHeader>
                    <StyledTableHeader>Amount</StyledTableHeader>
                    <StyledTableHeader>Currency</StyledTableHeader>
                </tr>
            </StyledHead>

            <tbody>
                {items.map(item => (
                    <tr key={item.id}>
                        <StyledTableCell>{item.type}</StyledTableCell>
                        <StyledTableCell>{item.amount}</StyledTableCell>
                        <StyledTableCell>{item.currency}</StyledTableCell>
                    </tr>
                ))}
            </tbody>
        </StyledTable>
    )
}
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};