import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/rootReducer";
import {
  fetchUsersStart,
  fetchUsersFailure,
  fetchUsersSuccess,
} from "../store/slices/usersSlice";
import { fetchUsers } from "../services/getDataService";
const DashboardPage: React.FC = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector(
    (state: RootState) => state.data
  );
  console.log(users);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchUsersStart()); // Dispatch fetchUsersStart action
      try {
        const data = await fetchUsers();
        console.log(data);
        dispatch(fetchUsersSuccess(data)); // Dispatch fetchUsersSuccess action with fetched data
      } catch (error) {
        dispatch(fetchUsersFailure("error occured")); // Dispatch fetchUsersFailure action if fetching fails
      }
    };

    fetchData(); // Call fetchData function when component mounts
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">User Dashboard</h2>
      <div className="grid grid-cols-4 gap-4">
        {users.map((user) => (
          <div key={user.id} className="border p-4">
            <img
              src={user.avatar}
              alt={`${user.first_name} ${user.last_name}`}
              className="rounded-full w-20 h-20 mx-auto mb-2"
            />
            <div className="text-center">
              <strong>
                {user.first_name} {user.last_name}
              </strong>
              <p className="text-gray-500">{user.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
