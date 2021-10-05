import _ from "lodash"

export default {
  data() {
    const bpLables = {
      XXXL: '$xxxlarge',
      XXL: '$xxlarge',
      XL: '$xlarge',
      LG: '$large',
      MD: '$medium',
      SM: '$small',
      XS: '$xsmall',
    }
    const bpWidths = {
      XXXL: 1500,
      XXL: 1200,
      XL: 1024,
      LG: 850,
      MD: 768,
      SM: 550,
      XS: 360,
    }
    return {
      currentWidth: 0,
      currentBreakPoint: '',
      throttleDelay: null,
      debounceDelay: null,
      breakPointLables: bpLables,
      breakPointWidths: bpWidths,
      breakPoints: [
        { label: bpLables.XXXL, width: bpWidths.XXXL },
        { label: bpLables.XXL, width: bpWidths.XXL },
        { label: bpLables.XL, width: bpWidths.XL },
        { label: bpLables.LG, width: bpWidths.LG },
        { label: bpLables.MD, width: bpWidths.MD },
        { label: bpLables.SM, width: bpWidths.SM },
        { label: bpLables.XS, width: bpWidths.XS },
      ],
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    debounce(delay) {
      const deb = _.debounce(() => {
        this.updateCurrentBreakPoint()
      }, delay)
      this.debounce = deb
      return deb()
    },
    throttle(delay) {
      const thr = _.throttle(() => {
        this.updateCurrentBreakPoint()
      }, delay)
      this.throttle = thr
      return thr()
    },
    updateCurrentBreakPoint() {
      let breakPoint = this.breakPoints[0].label
      const windowWidth = window.innerWidth
      for (const [i, bp] of Object.entries(this.breakPoints)) {
        if (windowWidth >= bp.width) {
          // nothing
        } else {
          breakPoint = bp.label
        }
      }
      this.currentWidth = windowWidth
      this.currentBreakPoint = breakPoint
    },
    onResize() {
      if (this.throttleDelay) {
        this.throttle(this.throttleDelay)
      }
      if (this.debounceDelay) {
        this.debounce(this.debounceDelay)
      }
      if (!this.throttleDelay && !this.debounceDelay) {
        this.updateCurrentBreakPoint()
      }
    },
    getCurrentBreakPoint(throttleDelay, debounceDelay) {
      this.throttleDelay = throttleDelay
      this.debounceDelay = debounceDelay
      window.addEventListener('resize', this.onResize)
      // call initially
      this.updateCurrentBreakPoint()
    },
  },
}
