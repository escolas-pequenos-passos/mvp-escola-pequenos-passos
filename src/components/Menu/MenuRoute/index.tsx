import { IconType } from "react-icons";

interface Props {
  icon: IconType;
  routeName: string;
  path?: string;
}

export function MenuRoute({ icon: Icon, routeName, path }: Props) {
  return (
    <li className="px-2 py-3 hover:cursor-pointer transition-all hover:rounded hover:bg-zinc-800 flex items-center text-white">
      <Icon />
      <span className="ml-4 font-normal text-center">{routeName}</span>
    </li>
  );
}
