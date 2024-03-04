import React from 'react';

import { Input } from '@material-tailwind/react';

import { UpdateFields } from '../../../../models/Common/UserType';
import { Wrapper } from './Wrapper';

export const Identity: React.FC<UpdateFields> = ({ nin, bvn, updateFields, errors }) => {
    return (
        <>
            <Wrapper >
                <Input
                    type="text"
                    id="nin"
                    variant="outlined"
                    value={nin ?? ""}
                    onChange={e => updateFields({ nin: e.target.value })}
                    label="Nin"
                    name="nin" crossOrigin={undefined} />

                {errors && errors.nin ? <span className=" text-red-800">{errors.nin}</span> : ""}

                <Input
                    id="bvn"
                    value={bvn ?? ""}
                    variant="outlined"
                    onChange={e => updateFields({ bvn: e.target.value })}
                    label="Bvn"
                    crossOrigin={undefined}
                    name="bvn"
                />
                {errors && errors.bvn ? <span className=" text-red-800">{errors.bvn}</span> : ""}

            </Wrapper>
        </>
    )
}