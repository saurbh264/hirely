<template>
  <div class="workspace-heading">
    <div>
      <h1>Manage your roles</h1>
      <p>Keep every opportunity moving in the right direction.</p>
    </div>
    <RouterLink class="btn btn-primary" to="/employer/jobs/new">＋ &nbsp; Post a new role</RouterLink>
  </div>
  <div class="job-stats">
    <div class="card mini-stat"><span>Active roles</span><strong>8</strong><small>Currently accepting</small></div>
    <div class="card mini-stat"><span>Drafts</span><strong>2</strong><small>Ready when you are</small></div>
    <div class="card mini-stat"><span>Applicants</span><strong>246</strong><small>Across all roles</small></div>
    <div class="card mini-stat"><span>Views this month</span><strong>3.8k</strong><small class="positive">↑ 12% this
        month</small></div>
  </div>
  <section class="card manage-panel">
    <div class="manage-toolbar">
      <div class="tabs"><button class="selected">All roles <i>10</i></button><button>Active
          <i>8</i></button><button>Drafts <i>2</i></button><button>Closed <i>4</i></button></div>
      <div class="toolbar"><label class="quick-search">⌕ <input placeholder="Search roles" /></label><button
          class="btn btn-outline btn-sm">☷ &nbsp; Filters</button></div>
    </div>
    <div class="table-wrap">
      <table class="data-table">
        <thead>
          <tr>
            <th>Role</th>
            <th>Status</th>
            <th>Applicants</th>
            <th>Views</th>
            <th>Posted</th>
            <th>Closes</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="role-title"><strong>Senior Brand Designer</strong><small>Design · Remote · Full-time</small>
              </div>
            </td>
            <td><span class="chip chip-green">● &nbsp;Active</span></td>
            <td><strong>48</strong> <small class="positive">+8</small></td>
            <td>1,248</td>
            <td>May 18</td>
            <td>Jun 18</td>
            <td><button class="dots">···</button></td>
          </tr>
          <tr>
            <td>
              <div class="role-title"><strong>Product Marketing Lead</strong><small>Marketing · Hybrid ·
                  Full-time</small></div>
            </td>
            <td><span class="chip chip-green">● &nbsp;Active</span></td>
            <td><strong>36</strong> <small class="positive">+3</small></td>
            <td>984</td>
            <td>May 22</td>
            <td>Jun 22</td>
            <td><button class="dots">···</button></td>
          </tr>
          <tr>
            <td>
              <div class="role-title"><strong>Senior Frontend Engineer</strong><small>Engineering · Remote ·
                  Full-time</small></div>
            </td>
            <td><span class="chip chip-green">● &nbsp;Active</span></td>
            <td><strong>29</strong></td>
            <td>756</td>
            <td>May 25</td>
            <td>Jun 25</td>
            <td><button class="dots">···</button></td>
          </tr>
          <tr>
            <td>
              <div class="role-title"><strong>People Operations Manager</strong><small>People · Remote ·
                  Full-time</small></div>
            </td>
            <td><span class="chip chip-green">● &nbsp;Active</span></td>
            <td><strong>18</strong> <small class="positive">+4</small></td>
            <td>614</td>
            <td>May 27</td>
            <td>Jun 27</td>
            <td><button class="dots">···</button></td>
          </tr>
          <tr>
            <td>
              <div class="role-title"><strong>Content Designer</strong><small>Design · Hybrid · Full-time</small></div>
            </td>
            <td><span class="chip chip-amber">◷ &nbsp;Draft</span></td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td><button class="dots">···</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="table-foot"><span>Showing <strong>5</strong> of <strong>10</strong> roles</span>
      <div><button class="pager">←</button><button class="pager current">1</button><button
          class="pager">2</button><button class="pager">→</button></div>
    </div>
  </section>
</template>
<style scoped>
.job-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  margin-bottom: 17px
}

.mini-stat {
  padding: 16px
}

.mini-stat span,
.mini-stat strong,
.mini-stat small {
  display: block
}

.mini-stat span {
  color: #64748b;
  font-size: 12px;
  font-weight: 650
}

.mini-stat strong {
  margin: 8px 0 5px;
  font-size: 22px;
  letter-spacing: -.04em
}

.mini-stat small {
  color: #64748b;
  font-size: 12px
}

.positive {
  color: #16834c !important
}

.manage-panel {
  overflow: hidden
}

.manage-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  padding: 17px 18px;
  border-bottom: 1px solid var(--line)
}

.tabs {
  display: flex;
  gap: 16px
}

.tabs button {
  padding: 4px 0;
  border: 0;
  color: #64748b;
  background: none;
  font-size: 12px;
  font-weight: 650
}

.tabs button.selected {
  color: var(--brand)
}

.tabs i {
  margin-left: 4px;
  padding: 3px 5px;
  border-radius: 7px;
  background: #f0efff;
  font-size: 12px;
  font-style: normal
}

.toolbar {
  display: flex;
  gap: 8px
}

.quick-search {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0 9px;
  border: 1px solid var(--line);
  border-radius: 9px;
  color: #64748b;
  font-size: 15px
}

.quick-search input {
  width: 110px;
  border: 0;
  outline: 0;
  font-size: 12px
}

.role-title strong,
.role-title small {
  display: block
}

.role-title strong {
  color: #0f172a;
  font-size: 12px
}

.role-title small {
  margin-top: 4px;
  color: #64748b;
  font-size: 12px
}

.manage-panel .chip {
  padding: 6px 8px;
  font-size: 12px
}

.manage-panel td>strong {
  color: #0f172a;
  font-size: 12px
}

.manage-panel td>small {
  font-size: 12px
}

.dots {
  border: 0;
  color: #64748b;
  background: none;
  font-size: 15px
}

.table-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 13px 17px;
  color: #64748b;
  font-size: 12px
}

.table-foot strong {
  color: #475569
}

.pager {
  width: 26px;
  height: 26px;
  border: 0;
  border-radius: 7px;
  color: #64748b;
  background: #fff;
  font-size: 12px
}

.pager.current {
  color: #fff;
  background: var(--brand)
}

@media(max-width:950px) {
  .job-stats {
    grid-template-columns: repeat(2, 1fr)
  }

  .manage-toolbar {
    align-items: start;
    flex-direction: column
  }

  .manage-panel .table-wrap {
    max-width: calc(100vw - 275px)
  }
}

@media(max-width:650px) {
  .job-stats {
    grid-template-columns: 1fr 1fr
  }

  .manage-toolbar {
    padding: 13px
  }

  .tabs {
    gap: 12px
  }

  .tabs button {
    font-size: 12px
  }

  .toolbar {
    width: 100%
  }

  .quick-search {
    flex: 1
  }

  .quick-search input {
    width: 100%
  }

  .manage-panel .table-wrap {
    max-width: calc(100vw - 34px)
  }

  .workspace-heading :deep(.btn) {
    width: 100%
  }
}
</style>
