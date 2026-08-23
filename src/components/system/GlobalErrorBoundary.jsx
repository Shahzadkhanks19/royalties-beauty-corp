import { Component } from "react";

class GlobalErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("RB Corp global render error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="grid min-h-screen place-items-center bg-[#0b0b0c] px-5 py-16 text-white">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-[10px] font-bold uppercase tracking-[.24em] text-[#ff6b6e]">Global error</p>
            <h1 className="mt-6 font-serif text-[clamp(3.4rem,9vw,7rem)] leading-[.92] tracking-[-.055em]">RB Corp encountered an <span className="text-[#ff5b5e]">unexpected interruption.</span></h1>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/55">The application could not render this view safely. Return to the homepage to start a fresh navigation path.</p>
            <a href="/" className="mt-9 inline-flex items-center gap-3 bg-[#ff4d50] px-6 py-4 text-sm font-bold uppercase tracking-[.08em] transition hover:-translate-y-0.5 hover:bg-[#e83c40]">Return to RB Corp <span>→</span></a>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}

export default GlobalErrorBoundary;
