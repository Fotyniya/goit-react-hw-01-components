import { Profile } from "../Profile/Profile";
import user from "user.json";
import { Statistics } from "../Statistics/Statistics";
import data from "data.json";
import { FriendsList } from "../FriendList/FriendList";
import friends from "friends.json"
import { TransactionHistory } from "../TransactionHistory/TransactionHistory";
import transactions from "transactions.json"

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        color: '#010101'
      }}
    >
      <div>
        <Profile user = {user}/>
      </div>
      <div>
        <Statistics data = {data}/>
      </div>
      <div>
        <FriendsList friends = {friends}/>
      </div>
      <div>
        <TransactionHistory transactions = {transactions}/>
      </div>
    </div>
  );
};
