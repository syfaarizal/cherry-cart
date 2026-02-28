import type { TabType } from '../types'

interface LeftPanelProps {
  activeTab: TabType
  onSwitch: (tab: TabType) => void
}

/** One decorative rotated diamond */
function Shape({ className }: { className: string }) {
  return <div className={`shape ${className}`} />
}

export default function LeftPanel({ activeTab, onSwitch }: LeftPanelProps) {
  return (
    <aside
      className="relative flex-shrink-0 bg-pink overflow-hidden
                 /* desktop */ w-[30%] min-w-[200px] max-w-[300px] flex items-center justify-end
                 /* mobile  */ max-md:w-full max-md:min-w-0 max-md:max-w-full
                               max-md:h-[100px] max-md:justify-center max-md:items-end"
    >
      {/* Decorative shapes */}
      <Shape className="w-[110%] pb-[110%] top-[-30%] left-[-45%] bg-white/[0.07]" />
      <Shape className="w-[85%]  pb-[85%]  top-[-15%] left-[-30%] bg-white/[0.09]" />
      <Shape className="w-[110%] pb-[110%] bottom-[-30%] left-[-45%] bg-white/[0.06]" />
      <Shape className="w-[85%]  pb-[85%]  bottom-[-15%] left-[-30%] bg-white/[0.10]" />
      <Shape className="w-[28%]  pb-[28%]  top-[45%] left-[44%] bg-white/[0.08]" />

      {/* Mobile brand mark */}
      <div className="absolute top-0 left-0 flex items-center gap-2.5 p-4 z-10 md:hidden">
        <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="20" height="20">
            <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
          </svg>
        </div>
        <span className="text-white font-poppins font-bold text-base tracking-wide">MyApp</span>
      </div>

      {/* Desktop vertical tabs */}
      <nav className="relative z-10 flex flex-col gap-1.5 max-md:hidden">
        {(['login', 'signin'] as TabType[]).map(tab => (
          <button
            key={tab}
            onClick={() => onSwitch(tab)}
            className={[
              'font-poppins font-semibold text-xs tracking-[2px] uppercase',
              'pl-5 pr-9 py-3.5 rounded-l-full transition-all duration-250',
              'text-left cursor-pointer border-0 outline-none',
              activeTab === tab
                ? 'bg-white text-gray-700 shadow-[-4px_0_20px_rgba(0,0,0,0.10)] -mr-[2px]'
                : 'bg-transparent text-white/65 hover:text-white/90 hover:bg-white/10',
            ].join(' ')}
          >
            {tab === 'login' ? 'LOGIN' : 'SIGN IN'}
          </button>
        ))}
      </nav>
    </aside>
  )
}
