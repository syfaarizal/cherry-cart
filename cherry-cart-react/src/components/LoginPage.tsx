import { useState, useCallback } from 'react'
import type { TabType } from '../types'
import { useToast } from '../hooks/useToast'
import LeftPanel from './LeftPanel'
import MobileTabs from './MobileTabs'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import Toast from './Toast'

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState<TabType>('login')
  const { toast, showToast } = useToast()

  const switchTab = useCallback((tab: TabType) => {
    setActiveTab(tab)
    // Scroll right panel to top on mobile
    const rp = document.getElementById('right-panel')
    if (rp) rp.scrollTop = 0
  }, [])

  const handleSocialLogin = useCallback(
    (platform: string) => showToast(`Menghubungkan ke ${platform}…`),
    [showToast],
  )

  return (
    /**
     * Root: flex, full viewport.
     * — Desktop  : row layout  (left panel | right panel)
     * — Mobile   : col layout  (top bar / right panel)
     */
    <div className="flex flex-col md:flex-row w-screen h-screen md:h-dvh overflow-hidden">

      {/* ═══ LEFT PANEL ═══ */}
      <LeftPanel activeTab={activeTab} onSwitch={switchTab} />

      {/* ═══ RIGHT PANEL ═══ */}
      <main
        id="right-panel"
        className="flex-1 flex flex-col items-center justify-start md:justify-center
                   px-6 sm:px-10 md:px-16 lg:px-24
                   pt-4 md:pt-0 pb-10 md:pb-0
                   overflow-y-auto"
      >
        {/* Mobile tabs (hidden on md+) */}
        <MobileTabs activeTab={activeTab} onSwitch={switchTab} />

        {/* Forms */}
        {activeTab === 'login' ? (
          <LoginForm
            key="login"
            onShowToast={showToast}
            onSocialLogin={handleSocialLogin}
          />
        ) : (
          <RegisterForm
            key="signin"
            onShowToast={showToast}
            onSocialLogin={handleSocialLogin}
            onSwitchToLogin={() => switchTab('login')}
          />
        )}
      </main>

      {/* ═══ TOAST ═══ */}
      <Toast toast={toast} />
    </div>
  )
}
