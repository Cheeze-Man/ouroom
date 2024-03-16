import UserPosts from "@/components/UserPosts";
import UserProfile from "@/components/UserProfile";
import { getUserProfile } from "@/service/user";
import { notFound } from "next/navigation";

type Props = {
  params: { username: string };
};

const UserPage = async ({ params: { username } }: Props) => {
  const user = await getUserProfile(username);

  if (!user) {
    notFound();
  }

  return (
    <section className="w-full">
      <UserProfile user={user} />
      <UserPosts user={user} />
    </section>
  );
};

export default UserPage;
