import React from "react";

const EditPencilIcon = ({
  width,
  height,
}: {
  width: number;
  height: number;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={width}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
    >
      <path
        d="M11.0495 3.00014L4.2078 10.2418C3.94947 10.5168 3.69947 11.0585 3.64947 11.4335L3.34114 14.1335C3.2328 15.1085 3.9328 15.7751 4.89947 15.6085L7.5828 15.1501C7.9578 15.0835 8.48284 14.8085 8.74117 14.5251L15.5828 7.28347C16.7662 6.03347 17.2995 4.60847 15.4578 2.86681C13.6245 1.14181 12.2328 1.75014 11.0495 3.00014Z"
        stroke="#29A073"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.90883 4.20813C10.2672 6.50813 12.1338 8.26646 14.4505 8.4998M2.5 18.3333H17.5"
        stroke="#29A073"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default EditPencilIcon;
