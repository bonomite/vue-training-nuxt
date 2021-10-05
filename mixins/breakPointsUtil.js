export default {
  data() {
    const breakPointLables = {
      XXXL: '$xxxlarge',
      XXL: '$xxlarge',
      XL: '$xlarge',
      LG: '$large',
      MD: '$medium',
      SM: '$small',
      XS: '$xsmall',
    }
    return {
      currentWidth: 0,
      currentBreakPoint: '',
      breakPoints: [
        { label: breakPointLables.XXXL, width: 1500 },
        { label: breakPointLables.XXL, width: 1200 },
        { label: breakPointLables.XL, width: 1024 },
        { label: breakPointLables.LG, width: 850 },
        { label: breakPointLables.MD, width: 768 },
        { label: breakPointLables.SM, width: 550 },
        { label: breakPointLables.XS, width: 360 },
      ],
    }
  },
  methods: {
    getCurrentBreakPoint() {
      const reportWindowSize = () => {
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
      }
      window.addEventListener('resize', reportWindowSize)
      reportWindowSize()
    },
  },
}
