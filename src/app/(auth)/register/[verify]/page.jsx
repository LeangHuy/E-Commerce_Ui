import VerifyFormComponent from "../../_component/VerifyFormComponent";

const VerifyPage = ({ params: { verify } }) => {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="w-full max-w-md px-8 py-10 bg-white rounded-lg shadow-md dark:bg-gray-950 dark:text-gray-200">
        <h1 className="text-2xl font-semibold text-center mb-6">Enter OTP</h1>
        <p className="text-gray-600 text-center mb-4 font-semibold">
          Code sent to{" "}
          <span className="text-primary">{verify.replace("%40", "@")}</span>{" "}
        </p>
        <VerifyFormComponent email={verify.replace("%40", "@")} />
      </div>
    </div>
  );
};

export default VerifyPage;
