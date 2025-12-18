interface WorkStepParams {
    num: string,
    step: string,
    desc: string
}
const WorkStep = ({num,step,desc}: WorkStepParams) => {
  return (
    <div className="text-center flex flex-col items-center mb-4 md:m-0 shadow py-10 px-5 rounded-2xl">
            <div className="w-16 h-16 main-color text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-lg shadow-blue-200">
              {num}
            </div>
            <h3 className="text-xl font-bold main-text-color mb-3 tracking-wide">
              {step}
            </h3>
            <p className="text-slate-500 leading-relaxed">
              {desc}
            </p>
          </div>
  )
}

export default WorkStep
