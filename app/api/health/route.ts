import { connection } from "next/server";

/** Lightweight healthcheck endpoint for Docker/reverse proxies. */
export async function GET() {
  await connection();
  return Response.json({ ok: true });
}
