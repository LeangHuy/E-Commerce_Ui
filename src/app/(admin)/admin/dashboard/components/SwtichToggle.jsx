"use client";
import React from "react";
import { Switch } from "@/components/ui/switch";
import { changeStatusSlideAction } from "@/acitons/slideAction";

const SwitchToggle = ({ isActive, slideId, slide }) => {

  const onChange = async (slideId) => {
    await changeStatusSlideAction(slideId, isActive);
  };


  return (
    <Switch
      onCheckedChange={() => onChange(slideId)}
      checked={slide?.isActive}
      className="ml-auto"
      id="airplane-mode"
    />
  );
};

export default SwitchToggle;
