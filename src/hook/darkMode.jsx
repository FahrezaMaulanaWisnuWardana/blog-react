export default DarkModeToggle = () => {
    const [isDark, setIsDark] = useState(localStorage.getItem("theme") === "dark" ? true : false);
    useEffect(() => {
      document
      .getElementsByTagName("HTML")[0]
      .setAttribute("data-theme", localStorage.getItem("theme"));
    },[])
}