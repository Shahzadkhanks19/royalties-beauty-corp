import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Navigate, useNavigate } from "react-router-dom";

function AdminLoginPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [checking, setChecking] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    let active = true;
    fetch("/api/admin/me", { credentials: "include" })
      .then((response) => {
        if (active) setAuthenticated(response.ok);
      })
      .catch(() => {
        if (active) setAuthenticated(false);
      })
      .finally(() => {
        if (active) setChecking(false);
      });
    return () => {
      active = false;
    };
  }, []);

  if (checking) {
    return <main className="grid min-h-screen place-items-center bg-[#0b0b0c] text-white"><div className="text-center"><div className="mx-auto h-10 w-10 animate-spin rounded-full border-2 border-white/10 border-t-[#ff4d50]"/><p className="mt-4 text-[10px] font-bold uppercase tracking-[.24em] text-white/45">Checking session</p></div></main>;
  }

  if (authenticated) return <Navigate to="/admin/messages" replace />;

  const inputClass = "w-full border border-white/12 bg-white/[.05] px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/28 focus:border-[#ff4d50] focus:ring-2 focus:ring-[#ff4d50]/15";

  const submit = async (event) => {
    event.preventDefault();
    if (!form.email.trim() || !form.password) {
      setStatus({ type: "error", message: "Enter your admin email and password." });
      return;
    }
    setSubmitting(true);
    setStatus({ type: "", message: "" });
    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (!response.ok || !data.ok) throw new Error(data.message || "Unable to sign in.");
      navigate("/admin/messages", { replace: true });
    } catch (error) {
      setStatus({ type: "error", message: error.message || "Unable to sign in." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#0b0b0c] px-5 py-10 text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_16%,rgba(255,77,80,.17),transparent_26%),radial-gradient(circle_at_24%_82%,rgba(201,168,106,.12),transparent_30%)]" />
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-6xl items-center gap-10 lg:grid-cols-[1fr_.78fr]">
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="max-w-2xl">
          <p className="text-[10px] font-bold uppercase tracking-[.24em] text-[#ff6b6e]">RB Corp Admin</p>
          <h1 className="mt-5 font-serif text-[clamp(3.5rem,7vw,6.5rem)] leading-[.94] tracking-[-.05em]">Private access for <span className="text-[#ff5b5e]">group operations.</span></h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/55">Review and manage RB Corp contact enquiries from one protected workspace.</p>
        </motion.div>

        <motion.form onSubmit={submit} initial={{opacity:0,x:24}} animate={{opacity:1,x:0}} className="border border-white/12 bg-[#151517]/88 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
          <p className="text-[10px] font-bold uppercase tracking-[.22em] text-[#c9a86a]">Administrator sign in</p>
          <h2 className="mt-4 font-serif text-3xl">Welcome back.</h2>
          <div className="mt-7 space-y-4">
            <label className="block"><span className="mb-2 block text-[10px] font-bold uppercase tracking-[.15em] text-white/45">Email</span><input value={form.email} onChange={(e)=>setForm((current)=>({...current,email:e.target.value}))} className={inputClass} placeholder="admin@example.com" inputMode="email" autoComplete="username" /></label>
            <label className="block">
              <span className="mb-2 block text-[10px] font-bold uppercase tracking-[.15em] text-white/45">Password</span>
              <span className="relative block">
                <input value={form.password} onChange={(e)=>setForm((current)=>({...current,password:e.target.value}))} className={`${inputClass} pr-32`} placeholder="Enter password" type={showPassword ? "text" : "password"} autoComplete="current-password" />
                <button type="button" onClick={()=>setShowPassword((current)=>!current)} aria-pressed={showPassword} aria-label={showPassword ? "Hide password" : "Show password"} className="absolute right-2 top-1/2 inline-flex -translate-y-1/2 items-center gap-2 rounded-sm border border-white/15 bg-[#0b0b0c] px-3 py-2 text-[10px] font-bold uppercase tracking-[.12em] text-white shadow-sm transition hover:border-[#ff4d50]/60 hover:bg-[#1d1d20] hover:text-[#ff7b7d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff4d50]">
                  <span aria-hidden="true" className="text-sm leading-none text-[#ff6b6e]">{showPassword ? "◉" : "◎"}</span>
                  <span>{showPassword ? "Hide" : "Show"}</span>
                </button>
              </span>
            </label>
          </div>
          {status.message && <div className="mt-5 border border-red-400/25 bg-red-500/10 px-4 py-3 text-sm text-red-100" role="status">{status.message}</div>}
          <button disabled={submitting} className="mt-6 flex w-full items-center justify-center gap-3 bg-[#ff4d50] px-6 py-4 text-sm font-bold uppercase tracking-[.08em] transition hover:-translate-y-0.5 hover:bg-[#e83c40] disabled:cursor-not-allowed disabled:opacity-55">{submitting?"Signing in...":"Sign in"}<span>→</span></button>
        </motion.form>
      </div>
    </main>
  );
}

export default AdminLoginPage;
