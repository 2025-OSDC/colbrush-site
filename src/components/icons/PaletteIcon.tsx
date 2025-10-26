import { memo } from "react";
import type { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  width?: number;
  height?: number;
}
export const PaletteIcon = memo<IconProps>(
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
          d="M20 12.5C22.0711 12.5 23.75 10.8211 23.75 8.75C23.75 6.67893 22.0711 5 20 5C17.9289 5 16.25 6.67893 16.25 8.75C16.25 10.8211 17.9289 12.5 20 12.5Z"
          fill="url(#paint0_linear_745_1273)"
        />
        <path
          d="M30 20C32.0711 20 33.75 18.3211 33.75 16.25C33.75 14.1789 32.0711 12.5 30 12.5C27.9289 12.5 26.25 14.1789 26.25 16.25C26.25 18.3211 27.9289 20 30 20Z"
          fill="url(#paint1_linear_745_1273)"
        />
        <path
          d="M13.75 17.5C13.75 19.5711 12.0711 21.25 10 21.25C7.92893 21.25 6.25 19.5711 6.25 17.5C6.25 15.4289 7.92893 13.75 10 13.75C12.0711 13.75 13.75 15.4289 13.75 17.5Z"
          fill="url(#paint2_linear_745_1273)"
        />
        <path
          d="M15 32.5C17.0711 32.5 18.75 30.8211 18.75 28.75C18.75 26.6789 17.0711 25 15 25C12.9289 25 11.25 26.6789 11.25 28.75C11.25 30.8211 12.9289 32.5 15 32.5Z"
          fill="url(#paint3_linear_745_1273)"
        />
        <path
          d="M40 20C40 27.8764 35.334 26.4625 31.0832 25.1743C28.5489 24.4064 26.1623 23.6831 25 25C23.4931 26.7073 23.8127 29.5466 24.1225 32.2984C24.566 36.239 24.9893 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20ZM20 37.5C21.5277 37.5 21.634 37.0715 21.637 37.0595C21.8322 36.6952 21.9471 35.8988 21.8118 34.2631C21.777 33.8425 21.7206 33.3351 21.6593 32.7842C21.5303 31.6247 21.3798 30.2721 21.3645 29.1289C21.3408 27.3636 21.5731 25.1046 23.1257 23.3457C24.0463 22.3026 25.2374 21.8997 26.3041 21.7995C27.3153 21.7045 28.336 21.8653 29.2038 22.06C30.0617 22.2524 30.9597 22.5246 31.7669 22.7693L31.8386 22.791C32.702 23.0526 33.4812 23.2868 34.2199 23.4544C35.8525 23.8246 36.4797 23.6622 36.6982 23.5152C36.7935 23.4511 37.5 22.9029 37.5 20C37.5 10.335 29.665 2.5 20 2.5C10.335 2.5 2.5 10.335 2.5 20C2.5 29.665 10.335 37.5 20 37.5Z"
          fill="url(#paint4_linear_745_1273)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_745_1273"
            x1="20"
            y1="0"
            x2="20"
            y2="40"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8144FF" />
            <stop offset="1" stopColor="#C89AE8" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_745_1273"
            x1="20"
            y1="0"
            x2="20"
            y2="40"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8144FF" />
            <stop offset="1" stopColor="#C89AE8" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_745_1273"
            x1="20"
            y1="0"
            x2="20"
            y2="40"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8144FF" />
            <stop offset="1" stopColor="#C89AE8" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_745_1273"
            x1="20"
            y1="0"
            x2="20"
            y2="40"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8144FF" />
            <stop offset="1" stopColor="#C89AE8" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_745_1273"
            x1="20"
            y1="0"
            x2="20"
            y2="40"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8144FF" />
            <stop offset="1" stopColor="#C89AE8" />
          </linearGradient>
        </defs>
      </svg>
    );
  },
);

PaletteIcon.displayName = "PaletteIcon";
