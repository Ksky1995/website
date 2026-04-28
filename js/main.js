import './nav.js'
import './animations.js'
import './tabs.js'
import './form.js'

// ✅ Correct Lucide import
import { createIcons } from 'lucide'

// Run after DOM loads
document.addEventListener("DOMContentLoaded", () => {
  createIcons()
})