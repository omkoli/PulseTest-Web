"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bug, CheckCircle2, Globe2, Menu, Moon, Rocket, Sparkles, Star, Sun, Users, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" }, transition: { duration: 0.6 } };
const benefitsFounder = ["Real user feedback", "Usability insights", "Bug discovery", "Feature suggestions", "Faster iterations", "Better launches"];
const benefitsTester = ["Discover innovative startups", "Earn rewards", "Gain experience", "Build your reputation", "Flexible participation", "Shape better products"];
const faqs = [
  ["Do I need a finished product?", "No. The waitlist is for founders at idea, MVP, beta, or live stages so we can learn where testing demand is strongest."],
  ["How much will testing cost?", "Pricing is not set yet. Founder waitlist answers will help shape packages that feel fair and useful."],
  ["Can students become testers?", "Yes. Students, developers, QA engineers, product managers, UX researchers, and power users can join the tester waitlist."],
  ["When will the marketplace launch?", "We are validating demand first. Waitlist members will get early updates as the concept develops."],
  ["Will testing be paid?", "Tester rewards are part of the concept. The waitlist asks whether testers prefer paid, free, or both kinds of opportunities."]
];

function Logo() {
  return <a href="#top" className="flex items-center gap-2 font-bold tracking-tight"><span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-glow"><Rocket className="h-4 w-4" /></span>Ship with Confidence</a>;
}

function Field({ label, children }: { label: string; children?: React.ReactNode }) {
  return <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-200"><span>{label}</span>{children ?? <input className="rounded-2xl border border-border bg-white/80 px-4 py-3 outline-none ring-indigo-500/20 transition focus:ring-4 dark:bg-white/5" />}</label>;
}

function WaitlistForm({ type }: { type: "Founder" | "Tester" }) {
  const isFounder = type === "Founder";
  return <motion.form {...fadeUp} className="rounded-3xl border border-border bg-card/85 p-6 shadow-2xl shadow-slate-950/5 backdrop-blur md:p-8" onSubmit={(e) => e.preventDefault()}>
    <div className="mb-6"><p className="text-sm font-semibold text-indigo-600 dark:text-indigo-300">{type} waitlist</p><h3 className="mt-2 text-2xl font-bold">Join as a {type.toLowerCase()}</h3></div>
    <div className="grid gap-4">
      <Field label="Name" />
      <Field label="Email"><input type="email" className="rounded-2xl border border-border bg-white/80 px-4 py-3 outline-none ring-indigo-500/20 transition focus:ring-4 dark:bg-white/5" /></Field>
      {isFounder ? <>
        <Field label="What are you building?"><textarea rows={3} className="rounded-2xl border border-border bg-white/80 px-4 py-3 outline-none ring-indigo-500/20 transition focus:ring-4 dark:bg-white/5" /></Field>
        <Field label="Current stage"><select className="rounded-2xl border border-border bg-white/80 px-4 py-3 outline-none dark:bg-slate-950"><option>Idea</option><option>MVP</option><option>Beta</option><option>Live</option></select></Field>
        <Field label="Would you pay for user testing?"><input placeholder="Yes, no, or depends" className="rounded-2xl border border-border bg-white/80 px-4 py-3 outline-none dark:bg-white/5" /></Field>
        <Field label="Biggest challenge" />
      </> : <>
        <Field label="Country" />
        <Field label="Experience" />
        <Field label="Profession" />
        <Field label="Platforms tested" />
        <Field label="Interested in"><select className="rounded-2xl border border-border bg-white/80 px-4 py-3 outline-none dark:bg-slate-950"><option>Paid</option><option>Free</option><option>Both</option></select></Field>
      </>}
      <Button variant="gradient" size="lg" className="mt-2 w-full">Join {type} Waitlist <ArrowRight className="ml-2 h-4 w-4" /></Button>
    </div>
  </motion.form>;
}

export default function Home() {
  const [dark, setDark] = useState(false);
  useEffect(() => { document.documentElement.classList.toggle("dark", dark); }, [dark]);
  return <main id="top" className="min-h-screen overflow-hidden bg-background text-foreground">
    <div className="fixed inset-0 -z-10 bg-grid"><div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl" /></div>
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl"><nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4"><Logo /><div className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex"><a href="#how">How it Works</a><a href="#founders">For Founders</a><a href="#testers">For Testers</a><a href="#faq">FAQ</a></div><div className="flex items-center gap-2"><button aria-label="Toggle theme" onClick={() => setDark(!dark)} className="rounded-full border border-border p-2">{dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}</button><Button asChild variant="gradient" className="hidden sm:inline-flex"><a href="#waitlist">Join Waitlist</a></Button><Menu className="h-5 w-5 md:hidden" /></div></nav></header>

    <section className="mx-auto grid max-w-7xl gap-12 px-4 pb-20 pt-20 lg:grid-cols-[1fr_.9fr] lg:items-center lg:pt-28"><motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}><div className="mb-6 inline-flex rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm font-semibold text-indigo-700 dark:text-indigo-200"><Sparkles className="mr-2 h-4 w-4" /> Validate before you launch</div><h1 className="max-w-4xl text-5xl font-black tracking-tight md:text-7xl">Launch with confidence, not guesswork.</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">Your AI-built MVP deserves real users before real customers. Join the waitlist to connect founders with testers who provide actionable feedback before launch.</p><div className="mt-9 flex flex-col gap-3 sm:flex-row"><Button asChild variant="gradient" size="lg"><a href="#founder-form">I&rsquo;m a Founder</a></Button><Button asChild variant="outline" size="lg"><a href="#tester-form">I&rsquo;m a Tester</a></Button></div><p className="mt-5 text-sm text-muted-foreground">No marketplace access yet — this page validates demand and collects early interest.</p></motion.div><motion.div initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .7, delay: .15 }} className="rounded-[2rem] border border-border bg-card/80 p-4 shadow-2xl shadow-indigo-950/10 backdrop-blur"><div className="rounded-[1.5rem] bg-slate-950 p-5 text-white"><div className="flex items-center justify-between"><span className="text-sm text-slate-400">MVP feedback dashboard</span><div className="flex gap-1"><span className="h-3 w-3 rounded-full bg-red-400"/><span className="h-3 w-3 rounded-full bg-amber-400"/><span className="h-3 w-3 rounded-full bg-emerald-400"/></div></div><div className="mt-8 grid gap-4"><div className="rounded-2xl bg-white/10 p-4"><p className="text-sm text-slate-300">Tester signal</p><div className="mt-3 h-3 rounded-full bg-white/10"><div className="h-3 w-3/4 rounded-full bg-gradient-to-r from-blue-400 to-violet-400" /></div></div>{["Confusing onboarding step", "Mobile layout issue", "Pricing copy unclear"].map((x, i) => <div key={x} className="flex items-center gap-3 rounded-2xl bg-white/10 p-4"><CheckCircle2 className="h-5 w-5 text-emerald-300" /><span>{x}</span><span className="ml-auto rounded-full bg-indigo-400/20 px-2 py-1 text-xs">#{i + 1}</span></div>)}</div></div></motion.div></section>

    <section className="mx-auto max-w-7xl px-4 pb-16"><div className="grid gap-4 md:grid-cols-3">{[["Founders Joining Daily", "Coming Soon"], ["Testers Interested", "Coming Soon"], ["Countries Reached", "Placeholder"]].map(([label, value]) => <motion.div {...fadeUp} key={label} className="rounded-3xl border border-border bg-card p-6 text-center shadow-sm"><p className="text-3xl font-black text-transparent bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text">{value}</p><p className="mt-2 text-sm text-muted-foreground">{label}</p></motion.div>)}</div></section>

    <section className="mx-auto max-w-7xl px-4 py-20"><motion.h2 {...fadeUp} className="text-center text-4xl font-black tracking-tight md:text-5xl">Building is easy.<br />Validation is hard.</motion.h2><div className="mt-12 grid gap-5 md:grid-cols-4">{[[Rocket,"AI helps you build faster."],[Bug,"Bugs still reach users."],[Users,"Friends don't give useful feedback."],[Zap,"Poor first impressions hurt retention."]].map(([Icon, text]) => <motion.div {...fadeUp} key={String(text)} className="rounded-3xl border border-border bg-card p-6 shadow-sm"><Icon className="mb-5 h-8 w-8 text-indigo-500" /><h3 className="text-lg font-bold">{String(text)}</h3></motion.div>)}</div></section>

    <section id="how" className="mx-auto max-w-7xl px-4 py-20"><motion.h2 {...fadeUp} className="text-center text-4xl font-black md:text-5xl">How it works</motion.h2><div className="mt-12 grid gap-6 md:grid-cols-3">{[["1","Submit your MVP","Describe your product and what you want tested."],["2","Get matched","We&rsquo;ll connect you with real testers."],["3","Improve before launch","Receive actionable feedback and iterate with confidence."]].map(([n,t,d]) => <motion.div {...fadeUp} key={n} className="rounded-3xl border border-border bg-card p-8 shadow-sm"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-xl font-black text-white">{n}</span><h3 className="mt-6 text-2xl font-bold">{t}</h3><p className="mt-3 text-muted-foreground">{d}</p></motion.div>)}</div></section>

    <section id="founders" className="mx-auto max-w-7xl px-4 py-20"><div className="grid gap-10 lg:grid-cols-2 lg:items-center"><motion.div {...fadeUp}><p className="font-semibold text-indigo-600">For founders</p><h2 className="mt-3 text-4xl font-black md:text-5xl">Before spending months building, validate with real users.</h2><div className="mt-8 grid gap-3 sm:grid-cols-2">{benefitsFounder.map(b => <div key={b} className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4"><Star className="h-4 w-4 text-indigo-500" />{b}</div>)}</div><Button asChild variant="gradient" size="lg" className="mt-8"><a href="#founder-form">Join Founder Waitlist</a></Button></motion.div><div id="founder-form"><WaitlistForm type="Founder" /></div></div></section>

    <section id="testers" className="mx-auto max-w-7xl px-4 py-20"><div className="grid gap-10 lg:grid-cols-2 lg:items-center"><div id="tester-form"><WaitlistForm type="Tester" /></div><motion.div {...fadeUp}><p className="font-semibold text-indigo-600">For testers</p><h2 className="mt-3 text-4xl font-black md:text-5xl">Earn rewards for structured product feedback.</h2><div className="mt-8 grid gap-3 sm:grid-cols-2">{benefitsTester.map(b => <div key={b} className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4"><Globe2 className="h-4 w-4 text-violet-500" />{b}</div>)}</div><Button asChild variant="gradient" size="lg" className="mt-8"><a href="#tester-form">Join Tester Waitlist</a></Button></motion.div></div></section>

    <section id="waitlist" className="mx-auto max-w-7xl px-4 py-20"><div className="rounded-[2rem] bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 p-8 text-center text-white shadow-glow md:p-14"><h2 className="text-4xl font-black md:text-5xl">Ready to help shape the marketplace?</h2><p className="mx-auto mt-4 max-w-2xl text-white/80">Choose the waitlist that fits you. We will use responses to validate demand, prioritize launch markets, and understand testing needs.</p><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><Button asChild size="lg"><a href="#founder-form">I&rsquo;m a Founder</a></Button><Button asChild variant="outline" size="lg"><a href="#tester-form">I&rsquo;m a Tester</a></Button></div></div></section>

    <section id="faq" className="mx-auto max-w-4xl px-4 py-20"><motion.h2 {...fadeUp} className="text-center text-4xl font-black md:text-5xl">FAQ</motion.h2><div className="mt-10 grid gap-4">{faqs.map(([q,a]) => <motion.details {...fadeUp} key={q} className="group rounded-3xl border border-border bg-card p-6"><summary className="cursor-pointer list-none font-bold">{q}</summary><p className="mt-3 text-muted-foreground">{a}</p></motion.details>)}</div></section>

    <footer className="border-t border-border"><div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-[1fr_auto]"><div><Logo /><p className="mt-4 max-w-md text-sm text-muted-foreground">Helping founders validate product demand with real user feedback before launch.</p></div><div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground"><a href="#">Privacy Policy</a><a href="#">Terms</a><a href="mailto:hello@shipwithconfidence.example">Contact</a><a href="#" aria-label="X">𝕏</a><a href="#" aria-label="LinkedIn">in</a></div></div></footer>
  </main>;
}
