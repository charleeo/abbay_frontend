
import { Typography } from "@material-tailwind/react";
import { IPageTitleType } from "../../models/Common/IPageTitleType";

export function PageTitle({ heading, children }:IPageTitleType) {
  return (
    <div className="mx-auto w-full px-4 text-center lg:w-6/12">
      <Typography variant="h2" color="blue-gray" className="mb-3">
        {heading}
      </Typography>
      <Typography variant="lead" className="text-blue-gray-500">
        {children}
      </Typography>
    </div>
  );
}

