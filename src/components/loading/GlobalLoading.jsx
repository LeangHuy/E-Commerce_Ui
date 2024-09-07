import { Spinner } from "@nextui-org/react";

const GlobalLoading = () => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <Spinner
        label="Loading..."
        color="primary"
      />
    </div>
  );
};

export default GlobalLoading;
