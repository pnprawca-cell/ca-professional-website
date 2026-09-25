/**
 * ชุดไอคอนเส้นสำหรับหน้าแรก — วาดเองแบบ stroke 1.75 ใช้ currentColor
 * ไม่ดึง icon library เข้ามาทั้งชุดเพื่อไอคอนไม่กี่ตัว
 */
import type { ReactNode, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Svg({ size = 24, children, ...rest }: IconProps & { children: ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {children}
    </svg>
  );
}

export const IconDoc = (p: IconProps) => (
  <Svg {...p}>
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
    <path d="M14 3v5h5M9 9h2M9 13h6M9 17h6" />
  </Svg>
);

export const IconLaptop = (p: IconProps) => (
  <Svg {...p}>
    <rect x="4" y="5" width="16" height="11" rx="1.5" />
    <path d="M2 19h20" />
  </Svg>
);

export const IconUsers = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="9" cy="8" r="3.5" />
    <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M16 4.6a3.5 3.5 0 0 1 0 6.8M18 14.5c1.8.8 3 2.6 3 5" />
  </Svg>
);

export const IconSync = (p: IconProps) => (
  <Svg {...p}>
    <path d="M20 12a8 8 0 0 1-14.3 4.9M4 12a8 8 0 0 1 14.3-4.9M18.5 3v4.5H14M5.5 21v-4.5H10" />
  </Svg>
);

export const IconClipboard = (p: IconProps) => (
  <Svg {...p}>
    <rect x="5" y="4" width="14" height="17" rx="2" />
    <rect x="9" y="2.5" width="6" height="3" rx="1" />
    <path d="M9 11h6M9 15h4" />
  </Svg>
);

export const IconTable = (p: IconProps) => (
  <Svg {...p}>
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <path d="M4 9.5h16M4 14.5h16M10 4v16" />
  </Svg>
);

export const IconCalculator = (p: IconProps) => (
  <Svg {...p}>
    <rect x="5" y="3" width="14" height="18" rx="2" />
    <rect x="8" y="6" width="8" height="3" rx="0.5" />
    <path d="M8.5 13h.01M12 13h.01M15.5 13h.01M8.5 17h.01M12 17h.01M15.5 17h.01" strokeWidth={2.4} />
  </Svg>
);

export const IconChartDoc = (p: IconProps) => (
  <Svg {...p}>
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
    <path d="M14 3v5h5M9 17v-3M12 17v-6M15 17v-4" />
  </Svg>
);

export const IconSeal = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="9" r="5.5" />
    <path d="M8.7 13.5 7.5 21l4.5-2.6 4.5 2.6-1.2-7.5M10 9l1.5 1.5L14.5 7.5" />
  </Svg>
);

export const IconShield = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6z" />
    <path d="M9 12l2 2 4-4" />
  </Svg>
);

export const IconBuilding = (p: IconProps) => (
  <Svg {...p}>
    <path d="M5 21V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16M15 9h3a1 1 0 0 1 1 1v11M3 21h18" />
    <path d="M8.5 8h.01M11.5 8h.01M8.5 12h.01M11.5 12h.01M8.5 16h.01M11.5 16h.01" strokeWidth={2.4} />
  </Svg>
);

export const IconCloud = (p: IconProps) => (
  <Svg {...p}>
    <path d="M7 18a4 4 0 0 1-.6-8A5.5 5.5 0 0 1 17 11.2 3.5 3.5 0 0 1 17 18z" />
  </Svg>
);

export const IconArrowRight = (p: IconProps) => (
  <Svg {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Svg>
);

/** ติ๊กในวงกลมทึบ — ใช้เป็น bullet ของรายการจุดเด่น */
export const IconCheckSolid = ({ size = 18, ...rest }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 20 20" aria-hidden="true" {...rest}>
    <circle cx="10" cy="10" r="9" fill="currentColor" />
    <path d="M6 10.3l2.6 2.6L14 7.5" fill="none" stroke="var(--card)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
