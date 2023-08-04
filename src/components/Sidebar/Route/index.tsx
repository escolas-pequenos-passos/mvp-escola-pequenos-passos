import Link from "next/link";
import { IconType } from "react-icons";

interface Props {
  icon: IconType;
  routeName: string;
  path: string;
}

export function Route({ icon: Icon, routeName, path }: Props) {
  return (
    <li className="p-2 hover:cursor-pointer transition-all hover:rounded hover:bg-zinc-800 text-white">
      <Link href={path} className="flex items-center">
        <Icon />
        <span className="ml-4 font-semibold text-sm text-center">
          {routeName}
        </span>
      </Link>
    </li>
  );
}
