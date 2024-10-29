import * as React from "react";
import SvgIcon from "@mui/material/SvgIcon";

export default function SitemarkIcon() {
  return (
    <SvgIcon sx={{ height: 30, width: 150, mr: 2 }}>
      <svg
        width={150}
        height={30}
        viewBox="0 0 150 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >

        <text
          x="10"
          y="25"
          fontFamily="'Poppins', sans-serif"
          fontSize="25"
          fill="#4876EE"
          fontWeight="bold"
        >
         TungMilk
        </text>
      </svg>
    </SvgIcon>
  );
}
