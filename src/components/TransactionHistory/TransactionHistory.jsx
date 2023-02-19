import PropTypes from 'prop-types';
import {Table, Thead, Td} from './TransactionHistory.styled';

export const TransactionHistory = ({transactions}) => {
  return (
    <Table>
      <Thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </Thead>
      <tbody>{
        transactions.map(item => 
          <tr key={item.id}>
            <Td>{item.type}</Td>
            <Td>{item.amount}</Td>
            <Td>{item.currency}</Td>
          </tr>
        )}
      </tbody>
    </Table>
  )
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf({
    item: PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  }).isRequired
}