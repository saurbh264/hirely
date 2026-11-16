<script setup>
import { jobs } from '@/data/mockData'
</script>
<template>
  <div class="workspace-heading">
    <div>
      <h1>Your saved roles</h1>
      <p>A collection of possibilities worth coming back to.</p>
    </div>
    <RouterLink class="btn btn-primary" to="/jobs">Discover more roles <span>→</span></RouterLink>
  </div>
  <div class="saved-toolbar">
    <div class="saved-tabs"><button class="active">All saved <span>8</span></button><button>Closing soon
        <span>2</span></button></div><label>Sort by <select>
        <option>Recently saved</option>
        <option>Newest roles</option>
      </select></label>
  </div>
  <div class="saved-grid">
    <article v-for="job in jobs.slice(0, 4)" :key="job.id" class="saved-card card">
      <div class="saved-card-head">
        <div class="icon-box" :style="{ color: job.color, background: job.tint, border: 0 }">{{ job.mark }}</div><button
          class="saved-heart" aria-label="Remove saved job">♥</button>
      </div><span class="company-name">{{ job.company }} <i>·</i> {{ job.location.split('·')[0] }}</span>
      <RouterLink :to="`/jobs/${job.id}`">
        <h3>{{ job.title }}</h3>
      </RouterLink>
      <div class="saved-tags"><span class="chip">{{ job.tags[0] }}</span><span class="chip">{{ job.tags[2] }}</span>
      </div>
      <div class="saved-card-foot">
        <div><strong>{{ job.salary }}</strong><span>per year</span></div><span class="posted">{{ job.posted }}</span>
      </div>
      <RouterLink :to="`/jobs/${job.id}`" class="btn btn-outline btn-sm view-role">View role <span>→</span></RouterLink>
    </article>
    <article class="saved-card card nudge-card">
      <div class="nudge-art"><span>✦</span><i></i><b></b></div>
      <h3>There’s more out there.</h3>
      <p>The right next step might be just around the corner. Keep exploring.</p>
      <RouterLink to="/jobs" class="btn btn-primary btn-sm">Explore jobs <span>→</span></RouterLink>
    </article>
  </div>
  <div class="saved-footnote"><span>♡</span> Saved roles stay here while you figure out what feels right.</div>
</template>
<style scoped>
.saved-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 17px
}

.saved-tabs {
  display: flex;
  gap: 19px
}

.saved-tabs button {
  padding: 8px 0;
  border: 0;
  color: #64748b;
  background: none;
  font-size: 12px;
  font-weight: 650
}

.saved-tabs button.active {
  color: var(--brand)
}

.saved-tabs span {
  margin-left: 4px;
  padding: 3px 6px;
  border-radius: 8px;
  color: #6f5bcc;
  background: #f1efff;
  font-size: 12px
}

.saved-toolbar>label {
  color: #64748b;
  font-size: 12px
}

.saved-toolbar select {
  border: 0;
  color: #475569;
  background: transparent;
  font-size: 12px;
  font-weight: 700
}

.saved-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px
}

.saved-card {
  padding: 19px
}

.saved-card-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px
}

.saved-card-head .icon-box {
  width: 42px;
  height: 42px
}

.saved-heart {
  width: 30px;
  height: 30px;
  border: 1px solid #f1eafa;
  border-radius: 9px;
  color: #9b62dc;
  background: #fbf8ff;
  font-size: 14px
}

.company-name {
  color: #64748b;
  font-size: 12px
}

.company-name i {
  margin: 0 3px;
  color: #c6cdd7;
  font-style: normal
}

.saved-card h3 {
  min-height: 42px;
  margin: 8px 0 13px;
  font-size: 14px
}

.saved-tags {
  display: flex;
  gap: 6px
}

.saved-tags .chip {
  padding: 6px 8px;
  font-size: 12px
}

.saved-card-foot {
  display: flex;
  align-items: end;
  justify-content: space-between;
  margin-top: 17px;
  padding-top: 13px;
  border-top: 1px solid #f0f2f6
}

.saved-card-foot strong,
.saved-card-foot span {
  display: block
}

.saved-card-foot strong {
  font-size: 12px
}

.saved-card-foot div span {
  margin-top: 3px;
  color: #64748b;
  font-size: 12px
}

.saved-card-foot .posted {
  color: #64748b;
  font-size: 12px
}

.view-role {
  width: 100%;
  margin-top: 14px;
  font-size: 12px
}

.nudge-card {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  background: linear-gradient(150deg, #f5f3ff, #fff 82%)
}

.nudge-art {
  position: relative;
  width: 85px;
  height: 80px;
  display: grid;
  place-items: center;
  margin-bottom: 15px;
  border-radius: 25px;
  color: #fff;
  background: linear-gradient(140deg, #8078f4, #a16ce7);
  font-size: 30px;
  box-shadow: 0 11px 22px #7e65d437;
  transform: rotate(-5deg)
}

.nudge-art i,
.nudge-art b {
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #fbbf73
}

.nudge-art i {
  right: -10px;
  top: 2px
}

.nudge-art b {
  left: -8px;
  bottom: 9px;
  width: 5px;
  height: 5px;
  background: #67c8b0
}

.nudge-card h3 {
  min-height: 0;
  margin: 0 0 8px
}

.nudge-card p {
  margin-bottom: 14px;
  color: #64748b;
  font-size: 12px;
  line-height: 1.7
}

.saved-footnote {
  display: flex;
  align-items: center;
  gap: 9px;
  margin-top: 20px;
  color: #64748b;
  font-size: 12px
}

.saved-footnote span {
  color: #a079e3;
  font-size: 15px
}

@media(max-width:900px) {
  .saved-grid {
    grid-template-columns: repeat(2, 1fr)
  }
}

@media(max-width:600px) {
  .saved-grid {
    grid-template-columns: 1fr
  }

  .saved-toolbar {
    align-items: start;
    flex-direction: column;
    gap: 10px
  }
}
</style>
