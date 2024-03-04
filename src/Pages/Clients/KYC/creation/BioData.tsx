import { Input } from '@material-tailwind/react';

import { UpdateFields } from '../../../../models/Common/UserType';
import { Wrapper } from './Wrapper';

export const BioData: React.FC<UpdateFields> = ({
  firstname,
  lastname,
  gender,
  updateFields,
  errors,
}) => {
  const genderArray: string[] = ["male", "female"];
  return (
    <>
      <Wrapper>
        <Input
          type="text"
          id="firstname"
          variant="outlined"
          value={firstname ?? ""}
          onChange={(e) => updateFields({ firstname: e.target.value })}
          label="Firstname"
          name="firstname"
          crossOrigin={undefined}
        />

        {errors && errors.firstname ? (
          <span className=" text-red-800">{errors.firstname}</span>
        ) : (
          ""
        )}
        <Input
          id="lastname"
          value={lastname ?? ""}
          required
          variant="outlined"
          onChange={(e) => updateFields({ lastname: e.target.value })}
          label="Lastname"
          crossOrigin={undefined}
        />
        {errors && errors.lastname ? (
          <span className=" text-red-800">{errors.lastname}</span>
        ) : (
          ""
        )}
        <select
          id="gender"
          value={gender}
          onChange={(e) => updateFields({ gender: e.target.value })}
          className="bg-gray-50 border border-blue-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-blue-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="">select gender</option>
          {genderArray.map((gender, index) => (
            <option value={gender} key={`${gender}${index}`}>
              {gender}
            </option>
          ))}
        </select>
        {errors && errors.gender ? (
          <span className=" text-red-800">{errors.gender}</span>
        ) : (
          ""
        )}

      </Wrapper>
    </>
  );
};
