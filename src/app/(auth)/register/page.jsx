import RegisterFormComponent from "@/components/RegisterFormComponent";
import { routePath } from "@/constants/route-path";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <>
      <div className="max-w-lg mx-auto  bg-white dark:bg-gray-800 rounded-lg shadow-md px-8 py-10 flex flex-col items-center">
        <h1 className="text-xl font-bold text-center text-gray-700 dark:text-gray-200 mb-8">
          Welcome to My Company
        </h1>
        <RegisterFormComponent />

        <div className="mt-4 text-center">
          <span className="text-sm text-gray-500 dark:text-gray-300">
            Already have an account?{" "}
          </span>
          <Link
            href={routePath.LOGIN}
            className="text-blue-500 hover:text-blue-600"
          >
            Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
