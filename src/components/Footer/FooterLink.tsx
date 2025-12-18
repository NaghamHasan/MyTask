const FooterLink = ({name}:{name:string}) => {
  return (
    <a href="#" className="text-sm font-medium hover:text-gray-600 transition-colors tracking-wide">
          {name}
        </a>
  )
}

export default FooterLink
