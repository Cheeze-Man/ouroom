"use client";
import { FormEvent, useState } from "react";
import useSWR from "swr";
import useDebounce from "@/hooks/debounce";
import { SearchUser } from "@/model/user";
import GridSpinner from "./ui/GridSpinner";
import UserCard from "./UserCard";

const UserSearch = () => {
  const [keyword, setKeyword] = useState("");
  const debouncedKeyword = useDebounce(keyword);
  const {
    data: users,
    isLoading,
    error,
  } = useSWR<SearchUser[]>(`/api/search/${debouncedKeyword}`);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="w-full max-w-2xl my-4 flex flex-col items-center">
      <form className="w-full mb-4" onSubmit={onSubmit}>
        <input
          className="w-full text-xl p-3 outline-none border border-gray-400 dark:bg-slate-900 dark:border-black"
          type="text"
          autoFocus
          placeholder="사용자 이름을 입력해주세요."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </form>
      {error && <p>{`유저리스트를 불러오기 실패 :(`}</p>}
      {isLoading && <GridSpinner />}
      {!isLoading && !error && users?.length === 0 && (
        <p>검색 결과와 일치하는 유저가 없습니다 😅</p>
      )}
      <ul className="w-full p-4">
        {users &&
          users.map((user) => (
            <li key={user.name}>
              <UserCard user={user} />
            </li>
          ))}
      </ul>
    </section>
  );
};

export default UserSearch;
