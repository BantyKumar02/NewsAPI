import { NextResponse } from "next/server";

const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;
const BASE_URL = "https://newsapi.org/v2/everything";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q") || "latest";

  try {
    const response = await fetch(`${BASE_URL}?q=${query}&language=en&apiKey=${API_KEY}`);
    const data = await response.json();

    if (data.status === "error") {
      return NextResponse.json({ error: data.message }, { status: 500 });
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch news" }, { status: 500 });
  }
}
