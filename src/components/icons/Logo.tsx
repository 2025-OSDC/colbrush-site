import { memo } from "react";
import type { SVGProps } from "react";

interface LogoProps extends SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
}

export const Logo = memo<LogoProps>(
  ({ width = 26, height = 26, className, ...props }) => {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...props}
      >
        <path
          d="M0 11.6118L1.00647 9.27866L12.1691 4.01758L11.2999 6.21351L0 11.6118Z"
          fill="#CE78A9"
        />
        <path
          d="M1.78344 15.8665L0.365234 12.6183L9.69794 7.90625L8.78296 10.1479L2.65266 13.2588L4.29961 17.056L1.78344 15.8665Z"
          fill="#D55D00"
        />
        <path
          d="M14.457 0.282753L16.7786 1.3157L21.9124 12.5375L19.7265 11.6433L14.457 0.282753Z"
          fill="#E59F01"
        />
        <path
          d="M10.1823 2.01897L13.4464 0.637804L18.052 10.0235L15.8209 9.08309L12.78 2.9178L8.96433 4.52144L10.1823 2.01897Z"
          fill="#ffffff"
        />
        <path
          d="M10.9783 25.8494L8.65881 24.8119L3.54717 13.58L5.7313 14.4785L10.9783 25.8494Z"
          fill="#0072B1"
        />
        <path
          d="M15.2568 24.1217L11.99 25.4965L7.40287 16.1017L9.63214 17.0465L12.6609 23.2178L16.4797 21.6217L15.2568 24.1217Z"
          fill="#F0E442"
        />
        <path
          d="M25.4886 14.5409L24.5049 16.8837L13.394 22.2531L14.2418 20.0489L25.4886 14.5409Z"
          fill="#009F73"
        />
        <path
          d="M23.6626 10.3039L25.1124 13.5381L15.8259 18.3408L16.7191 16.0903L22.8188 12.9199L21.135 9.139L23.6626 10.3039Z"
          fill="#56B4E8"
        />
      </svg>
    );
  },
);

Logo.displayName = "colbrush";
