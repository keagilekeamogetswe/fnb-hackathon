"use client"

async function submitHandler(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  const form = e.currentTarget;
  const email = (form.email as HTMLInputElement).value;
  const subject = (form.subject as HTMLInputElement).value;
  const detail = (form.details as HTMLTextAreaElement).value;

  const res = await fetch("/api/report/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, subject, detail }),
  });

  const data = await res.json();
  console.log(data)
  if (data?.request_id) {
    window.location.href = `/report-status/?id=${data.request_id}`;
  }
}

export default function VoiceOut() {
  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold mt-16">Voice Out</h1>
      <p className="text-justify tracking-wider my-6">
        Thank you for speaking up and driving change—your courage inspires progress. Together, we’re building a better future.
      </p>
      <form
        onSubmit={submitHandler}
        className="bg-[rgba(217,217,217,0.05)] border border-[rgba(84,84,87,0.6)] shadow-[0_4px_8px_rgba(0,0,0,0.25)] rounded-xl p-6 -mx-4"
      >
        <div>
          <label className="" htmlFor="email">Email</label>
          <input className="w-full mt-2 mb-6 p-3 rounded-lg bg-[rgba(255,255,255,0.1)] border border-[rgba(84,84,87,0.6)]" type="email" id="email" name="email" placeholder="Your email address" required />
        </div>
        <div>
          <label className="" htmlFor="subject">Subject</label>
          <input className="w-full mt-2 mb-6 p-3 rounded-lg bg-[rgba(255,255,255,0.1)] border border-[rgba(84,84,87,0.6)]" type="text" id="subject" name="subject" placeholder="Your subject" required />
        </div>
        <div>
          <label className="" htmlFor="details">Details</label>
          <textarea rows={3} className="w-full mt-2 mb-6 p-3 rounded-lg bg-[rgba(255,255,255,0.1)] border border-[rgba(84,84,87,0.6)]" id="details" name="details" placeholder="Describe our situation" required />
        </div>
        <input className="bg-[#6A8C0C] block rounded-xl py-2 px-10 mx-auto" type="submit" value="send report" />

      </form>
    </main>
  )
}
