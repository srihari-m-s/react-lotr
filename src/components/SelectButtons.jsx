import { useDispatch } from "react-redux";
import { setSelection } from "../redux/features/selectionSlice";

export default function SelectButtons({labelList}) {

  const dispatch = useDispatch();

  function handleClick(e){
    let value = e.target.value;
    value = value.slice(0, value.length - 1).toLowerCase();

    dispatch(setSelection(value));
  }

    const buttons = labelList.map((label, index) => {
        return <button className="selector" key={`${label}`} value={label} onClick={e => handleClick(e)}>{label}</button>
    })


  return (
    <>
        {buttons}
    </>
  )
}
