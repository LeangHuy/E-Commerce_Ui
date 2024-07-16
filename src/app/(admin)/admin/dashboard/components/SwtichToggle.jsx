"use client";
import React from "react";
import { Switch } from "@/components/ui/switch";
import { changeStatusSlideAction } from "@/acitons/slideAction";

const SwtichToggle = ({ isActive, slideId, slide }) => {
  const onChange = async (slideId) => {
    console.log("Slide id", slideId);
    await changeStatusSlideAction(slideId, isActive);
  };

  console.log("slide", slide);

  return (
    <Switch
      onCheckedChange={() => onChange(slideId)}
      checked={slide?.isActive}
      className="ml-auto"
      id="airplane-mode"
    />
  );
};

export default SwtichToggle;
