import Link from "next/link";
import { IconType } from "react-icons";

interface Props {
  icon: IconType;
  routeName: string;
  path: string;
}

export function Route({ icon: Icon, routeName, path }: Props) {
  return (
    <Link
      href={path}
      className="flex items-center hover:cursor-pointer transition-all hover:rounded hover:bg-zinc-800 text-white p-2"
    >
      <Icon />
      <span className="ml-4 font-semibold text-sm text-center">
        {routeName}
      </span>
    </Link>
  );
}
