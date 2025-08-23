import brandlogo from '../../assets/brand-logo.svg'

interface BrandLogoProps {
  className?: string;
}

function BrandLogo({ className = "", }: BrandLogoProps) {
  return (
    <img 
      src={brandlogo} 
      alt="Logoipsum.com" 
      className={className}
    />
  )
}

export default BrandLogo