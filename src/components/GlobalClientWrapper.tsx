"use client";

import SignupModal from "@/components/SignupModal";
import { ReactNode } from "react";

const GlobalClientWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <SignupModal />
      {children}
    </>
  );
};

export default GlobalClientWrapper;
