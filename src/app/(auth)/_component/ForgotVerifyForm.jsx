"use client";

import { verfiyAction } from "@/acitons/authAction";
import { routePath } from "@/constants/route-path";
import { resendEmail, verfiyService } from "@/service/auth.service";
import { globalEmail } from "@/store/authglobal";
import { Button } from "@nextui-org/react";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import OTPInput from "react-otp-input";
// import { authInfoGlobal } from "@/app/src/store/auth";

const ForgotVerifyFormComponent = ({ email }) => {
  const setEmail = globalEmail((state) => state.setEmail);
  const emailData = {
    email: email,
  };
  const [otp, setOtp] = useState("");
  const router = useRouter();
  const handleResend = async () => {
    const res = await resendEmail(emailData);
    if (res.status !== 404 && res.status !== 400) {
      toast.success(res.message);
    } else {
      toast.error(res.detail);
    }
  };
  const handleSubmitOTP = async (data) => {
    const res = await verfiyService(otp);
    if (!res?.statusCode) {
      toast.error(res?.detail);
    } else {
      setEmail(email);
      toast.success(res.message);
      router.push("/forgot-password/new-password");
      router.refresh();
    }
  };

  return (
    <>
      <OTPInput
        // inputStyle="inputStyle"
        skipDefaultStyles
        numInputs={6}
        onChange={setOtp}
        renderSeparator={<span>|</span>}
        value={otp}
        // {...register("otp")}
        // placeholder={placeholder}
        containerStyle=""
        inputStyle="text-2xl  border p-5 w-[60px] text-black text-center"
        inputType="text"
        renderInput={(props) => <input {...props} />}
        shouldAutoFocus
      />
      <div className="flex items-center flex-row justify-between my-6">
        <Link href={routePath.LOGIN}>
          <button className="text-gray-600 text-sm">Back to Login</button>
        </Link>

        <button className="text-gray-600 text-sm" onClick={handleResend}>
          Resend
        </button>
      </div>

      <Button
        onClick={handleSubmitOTP}
        type="submit"
        color="primary"
        className="rounded-sm w-full"
      >
        {/* {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />} */}
        Continue Verify
      </Button>
    </>
  );
};

export default ForgotVerifyFormComponent;
