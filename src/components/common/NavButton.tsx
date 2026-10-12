import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";
export function NavButton({
  label,
  navRoute,
  unicode,
  end,
}: {
  label: ReactNode;
  navRoute: string;
  unicode: string;
  end?: boolean;
}) {
  return (
    <NavLink
      to={navRoute}
      end={end}
      className={({ isActive }: { isActive: boolean }) =>
        `group flex text-white gap-3 px-4 py-2 items-center transition-colors border-l-3 whitespace-nowrap ${
          isActive
            ? "bg-[#393243] opacity-100  border-l-[#9B4DE0]"
            : "opacity-90 hover:opacity-100 border-l-[#9B4DE000]"
        }`
      }
    >
      {({ isActive }: { isActive: boolean }) => (
        <>
          <i
            className={`icon transition-opacity text-[24px] ${
              isActive ? "opacity-100" : "opacity-90 group-hover:opacity-100"
            }`}
          >
            {String.fromCharCode(parseInt(unicode, 16))}
          </i>

          <span>{label}</span>
          <i
            className={`icon ml-auto transition-opacity text-[24px] ${
              isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
            }`}
          >
            {"\u005F"}
          </i>
        </>
      )}
    </NavLink>
  );
}
