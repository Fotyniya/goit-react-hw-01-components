import { Profile } from "../Profile/Profile";
import user from "user.json";
import { Statistics } from "../Statistics/Statistics";
import data from "data.json";
import { FriendsList } from "../FriendList/FriendList";
import friends from "friends.json"
import { TransactionHistory } from "../TransactionHistory/TransactionHistory";
import transactions from "transactions.json"
import { GlobalStyle } from "components/GlobalStyle";
import { Layout } from "components/Layout";
import { Container } from "./App.styled";

export const App = () => {
  return (
    <Layout>
      <Container>
        <Profile user = {user}/>
      </Container>
      <Container>
        <Statistics data = {data}/>
      </Container>
      <Container>
        <FriendsList friends = {friends}/>
      </Container>
      <Container>
        <TransactionHistory transactions = {transactions}/>
      </Container>
      <GlobalStyle/>
    </Layout>
  );
};
