export default {
  data() {
    return {
      currentBreakPoint: 0,
    }
  },
  methods: {
    getCurrentBreakPoint() {
      function reportWindowSize() {
        const windowWidth = window.innerWidth
        console.log('windowWidth = ', windowWidth)

        // $xsmall: 360px;
        // $small: 550px;
        // $medium: 768px;
        // $large: 850px;
        // $xlarge: 1024px;
        // $xxlarge: 1200px;
        // $xxxlarge: 1500px;

        return windowWidth
      }
      window.addEventListener('resize', () => {
        this.currentBreakPoint = reportWindowSize()
      })
      this.currentBreakPoint = reportWindowSize()
    },
  }
}
