"use client";

import { useUserAuth } from "./_utils/auth-context";

const Page = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {user ? (
        <div>
          <p>Welcome, {user.displayName} ({user.email})</p>
          <button onClick={firebaseSignOut} className="bg-red-500 text-white p-2 rounded">
            Sign Out
          </button>
          <a href="/week-8/shopping-list" className="mt-4 text-blue-500">Go to Shopping List</a>
        </div>
      ) : (
        <button onClick={gitHubSignIn} className="bg-blue-500 text-white p-2 rounded">
          Sign In with GitHub
        </button>
      )}
    </div>
  );
};

export default Page;
