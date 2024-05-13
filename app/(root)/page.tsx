import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

export default function Home() {
  const loggedInUser = {
    firstName: "Raheel",
    lastName: "Mughal",
    email: "raheelmughal018@gmail.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedInUser?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently"
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
        Recent transactions
      </div>
      <RightSidebar
        user={loggedInUser}
        transactions={[]}
        banks={[
          {
            currentBalance: 123.64,
          },
          {
            currentBalance: 123.64,
          },
        ]}
      />
    </section>
  );
}
