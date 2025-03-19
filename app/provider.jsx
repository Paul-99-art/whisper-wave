"use client"
import React from 'react'
import { ConvexProvider, ConvexReactClient } from "convex/react";

function Provider({ children }) {
    const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);
  return (
    <div>
      <ConvexProvider client={convex}></ConvexProvider>
      {children}
    </div>
  )
}
export default Provider