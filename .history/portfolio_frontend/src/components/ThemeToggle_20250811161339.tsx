import { useEffect, useState } from 'react'
import { Switch } from '@/components/ui/switch'

function getInitialTheme(): boolean {
  if (typeof window === 'undefined') return false
  const saved = localStorage.getItem('theme')
  if (saved === 'dark') return true
  if (saved === 'light') return false
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
}

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean>(getInitialTheme())

  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-muted-foreground">Dark</span>
      <Switch checked={isDark} onCheckedChange={setIsDark} />
    </div>
  )
} 