import { PageTitle } from './PageTitle/PageTitle';
import userProfile from './Data/user.json';
import statData from './Data/data.json';
import friendsData from './Data/friends.json';
import transactionData from './Data/transactions.json';

import { UserProfile } from './UserProfile/UserProfile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './Friendlist/Friendlist';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div>
      <PageTitle text="Profile" />
      <UserProfile userData={userProfile} />
      <Statistics title="Upload stats" stats={statData} />
      <Statistics stats={statData} />
      <FriendList friends={friendsData} />
      <TransactionHistory transactions={transactionData} />
    </div>
  );
};
