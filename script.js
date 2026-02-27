'use strict';

// ── Tab Switching ──────────────────────────────────────────────
function switchTab(tab) {
  const loginView  = document.getElementById('view-login');
  const signinView = document.getElementById('view-signin');
  const tabLogin   = document.getElementById('tab-login');
  const tabSignin  = document.getElementById('tab-signin');

  if (tab === 'login') {
    loginView.classList.remove('hidden');
    signinView.classList.add('hidden');
    tabLogin.classList.add('active');
    tabSignin.classList.remove('active');
    // Reset sign-in form
    document.getElementById('signinForm').reset();
  } else {
    signinView.classList.remove('hidden');
    loginView.classList.add('hidden');
    tabSignin.classList.add('active');
    tabLogin.classList.remove('active');
    // Reset login form
    document.getElementById('loginForm').reset();
  }
}

// ── Toast Notification ─────────────────────────────────────────
let toastTimer = null;

function showToast(message, isError = false) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.style.background = isError ? '#c0392b' : '#b5306e';
  toast.classList.add('show');

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3200);
}

// ── Login Form ────────────────────────────────────────────────
function handleLogin(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.btn-primary');
  btn.textContent = '...';
  btn.disabled = true;

  setTimeout(() => {
    btn.textContent = 'LOGIN';
    btn.disabled = false;
    showToast('✓ Login berhasil! Selamat datang kembali.');
  }, 1000);
}

// ── Register / Sign In Form ────────────────────────────────────
function handleSignin(e) {
  e.preventDefault();

  const inputs    = e.target.querySelectorAll('input');
  const name      = inputs[0].value.trim();
  const email     = inputs[1].value.trim();
  const password  = inputs[2].value;
  const confirm   = inputs[3].value;

  if (password !== confirm) {
    showToast('✗ Password dan konfirmasi tidak cocok.', true);
    inputs[3].focus();
    return;
  }

  if (password.length < 6) {
    showToast('✗ Password minimal 6 karakter.', true);
    inputs[2].focus();
    return;
  }

  const btn = e.target.querySelector('.btn-primary');
  btn.textContent = '...';
  btn.disabled = true;

  setTimeout(() => {
    btn.textContent = 'REGISTER';
    btn.disabled = false;
    showToast(`✓ Akun untuk ${name} berhasil dibuat!`);
    e.target.reset();
    // Optionally switch back to login after a short delay
    setTimeout(() => switchTab('login'), 1800);
  }, 1000);
}

// ── Social Buttons ────────────────────────────────────────────
document.querySelectorAll('.social-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const platform = btn.textContent.trim();
    showToast(`Menghubungkan ke ${platform}...`);
  });
});