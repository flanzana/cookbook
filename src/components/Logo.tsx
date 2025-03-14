type Props = {
  width: string
  height: string
  className: string
}

/**
 * Logo of the page in svg format.
 * Note: it has to be in this format in order to set the logo's color via Tailwind. It cannot be set via Next.js Image or img tag.
 */
const Logo = ({ width, height, className }: Props) => (
  <svg width={width} height={height} viewBox="0 0 46 42" fill="currentColor" className={className}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M0 16.3902C0 21.5431 3.635 25.8074 8.36752 26.5272V40C8.36752 41.1046 9.26295 42 10.3675 42H35.4066C36.5111 42 37.4066 41.1046 37.4066 40V26.5587C42.2488 25.9424 46 21.6248 46 16.3902C46 10.7327 41.6181 6.14634 36.2128 6.14634C34.9809 6.14634 33.8022 6.38456 32.7163 6.81937C31.3701 2.84584 27.7473 0 23.4894 0C19.0926 0 15.373 3.03446 14.138 7.21163C12.8274 6.52976 11.3501 6.14634 9.78723 6.14634C4.38189 6.14634 0 10.7327 0 16.3902ZM27 37C36.1365 30.8355 30.6546 25.4415 27 29.2943C23.3454 25.4415 17.8635 30.8355 27 37Z"
    />
  </svg>
)

export default Logo
