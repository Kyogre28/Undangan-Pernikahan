// Menerima data RSVP dari form, lalu meneruskan ke Google Apps Script
// (yang menyimpannya ke Google Sheets). URL diambil dari .env.local.

export async function POST(request) {
  const url = process.env.APPS_SCRIPT_URL;
  if (!url) {
    return Response.json(
      { ok: false, error: "APPS_SCRIPT_URL belum diatur" },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
        type: "rsvp",
        name: body.name || "",
        attendance: body.attendance || "",
        guests: body.guests || "",
        message: "",
      }),
    });
    if (!res.ok) throw new Error("Apps Script error");
    return Response.json({ ok: true });
  } catch (e) {
    return Response.json({ ok: false, error: String(e) }, { status: 502 });
  }
}
