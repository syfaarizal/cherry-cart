import type { TabType } from '../types'

interface MobileTabsProps {
  activeTab: TabType
  onSwitch: (tab: TabType) => void
}

export default function MobileTabs({ activeTab, onSwitch }: MobileTabsProps) {
  return (
    <div className="flex w-full max-w-sm border-b border-gray-200 mb-6 md:hidden">
      {(['login', 'signin'] as TabType[]).map(tab => (
        <button
          key={tab}
          onClick={() => onSwitch(tab)}
          className={[
            'flex-1 font-poppins font-semibold text-xs tracking-[1.5px] uppercase',
            'py-3 border-b-[3px] transition-all duration-200 outline-none',
            activeTab === tab
              ? 'text-pink border-pink'
              : 'text-gray-400 border-transparent hover:text-gray-500',
          ].join(' ')}
        >
          {tab === 'login' ? 'LOGIN' : 'SIGN IN'}
        </button>
      ))}
    </div>
  )
}
