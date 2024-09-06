"use client";
import { Suspense } from 'react';
import dynamic from 'next/dynamic';

const DynamicDestinations = dynamic(() => import('./DynamicDestinations').catch(err => {
  console.error("Error loading DynamicDestinations:", err);
  return () => <div>Error loading content</div>;
}), {
  ssr: false,
  loading: () => <div>Loading...</div>
});

export default function Destinations() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DynamicDestinations />
    </Suspense>
  );
}