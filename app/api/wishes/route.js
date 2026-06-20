// GET  -> mengambil daftar ucapan dari Google Sheets (via Apps Script)
// POST -> menyimpan ucapan baru

const url = () => process.env.APPS_SCRIPT_URL;

export async function GET() {
  if (!url()) return Response.json({ wishes: [] });
  try {
    const res = await fetch(url(), { cache: "no-store" });
    if (!res.ok) throw new Error();
    const data = await res.json();
    return Response.json({ wishes: data.wishes || [] });
  } catch {
    return Response.json({ wishes: [] });
  }
}

export async function POST(request) {
  if (!url()) {
    return Response.json({ ok: false, error: "APPS_SCRIPT_URL belum diatur" }, { status: 500 });
  }
  try {
    const body = await request.json();
    const res = await fetch(url(), {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
        type: "wish",
        name: body.name || "",
        attendance: "",
        guests: "",
        message: body.message || "",
      }),
    });
    if (!res.ok) throw new Error();
    return Response.json({ ok: true });
  } catch (e) {
    return Response.json({ ok: false, error: String(e) }, { status: 502 });
  }
}
