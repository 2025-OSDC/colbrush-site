import { memo } from "react";
import type { SVGProps } from "react";

interface PeopleIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  width?: number;
  height?: number;
}

export const PeopleIcon = memo<PeopleIconProps>(
  ({ size, width, height, className, ...props }) => {
    const w = width || size || 40;
    const h = height || size || 40;

    return (
      <svg
        width={w}
        height={h}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...props}
      >
        <path
          d="M17.5 35C17.5 35 15 35 15 32.5C15 30 17.5 22.5 27.5 22.5C37.5 22.5 40 30 40 32.5C40 35 37.5 35 37.5 35H17.5ZM27.5 20C29.4891 20 31.3968 19.2098 32.8033 17.8033C34.2098 16.3968 35 14.4891 35 12.5C35 10.5109 34.2098 8.60322 32.8033 7.1967C31.3968 5.79018 29.4891 5 27.5 5C25.5109 5 23.6032 5.79018 22.1967 7.1967C20.7902 8.60322 20 10.5109 20 12.5C20 14.4891 20.7902 16.3968 22.1967 17.8033C23.6032 19.2098 25.5109 20 27.5 20V20Z"
          fill="url(#paint0_linear_745_1989)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.04 35.0011C12.6694 34.2206 12.4846 33.3649 12.5 32.5011C12.5 29.1136 14.2 25.6261 17.34 23.2011C15.7727 22.7182 14.1399 22.482 12.5 22.5011C2.5 22.5011 0 30.0011 0 32.5011C0 35.0011 2.5 35.0011 2.5 35.0011H13.04Z"
          fill="url(#paint1_linear_745_1989)"
        />
        <path
          d="M11.25 20C12.9076 20 14.4973 19.3415 15.6694 18.1694C16.8415 16.9973 17.5 15.4076 17.5 13.75C17.5 12.0924 16.8415 10.5027 15.6694 9.33058C14.4973 8.15848 12.9076 7.5 11.25 7.5C9.5924 7.5 8.00269 8.15848 6.83058 9.33058C5.65848 10.5027 5 12.0924 5 13.75C5 15.4076 5.65848 16.9973 6.83058 18.1694C8.00269 19.3415 9.5924 20 11.25 20V20Z"
          fill="url(#paint2_linear_745_1989)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_745_1989"
            x1="27.5"
            y1="5"
            x2="27.5"
            y2="35"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#884DFF" />
            <stop offset="1" stopColor="#C89AE8" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_745_1989"
            x1="8.67"
            y1="22.5"
            x2="8.67"
            y2="35.0011"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#884DFF" />
            <stop offset="1" stopColor="#C89AE8" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_745_1989"
            x1="11.25"
            y1="7.5"
            x2="11.25"
            y2="20"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#884DFF" />
            <stop offset="1" stopColor="#C89AE8" />
          </linearGradient>
        </defs>
      </svg>
    );
  },
);

PeopleIcon.displayName = "PeopleIcon";
