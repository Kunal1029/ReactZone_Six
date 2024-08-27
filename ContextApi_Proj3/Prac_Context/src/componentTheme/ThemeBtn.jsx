import { useTheme } from "../contextTheme/ThemeContext";

function ThemeBtn() {
  const { ThemeMode , darkTheme , lightTheme } = useTheme();
  
  const handleChange = (e) =>{
    const darkModeStatus = e.currentTarget.checked;
    if(darkModeStatus){
        darkTheme();
    }else{
        lightTheme();
    }
    console.log(darkModeStatus)
  }

return (
    <div>
      <input value="" checked={ThemeMode === "black"} onChange={handleChange} type="checkbox"  />
      <span className="">
        Toggle Theme
      </span>
  </div>
  );

}

export default ThemeBtn;
