import React from "react";
export interface Loading{
    status?:boolean
}
export  const ScreenLoader: React.FC<Loading>=({status})=>{
    return (
        <>
            {
                status ?
                <div className="loader-wrapper">
                    <div className="loader"></div>
                </div>
                :
                null
            }
        </>
    )
}