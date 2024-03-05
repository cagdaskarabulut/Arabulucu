import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET() {
  const article_list =
    await sql`SELECT id, url, title, topics, create_date, like_number, title_image, body, is_manuel_page, description, meta_keys, view_number FROM public.arabulucu_message order by create_date desc;`;
  return NextResponse.json({ article_list });
}
