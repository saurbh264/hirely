<template>
  <section class="not-found">
    <div class="container not-found-inner">
      <div class="illustration">
        <div class="sun">✦</div>
        <div class="path"></div>
        <div class="shape shape-one">?</div>
        <div class="shape shape-two"></div>
        <div class="shape shape-three"></div>
        <div class="tiny-star star-one">✦</div>
        <div class="tiny-star star-two">✧</div>
        <div class="tiny-star star-three">✧</div>
        <div class="ground"></div>
      </div>
      <div class="eyebrow"><span class="eyebrow-dot"></span>A small detour</div>
      <h1>Well, this is<br /><span>unexpected.</span></h1>
      <p class="lead">Looks like this page wandered off. Let’s get you back to something good.</p>
      <div class="not-found-actions">
        <RouterLink to="/" class="btn btn-primary">Back to home <span>→</span></RouterLink>
        <RouterLink to="/jobs" class="btn btn-outline">Explore open roles</RouterLink>
      </div><small>404 · Page not found</small>
    </div>
  </section>
</template>
<style scoped>
.not-found {
  min-height: calc(100vh - 76px);
  display: grid;
  place-items: center;
  padding: 36px 0;
  background: radial-gradient(ellipse at 50% 37%, #f3f1ff 0, #fff 51%)
}

.not-found-inner {
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center
}

.illustration {
  position: relative;
  width: 250px;
  height: 190px;
  margin-bottom: 25px
}

.sun {
  position: absolute;
  top: 9px;
  left: 43px;
  color: #f0b867;
  font-size: 31px
}

.path {
  position: absolute;
  left: 46px;
  top: 79px;
  width: 160px;
  height: 62px;
  border: 2px dashed #c9c0f8;
  border-bottom: 0;
  border-radius: 80px 80px 0 0;
  transform: rotate(-6deg)
}

.shape {
  position: absolute;
  z-index: 1;
  display: grid;
  place-items: center;
  box-shadow: 0 10px 24px #6053c522
}

.shape-one {
  left: 91px;
  top: 48px;
  width: 72px;
  height: 72px;
  border-radius: 23px;
  color: #fff;
  background: linear-gradient(145deg, #7770f5, #5c48d8);
  font-size: 38px;
  font-weight: 800;
  transform: rotate(-8deg)
}

.shape-two {
  right: 23px;
  top: 83px;
  width: 31px;
  height: 31px;
  border-radius: 10px;
  background: #ffdab7;
  transform: rotate(17deg)
}

.shape-three {
  left: 41px;
  top: 116px;
  width: 25px;
  height: 25px;
  border-radius: 8px;
  background: #bcebd9;
  transform: rotate(-15deg)
}

.tiny-star {
  position: absolute;
  color: #9483ec
}

.star-one {
  right: 44px;
  top: 26px;
  font-size: 16px
}

.star-two {
  left: 17px;
  top: 77px;
  font-size: 22px
}

.star-three {
  right: 6px;
  top: 135px;
  font-size: 20px
}

.ground {
  position: absolute;
  right: 20px;
  bottom: 18px;
  left: 20px;
  height: 1px;
  background: #e7e4f7
}

.not-found h1 {
  margin: 13px 0;
  font-size: 45px
}

.not-found h1 span {
  color: var(--brand)
}

.not-found .lead {
  max-width: 400px;
  margin-bottom: 21px;
  font-size: 14px
}

.not-found-actions {
  display: flex;
  gap: 9px
}

.not-found-inner>small {
  margin-top: 25px;
  color: #64748b;
  font-size: 12px;
  letter-spacing: .12em
}

@media(max-width:600px) {
  .not-found h1 {
    font-size: 38px
  }

  .illustration {
    transform: scale(.9);
    margin-bottom: 8px
  }

  .not-found-actions {
    width: 100%;
    flex-direction: column
  }

  .not-found-actions .btn {
    width: 100%
  }
}
</style>
