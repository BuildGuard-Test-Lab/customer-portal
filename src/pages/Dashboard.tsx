import React from 'react';

export default function Dashboard() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">My Account</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="border rounded-lg p-4">
          <h2 className="font-semibold">Current Plan</h2>
          <p className="text-lg">Professional</p>
        </div>
        <div className="border rounded-lg p-4">
          <h2 className="font-semibold">Support Tickets</h2>
          <p className="text-lg">2 Open</p>
        </div>
      </div>
    </div>
  );
}
