import React from "react";
import Header from "./Header";
import CartOverview from "../cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

const AppLayout = () => {
  const navigation = useNavigation();
  console.log('Current navigation state:', navigation.state);

  const isLoading = navigation.state === "loading";
  
  // Add effect to log navigation state changes
  React.useEffect(() => {
    console.log('Navigation state changed to:', navigation.state);
  }, [navigation.state]);

  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen">
      {isLoading && <Loader /> }
      <Header />
      <main className="overflow-y-auto">
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
};

export default AppLayout;
