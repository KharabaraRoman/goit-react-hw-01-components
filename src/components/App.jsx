import React from 'react';
import { Statistics } from './Statistic/Statistic';
import { Profile } from './Profile/Profile';
import { FriendList } from './FriendList/FriendList';
import user from '../profile/user.json';
import data from '../statistic/data.json';
import friends from '../friends/friends.json';


export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <>
        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
        
      </>
       <FriendList friends={friends} />
    </>
  );
};
export default App


