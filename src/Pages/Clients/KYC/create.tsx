import React, { FormEvent } from 'react';

import {
  Button,
  CardBody,
  CardFooter,
} from '@material-tailwind/react';

import Logo from '../../../assets/images/kyc.jpg';
import { ScreenLoader } from '../../../utils/screenloader';

export const CreateKYCPage: React.FC<any> = (props) => {

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    const errors = props.validate();
    const errorType = typeof errors;

    if (errors !== null) {
      if (errorType === "object") {
        if (Object.values(errors).some((error) => error)) return;
      }
      if (errorType === "string") {
        return;
      }
    }

    if (!props.isLastStep) return props.next();

    return await props.submit();
  };

  return (
    <>
      <ScreenLoader status={props.isLoading} />
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-wrap items-center">
          <div className="hidden w-full xl:block xl:w-1/2">
            <div className="py-17.5 px-26 text-center">
              <p className="2xl:px-20">Abbey KYC Center!</p>

              <span className="mt-15 inline-block">
                <img src={Logo} alt="LoanImg" />
              </span>
            </div>
          </div>

          <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
            <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
              <div className="flex justify-between p-6">
                <button
                  onClick={() => props.goTo(0)}
                  className={`font-bold hover:-translate-y-1 hover:scale-110 hover:text-gray-500 duration-300 ${props.currentStepIndex === 0
                    ? " border-gray-900 border-b-2"
                    : ""
                    }`}
                >
                  Basic Data
                </button>

                <button
                  onClick={() => props.goTo(1)}
                  className={`font-bold hover:-translate-y-1 hover:scale-110 hover:text-gray-500 duration-300 ${props.currentStepIndex === 1
                    ? " border-gray-900 border-b-2"
                    : ""
                    }`}
                >
                  Contact
                </button>

                <button
                  onClick={() => props.goTo(2)}
                  className={`font-bold hover:-translate-y-1 hover:scale-110 hover:text-gray-500 duration-300 ${props.currentStepIndex === 2
                    ? " border-gray-900 border-b-2"
                    : ""
                    }`}
                >
                  Identification
                </button>
              </div>

              <form onSubmit={submit}>
                <CardBody placeholder={""} className="flex flex-col gap-4 py-8 p-6 mt-6">
                  {props.currentView}
                </CardBody>

                <CardFooter placeholder={""}>
                  {!props.isFirstStep && (
                    <Button
                      placeholder={""}
                      type="button"
                      onClick={props.back}
                      className=" w-1/3 mr-2 cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
                    >
                      Back
                    </Button>
                  )}
                  <Button
                    placeholder={""}
                    type="submit"
                    className="w-1/3 cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
                  >
                    {props.isLastStep ? "Finish" : "Next"}
                  </Button>
                </CardFooter>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateKYCPage;
