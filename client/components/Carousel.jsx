const Carousel = (props) => {

  const [currentImage, setCurrentImage] = React.useState(0);

  const refs = props.styles.reduce((acc, val, i) => {
    acc[i] = React.createRef();
    return acc;
  }, {});

  const scrollToImage = i => {
    setCurrentImage(i);
    refs[i].current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    });
  };

  const totalImages = props.styles.length;

  const nextImage = () => {
    if (currentImage >= totalImages - 1) {
      scrollToImage(0);
    } else {
      scrollToImage(currentImage + 1);
    }
  };

  const previousImage = () => {
    if (currentImage === 0) {
      scrollToImage(totalImages - 1);
    } else {
      scrollToImage(currentImage - 1);
    }
  };

  const arrowStyle =
    'absolute text-white text-2xl z-10 bg-black h-10 w-10 rounded-full opacity-75 flex items-center justify-center';
  const sliderControl = isLeft => (
    <button
      type="button"
      onClick={isLeft ? previousImage : nextImage}
      className={`${arrowStyle} ${isLeft ? 'left-2' : 'right-2'}`}
      style={{ top: '40%' }}
    >
      <span role="img" aria-label={`Arrow ${isLeft ? 'left' : 'right'}`}>
        {isLeft ? '◀' : '▶'}
      </span>
    </button>
  );

  return (
    <div className="p-12 flex justify-center w-screen md:w-1/2 items-center">
      <div className="relative w-full">
        <div className="carousel">
          {sliderControl(true)}
          {props.boolean ? 
          props.array.photos.map((element,index)=>{
            return (
              <div className="w-full flex-shrink-0" key={index} ref={refs[index]}>
              <img src={element.thumbnail_url} className="w-full object-contain" />
            </div>
            )}) :  props.styles.map((img, i) => (
              <div className="w-full flex-shrink-0" key={i} ref={refs[i]}>
                <img src={img.url} className="w-full object-contain" />
              </div>
            ))
          })
          {sliderControl()}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
