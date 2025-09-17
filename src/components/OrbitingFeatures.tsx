import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import OrbitalCircles from './OrbitalCircles'

interface FeatureProps {
  icon: string
  title: string
  description: string
  angle: number
  orbitRadius: number
  visible: boolean
  isDescriptionExpanded: boolean
}

const Feature = React.memo(
  ({
    icon,
    title,
    description,
    angle,
    orbitRadius,
    visible, // This will be true for the active feature
    isDescriptionExpanded,
  }: FeatureProps) => {
    const positionStyle = useMemo(() => {
      // Use a slightly elliptical path as per original styling
      const horizontalRadiusFactor = 1.2
      const verticalRadiusFactor = 0.75
      const featureRadiusX = orbitRadius * horizontalRadiusFactor
      const featureRadiusY = orbitRadius * verticalRadiusFactor

      return {
        left: `calc(50% + ${Math.cos((angle * Math.PI) / 180) * featureRadiusX}px)`,
        top: `calc(50% + ${Math.sin((angle * Math.PI) / 180) * featureRadiusY}px)`,
        transform: 'translate(-50%, -50%)',
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        transition: 'opacity 0.3s', // Keep opacity transition for smoothness if needed
      }
    }, [angle, orbitRadius, visible])

    const isLeftSide = angle > 90 && angle < 270
    const flexDirection = isLeftSide ? 'flex-row-reverse' : ''
    const imgClassName = isLeftSide ? 'ml-3' : 'mr-3'

    const descriptionFragments = useMemo(
      () =>
        description.split('<br />').map((line, i, arr) => (
          <React.Fragment key={i}>
            {line}
            {i < arr.length - 1 && <br />}
          </React.Fragment>
        )),
      [description]
    )

    const descriptionStyle: React.CSSProperties = {
      maxHeight: isDescriptionExpanded ? '80px' : '0px',
      opacity: isDescriptionExpanded ? 1 : 0,
      transition: 'max-height 0.5s ease-in-out, opacity 0.5s ease-in-out',
      overflow: 'hidden',
    }

    return (
      <div
        className="absolute feature-item"
        style={positionStyle as React.CSSProperties}
      >
        <div className={`flex items-center ${flexDirection}`}>
          <div className="flex-shrink-0">
            <Image
              src={icon}
              alt="Feature"
              width={48}
              height={48}
              className={imgClassName}
            />
          </div>
          <div className="text-center w-[280px]">
            <h3 className="text-white text-xl font-medium">{title}</h3>
            <div className="text-[#ffffff99]" style={descriptionStyle}>
              {descriptionFragments}
            </div>
          </div>
        </div>
      </div>
    )
  }
)

Feature.displayName = 'Feature'

const OrbitingFeatures: React.FC = () => {
  const features = useMemo(
    () => [
      {
        icon: '/images/img_frame_51_2.svg',
        title: 'Vitals',
        description:
          'Keep track of your important health metrics, all in one place',
      },
      {
        icon: '/images/img_frame_51_white_a700_48x48.svg',
        title: 'Chat Bot',
        description:
          'Get personalized health advice and support, whenever you need it',
      },
      {
        icon: '/images/img_frame_51_white_a700_48x48.svg',
        title: 'Chat Bot',
        description:
          'Get personalized health advice and support, whenever you need it',
      },
      {
        icon: '/images/img_frame_51_1.svg',
        title: 'Daily Target',
        description: 'Set daily health goals to stay motivated and on track',
      },
      {
        icon: '/images/img_frame_51_1.svg',
        title: 'Daily Target',
        description: 'Set daily health goals to stay motivated and on track',
      },
      {
        icon: '/images/img_frame_51_48x48.svg',
        title: 'Smart Health Assistant',
        description:
          'Receive insights and recommendations tailored to your health needs',
      },
      {
        icon: '/images/img_frame_51_48x48.svg',
        title: 'Smart Health Assistant',
        description:
          'Receive insights and recommendations tailored to your health needs',
      },
    ],
    []
  )

  // currentAngle now represents the progress of the *active* feature's animation (0 to 180)
  // 0: start (top of orbit), 90: midpoint (pause for description), 180: end (bottom of orbit)
  const [currentAngle, setCurrentAngle] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0) // Index of the currently animating feature

  const orbitRadius = 320 // Base radius for orbit calculation
  const animationRef = useRef<number>(0)
  const lastTimeRef = useRef<number>(0)

  const [isPausedForDescription, setIsPausedForDescription] = useState(false)
  const [showDescriptionState, setShowDescriptionState] = useState(false) // Controls description visibility

  const animate = useCallback(
    (time: number) => {
      if (isPausedForDescription) {
        lastTimeRef.current = time // Update lastTime to prevent jump when resuming
        animationRef.current = requestAnimationFrame(animate)
        return
      }

      if (!lastTimeRef.current) {
        lastTimeRef.current = time
        animationRef.current = requestAnimationFrame(animate)
        return
      }

      const deltaTime = time - lastTimeRef.current
      lastTimeRef.current = time

      if (deltaTime === 0) {
        animationRef.current = requestAnimationFrame(animate)
        return
      }

      // Each phase (top-to-midpoint, midpoint-to-bottom) takes 5 seconds for 90 degrees of currentAngle progress
      const phaseDuration = 5000 // ms for 90 degrees of progress
      const angleIncrement = (deltaTime / phaseDuration) * 90 // degrees of currentAngle to advance

      setCurrentAngle((prevProgressAngle) => {
        let nextProgressAngle = prevProgressAngle + angleIncrement
        const midpointProgress = 90 // currentAngle value for pause
        const endProgress = 180 // currentAngle value for end of this feature's animation

        // Check for pause at midpoint
        if (
          !showDescriptionState && // Only trigger if not already showing/paused
          prevProgressAngle < midpointProgress &&
          nextProgressAngle >= midpointProgress
        ) {
          setShowDescriptionState(true)
          setIsPausedForDescription(true)

          setTimeout(() => {
            setShowDescriptionState(false)
            setIsPausedForDescription(false)
            // Ensure animation continues from midpointProgress
            setCurrentAngle(midpointProgress)
          }, 3000) // 3 seconds pause duration

          return midpointProgress // Set angle to midpoint and pause
        }

        // Check for end of current feature's animation
        if (nextProgressAngle >= endProgress) {
          setActiveIndex(
            (prevActiveIdx) => (prevActiveIdx + 1) % features.length
          )
          setShowDescriptionState(false) // Reset for next feature
          setIsPausedForDescription(false) // Reset for next feature
          return 0 // New feature starts its currentAngle (progress) from 0
        }

        return nextProgressAngle
      })

      animationRef.current = requestAnimationFrame(animate)
    },
    [isPausedForDescription, showDescriptionState, features.length, activeIndex]
  )

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate)
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [animate])

  const featureComponents = useMemo(() => {
    if (features.length === 0) return null

    const activeFeatureData = features[activeIndex]
    if (!activeFeatureData) return null // Should not happen with correct activeIndex

    // Map currentAngle (0-180 progress) to display angle for Feature component
    // Feature component angles: 270=Top, 0=Right, 90=Bottom, 180=Left
    // Our animation:
    // currentAngle 0 (start) -> displayAngle 270 (Top)
    // currentAngle 90 (midpoint) -> displayAngle 0 (Right - for description pause)
    // currentAngle 180 (end) -> displayAngle 90 (Bottom)
    let displayAngle
    if (currentAngle <= 90) {
      // Mapping 0-90 progress to 270-360(0) display angle
      displayAngle = 270 + currentAngle
    } else {
      // Mapping 90-180 progress to 0-90 display angle
      displayAngle = currentAngle - 90
    }
    displayAngle %= 360

    return (
      <Feature
        key={activeFeatureData.title} // Use a unique part of feature data for key
        icon={activeFeatureData.icon}
        title={activeFeatureData.title}
        description={activeFeatureData.description}
        angle={displayAngle}
        orbitRadius={orbitRadius}
        visible={true} // The active feature is always visible
        isDescriptionExpanded={showDescriptionState} // Expand based on pause state
      />
    )
  }, [features, activeIndex, currentAngle, orbitRadius, showDescriptionState])

  const phoneUI = useMemo(
    () => (
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <Image
            src="/images/img_device_most_outer_border.png"
            alt="iPhone Border"
            width={675}
            height={327}
            className="rounded-[56px]"
          />
          <Image
            src="/images/img_bezel.png"
            alt="iPhone Bezel"
            width={665}
            height={318}
            className="absolute top-0 left-0 rounded-[56px]"
          />
          <div className="absolute top-3 left-3 rounded-[30px] h-[690px] w-[320px] overflow-hidden">
            <Image
              src="/images/img_frame_70.png"
              alt="iPhone Screen"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-[94px] h-[27px] bg-black rounded-[13px] flex items-center justify-end pr-2">
            <Image
              src="/images/img_camera.png"
              alt="Camera"
              width={14}
              height={14}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    ),
    []
  )

  return (
    <div className="relative">
      <OrbitalCircles className="mx-auto" />
      <div className="absolute top-0 left-0 w-full h-full">
        {featureComponents} {/* This will now render only the active feature */}
      </div>
      {phoneUI}
    </div>
  )
}

export default OrbitingFeatures
