import type { DemoProject } from '../../types/domain';

interface DemoPreviewSceneProps {
  variant: DemoProject['previewVariant'];
  compact?: boolean;
}

export function DemoPreviewScene({ variant, compact = true }: DemoPreviewSceneProps) {
  const heightClass = compact ? 'h-52' : 'h-64 sm:h-72';

  if (variant === 'web-portal') {
    return (
      <div
        className={`${heightClass} w-full rounded-xl bg-gradient-to-br from-[#0B1229] via-[#080D1F] to-[#11102B] border border-slate-800/80 p-4 flex flex-col justify-between overflow-hidden select-none`}
        aria-hidden="true"
      >
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-sm bg-blue-500/80" />
            <span className="text-[11px] font-medium text-slate-300">Client Workspace Demo</span>
          </div>
          <span className="text-[10px] font-mono text-slate-500">Web Portal View</span>
        </div>

        <div className="grid grid-cols-12 gap-3 my-auto py-2">
          <div className="col-span-4 rounded-lg bg-[#060917] border border-slate-800/80 p-2.5 space-y-2">
            <div className="h-2 w-14 rounded bg-slate-700/80" />
            <div className="h-1.5 w-full rounded bg-blue-500/40" />
            <div className="h-1.5 w-4/5 rounded bg-slate-800" />
            <div className="h-1.5 w-3/4 rounded bg-slate-800" />
          </div>
          <div className="col-span-8 rounded-lg bg-[#060917] border border-slate-800/80 p-2.5 space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="h-2 w-24 rounded bg-slate-600/80" />
              <div className="h-2 w-10 rounded bg-violet-500/50" />
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="h-10 rounded bg-[#0C132D] border border-slate-800/70 p-1.5">
                <div className="h-1.5 w-8 rounded bg-blue-400/60" />
                <div className="mt-2 h-2 w-10 rounded bg-slate-700/70" />
              </div>
              <div className="h-10 rounded bg-[#0C132D] border border-slate-800/70 p-1.5">
                <div className="h-1.5 w-8 rounded bg-violet-400/60" />
                <div className="mt-2 h-2 w-10 rounded bg-slate-700/70" />
              </div>
              <div className="h-10 rounded bg-[#0C132D] border border-slate-800/70 p-1.5">
                <div className="h-1.5 w-8 rounded bg-slate-500/60" />
                <div className="mt-2 h-2 w-10 rounded bg-slate-700/70" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] text-slate-500 pt-2 border-t border-slate-800/60">
          <span>Milestones · Documents · Access Control</span>
          <span className="text-blue-400">Concept Layout</span>
        </div>
      </div>
    );
  }

  if (variant === 'mobile-app') {
    return (
      <div
        className={`${heightClass} w-full rounded-xl bg-gradient-to-br from-[#0A0E24] via-[#070A1A] to-[#160F2E] border border-slate-800/80 p-4 flex items-center justify-center overflow-hidden select-none`}
        aria-hidden="true"
      >
        <div className="w-44 h-full rounded-2xl bg-[#050814] border border-slate-700/80 p-3 flex flex-col justify-between shadow-lg">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-semibold text-slate-200">Field Tasks</span>
            <span className="text-[9px] font-mono text-violet-400">Mobile Demo</span>
          </div>

          <div className="space-y-2 my-auto">
            <div className="rounded-lg bg-[#0D142E] border border-blue-500/30 p-2 space-y-1">
              <div className="h-1.5 w-20 rounded bg-blue-400/70" />
              <div className="h-1.5 w-28 rounded bg-slate-700" />
            </div>
            <div className="rounded-lg bg-[#0A1024] border border-slate-800 p-2 space-y-1">
              <div className="h-1.5 w-16 rounded bg-violet-400/60" />
              <div className="h-1.5 w-24 rounded bg-slate-700" />
            </div>
            <div className="rounded-lg bg-[#0A1024] border border-slate-800 p-2 space-y-1">
              <div className="h-1.5 w-24 rounded bg-slate-500/60" />
              <div className="h-1.5 w-20 rounded bg-slate-800" />
            </div>
          </div>

          <div className="pt-2 border-t border-slate-800/80 flex items-center justify-around">
            <span className="h-1.5 w-6 rounded bg-blue-500/80" />
            <span className="h-1.5 w-6 rounded bg-slate-700" />
            <span className="h-1.5 w-6 rounded bg-slate-700" />
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'ai-triage') {
    return (
      <div
        className={`${heightClass} w-full rounded-xl bg-gradient-to-br from-[#0B1027] via-[#070B1C] to-[#191134] border border-slate-800/80 p-4 flex flex-col justify-between overflow-hidden select-none`}
        aria-hidden="true"
      >
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5">
          <span className="text-[11px] font-medium text-slate-300">Knowledge Query Interface</span>
          <span className="text-[10px] font-mono text-violet-400">AI Demo</span>
        </div>

        <div className="space-y-2.5 my-auto py-2">
          <div className="ml-auto max-w-[78%] rounded-lg bg-blue-600/20 border border-blue-500/30 px-3 py-2">
            <div className="h-1.5 w-32 rounded bg-blue-300/70" />
            <div className="mt-1.5 h-1.5 w-20 rounded bg-blue-300/40" />
          </div>

          <div className="mr-auto max-w-[85%] rounded-lg bg-[#070B19] border border-slate-800 px-3 py-2.5 space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="text-[9px] font-mono text-violet-400">Grounded Answer</span>
              <span className="text-[9px] text-slate-500">· Policy Index</span>
            </div>
            <div className="h-1.5 w-44 rounded bg-slate-600/80" />
            <div className="h-1.5 w-36 rounded bg-slate-700/80" />
          </div>
        </div>

        <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between text-[10px] text-slate-500">
          <span>Source Citations · Human Escalation</span>
          <span className="text-violet-400">Concept Layout</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`${heightClass} w-full rounded-xl bg-gradient-to-br from-[#0A1128] via-[#070B1A] to-[#0F1733] border border-slate-800/80 p-4 flex flex-col justify-between overflow-hidden select-none`}
      aria-hidden="true"
    >
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5">
        <span className="text-[11px] font-medium text-slate-300">Automated Intake Flow</span>
        <span className="text-[10px] font-mono text-blue-400">Automation Demo</span>
      </div>

      <div className="my-auto py-2 flex items-center justify-between gap-2">
        <div className="flex-1 rounded-lg bg-[#070B19] border border-slate-800 p-2.5 text-center space-y-1">
          <span className="text-[10px] font-mono text-blue-400 block">01</span>
          <span className="text-[11px] font-medium text-slate-200 block">Web Intake</span>
        </div>

        <div className="w-5 h-px bg-gradient-to-r from-blue-500 to-violet-500 shrink-0" />

        <div className="flex-1 rounded-lg bg-[#070B19] border border-slate-800 p-2.5 text-center space-y-1">
          <span className="text-[10px] font-mono text-violet-400 block">02</span>
          <span className="text-[11px] font-medium text-slate-200 block">Validation</span>
        </div>

        <div className="w-5 h-px bg-gradient-to-r from-violet-500 to-blue-500 shrink-0" />

        <div className="flex-1 rounded-lg bg-[#070B19] border border-slate-800 p-2.5 text-center space-y-1">
          <span className="text-[10px] font-mono text-blue-400 block">03</span>
          <span className="text-[11px] font-medium text-slate-200 block">CRM Dispatch</span>
        </div>
      </div>

      <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between text-[10px] text-slate-500">
        <span>Schema Check · Retry Queue · Audit Trail</span>
        <span className="text-blue-400">Concept Layout</span>
      </div>
    </div>
  );
}
