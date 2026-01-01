import CommandFlow from './CommandFlow'

export default function CodeStructure() {
  return (
    <>
        <div className="container border-x border-[#eeeef0]">
            <div className="px-4 py-0 font-bold text-[24px] sm:mx-5 md:mx-10 border-x border-[#eeeef0]">
                Code Structure flow
            </div>
        </div>
        <div className="container border-x border-t border-b border-[#eeeef0] overflow-hidden">
            <div className="py-2 px-4 text-[16px] sm:mx-5 md:mx-10 border-x border-[#eeeef0]">
                Manages code changes and flow.
            </div>
        </div>
        <div className="container border-x border-t border-b border-[#eeeef0] overflow-hidden">
            <CommandFlow />
        </div>
    </>
  )
}
