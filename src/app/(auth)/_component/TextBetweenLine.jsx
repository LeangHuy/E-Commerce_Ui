import React from "react";

function TextBetweenLine() {
  return (
    <section className="relative flex items-center w-full py-0 text-[0.8rem] text-near_normal">
      <section className="flex-grow border-t border-primary"></section>
      <span className="font-semibold flex-shrink mx-4 text-primary">
        Or continue with email
      </span>
      <section className="flex-grow border-t border-primary"></section>
    </section>
  );
}

export default TextBetweenLine;
