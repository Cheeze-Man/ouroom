import useSWR from "swr";
import { HomeUser } from "@/model/user";
import { useCallback } from "react";

async function updateBookmark(postId: string, bookmark: boolean) {
  return fetch("/api/bookmarks", {
    method: "PUT",
    body: JSON.stringify({ id: postId, bookmark }),
  }).then((res) => res.json());
}

export default function useMe() {
  const { data: user, isLoading, error, mutate } = useSWR<HomeUser>("/api/me");

  const setBookmark = useCallback(
    (postId: string, bookmark: boolean) => {
      if (!user) return;
      const bookmarks = user?.bookmarks;
      const newUser = {
        ...user,
        bookmarks: bookmark
          ? [...bookmarks, postId]
          : bookmarks.filter((id) => id !== postId),
      };

      return mutate(updateBookmark(postId, bookmark), {
        optimisticData: newUser, // 서버상의 업데이트 이전에 로컬상의 UI적으로 즉각 반응을 위한 옵션.
        populateCache: false,
        revalidate: false,
        rollbackOnError: true,
      });
    },
    [user, mutate]
  );

  return { user, isLoading, error, setBookmark };
}
