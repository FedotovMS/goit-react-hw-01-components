import { PageTitle } from './PageTitle/PageTitle';
import userProfile from '../user.json';
import statData from '../data.json';
import friendsData from '../friends.json';
import transactionData from '../transactions.json';

import { UserProfile } from './UserProfile/UserProfile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './Friendlist/Friendlist';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div>
      <PageTitle text="Profile" />
      <UserProfile userData={userProfile} />
      <Statistics stats={statData} />
      <FriendList friends={friendsData} />
      <TransactionHistory transactions={transactionData} />
    </div>
  );
};
console.log(userProfile);
