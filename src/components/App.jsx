import { PageTitle } from './PageTitle/PageTitle';
import userProfile from '../user.json';
import { UserProfile } from './UserProfile/UserProfile';

export const App = () => {
  return (
    <div>
      <PageTitle text="Profile" />
      <UserProfile userData={userProfile} />
    </div>
  );
};
console.log(userProfile);
