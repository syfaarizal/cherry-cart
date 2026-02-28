'use strict';

// ── Tab Switching ─────────────────────────────────────────────
function switchTab(tab) {
  const loginView  = document.getElementById('view-login');
  const signinView = document.getElementById('view-signin');

  // All tab buttons (desktop + mobile)
  const allLoginTabs  = document.querySelectorAll('#tab-login, #mob-tab-login');
  const allSigninTabs = document.querySelectorAll('#tab-signin, #mob-tab-signin');

  if (tab === 'login') {
    loginView.classList.remove('hidden');
    signinView.classList.add('hidden');
    allLoginTabs.forEach(t => t.classList.add('active'));
    allSigninTabs.forEach(t => t.classList.remove('active'));
    document.getElementById('signinForm').reset();
  } else {
    signinView.classList.remove('hidden');
    loginView.classList.add('hidden');
    allSigninTabs.forEach(t => t.classList.add('active'));
    allLoginTabs.forEach(t => t.classList.remove('active'));
    document.getElementById('loginForm').reset();
  }

  // Scroll right panel to top (mobile)
  const rp = document.querySelector('.right-panel');
  if (rp) rp.scrollTop = 0;
}

// ── Toast ─────────────────────────────────────────────────────
let toastTimer;

function showToast(msg, isError = false) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.style.background = isError ? '#c0392b' : '#b5306e';
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3200);
}

// ── Login ─────────────────────────────────────────────────────
function handleLogin(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.btn-primary');
  const original = btn.textContent;
  btn.textContent = '•••';
  btn.disabled = true;

  setTimeout(() => {
    btn.textContent = original;
    btn.disabled = false;
    showToast('✓ Login berhasil! Selamat datang kembali.');
  }, 1000);
}

// ── Register ─────────────────────────────────────────────────
function handleSignin(e) {
  e.preventDefault();
  const inputs   = e.target.querySelectorAll('input');
  const name     = inputs[0].value.trim();
  const password = inputs[2].value;
  const confirm  = inputs[3].value;

  if (password.length < 6) {
    showToast('✗ Password minimal 6 karakter.', true);
    inputs[2].focus();
    return;
  }
  if (password !== confirm) {
    showToast('✗ Konfirmasi password tidak cocok.', true);
    inputs[3].focus();
    return;
  }

  const btn = e.target.querySelector('.btn-primary');
  btn.textContent = '•••';
  btn.disabled = true;

  setTimeout(() => {
    btn.textContent = 'REGISTER';
    btn.disabled = false;
    showToast(`✓ Akun untuk ${name} berhasil dibuat!`);
    e.target.reset();
    setTimeout(() => switchTab('login'), 1800);
  }, 1000);
}

// ── Social Login ──────────────────────────────────────────────
function socialLogin(platform) {
  showToast(`Menghubungkan ke ${platform}…`);
}