import { Link } from 'react-router-dom';

import CoverOne from '../../assets/images/cover/cover-01.gif';
import useGetData from '../../hooks/useGetData';
import auth from '../../services/authService';
import http from '../../services/httpServices';
import Breadcrumb from '../../utils/Breadcrumb';
import { CameraSVG } from '../../utils/fields/SVGs/CameraSVG';
import { ImageSVG } from '../../utils/fields/SVGs/ImageSVG';
import { SocialProfileSVG } from '../../utils/fields/SVGs/SocialProfileSVG';

const AdminProfile = () => {
    const user = auth.getCurrentUser()
    const { data } = useGetData({
        url: `${http.setURL}user/${user.id}`,
        method: "get",
        headers: http.setJwtHeaders().headers
    })
    const fileUrl = http.setFileURL + data?.profile_picture

    return (
        <main>
            <div className='mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10'>
                <Breadcrumb pageName="Profile" />

                <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                    <div className="relative z-20 h-35 md:h-65">
                        <img
                            src={CoverOne}
                            alt="profile cover"
                            className="h-full w-full rounded-tl-sm rounded-tr-sm object-cover object-center"
                        />
                        <ImageSVG />
                    </div>

                    <div className="px-4 pb-6 text-center lg:pb-8 xl:pb-11.5">
                        <div className="relative z-30 mx-auto -mt-22 h-30 w-full max-w-30 rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-44 sm:p-3">
                            <div className="relative drop-shadow-2">
                                <img src={fileUrl} alt="profile" className='rounded-full' />
                                <label
                                    htmlFor="profile"
                                    className="absolute bottom-0 right-0 flex h-8.5 w-8.5 cursor-pointer items-center justify-center rounded-full bg-primary text-white hover:bg-opacity-90 sm:bottom-2 sm:right-2"
                                >
                                    <CameraSVG />
                                </label>
                            </div>
                        </div>
                        <div className="mt-4">
                            <h3 className="mb-1.5 text-2xl font-semibold text-black dark:text-white">
                                {user.firstname} {user.lastname}
                            </h3>
                            <p className="font-medium">{user.is_admin ? 'Administrator' : 'User'}</p>
                            <Link to={`/${user.uuid}/ProfileSettings`} className="text-primary">Click to Edit Profile</Link>

                            <div className="mx-auto mt-4.5 mb-5.5 grid max-w-94 grid-cols-3 rounded-md border border-stroke py-2.5 shadow-1 dark:border-strokedark dark:bg-[#37404F]">
                                <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 dark:border-strokedark xsm:flex-row">
                                    <span className="font-semibold text-black dark:text-white">
                                        259
                                    </span>
                                    <span className="text-sm">Approvals</span>
                                </div>
                                <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 dark:border-strokedark xsm:flex-row">
                                    <span className="font-semibold text-black dark:text-white">
                                        129
                                    </span>
                                    <span className="text-sm">Pending</span>
                                </div>
                                <div className="flex flex-col items-center justify-center gap-1 px-4 xsm:flex-row">
                                    <span className="font-semibold text-black dark:text-white">
                                        2
                                    </span>
                                    <span className="text-sm">Disapproved</span>
                                </div>
                            </div>

                            <div className="mx-auto max-w-180">
                                <h4 className="font-semibold text-black dark:text-white">
                                    Personal Details
                                </h4>
                                <p className="mt-4.5">
                                    {user.email}
                                </p>
                            </div>
                            <SocialProfileSVG title={"Social Profile"} />
                        </div>
                    </div>
                </div>
            </div>
        </main>

    );
};

export default AdminProfile;
