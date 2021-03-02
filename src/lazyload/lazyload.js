const lazyLoad = () => {

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    }
    const target = document.querySelectorAll('.lazy');
    //console.log(target)
    const callback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.src = entry.target.dataset.src;
            observer.unobserve(entry.target)
        }
      }) 
    }
    const observer = new IntersectionObserver(callback, options)

    //do not observe when first loaded
    if (target) {
      target.forEach((tar) => {
        observer.observe(tar)
      })
    }
}
export default lazyLoad;