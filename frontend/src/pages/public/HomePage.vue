<script setup>
import JobCard from '@/components/jobs/JobCard.vue'
import { jobs, companies } from '@/data/mockData'
</script>
<template>
  <section class="home-hero">
    <div class="container hero-grid">
      <div class="hero-copy">
        <div class="eyebrow"><span class="eyebrow-dot"></span>A little closer to your next chapter</div>
        <h1>Find work that<br /><span>feels like you.</span></h1>
        <p class="lead">The right role can change everything. Meet thoughtful teams and find a place where your best
          work can happen.</p>
        <div class="hero-search card">
          <div class="hero-search-field"><span>⌕</span>
            <div><label for="role-search">What are you looking for?</label><input id="role-search"
                placeholder="Job title, skill, or company" /></div>
          </div>
          <div class="hero-search-field location"><span>⌖</span>
            <div><label for="location-search">Where?</label><input id="location-search" placeholder="City or remote" />
            </div>
          </div>
          <RouterLink to="/jobs" class="btn btn-primary">Explore jobs <span aria-hidden="true">→</span></RouterLink>
        </div>
        <div class="popular-searches"><span>Popular:</span>
          <RouterLink to="/jobs">Product designer</RouterLink>
          <RouterLink to="/jobs">Remote</RouterLink>
          <RouterLink to="/jobs">Marketing</RouterLink>
        </div>
      </div>
      <div class="hero-visual">
        <div class="hero-orbit orbit-one"></div>
        <div class="hero-orbit orbit-two"></div>
        <div class="hero-glow"></div>
        <div class="hero-note note-top"><span class="note-emoji">✦</span>
          <div><strong>Good things are growing</strong><small>Curated roles from teams you’ll love</small></div>
        </div>
        <div class="floating-card featured-card">
          <div style="display:flex;align-items:center;justify-content:space-between">
            <div class="icon-box" style="color:#5e6ad2;background:#f0f1ff;border:0">L</div><span
              class="chip chip-green">Just added</span>
          </div>
          <p style="margin:22px 0 5px;color:#64748b;font-size:12px;font-weight:700;letter-spacing:.1em">LINEAR · DESIGN
          </p>
          <h3 style="font-size:19px">Senior Product<br />Designer</h3>
          <div class="divider" style="margin:16px 0"></div>
          <div style="display:flex;justify-content:space-between;color:#64748b;font-size:12px"><span>↗ Remote ·
              US</span><strong style="color:#0f172a">$145k—180k</strong></div>
        </div>
        <div class="floating-card match-card">
          <div class="avatar avatar-blue">AM</div>
          <div><strong>It’s a great match</strong><small>Your profile stands out to Linear</small></div><span
            style="margin-left:auto;color:#35a875;font-size:14px">✦</span>
        </div>
        <div class="hero-note note-bottom">
          <div class="facepile"><i>JM</i><i>SK</i><i>RL</i><i>+</i></div>
          <div><strong>People-first companies</strong><small>Find your kind of workplace</small></div>
        </div>
      </div>
    </div>
    <div class="container trust-row"><span>Chosen by people at</span>
      <div class="trust-logos"><b>◧ notion</b><b>▲ vercel</b><b>◈ Figma</b><b>airbnb</b><b>◉ Linear</b></div>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <div class="section-head">
        <div>
          <div class="eyebrow"><span class="eyebrow-dot"></span>Made for your next move</div>
          <h2 style="margin-top:13px">A job search, with more heart.</h2>
          <p>Less scrolling. More finding your place.</p>
        </div>
        <RouterLink class="btn btn-outline" to="/jobs">See how it works <span aria-hidden="true">→</span></RouterLink>
      </div>
      <div class="value-grid">
        <article class="value-card">
          <div class="value-icon lilac">✳</div>
          <h3>Work that fits your life</h3>
          <p>See the full picture before you apply, from team rituals to salary ranges.</p><span
            class="value-decoration">01</span>
        </article>
        <article class="value-card value-featured">
          <div class="value-icon blue">⌁</div>
          <h3>Good people, good work</h3>
          <p>Meet companies that care about how the work gets done, not just the outcome.</p><span
            class="value-decoration">02</span>
        </article>
        <article class="value-card">
          <div class="value-icon peach">↗</div>
          <h3>Your next step, made clear</h3>
          <p>A calmer, more human way to move forward with confidence.</p><span class="value-decoration">03</span>
        </article>
      </div>
    </div>
  </section>
  <section class="section jobs-section">
    <div class="container">
      <div class="section-head">
        <div>
          <div class="eyebrow"><span class="eyebrow-dot"></span>Handpicked for you</div>
          <h2 style="margin-top:13px">A few places to begin.</h2>
          <p>Thoughtful opportunities from teams building what’s next.</p>
        </div>
        <RouterLink class="text-link" to="/jobs">Explore all roles <span>→</span></RouterLink>
      </div>
      <div class="grid-3">
        <JobCard v-for="job in jobs.slice(0, 3)" :key="job.id" :job="job" />
      </div>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <div class="section-head">
        <div>
          <div class="eyebrow"><span class="eyebrow-dot"></span>Meet your future teammates</div>
          <h2 style="margin-top:13px">Companies with a point of view.</h2>
          <p>Places where people and ideas can do their best work.</p>
        </div>
        <RouterLink class="text-link" to="/companies">Discover companies <span>→</span></RouterLink>
      </div>
      <div class="company-strip">
        <RouterLink v-for="company in companies.slice(0, 4)" :key="company.id" :to="`/companies/${company.id}`"
          class="company-tile">
          <div class="icon-box" :style="{ color: company.color, background: company.tint, border: 0 }">{{ company.mark }}</div>
          <div><strong>{{ company.name }}</strong><span>{{ company.category }}</span></div><span
            class="company-arrow">↗</span>
        </RouterLink>
      </div>
    </div>
  </section>
  <section class="closing-cta">
    <div class="container cta-inner">
      <div>
        <div class="eyebrow" style="color:#c5c5ff"><span class="eyebrow-dot" style="background:#a99bff"></span>A new
          chapter starts here</div>
        <h2>Ready when you are.</h2>
        <p>Build a profile that tells your story. Find a team that gets it.</p>
      </div>
      <RouterLink to="/register" class="btn btn-light">Create your free profile <span>→</span></RouterLink>
      <div class="cta-sparkle">✳</div>
    </div>
  </section>
</template>
<style scoped>
.home-hero {
  overflow: hidden;
  background: linear-gradient(180deg, #f8f8ff 0%, #fff 92%)
}

.hero-grid {
  min-height: 540px;
  display: grid;
  grid-template-columns: 1.05fr .95fr;
  align-items: center;
  gap: 34px;
  padding-top: 55px
}

.hero-copy {
  position: relative;
  z-index: 1
}

.hero-copy h1 {
  margin-top: 19px;
  font-size: clamp(48px, 6vw, 70px)
}

.hero-copy h1 span {
  color: var(--brand)
}

.hero-copy .lead {
  max-width: 520px;
  margin-bottom: 27px
}

.hero-search {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px;
  border-radius: 16px;
  box-shadow: 0 18px 45px #18235b13
}

.hero-search-field {
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 11px;
  flex: 1;
  padding: 4px 10px
}

.hero-search-field>span {
  color: #818cf8;
  font-size: 20px
}

.hero-search-field label {
  display: block;
  color: #475569;
  font-size: 12px;
  font-weight: 700
}

.hero-search-field input {
  width: 100%;
  border: 0;
  outline: 0;
  color: #0f172a;
  font-size: 12px
}

.hero-search-field input::placeholder {
  color: #64748b
}

.hero-search .btn {
  min-height: 47px
}

.popular-searches {
  display: flex;
  gap: 17px;
  margin-top: 16px;
  color: #64748b;
  font-size: 12px
}

.popular-searches a {
  color: #64748b
}

.popular-searches a:hover {
  color: var(--brand)
}

.hero-visual {
  position: relative;
  min-height: 420px;
  display: grid;
  place-items: center
}

.hero-orbit {
  position: absolute;
  border: 1px solid #dedefd;
  border-radius: 50%;
  transform: rotate(-22deg)
}

.orbit-one {
  width: 390px;
  height: 280px
}

.orbit-two {
  width: 470px;
  height: 340px;
  transform: rotate(42deg);
  border-color: #eeecff
}

.hero-glow {
  position: absolute;
  width: 290px;
  height: 290px;
  border-radius: 50%;
  background: radial-gradient(circle, #dedcff 0%, #eeedff 44%, #f9f8ff 73%, transparent 74%)
}

.floating-card {
  position: absolute;
  z-index: 1;
  border: 1px solid #eef0f6;
  border-radius: 18px;
  background: #fff;
  box-shadow: 0 20px 50px #21215b16
}

.featured-card {
  width: 286px;
  padding: 23px;
  transform: rotate(-3deg)
}

.match-card {
  right: -12px;
  bottom: 31px;
  display: flex;
  align-items: center;
  gap: 11px;
  padding: 13px 16px;
  transform: rotate(2deg)
}

.match-card strong,
.hero-note strong {
  display: block;
  font-size: 12px
}

.match-card small,
.hero-note small {
  display: block;
  margin-top: 4px;
  color: #64748b;
  font-size: 12px
}

.hero-note {
  position: absolute;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 14px;
  border: 1px solid #eef0f6;
  border-radius: 13px;
  background: #ffffffed;
  box-shadow: 0 12px 30px #24244610
}

.note-top {
  top: 34px;
  left: 8px;
  transform: rotate(-2deg)
}

.note-bottom {
  bottom: 25px;
  left: -7px;
  transform: rotate(-2deg)
}

.note-emoji {
  width: 30px;
  height: 30px;
  display: grid;
  place-items: center;
  border-radius: 9px;
  color: #7956de;
  background: #f2edff
}

.facepile {
  display: flex
}

.facepile i {
  width: 25px;
  height: 25px;
  display: grid;
  place-items: center;
  margin-left: -5px;
  border: 2px solid #fff;
  border-radius: 50%;
  color: #5472a6;
  background: #e7f0ff;
  font-size: 12px;
  font-style: normal;
  font-weight: 800
}

.facepile i:first-child {
  margin: 0;
  background: #ffeada;
  color: #a55e36
}

.facepile i:nth-child(2) {
  background: #e9e8ff;
  color: #635cbb
}

.facepile i:nth-child(3) {
  background: #e5f6ed;
  color: #428667
}

.facepile i:last-child {
  background: #f4f5f8;
  color: #64748b
}

.trust-row {
  display: flex;
  align-items: center;
  gap: 38px;
  padding: 20px 0 30px;
  border-top: 1px solid #eff0f8;
  color: #a0a8b9;
  font-size: 12px
}

.trust-logos {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  color: #657086;
  font-size: 15px
}

.trust-logos b {
  font-weight: 800;
  letter-spacing: -.04em
}

.value-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 17px
}

.value-card {
  position: relative;
  min-height: 190px;
  overflow: hidden;
  padding: 23px;
  border: 1px solid #edf0f7;
  border-radius: 17px;
  background: #fff
}

.value-card p {
  max-width: 270px;
  margin: 0;
  color: #64748b;
  font-size: 14px;
  line-height: 1.8
}

.value-card h3 {
  margin: 16px 0 8px
}

.value-featured {
  background: #f8f7ff;
  border-color: #edebff
}

.value-icon {
  width: 37px;
  height: 37px;
  display: grid;
  place-items: center;
  border-radius: 11px;
  font-size: 16px
}

.lilac {
  color: #7b55da;
  background: #f0ebff
}

.blue {
  color: #4e60dc;
  background: #e9edff
}

.peach {
  color: #c57151;
  background: #fff0e8
}

.value-decoration {
  position: absolute;
  right: 16px;
  bottom: -16px;
  color: #f5f5fa;
  font-size: 72px;
  font-weight: 800
}

.jobs-section {
  background: #f8fafc
}

.text-link {
  color: var(--brand);
  font-size: 14px;
  font-weight: 700
}

.text-link span {
  margin-left: 7px
}

.company-strip {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 13px
}

.company-tile {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: #fff
}

.company-tile strong,
.company-tile span {
  display: block
}

.company-tile strong {
  font-size: 14px
}

.company-tile div:nth-child(2) span {
  margin-top: 4px;
  color: #64748b;
  font-size: 12px
}

.company-arrow {
  margin-left: auto;
  color: #aab3c1
}

.closing-cta {
  position: relative;
  overflow: hidden;
  padding: 55px 0;
  color: #fff;
  background: linear-gradient(120deg, #2727d3, #4c3bea 66%, #6b4de2)
}

.cta-inner {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px
}

.cta-inner h2 {
  margin: 12px 0 8px;
  color: #fff;
  font-size: 34px
}

.cta-inner p {
  margin: 0;
  color: #d6d5ff;
  font-size: 14px
}

.btn-light {
  color: #3636d7;
  background: #fff
}

.cta-sparkle {
  position: absolute;
  right: 23%;
  top: -60px;
  color: #ffffff14;
  font-size: 170px;
  pointer-events: none
}

@media(max-width:900px) {
  .hero-grid {
    grid-template-columns: 1fr 0.85fr;
    gap: 8px
  }

  .hero-copy h1 {
    font-size: 54px
  }

  .hero-search-field.location {
    display: none
  }

  .match-card {
    right: -3px
  }

  .company-strip {
    grid-template-columns: repeat(2, 1fr)
  }
}

@media(max-width:680px) {
  .hero-grid {
    grid-template-columns: 1fr;
    padding-top: 49px
  }

  .hero-copy h1 {
    font-size: 50px
  }

  .hero-search {
    flex-wrap: wrap
  }

  .hero-search-field {
    min-height: 43px
  }

  .hero-search .btn {
    width: 100%
  }

  .hero-visual {
    min-height: 330px;
    margin-top: 10px
  }

  .orbit-one {
    width: 290px;
    height: 210px
  }

  .orbit-two {
    width: 350px;
    height: 260px
  }

  .hero-glow {
    width: 240px;
    height: 240px
  }

  .featured-card {
    width: 250px;
    padding: 18px
  }

  .note-top {
    left: -4px;
    top: 14px
  }

  .note-bottom {
    left: -3px;
    bottom: 7px
  }

  .match-card {
    right: -5px;
    bottom: 12px
  }

  .trust-row {
    align-items: start;
    flex-direction: column;
    gap: 15px
  }

  .trust-logos {
    width: 100%;
    flex-wrap: wrap;
    gap: 16px;
    font-size: 14px
  }

  .value-grid {
    grid-template-columns: 1fr
  }

  .value-card {
    min-height: 165px
  }

  .company-strip {
    grid-template-columns: 1fr
  }

  .cta-inner {
    align-items: start;
    flex-direction: column
  }

  .cta-inner h2 {
    font-size: 29px
  }

  .cta-sparkle {
    right: 4%;
    top: -15px;
    font-size: 115px
  }
}
</style>
