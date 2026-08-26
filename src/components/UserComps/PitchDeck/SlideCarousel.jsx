import { useState } from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { MdChevronLeft, MdChevronRight } from "react-icons/md"
import SlideMock from "./SlideMock"

const SlideCarousel = ({ slides }) => {

    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <div className="bg-surface border border-outline-variant rounded-2xl p-4 space-y-4">
            <Carousel
                selectedItem={activeIndex}
                onChange={setActiveIndex}
                showThumbs={false}
                showStatus={false}
                showIndicators
                infiniteLoop
                useKeyboardArrows
                swipeable
                emulateTouch
                renderArrowPrev={(onClickHandler, hasPrev) => (
                    <button
                        onClick={onClickHandler}
                        disabled={!hasPrev}
                        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white center transition-colors duration-150 disabled:opacity-0"
                    >
                        <MdChevronLeft size={22} />
                    </button>
                )}
                renderArrowNext={(onClickHandler, hasNext) => (
                    <button
                        onClick={onClickHandler}
                        disabled={!hasNext}
                        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white center transition-colors duration-150 disabled:opacity-0"
                    >
                        <MdChevronRight size={22} />
                    </button>
                )}
                renderIndicator={(onClickHandler, isSelected, index, label) => (
                    <button
                        key={index}
                        onClick={onClickHandler}
                        aria-label={label}
                        className={`inline-block mx-1 rounded-full transition-all duration-200 ${isSelected ? "w-5 h-2 bg-primary" : "w-2 h-2 bg-outline-variant"
                            }`}
                    />
                )}
            >
                {slides.map((slide) => (
                    <div key={slide.id}>
                        <SlideMock slide={slide} />
                    </div>
                ))}
            </Carousel>

            <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {slides.map((slide, index) => (
                    <button
                        key={slide.id}
                        onClick={() => setActiveIndex(index)}
                        className={`shrink-0 w-16 h-10 rounded-lg border-2 center font-body-sm text-[10px] font-bold transition-colors duration-150 ${index === activeIndex
                            ? "border-primary text-primary bg-primary/5"
                            : "border-outline-variant text-on-surface-variant"
                            }`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default SlideCarousel