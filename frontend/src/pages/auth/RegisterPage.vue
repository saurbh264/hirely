<template>
  <section class="auth-shell">
    <aside class="auth-aside register-aside">
      <RouterLink to="/"><img src="/brand/hirely-wordmark-dark.svg" alt="Hirely" style="width:128px" /></RouterLink>
      <div>
        <div class="auth-kicker"><span></span>A more human job search</div>
        <h2>Your next chapter starts with a hello.</h2>
        <p>Create a profile that feels like you. Meet teams that care about the person behind the resume.</p>
        <div class="testimonial">
          <div class="avatar testimonial-avatar">JM</div>
          <div>
            <p>“Hirely helped me find a team that values how I work, not just what I’ve done.”</p><strong>Jamie M.
              <small>Product Designer at Grove</small></strong>
          </div>
        </div>
      </div><small class="aside-foot">© 2025 Hirely, Inc. &nbsp; · &nbsp; A little closer to what’s next.</small>
    </aside>
    <div class="auth-form-side">
      <div class="auth-form">
        <div class="mobile-logo"><img src="/brand/hirely-wordmark.svg" alt="Hirely" /></div>
        <div class="welcome">A good place to begin ✦</div>
        <h1>Create your account</h1>
        <p class="lead">A few details to get you started. You can make it yours later.</p>
        <div class="account-type"><span class="account-label">I’m here to</span><button
            class="type-option active"><b>♙</b><span><strong>Find a job</strong><small>Explore your next
                move</small></span><i>✓</i></button><button class="type-option"><b>▦</b><span><strong>Hire great
                people</strong><small>Build your team</small></span><i>○</i></button></div>
        <div class="form-grid"><label class="field"><span>First name</span><input class="input"
              placeholder="Alex" /></label><label class="field"><span>Last name</span><input class="input"
              placeholder="Morgan" /></label><label class="field full"><span>Email address</span><input class="input"
              type="email" placeholder="you@example.com" /></label><label class="field full"><span>Password</span><input
              class="input" type="password" placeholder="At least 8 characters" /><small class="hint">Use 8 or more
              characters with a mix of letters and numbers.</small></label></div><label class="checkbox-line"><input
            type="checkbox" /> <span>I’d like to receive thoughtful career notes and new opportunities. (No noise,
            promise.)</span></label><button class="btn btn-primary create-button">Create my account
          <span>→</span></button>
        <p class="login-link">Already have an account? <RouterLink to="/login">Log in</RouterLink>
        </p><small class="terms">By creating an account, you agree to our <a>Terms of Service</a> and <a>Privacy
            Policy</a>.</small>
      </div>
    </div>
  </section>
</template>
<style scoped>
.register-aside:after {
  position: absolute;
  right: -130px;
  top: 130px;
  width: 350px;
  height: 350px;
  border: 1px solid #ffffff25;
  border-radius: 50%;
  box-shadow: 0 0 0 35px #ffffff0b, 0 0 0 70px #ffffff06;
  content: ''
}

.auth-kicker {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #dbd9ff;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: .08em;
  text-transform: uppercase
}

.auth-kicker span {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #b7a7ff
}

.auth-aside h2 {
  margin-top: 20px
}

.testimonial {
  display: flex;
  gap: 12px;
  margin-top: 29px;
  padding: 16px;
  border: 1px solid #ffffff35;
  border-radius: 13px;
  background: #ffffff13
}

.testimonial-avatar {
  width: 34px;
  height: 34px;
  flex: 0 0 auto;
  color: #ab5e3d;
  background: #ffeada
}

.testimonial p {
  margin: 0 0 12px;
  color: #f1efff;
  font-size: 12px;
  line-height: 1.7
}

.testimonial strong {
  display: block;
  color: #fff;
  font-size: 12px
}

.testimonial small {
  display: block;
  margin-top: 4px;
  color: #cfceff;
  font-size: 12px;
  font-weight: 500
}

.aside-foot {
  color: #c6c5ff;
  font-size: 12px
}

.auth-form-side {
  padding: 38px 28px
}

.auth-form {
  width: min(410px, 100%)
}

.welcome {
  margin-bottom: 8px;
  color: #7a5bd4;
  font-size: 12px;
  font-weight: 700
}

.auth-form h1 {
  font-size: 27px
}

.auth-form .lead {
  margin-bottom: 17px;
  font-size: 12px
}

.account-type {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-bottom: 15px
}

.account-label {
  grid-column: span 2;
  color: #334155;
  font-size: 12px;
  font-weight: 700
}

.type-option {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px;
  border: 1px solid var(--line);
  border-radius: 10px;
  background: #fff;
  text-align: left
}

.type-option.active {
  border-color: #a8a5fa;
  background: #f8f7ff
}

.type-option>b {
  font-size: 14px;
  color: #765bd3
}

.type-option span {
  flex: 1
}

.type-option strong,
.type-option small {
  display: block
}

.type-option strong {
  font-size: 12px
}

.type-option small {
  margin-top: 4px;
  color: #64748b;
  font-size: 12px
}

.type-option>i {
  color: #7260d2;
  font-size: 12px;
  font-style: normal
}

.field {
  gap: 5px
}

.field>span {
  font-size: 12px
}

.field .input {
  min-height: 38px;
  font-size: 12px
}

.field.full {
  grid-column: span 2
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 11px
}

.hint {
  color: #64748b;
  font-size: 12px
}

.checkbox-line {
  display: flex;
  align-items: start;
  gap: 7px;
  margin: 13px 0;
  color: #64748b;
  font-size: 12px;
  line-height: 1.5
}

.checkbox-line input {
  accent-color: var(--brand)
}

.create-button {
  width: 100%;
  min-height: 42px
}

.login-link {
  margin: 14px 0;
  text-align: center;
  color: #64748b;
  font-size: 12px
}

.login-link a,
.terms a {
  color: var(--brand);
  font-weight: 700
}

.terms {
  display: block;
  text-align: center;
  color: #64748b;
  font-size: 12px
}

.terms a {
  font-weight: 600
}

@media(max-width:680px) {
  .auth-form-side {
    padding: 30px 20px
  }

  .mobile-logo {
    display: block;
    margin-bottom: 25px
  }

  .mobile-logo img {
    width: 112px
  }
}
</style>
