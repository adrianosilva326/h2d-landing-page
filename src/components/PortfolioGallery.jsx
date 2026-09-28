import { useEffect, useId, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export function PortfolioGallery({ open, onClose, title, images, initialIndex = 0 }) {
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const triggerElementRef = useRef(typeof document === 'undefined' ? null : document.activeElement);
  const previousBodyOverflowRef = useRef('');
  const titleId = useId();
  const [currentIndex, setCurrentIndex] = useState(() => Math.min(Math.max(initialIndex, 0), Math.max(images.length - 1, 0)));

  useEffect(() => {
    const dialog = dialogRef.current;
    const triggerElement = triggerElementRef.current;

    if (!open || !dialog) return undefined;

    previousBodyOverflowRef.current = document.body.style.overflow;
    setCurrentIndex(Math.min(Math.max(initialIndex, 0), Math.max(images.length - 1, 0)));

    if (!dialog.open) dialog.showModal();
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    return () => {
      if (dialog.open) dialog.close();
      document.body.style.overflow = previousBodyOverflowRef.current;

      requestAnimationFrame(() => triggerElement?.focus());
    };
  }, [images.length, initialIndex, open]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleBackdropClick = (e) => {
    if (e.target === dialogRef.current) {
      onClose();
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    onClose();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goToPrevious();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      goToNext();
    } else if (e.key === 'Home') {
      e.preventDefault();
      setCurrentIndex(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      setCurrentIndex(images.length - 1);
    }
  };

  const currentImage = images[currentIndex];

  if (!currentImage) return null;

  return (
    <dialog ref={dialogRef} className="portfolio-gallery-modal" onClick={handleBackdropClick} onCancel={handleCancel} onKeyDown={handleKeyDown} aria-labelledby={titleId}>
      <div className="portfolio-gallery-container">
        <div className="portfolio-gallery-header">
          <h2 id={titleId} className="portfolio-gallery-title">{title}</h2>
        </div>

        <button ref={closeButtonRef} type="button" onClick={onClose} className="portfolio-gallery-close" aria-label="Fechar galeria">
          <X size={24} />
        </button>

        <div className="portfolio-gallery-main">
          <img src={currentImage.src} alt={currentImage.alt} className="portfolio-gallery-image" />
          {currentImage.caption && <p className="portfolio-gallery-caption">{currentImage.caption}</p>}
        </div>

        <div className="portfolio-gallery-controls">
          <button type="button" onClick={goToPrevious} className="portfolio-gallery-button portfolio-gallery-button--prev" aria-label="Imagem anterior">
            <ChevronLeft size={20} />
          </button>

          <div className="portfolio-gallery-counter" aria-live="polite" aria-atomic="true">
            {currentIndex + 1} / {images.length}
          </div>

          <button type="button" onClick={goToNext} className="portfolio-gallery-button portfolio-gallery-button--next" aria-label="Próxima imagem">
            <ChevronRight size={20} />
          </button>
        </div>

        {images.length > 1 && (
          <div className="portfolio-gallery-thumbnails">
            {images.map((img, idx) => (
              <button type="button" key={img.src} onClick={() => setCurrentIndex(idx)} className={`portfolio-gallery-thumbnail ${idx === currentIndex ? 'portfolio-gallery-thumbnail--active' : ''}`} aria-label={`Ver imagem ${idx + 1}: ${img.alt}`} aria-current={idx === currentIndex ? 'true' : undefined}>
                <img src={img.src} alt={`Miniatura: ${img.alt}`} className="portfolio-gallery-thumbnail-img" />
              </button>
            ))}
          </div>
        )}
      </div>
    </dialog>
  );
}
