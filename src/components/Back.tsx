import { useRouter } from "next/router";
import { Button } from "./ui/button";
import { ChevronLeftIcon } from "@radix-ui/react-icons";

const BackButton = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <>
      <Button variant="outline" size="sm" onClick={handleGoBack}>
        <ChevronLeftIcon />
        Kembali
      </Button>
    </>
  );
};

export default BackButton;
