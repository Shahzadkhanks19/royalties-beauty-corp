import { useCallback, useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import { Navigate, useNavigate } from "react-router-dom";

const statuses = ["all", "new", "read", "replied"];

function formatDate(value) {
  if (!value) return "";
  return new Intl.DateTimeFormat("en-IN", { dateStyle: "medium", timeStyle: "short" }).format(new Date(value));
}

function AdminMessagesPage() {
  const navigate = useNavigate();
  const [authState, setAuthState] = useState("checking");
  const [items, setItems] = useState([]);
  const [newCount, setNewCount] = useState(0);
  const [statusFilter, setStatusFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notice, setNotice] = useState({ type: "", message: "" });

  const loadMessages = useCallback(async (nextStatus, nextSearch) => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (nextStatus !== "all") params.set("status", nextStatus);
      if (nextSearch.trim()) params.set("search", nextSearch.trim());

      const response = await fetch(`/api/admin/contact-inquiries?${params.toString()}`, { credentials: "include" });
      if (response.status === 401) {
        setAuthState("unauthenticated");
        return;
      }

      const data = await response.json();
      if (!response.ok || !data.ok) throw new Error(data.message || "Unable to load inquiries.");

      setItems(data.items || []);
      setNewCount(Number(data.newCount || 0));
      setAuthState("authenticated");
    } catch (error) {
      setNotice({ type: "error", message: error.message || "Unable to load inquiries." });
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    let active = true;

    fetch("/api/admin/me", { credentials: "include" })
      .then((response) => {
        if (!response.ok) throw new Error();
        if (active) setAuthState("authenticated");
      })
      .catch(() => {
        if (active) {
          setAuthState("unauthenticated");
          setLoading(false);
        }
      });

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (authState !== "authenticated") return undefined;
    const timer = setTimeout(() => loadMessages(statusFilter, search), 250);
    return () => clearTimeout(timer);
  }, [authState, loadMessages, search, statusFilter]);

  const counts = useMemo(() => ({
    all: items.length,
    new: items.filter((item) => item.status === "new").length,
    read: items.filter((item) => item.status === "read").length,
    replied: items.filter((item) => item.status === "replied").length,
  }), [items]);

  if (authState === "checking") {
    return <main className="grid min-h-screen place-items-center bg-[#0b0b0c] text-white"><div className="text-center"><div className="mx-auto h-10 w-10 animate-spin rounded-full border-2 border-white/10 border-t-[#ff4d50]"/><p className="mt-4 text-[10px] font-bold uppercase tracking-[.24em] text-white/45">Loading admin</p></div></main>;
  }

  if (authState === "unauthenticated") return <Navigate to="/admin/login" replace />;

  const setStatus = async (item, status) => {
    try {
      const response = await fetch(`/api/admin/contact-inquiries/${item._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ status }),
      });
      const data = await response.json();
      if (!response.ok || !data.ok) throw new Error(data.message || "Unable to update inquiry.");
      setSelected(data.item);
      setNotice({ type: "success", message: `Marked as ${status}.` });
      await loadMessages(statusFilter, search);
    } catch (error) {
      setNotice({ type: "error", message: error.message || "Unable to update inquiry." });
    }
  };

  const removeMessage = async () => {
    if (!deleteTarget) return;
    try {
      const response = await fetch(`/api/admin/contact-inquiries/${deleteTarget._id}`, { method: "DELETE", credentials: "include" });
      const data = await response.json();
      if (!response.ok || !data.ok) throw new Error(data.message || "Unable to delete inquiry.");
      setDeleteTarget(null);
      if (selected?._id === deleteTarget._id) setSelected(null);
      setNotice({ type: "success", message: "Inquiry deleted." });
      await loadMessages(statusFilter, search);
    } catch (error) {
      setNotice({ type: "error", message: error.message || "Unable to delete inquiry." });
    }
  };

  const logout = async () => {
    await fetch("/api/admin/logout", { method: "POST", credentials: "include" }).catch(() => null);
    navigate("/admin/login", { replace: true });
  };

  return (
    <main className="min-h-screen bg-[#f4f0eb] text-[#151517]">
      <header className="border-b border-black/10 bg-[#0b0b0c] text-white">
        <div className="mx-auto flex max-w-[1680px] flex-col gap-5 px-5 py-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12 xl:px-16">
          <div><p className="text-[10px] font-bold uppercase tracking-[.24em] text-[#ff6b6e]">RB Corp Admin</p><h1 className="mt-2 font-serif text-3xl">Contact Messages</h1></div>
          <div className="flex flex-wrap items-center gap-3"><span className="border border-white/12 bg-white/[.05] px-4 py-3 text-xs text-white/65"><strong className="text-white">{newCount}</strong> new</span><button type="button" onClick={logout} className="border border-white/15 px-4 py-3 text-xs font-bold uppercase tracking-[.08em] transition hover:bg-white/10">Sign out</button></div>
        </div>
      </header>

      <section className="mx-auto max-w-[1680px] px-5 py-8 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid gap-5 xl:grid-cols-[.88fr_1.12fr]">
          <div className="border border-black/10 bg-white">
            <div className="border-b border-black/10 p-4 sm:p-5">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex flex-wrap gap-2">{statuses.map((status)=><button key={status} type="button" onClick={()=>setStatusFilter(status)} className={`px-4 py-2.5 text-xs font-bold uppercase tracking-[.07em] transition ${statusFilter===status?"bg-[#151517] text-white":"border border-black/10 bg-[#f7f4f0] hover:border-[#ff4d50]/50"}`}>{status}{status!=="all" && <span className="ml-2 text-[10px] opacity-60">{counts[status]}</span>}</button>)}</div>
                <label className="block min-w-0 lg:w-72"><span className="sr-only">Search messages</span><input value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search messages" className="w-full border border-black/10 bg-[#f7f4f0] px-4 py-3 text-sm outline-none transition placeholder:text-black/35 focus:border-[#ff4d50] focus:ring-2 focus:ring-[#ff4d50]/10" /></label>
              </div>
            </div>

            {notice.message && <div className={`m-4 border px-4 py-3 text-sm ${notice.type==="success"?"border-emerald-200 bg-emerald-50 text-emerald-800":"border-red-200 bg-red-50 text-red-700"}`} role="status">{notice.message}</div>}

            <div className="max-h-[70vh] overflow-y-auto">
              {loading ? <div className="grid min-h-64 place-items-center"><div className="text-center"><div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-black/10 border-t-[#ff4d50]"/><p className="mt-3 text-xs text-black/45">Loading inquiries</p></div></div> : items.length ? items.map((item)=><button key={item._id} type="button" onClick={()=>{setSelected(item);if(item.status==="new")setStatus(item,"read")}} className={`block w-full border-b border-black/8 p-5 text-left transition hover:bg-[#faf7f3] ${selected?._id===item._id?"bg-[#f8ecec]":""}`}><div className="flex items-start justify-between gap-4"><div className="min-w-0"><div className="flex flex-wrap items-center gap-2"><h2 className="truncate font-serif text-xl">{item.name}</h2><span className={`px-2 py-1 text-[9px] font-bold uppercase tracking-[.1em] ${item.status==="new"?"bg-[#ff4d50] text-white":item.status==="replied"?"bg-emerald-100 text-emerald-800":"bg-black/6 text-black/55"}`}>{item.status}</span></div><p className="mt-1 truncate text-xs text-black/45">{item.email} · {item.inquiryType}</p><p className="mt-3 line-clamp-2 text-sm leading-6 text-black/60">{item.message}</p></div><span className="shrink-0 text-[10px] text-black/35">{formatDate(item.createdAt)}</span></div></button>) : <div className="grid min-h-64 place-items-center px-6 text-center"><div><p className="font-serif text-2xl">No inquiries found.</p><p className="mt-2 text-sm text-black/45">Try another filter or search term.</p></div></div>}
            </div>
          </div>

          <div className="border border-black/10 bg-[#151517] text-white">
            {selected ? <motion.div key={selected._id} initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} className="p-6 sm:p-8"><div className="flex flex-col gap-5 border-b border-white/10 pb-6 sm:flex-row sm:items-start sm:justify-between"><div><p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#c9a86a]">{selected.inquiryType}</p><h2 className="mt-3 font-serif text-4xl">{selected.name}</h2><p className="mt-2 text-sm text-white/45">{formatDate(selected.createdAt)}</p></div><span className={`w-fit px-3 py-2 text-[10px] font-bold uppercase tracking-[.1em] ${selected.status==="new"?"bg-[#ff4d50]":selected.status==="replied"?"bg-emerald-600":"bg-white/10"}`}>{selected.status}</span></div>
              <div className="grid gap-5 border-b border-white/10 py-6 sm:grid-cols-2"><div><p className="text-[9px] font-bold uppercase tracking-[.15em] text-white/35">Email</p><p className="mt-2 break-all text-sm">{selected.email}</p></div><div><p className="text-[9px] font-bold uppercase tracking-[.15em] text-white/35">Phone</p><p className="mt-2 text-sm">{selected.phone || "Not provided"}</p></div><div><p className="text-[9px] font-bold uppercase tracking-[.15em] text-white/35">Organization</p><p className="mt-2 text-sm">{selected.organization || "Not provided"}</p></div><div><p className="text-[9px] font-bold uppercase tracking-[.15em] text-white/35">Status</p><p className="mt-2 text-sm capitalize">{selected.status}</p></div></div>
              <div className="py-7"><p className="text-[9px] font-bold uppercase tracking-[.15em] text-white/35">Message</p><p className="mt-4 whitespace-pre-wrap text-base leading-8 text-white/72">{selected.message}</p></div>
              <div className="flex flex-wrap gap-3 border-t border-white/10 pt-6"><button type="button" onClick={()=>setStatus(selected,"read")} className="border border-white/15 px-4 py-3 text-xs font-bold uppercase tracking-[.07em] transition hover:bg-white/10">Mark read</button><button type="button" onClick={()=>setStatus(selected,"replied")} className="bg-emerald-600 px-4 py-3 text-xs font-bold uppercase tracking-[.07em] transition hover:bg-emerald-500">Mark replied</button><button type="button" onClick={()=>setDeleteTarget(selected)} className="border border-red-400/25 bg-red-500/10 px-4 py-3 text-xs font-bold uppercase tracking-[.07em] text-red-100 transition hover:bg-red-500/20">Delete</button></div>
            </motion.div> : <div className="grid min-h-[560px] place-items-center p-8 text-center"><div><p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#c9a86a]">Message detail</p><h2 className="mt-4 font-serif text-4xl">Select an inquiry.</h2><p className="mt-4 max-w-sm text-sm leading-7 text-white/45">Choose a message from the list to review its details and update its status.</p></div></div>}
          </div>
        </div>
      </section>

      {deleteTarget && <div className="fixed inset-0 z-[100] grid place-items-center bg-black/70 px-5 backdrop-blur-sm" role="presentation" onMouseDown={(event)=>{if(event.target===event.currentTarget)setDeleteTarget(null)}}><motion.div initial={{opacity:0,scale:.97,y:10}} animate={{opacity:1,scale:1,y:0}} role="dialog" aria-modal="true" aria-labelledby="delete-title" className="w-full max-w-md border border-white/10 bg-[#151517] p-6 text-white shadow-2xl sm:p-7"><p className="text-[10px] font-bold uppercase tracking-[.2em] text-red-300">Delete inquiry</p><h2 id="delete-title" className="mt-4 font-serif text-3xl">Remove this message?</h2><p className="mt-4 text-sm leading-7 text-white/55">This permanently deletes the inquiry from the database. This action cannot be undone.</p><div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-end"><button type="button" onClick={()=>setDeleteTarget(null)} className="border border-white/15 px-5 py-3 text-xs font-bold uppercase tracking-[.08em] transition hover:bg-white/10">Cancel</button><button type="button" onClick={removeMessage} className="bg-red-500 px-5 py-3 text-xs font-bold uppercase tracking-[.08em] transition hover:bg-red-400">Delete inquiry</button></div></motion.div></div>}
    </main>
  );
}

export default AdminMessagesPage;
