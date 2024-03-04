import { useNavigate } from 'react-router-dom';

import Breadcrumb from '../../utils/BreadcrumbProfile';
import { CameraSVG } from '../../utils/fields/SVGs/CameraSVG';
import { EmailSVG } from '../../utils/fields/SVGs/EmailSVG';
import { GeneralInputSVG } from '../../utils/fields/SVGs/GeneralInputSVG';
import { SocialProfileSVG } from '../../utils/fields/SVGs/SocialProfileSVG';
import { TextAreaSVG } from '../../utils/fields/SVGs/TextAreaSVG';

export const ProfileSettingHTML = (props: any) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
        <div className="mx-auto max-w-270">
          <Breadcrumb pageName="Profile Settings" />

          <div className="grid grid-cols-5 gap-8">
            <div className="col-span-5 xl:col-span-2 relative mb-5.5 block w-full py-4 px-4 sm:py-7.5 ">
              <div className="rounded-sm border-0 block w-full rounded border-2 border-solid border-primary bg-gray py-4 px-4 h-100 mx-auto">
                <img
                  src={props.profile_picture}
                  className="mx-auto"
                  alt="profile"
                  style={{ width: '320px', height: '320px' }}
                />
               
              </div>
              <SocialProfileSVG />
            </div>
            <div className="col-span-5 xl:col-span-3">
              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                  <h3 className="font-medium text-black dark:text-white">
                    {props.name ?? "Personal Data"}
                  </h3>
                </div>
                <div className="p-7">
                  <form onSubmit={props.handleProfileUpdate}>
                    <GeneralInputSVG
                      changeEvent={props.handleChange}
                      label="First Name"
                      fieldName="firstname"
                      value={props.firstname}
                    />

                    <GeneralInputSVG
                      changeEvent={props.handleChange}
                      label="Last Name"
                      fieldName="lastname"
                      value={props.lastname}
                    />

                    <GeneralInputSVG
                      changeEvent={props.handleChange}
                      label="User Name"
                      fieldName="username"
                      value={props.username}
                    />

                    <EmailSVG
                      changeEvent={props.handleChange}
                      value={props.email}
                      label="Email Address"
                      fieldName="email"
                      readonly={true}
                    />

                    <GeneralInputSVG
                      value={props.phone}
                      changeEvent={props.handleChange}
                      label="Phone Name"
                      fieldName="phone"
                    />

                    <TextAreaSVG
                      changeEvent={props.handleChange}
                      value={props.address}
                      fieldName="address"
                      label="Address"
                    />

                    <div className="flex justify-end gap-4.5">
                      <button
                        className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
                        type="button"
                        onClick={() => navigate("/profile")}
                      >
                        Cancel
                      </button>
                      <button
                        className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:shadow-1"
                        type="submit"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
