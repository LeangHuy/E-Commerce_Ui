"use client";

import { signOut } from "next-auth/react";
import React from "react";

function SignOutButton() {
  return (
    <div
      className="cursor-pointer"
      onClick={() => signOut()}
    >
      Log out
    </div>
  );
}

export default SignOutButton;
