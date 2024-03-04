import { toast } from "react-toastify";

interface HandleInputChangeOptions {
  setLimit: (value: number) => void;
  getDta: (options: { limit: number }) => void;
  defaultLimit: number;
}

export const createHandleInputChange = ({
  setLimit,
  getDta,
  defaultLimit,
}: HandleInputChangeOptions) => {
  return (e: any) => {
    let perPage = e.target.value;

    if (!perPage) {
      setLimit(defaultLimit);
      getDta({ limit: defaultLimit });
      return;
    }

    perPage = parseInt(e.target.value);

    if (Number.isNaN(perPage) || perPage < 1) {
      e.target.value = '';
      return toast.error('Please enter a valid positve number');
    }

    setLimit(perPage);
    getDta({ limit: perPage });
  };
};

