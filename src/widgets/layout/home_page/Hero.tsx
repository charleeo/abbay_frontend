import { Typography } from "@material-tailwind/react";
import React from "react";

export const Hero: React.FC = () => {
  return (
    <section>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        {/* <div className="absolute top-0 h-full w-full bg-white" /> */}
        <div className="absolute top-0 h-full w-full bg-[url('/img/heroImg.png')] bg-cover bg-bottom" />
        {/* <div className="absolute top-0 h-full w-full bg-white" /> */}
        <div className="absolute top-0 h-full w-full bg-black/50   bg-cover bg-center" />
        {/* /img/hassleFree.jpg */}
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black uppercase"
              >
                you want to fund that project?
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                We got you covered... Get all the funding your project requires to stay on motion today!
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}