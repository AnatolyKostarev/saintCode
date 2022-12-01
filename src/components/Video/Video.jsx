import React, { useEffect, useRef } from 'react'
import clsx from 'clsx'
import s from './Video.module.sass'
import { Section } from '../../ui/Section'

export const Video = ({ className }) => {
  const videoRef = useRef(null)

  const callbackObserver = (entries) => {
    const [entry] = entries;
    (!entry.isIntersecting)
      ? videoRef.current.src = ''
      : videoRef.current.src = 'https://www.youtube.com/embed/b_dUmWip4_s'
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callbackObserver, { rootMargin: '300px 0px' })
    if (videoRef.current) observer.observe(videoRef.current)

    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current)
    }
  }, [videoRef])

  return (
    <Section className={clsx(s.Video, className)}>
      <div className={clsx(s.Video__container)}>
        <iframe
          ref={videoRef}
          width="960"
          height="540"
          src="https://www.youtube.com/embed/b_dUmWip4_s"
          title="Как стать фронтендером за 3 месяца? Изучай HTML, CSS, JS и React в буткемпе"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </Section>
  )
}
