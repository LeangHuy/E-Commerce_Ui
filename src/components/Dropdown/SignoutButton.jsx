"use client";

import { signOut } from "next-auth/react";
import React from "react";

function SignoutButton() {
  return (
    <div
      className="cursor-pointer"
      onClick={() => signOut()}
    >
      Log out
    </div>
  );
}

export default SignoutButton;
