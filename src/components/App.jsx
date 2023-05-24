import React from 'react';
import { Statistics } from './Statistic/Statistic';
import { Profile } from './Profile/Profile';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from '../profile/user.json';
import data from '../statistic/data.json';
import friends from '../friends/friends.json';
import transactions from '../transaction/transaction.json'


export const App = () => {
  return  (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;