


const Footer = () => {
  return (
    <div className="bg-[#161616] w-full text-center py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-[#887b7b] space-y-2 md:space-y-0">
        <div className="text-sm md:text-base text-center md:text-left">
          <h4>© 2024 Deepnetsoft Solutions. All rights reserved.</h4>
        </div>
        <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm md:text-base">
          <h4 className="cursor-pointer hover:text-white transition-colors">Terms & Conditions</h4>
          <h4 className="cursor-pointer hover:text-white transition-colors">Privacy Policy</h4>
        </div>
      </div>
    </div>
  )
}
export default Footer