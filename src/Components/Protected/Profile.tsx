import { Link } from 'react-router-dom';

import CoverOne from '../../assets/images/cover/cover-01.gif';
import useGetData from '../../hooks/useGetData';
import auth from '../../services/authService';
import http from '../../services/httpServices';
import Breadcrumb from '../../utils/Breadcrumb';
import { thousandFormat } from '../../utils/parse-numbers-to-thousand';

import DashboardCard from './DashboardComponents/Cards/DashboardCard';
import { OverdueSVG } from './DashboardComponents/SVGs/Overdue';
import { CardSVG } from './DashboardComponents/SVGs/SVG';
import { BVNSVG } from './DashboardComponents/SVGs/BVNSVG';
import { IDSVG } from './DashboardComponents/SVGs/IDBVN';
import { useState } from 'react';

const Profile = () => {
  const [selectedYear] = useState(new Date().getFullYear());

  const user = auth.getCurrentUser();
  
  const { data } = useGetData({
    url: `${http.setURL}user/${user.id}`,
    method: "get",
    headers: http.setJwtHeaders().headers,
  });

  const { data:kyc } = useGetData({
    url: `${http.setURL}kyc/${user.id}/user`,
    method: "get",
    headers: http.setJwtHeaders().headers,
  });

  const {data:loanCounts} = useGetData({
    url: `${http.setURL}loan-data/counts?year=${selectedYear}`,
    method: "get",
    headers: http.setJwtHeaders().headers,
  });

 
 
  const fileUrl = http.setFileURL + data["profile_picture"];
  
  return (
    <main>
      <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
        <Breadcrumb pageName="Profile" link='/profile' linkText='Profile' />

        <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="relative z-20 h-35 md:h-65">
            <img
              src={CoverOne}
              alt="profile cover"
              className="h-full w-full rounded-tl-sm rounded-tr-sm object-cover object-center"
            />
          </div>

          <div className="px-4 pb-6 text-center lg:pb-8 xl:pb-11.5">
            <div className="relative z-30 mx-auto -mt-22 h-30 w-full max-w-30 rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-44 sm:p-3">
              <div className="relative drop-shadow-2">
                <img src={fileUrl} alt="profile" className="rounded-full" />
              </div>
            </div>
            <div className="mt-4">
              <Link
                to={`/${user.uuid}/ProfileSettings`}
                className="text-primary mr-4">
                 Edit Profile
              </Link>
             

              <div className="mx-auto mt-4.5 mb-5.5 grid max-w-125 grid-cols-3 rounded-md border border-stroke py-2.5 shadow-1 dark:border-strokedark dark:bg-[#37404F]">
                <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 dark:border-strokedark xsm:flex-row">
                  <span className="font-semibold text-black dark:text-white">
                    {loanCounts?.data?.approved}
                  </span>
                  <span className="text-sm">Approved loans </span>
                </div>
                <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 dark:border-strokedark xsm:flex-row">
                  <span className="font-semibold text-black dark:text-white">
                    {loanCounts?.data?.pending}
                  </span>
                  <span className="text-sm">Pending loan(s)</span>
                </div>
                <div className="flex flex-col items-center justify-center gap-1 px-4 xsm:flex-row">
                  <span className="font-semibold text-black dark:text-white">
                    {loanCounts?.data?.declined}
                  </span>
                  <span className="text-sm">Disapproved loan(s)</span>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
             
                <DashboardCard
                  value={kyc?.data?.nin} 
                  title={'NIN'}
                >
                  <IDSVG/>
                </DashboardCard>

                <DashboardCard
                  value={kyc?.data?.bvn} 
                  title={'BVN'}
                >
                  <BVNSVG/>
                </DashboardCard>
                
                <DashboardCard
                  value={thousandFormat(loanCounts?.data?.sumOfApproved?.amount??0)}
                  title={"Total Loaned Amount"}
                  nairaSign='&#8358;'
                >
                  <CardSVG />
                </DashboardCard>
                
                <DashboardCard
                  value={thousandFormat(loanCounts?.data?.overDue ?? 0)}
                  title={"Total Overdue"}
                  classType='text-red-900'
                  nairaSign='&#8358;'
                >
                  <OverdueSVG />
                </DashboardCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
