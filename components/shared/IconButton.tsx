interface ButtonProps {
  link?: string
  buttonText?: string
}

export default function IconButton({ link, buttonText }: ButtonProps) {
  return (
    <a
      href={link}
      className="flex flex-row gap-4 text-white font-arbiet text-lg hover:underline group align-center hover:text-ion-400 transition-all"
    >
      {buttonText}
      <svg
        className="group-hover:scale-125 relative transition-all "
        xmlns="http://www.w3.org/2000/svg"
        width="8"
        height="8"
        viewBox="0 0 12 12"
        fill="none"
      >
        <path
          d="M0.923077 0V1.84615H8.85231L0 10.6985L1.30154 12L10.1538 3.14769V11.0769H12V0H0.923077Z"
          fill="white"
        />
      </svg>
    </a>
  )
}
