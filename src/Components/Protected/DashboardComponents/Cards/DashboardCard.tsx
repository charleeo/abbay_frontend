import { thousandFormat } from "../../../../utils/parse-numbers-to-thousand";

interface ICardOne{
  title?:string
  value?:number | string | any
  children?:any
  classType? : string
  nairaSign? : string
  format? : string
}
const DashboardCard = ({value,title, children, classType, nairaSign}:ICardOne) => {
  const formattedValue = nairaSign ? `${nairaSign}${thousandFormat(value ?? 0)}` : value;

  return (
    <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
        {children}
      <div className="mt-4 flex items-end justify-between">
        <div className={`${classType}`}>
          <h4 className={`text-title-md font-bold ${ classType?? 'text-black'} dark:text-white`}>
          {formattedValue}
          </h4>
          <span className="text-sm font-medium">{title}</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
