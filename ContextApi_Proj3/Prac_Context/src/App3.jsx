import ThemeBtn2 from "./componentTheme/ThemeBtn2";
import ThemeBtn4 from "./componentTheme/ThemeBtn4";
import { ThemeProvider2, ThemeProvider4 } from "./contextTheme/ThemeContext2";

function App3() {
  return (
    <>

      <ThemeProvider2>
        <ThemeBtn2 />
      </ThemeProvider2>

      <ThemeProvider4>
        <ThemeBtn4 />
      </ThemeProvider4>

    </>
  );
}

export default App3;
