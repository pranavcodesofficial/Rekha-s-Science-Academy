"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";

const navy = "#1B2A4A";
const gold = "#C8A84B";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Subjects", href: "#subjects" },
  { label: "About", href: "#about" },
  { label: "Results", href: "#results" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const studentName = formData.get("studentName");
    const parentName = formData.get("parentName");
    const phone = formData.get("phone");
    const grade = formData.get("grade");
    const subject = formData.get("subject");
    const source = formData.get("source");

    const mailBody = `Student Name: ${studentName}
Parent Name: ${parentName}
Phone Number: ${phone}
Class / Grade: ${grade}
Subject of Interest: ${subject}
How did you hear about us?: ${source}`;

    window.location.href = `mailto:admissions@rekhascienceacademy.com?subject=${encodeURIComponent(
      "New Enquiry - Rekha's Science Academy"
    )}&body=${encodeURIComponent(mailBody)}`;

    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <div className="bg-white text-[#1B2A4A]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          <a href="#home" className="flex items-center gap-2 text-lg font-bold">
            <span style={{ color: gold }}>🎓</span>
            <span style={{ color: navy }}>Rekha&apos;s Science Academy</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-slate-700 hover:text-[#1B2A4A]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-full px-5 py-2 text-sm font-semibold text-[#1B2A4A] shadow-md hover:-translate-y-0.5"
              style={{ backgroundColor: gold }}
            >
              Enquire Now
            </a>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-[#1B2A4A] md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            <span className="text-2xl">{menuOpen ? "✕" : "☰"}</span>
          </button>
        </nav>

        {menuOpen ? (
          <div className="space-y-3 border-t border-slate-200 bg-white px-6 py-4 md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-sm font-semibold text-slate-700 hover:text-[#1B2A4A]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="inline-block rounded-full px-4 py-2 text-sm font-semibold text-[#1B2A4A]"
              style={{ backgroundColor: gold }}
            >
              Enquire Now
            </a>
          </div>
        ) : null}
      </header>

      <main>
        <section
          id="home"
          className="scroll-mt-24 mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 pb-16 pt-32 lg:grid-cols-2 lg:px-10"
        >
          <div>
            <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
              Science Made Clear. Results That Speak.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-600">
              Expert coaching in Physics, Chemistry and Biology for students in
              Chennai who are serious about their results.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-full px-6 py-3 text-sm font-semibold text-[#1B2A4A] shadow-md hover:-translate-y-0.5"
                style={{ backgroundColor: gold }}
              >
                Enquire Now
              </a>
              <a
                href="#subjects"
                className="rounded-full border-2 border-[#1B2A4A] px-6 py-3 text-sm font-semibold hover:bg-[#1B2A4A] hover:text-white"
              >
                View Subjects
              </a>
            </div>
            <div className="mt-10 max-w-xl overflow-hidden rounded-full border border-slate-200 bg-slate-50 py-3 shadow-sm">
              <div className="flex min-w-max animate-[marquee_18s_linear_infinite] items-center gap-8 px-5 text-sm font-semibold whitespace-nowrap text-slate-700">
                {[
                  "10+ Years Experience",
                  "Proven Results",
                  "Fixed Batch Sizes",
                  "Personalised Attention",
                  "10+ Years Experience",
                  "Proven Results",
                  "Fixed Batch Sizes",
                  "Personalised Attention",
                ].map((item, index) => (
                  <span key={`${item}-${index}`} className="inline-flex items-center gap-2">
                    <span className="text-[#C8A84B]">●</span>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="relative h-[420px] overflow-hidden rounded-3xl shadow-2xl lg:h-[520px]">
            <Image
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=80"
              alt="Teacher writing science formulas on a classroom board"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </section>

        <section className="bg-[#1B2A4A] py-14 text-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 text-center sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
            {[
              "Expert Faculty",
              "Physics, Chemistry & Biology",
              "Proven Track Record",
              "Limited Batch Sizes",
            ].map((item) => (
              <div key={item} className="rounded-xl border border-white/15 p-6">
                <div className="mb-3 text-2xl" style={{ color: gold }}>
                  ✦
                </div>
                <p className="font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="subjects" className="scroll-mt-24 mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <h2 className="text-center text-3xl font-bold">Subjects We Teach</h2>
          <div
            className="mx-auto mt-4 h-1 w-28 rounded-full"
            style={{ backgroundColor: gold }}
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Physics",
                icon: "⚛",
                desc: "Mechanics, electricity, magnetism, optics and modern physics taught with strong conceptual grounding.",
                for: "Best for Class 10-12 students preparing for board and competitive exam foundations.",
              },
              {
                title: "Chemistry",
                icon: "🧪",
                desc: "Physical, organic and inorganic chemistry with structured problem solving and reaction clarity.",
                for: "Ideal for students who need score improvement and confidence in applications.",
              },
              {
                title: "Biology",
                icon: "🧬",
                desc: "Detailed theory coverage, diagrams, NCERT-aligned revision and exam-centric writing practice.",
                for: "Perfect for students aiming for high marks in school and entrance preparation.",
              },
            ].map((subject) => (
              <article
                key={subject.title}
                className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-[#1B2A4A] hover:shadow-lg"
              >
                <div
                  className="mb-5 h-1 w-16 rounded-full"
                  style={{ backgroundColor: gold }}
                />
                <p className="text-2xl">{subject.icon}</p>
                <h3 className="mt-4 text-2xl font-bold">{subject.title}</h3>
                <p className="mt-4 text-slate-600">{subject.desc}</p>
                <p className="mt-4 text-sm font-medium text-slate-500">
                  {subject.for}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="scroll-mt-24 bg-slate-50 py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-2 lg:px-10">
            <div className="rounded-2xl p-8 text-white" style={{ backgroundColor: navy }}>
              <p className="text-sm font-semibold uppercase tracking-widest text-[#C8A84B]">
                Credentials
              </p>
              <h3 className="mt-4 text-3xl font-bold text-[#C8A84B]">
                10+ Years of Trusted Teaching Excellence
              </h3>
              <p className="mt-6 text-slate-200">
                Dedicated mentoring for Chennai students with disciplined
                schedules, concept-driven lessons and measurable progress.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-bold">About Rekha</h2>
              <p className="mt-5 leading-8 text-slate-600">
                With over a decade of experience teaching Science to students
                across Chennai, Rekha&apos;s Academy has helped hundreds of
                students achieve the results they need for school examinations.
                Our approach combines conceptual clarity with consistent
                practice — ensuring every student not only understands the
                subject but can apply it under exam conditions.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  "Personalised Attention",
                  "Concept-First Teaching",
                  "Exam-Focused Practice",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-5 text-center text-sm font-semibold"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="results" className="scroll-mt-24 bg-[#F3F4F6] py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <h2 className="text-center text-3xl font-bold">Student Results</h2>
            <div
              className="mx-auto mt-4 h-1 w-28 rounded-full"
              style={{ backgroundColor: gold }}
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {[
                {
                  name: "Aarav Krishnan",
                  grade: "Class 12",
                  quote:
                    "I improved from 72 to 95 in Physics pre-boards. The weekly test review and one-to-one doubt sessions made the difference.",
                },
                {
                  name: "Nithya Raman",
                  grade: "Class 11",
                  quote:
                    "My daughter went from struggling with organic chemistry to scoring 94 in her board exams. The way concepts are explained here is unlike any other coaching centre.",
                },
                {
                  name: "Harini Suresh",
                  grade: "Class 10",
                  quote:
                    "Biology finally became easy to remember and write in exams. I scored full marks in two unit tests after joining.",
                },
              ].map((testimonial) => (
                <article
                  key={testimonial.name}
                  className="rounded-2xl bg-white p-7 shadow-sm transition-transform hover:-translate-y-1"
                >
                  <p className="text-sm text-slate-600">★★★★★</p>
                  <p className="mt-4 text-slate-700">&ldquo;{testimonial.quote}&rdquo;</p>
                  <p className="mt-6 font-bold">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.grade}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 bg-white py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-2 lg:px-10">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
              <h2 className="text-3xl font-bold">Enquire Now</h2>
              <p className="mt-4 text-slate-600">
                We currently have limited seats available. Fill the form below
                and we will reach out to you within 24 hours.
              </p>
              <a
                href="tel:+919876543210"
                className="mt-8 inline-block rounded-xl px-6 py-4 text-lg font-bold text-[#1B2A4A] shadow-md hover:-translate-y-0.5"
                style={{ backgroundColor: gold }}
              >
                Call: +91 98765 43210
              </a>
              <div className="mt-8 space-y-3 text-slate-700">
                <p className="font-semibold">📍 KK Nagar, Chennai, Tamil Nadu</p>
                <p>Near Main Road, Opposite Community Hall</p>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border-2 border-[#1B2A4A] bg-white p-8 shadow-xl"
            >
              <div className="grid gap-4">
                <input
                  type="text"
                  name="studentName"
                  placeholder="Student Name"
                  required
                  className="rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-[#1B2A4A]"
                />
                <input
                  type="text"
                  name="parentName"
                  placeholder="Parent Name"
                  required
                  className="rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-[#1B2A4A]"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  className="rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-[#1B2A4A]"
                />
                <select
                  name="grade"
                  required
                  className="rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-[#1B2A4A]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Class / Grade
                  </option>
                  {["Class 8", "Class 9", "Class 10", "Class 11", "Class 12"].map(
                    (grade) => (
                      <option key={grade} value={grade}>
                        {grade}
                      </option>
                    )
                  )}
                </select>
                <select
                  name="subject"
                  required
                  className="rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-[#1B2A4A]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Subject of Interest
                  </option>
                  {["Physics", "Chemistry", "Biology", "All Three"].map(
                    (subject) => (
                      <option key={subject} value={subject}>
                        {subject}
                      </option>
                    )
                  )}
                </select>
                <select
                  name="source"
                  required
                  className="rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-[#1B2A4A]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    How did you hear about us?
                  </option>
                  {["Google Search", "Referral", "Walk-in", "Other"].map((source) => (
                    <option key={source} value={source}>
                      {source}
                    </option>
                  ))}
                </select>
                <button
                  type="submit"
                  className="mt-2 rounded-lg px-5 py-3 text-base font-bold text-[#1B2A4A] shadow-md hover:-translate-y-0.5"
                  style={{ backgroundColor: gold }}
                >
                  Send Enquiry
                </button>
                {submitted ? (
                  <p className="rounded-lg bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
                    Thank you! We will call you within 24 hours.
                  </p>
                ) : null}
              </div>
            </form>
          </div>
        </section>

        <section className="grid bg-white lg:grid-cols-2">
          <iframe
            title="Rekha's Science Academy Location"
            src="https://www.google.com/maps?q=KK%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu&output=embed"
            className="h-80 w-full border-0 lg:h-full lg:min-h-[420px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="flex flex-col justify-center bg-slate-50 p-10">
            <h3 className="text-2xl font-bold">Visit Our Academy</h3>
            <div className="mt-6 space-y-4 text-slate-700">
              <p>📍 KK Nagar, Chennai, Tamil Nadu</p>
              <p>📞 +91 94450 62045</p>
              <p>🕘 Monday to Saturday, 9:00 AM to 7:00 PM</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#1B2A4A] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3 lg:px-10">
          <div>
            <h4 className="text-xl font-bold text-[#C8A84B]">
              Rekha&apos;s Science Academy
            </h4>
            <p className="mt-3 text-slate-300">Clarity. Consistency. Results.</p>
          </div>
          <div>
            <h5 className="font-semibold">Quick Links</h5>
            <div className="mt-3 space-y-2 text-slate-300">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} className="block hover:text-white">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h5 className="font-semibold">Contact</h5>
            <p className="mt-3 text-slate-300">KK Nagar, Chennai, Tamil Nadu</p>
            <p className="mt-1 text-slate-300">+91 98765 43210</p>
            <p className="mt-1 text-slate-300">admissions@rekhascienceacademy.com</p>
          </div>
        </div>
        <div className="border-t border-white/15 py-4 text-center text-sm text-slate-300">
          Rekha&apos;s Science Academy © 2026 | Website by Accord
        </div>
      </footer>
    </div>
  );
}
