

export default function SelectButtons({labelList}) {

    const buttons = labelList.map((label, index) => {
        return <button className="selector" key={`${label}-${index}`}>{label}</button>
    })


  return (
    <>
        {buttons}
    </>
  )
}
