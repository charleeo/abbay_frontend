import {
    Input,
    Textarea,
} from '@material-tailwind/react';

import { UpdateFields } from '../../../../models/Common/UserType';
import { Wrapper } from './Wrapper';

export const Contact: React.FC<UpdateFields> = ({ phone, address, updateFields, errors }) => {

    return (
        <>
            <Wrapper >
                <Input
                    type="text"
                    id="phone"
                    // required={true}
                    variant="outlined"
                    value={phone ?? ""}
                    onChange={e => updateFields({ phone: e.target.value })}
                    label="phone"
                    name="phone" crossOrigin={undefined} />
                {errors && errors.phone ? <span className=" text-red-800">{errors.phone}</span> : ""}
                <Textarea
                    id="address"
                    value={address ?? ""}
                    required
                    variant="outlined"
                    onChange={e => updateFields({ address: e.target.value })}
                    label="Address"
                />
                {errors && errors.address ? <span className=" text-red-800">{errors.address}</span> : ""}
            </Wrapper>
        </>
    )
}