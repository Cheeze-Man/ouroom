import { NextRequest, NextResponse } from "next/server";
import { deletePost, getPost } from "@/service/posts";
import { withSessionUser } from "@/util/session";

type Context = {
  params: { id: string };
};

export async function GET(_: NextRequest, context: Context) {
  return withSessionUser(async () =>
    getPost(context.params.id).then((data) => NextResponse.json(data))
  );
}

export async function DELETE(_: NextRequest, context: Context) {
  return withSessionUser(async () =>
    deletePost(context.params.id)
      .then(() => NextResponse.json({ message: "Post removed successfully" }))
      .catch((error) => new Response(JSON.stringify(error), { status: 500 }))
  );
}
