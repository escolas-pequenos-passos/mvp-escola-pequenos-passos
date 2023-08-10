import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconType } from "react-icons";

interface Props {
  icon: IconType;
  routeName: string;
  path: string;
}

export function Route({ icon: Icon, routeName, path }: Props) {
  const routePath = usePathname();

  return (
    <Link
      href={path}
      className={`
        flex items-center rounded hover:cursor-pointer transition-all hover:bg-zinc-800 text-white p-2
        ${routePath === path ? "bg-zinc-800" : ""}
      `}
    >
      <Icon />
      <span className="ml-4 font-semibold text-sm text-center">
        {routeName}
      </span>
    </Link>
  );
}
