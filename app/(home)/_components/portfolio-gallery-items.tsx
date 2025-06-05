// 'use client'

import React, { useState, useEffect } from 'react'
// import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from 'react-images'
import { gallery as galleryData } from '@/data'

interface Props {
    active: string
}

const PortfolioGalleryItems = ({
    active
}: Props) => {
    const [currentImage, setCurrentImage] = useState(0)
    const [viewerIsOpen, setViewerIsOpen] = useState(false)
    const [hasMounted, setHasMounted] = useState(false)

    useEffect(() => {
        setHasMounted(true)
    }, [])




    const filtered = active === 'all'
        ? galleryData
        : galleryData.filter(item => item.category === active)

    const photos = filtered.map(item => ({
        src: item.displayImage,
        width: item.width,
        height: item.height,
    }))

    const openLightbox = (_: any, { index }: { index: number }) => {
        setCurrentImage(index)
        setViewerIsOpen(true)
    }

    const closeLightbox = () => {
        setCurrentImage(0)
        setViewerIsOpen(false)
    }

    if (!hasMounted) return null

    return (
        <div>
            {/* <Gallery photos={photos} onClick={openLightbox} /> */}

            <ModalGateway>
                {viewerIsOpen && (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                            currentIndex={currentImage}
                            views={photos.map(x => ({ source: x.src }))}
                        />
                    </Modal>
                )}
            </ModalGateway>
        </div>
    )
}

export default PortfolioGalleryItems
