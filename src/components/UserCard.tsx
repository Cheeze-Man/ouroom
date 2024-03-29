import { SearchUser } from "@/model/user";
import Link from "next/link";
import Avatar from "./Avatar";

type Props = {
  user: SearchUser;
};

const UserCard = ({
  user: { name, username, image, following, followers },
}: Props) => {
  return (
    <Link
      className="flex items-center w-full rounded-sm border border-neutral-300 mb-2 p-4 bg-white hover:bg-neutral-50 transition-all dark:border-slate-900 dark:bg-slate-800 dark:hover:bg-slate-900/90"
      href={`/user/${username}`}
    >
      <Avatar image={image} />
      <div className="text-neutral-500">
        <p className="text-black dark:text-white font-bold leading-4 italic">
          @{username}
        </p>
        <p className="text-sm">{name}</p>
        <p className="text-xs leading-4">{`${followers} followers ${following} follwing`}</p>
      </div>
    </Link>
  );
};

export default UserCard;
