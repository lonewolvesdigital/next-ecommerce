"use client";

import SignupModal from "@/components/SignupModal";
import { ReactNode } from "react";

const ClientWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <SignupModal />
      {children}
    </>
  );
};

export default ClientWrapper;
