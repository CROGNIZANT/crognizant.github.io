import { useState } from "react";
import spendImg from "../assets/images/spend_tracker_visual_1791048882406.jpg";

interface Transaction {
  id: string;
  name: string;
  amount: number;
  category: "Food" | "Tech" | "Transit" | "Subscriptions" | "Lifestyle";
  date: string;
}

interface SpendTrackerPageProps {
  onBack: () => void;
}

export default function SpendTrackerPage({ onBack }: SpendTrackerPageProps) {
  const externalUrl = "https://spendtrackrr.ai.studio";
  const [copied, setCopied] = useState(false);

  // Initial dummy transactions for interactive preview
  const [transactions, setTransactions] = useState<Transaction[]>([
    { id: "1", name: "Claude Pro & AI APIs", amount: 1600, category: "Subscriptions", date: "Today, 10:15 AM" },
    { id: "2", name: "Artisan Coffee & Breakfast", amount: 450, category: "Food", date: "Today, 08:30 AM" },
    { id: "3", name: "Uber to Tech Hub", amount: 380, category: "Transit", date: "Yesterday" },
    { id: "4", name: "Mechanical Keyboard Switches", amount: 2400, category: "Tech", date: "Oct 01" },
    { id: "5", name: "Books on Kinetic Typography", amount: 1200, category: "Lifestyle", date: "Sep 29" },
  ]);

  const [newName, setNewName] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [newCategory, setNewCategory] = useState<Transaction["category"]>("Food");
  const [filterCategory, setFilterCategory] = useState<string>("All");

  const monthlyBudget = 40000;
  const totalSpent = transactions.reduce((acc, t) => acc + t.amount, 0);
  const budgetPercent = Math.min(100, Math.round((totalSpent / monthlyBudget) * 100));

  const handleAddTransaction = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newAmount || isNaN(Number(newAmount))) return;

    const newTx: Transaction = {
      id: Date.now().toString(),
      name: newName.trim(),
      amount: Math.abs(Number(newAmount)),
      category: newCategory,
      date: "Just now",
    };

    setTransactions([newTx, ...transactions]);
    setNewName("");
    setNewAmount("");
  };

  const handleDelete = (id: string) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText("spendtrackrr.ai.studio");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const filteredTransactions =
    filterCategory === "All"
      ? transactions
      : transactions.filter((t) => t.category === filterCategory);

  const categoryColors: Record<Transaction["category"], string> = {
    Food: "text-amber-400 border-amber-500/30 bg-amber-500/10",
    Tech: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
    Transit: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
    Subscriptions: "text-purple-400 border-purple-500/30 bg-purple-500/10",
    Lifestyle: "text-rose-400 border-rose-500/30 bg-rose-500/10",
  };

  return (
    <div className="min-h-screen bg-[#070707] text-white selection:bg-[#c9b17a] selection:text-[#0a0a0a]">
      {/* Top Bar Contract */}
      <header className="sticky top-0 z-40 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#1f1f1f] px-6 sm:px-10 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="group flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8d887e] hover:text-[#c9b17a] transition-colors py-1 cursor-pointer"
            >
              <span className="text-base group-hover:-translate-x-1 transition-transform">←</span>
              <span>Portfolio</span>
            </button>
            <span className="text-[#333]">/</span>
            <span className="text-xs uppercase tracking-wider text-white font-bold">
              Spend Tracker
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#c9b17a] hover:bg-white text-[#0a0a0a] text-xs font-extrabold uppercase tracking-wider transition-colors inline-flex items-center gap-1.5"
            >
              <span>Launch spendtrackrr.ai.studio</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Page Container */}
      <main className="max-w-6xl mx-auto px-6 sm:px-10 py-16 sm:py-24">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#262626] bg-[#111] text-[0.68rem] uppercase tracking-widest text-[#c9b17a] mb-6">
            <span>Live Project</span>
            <span>·</span>
            <span className="text-[#8d887e]">spendtrackrr.ai.studio</span>
          </div>

          <h1 className="font-anton text-5xl sm:text-7xl md:text-8xl text-white uppercase tracking-tight leading-none mb-6">
            Spend Tracker
          </h1>

          <p className="text-base sm:text-xl text-[#cfc9bd] leading-relaxed mb-8">
            An intelligent personal finance and expense analytics web application.
            Built with instant responsive telemetry, categorical breakdown, and zero-friction tracking.
          </p>

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#c9b17a] hover:bg-white text-[#0a0a0a] font-manrope font-extrabold text-sm uppercase tracking-wider transition-all duration-300 inline-flex items-center gap-2 shadow-lg"
            >
              Open spendtrackrr.ai.studio <span>↗</span>
            </a>

            <button
              onClick={handleCopyLink}
              className="px-5 py-4 border border-[#333] hover:border-[#c9b17a] text-xs font-bold uppercase tracking-wider text-[#cfc9bd] hover:text-white transition-colors"
            >
              {copied ? "Link Copied! ✓" : "Copy App URL"}
            </button>
          </div>
        </div>

        {/* Feature Visual Showcase */}
        <div className="relative mb-20 border border-[#222] bg-[#0c0c0c] overflow-hidden group">
          <img
            src={spendImg}
            alt="Spend Tracker Interface"
            className="w-full aspect-[16/9] object-cover filter contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-black/30 pointer-events-none" />
          <div className="absolute bottom-6 left-6 sm:left-10 right-6 sm:right-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div>
              <span className="text-[0.7rem] uppercase tracking-widest text-[#c9b17a] font-bold block mb-1">
                Direct Domain
              </span>
              <a
                href={externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-manrope font-bold text-xl sm:text-2xl text-white hover:text-[#c9b17a] underline flex items-center gap-2"
              >
                spendtrackrr.ai.studio <span>↗</span>
              </a>
            </div>
            <span className="text-xs uppercase tracking-widest text-[#8d887e] bg-black/70 px-3 py-1 border border-[#333]">
              Cloud Deployed · Production Grade
            </span>
          </div>
        </div>

        {/* Interactive In-Page App Simulator */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#222]">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#c9b17a] font-bold block mb-1">
                Interactive Preview
              </span>
              <h2 className="font-manrope font-bold text-2xl sm:text-3xl text-white">
                Live Simulator Experience
              </h2>
            </div>
            <span className="text-xs text-[#8d887e]">Simulated Data Mode</span>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div className="bg-[#0f0f0f] border border-[#222] p-6 rounded-sm">
              <span className="text-xs uppercase tracking-widest text-[#8d887e] block mb-2 font-medium">
                Total Expenses
              </span>
              <div className="font-anton text-3xl sm:text-4xl text-white tabular-nums">
                ₹{totalSpent.toLocaleString()}
              </div>
              <span className="text-xs text-[#8d887e] mt-1 block">
                {transactions.length} recorded items
              </span>
            </div>

            <div className="bg-[#0f0f0f] border border-[#222] p-6 rounded-sm">
              <span className="text-xs uppercase tracking-widest text-[#8d887e] block mb-2 font-medium">
                Monthly Target
              </span>
              <div className="font-anton text-3xl sm:text-4xl text-[#c9b17a] tabular-nums">
                ₹{monthlyBudget.toLocaleString()}
              </div>
              <span className="text-xs text-emerald-400 mt-1 block">
                ₹{(monthlyBudget - totalSpent).toLocaleString()} remaining
              </span>
            </div>

            <div className="bg-[#0f0f0f] border border-[#222] p-6 rounded-sm flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#8d887e] block mb-2 font-medium">
                  Budget Utilization
                </span>
                <div className="font-anton text-3xl sm:text-4xl text-white tabular-nums">
                  {budgetPercent}%
                </div>
              </div>
              <div className="w-full bg-[#222] h-2 rounded-full overflow-hidden mt-3">
                <div
                  className="bg-[#c9b17a] h-full transition-all duration-500"
                  style={{ width: `${budgetPercent}%` }}
                />
              </div>
            </div>
          </div>

          {/* Quick Transaction Entry + Ledger */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-8">
            {/* Add Expense Form */}
            <div className="bg-[#0d0d0d] border border-[#222] p-6 rounded-sm">
              <h3 className="font-manrope font-semibold text-lg text-white mb-4">
                Record New Expense
              </h3>
              <form onSubmit={handleAddTransaction} className="space-y-4">
                <div>
                  <label className="text-xs uppercase tracking-wider text-[#8d887e] block mb-1">
                    Expense Title
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Figma Subscription"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    className="w-full bg-[#141414] border border-[#262626] focus:border-[#c9b17a] px-3.5 py-2.5 text-sm text-white rounded-none outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-[#8d887e] block mb-1">
                    Amount (₹)
                  </label>
                  <input
                    type="number"
                    required
                    placeholder="e.g. 1200"
                    value={newAmount}
                    onChange={(e) => setNewAmount(e.target.value)}
                    className="w-full bg-[#141414] border border-[#262626] focus:border-[#c9b17a] px-3.5 py-2.5 text-sm text-white rounded-none outline-none font-mono"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-[#8d887e] block mb-1">
                    Category
                  </label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value as Transaction["category"])}
                    className="w-full bg-[#141414] border border-[#262626] focus:border-[#c9b17a] px-3.5 py-2.5 text-sm text-white rounded-none outline-none"
                  >
                    <option value="Food">Food &amp; Dining</option>
                    <option value="Tech">Tech &amp; Hardware</option>
                    <option value="Transit">Transit &amp; Travel</option>
                    <option value="Subscriptions">Subscriptions</option>
                    <option value="Lifestyle">Lifestyle &amp; Misc</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#c9b17a] hover:bg-white text-[#0a0a0a] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  + Add to Ledger
                </button>
              </form>
            </div>

            {/* Transactions List */}
            <div className="bg-[#0d0d0d] border border-[#222] p-6 rounded-sm flex flex-col">
              <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                <h3 className="font-manrope font-semibold text-lg text-white">
                  Recent Ledger
                </h3>
                {/* Category Filter */}
                <div className="flex items-center gap-1">
                  {["All", "Food", "Tech", "Subscriptions"].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setFilterCategory(cat)}
                      className={`px-2.5 py-1 text-[0.65rem] uppercase tracking-wider border transition-colors ${
                        filterCategory === cat
                          ? "bg-[#c9b17a] text-[#0a0a0a] border-[#c9b17a]"
                          : "bg-[#141414] text-[#8d887e] border-[#2a2a2a] hover:text-white"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Items */}
              <div className="space-y-2 flex-1 max-h-[340px] overflow-y-auto pr-1">
                {filteredTransactions.map((tx) => (
                  <div
                    key={tx.id}
                    className="flex items-center justify-between p-3 bg-[#121212] hover:bg-[#161616] border border-[#222] transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`text-[0.65rem] uppercase tracking-wider px-2 py-0.5 border ${
                          categoryColors[tx.category]
                        }`}
                      >
                        {tx.category}
                      </span>
                      <div>
                        <div className="text-sm font-semibold text-white">{tx.name}</div>
                        <div className="text-[0.68rem] text-[#666]">{tx.date}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm font-bold text-white tabular-nums">
                        -₹{tx.amount.toLocaleString()}
                      </span>
                      <button
                        onClick={() => handleDelete(tx.id)}
                        className="text-[#666] hover:text-rose-400 text-xs p-1"
                        title="Delete"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                ))}

                {filteredTransactions.length === 0 && (
                  <div className="text-center py-10 text-xs text-[#666] uppercase tracking-widest">
                    No transactions found for this filter
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="border border-[#1f1f1f] bg-[#0a0a0a] p-6">
            <span className="text-[#c9b17a] text-xl font-mono block mb-3">01</span>
            <h4 className="font-manrope font-semibold text-lg text-white mb-2">
              Privacy First Architecture
            </h4>
            <p className="text-sm text-[#8d887e] leading-relaxed">
              Zero telemetry data leakage. All expense data is encrypted and indexed locally on your device.
            </p>
          </div>

          <div className="border border-[#1f1f1f] bg-[#0a0a0a] p-6">
            <span className="text-[#c9b17a] text-xl font-mono block mb-3">02</span>
            <h4 className="font-manrope font-semibold text-lg text-white mb-2">
              Real-time Cashflow Velocity
            </h4>
            <p className="text-sm text-[#8d887e] leading-relaxed">
              Instant breakdown of burn rate and categorical allocation to help you reach monthly savings goals.
            </p>
          </div>

          <div className="border border-[#1f1f1f] bg-[#0a0a0a] p-6">
            <span className="text-[#c9b17a] text-xl font-mono block mb-3">03</span>
            <h4 className="font-manrope font-semibold text-lg text-white mb-2">
              Clean Visual Hierarchy
            </h4>
            <p className="text-sm text-[#8d887e] leading-relaxed">
              Minimalist brutalist dashboard aesthetic eliminating unnecessary bloated finance widgets.
            </p>
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="border border-[#262626] bg-gradient-to-r from-[#121212] via-[#1a1710] to-[#0c0c0c] p-8 sm:p-14 text-center">
          <span className="text-xs uppercase tracking-widest text-[#c9b17a] font-bold block mb-3">
            Ready to Explore?
          </span>
          <h3 className="font-manrope font-extrabold text-3xl sm:text-5xl text-white uppercase mb-4">
            Spend Tracker is Live
          </h3>
          <p className="text-sm sm:text-base text-[#cfc9bd] max-w-lg mx-auto mb-8">
            Access the full application online at{" "}
            <span className="text-[#c9b17a] font-mono">spendtrackrr.ai.studio</span>.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#c9b17a] hover:bg-white text-[#0a0a0a] font-bold text-xs uppercase tracking-widest transition-colors inline-flex items-center gap-2"
            >
              Launch spendtrackrr.ai.studio <span>↗</span>
            </a>
            <button
              onClick={onBack}
              className="px-6 py-4 border border-[#333] hover:border-white text-xs font-bold uppercase tracking-wider text-[#cfc9bd] transition-colors"
            >
              ← Back to Portfolio
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
