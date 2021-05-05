Curso Profesional de React Hooks - Platzi

Por ahora creamos una app con React con npx create-react-app y luego creamos las carpetas de src y dentro: components y context.

En components tenemos el header donde hay un boton que cambia a darkmode o lightmode cada vez que le das click.

En el componente de Characters tenemos la peticion a la API y hacemos el map por cada respeusta y renderizamos el nombre y la imagen del personaje.

Los Hooks que hemos visto hasta ahora son: useState => crea un estado dentro de arreglos por ejemplo [theme, setTheme] que lo extrae de = useState() y recibe como parametro el estado por default.

Tambien vimos useContext => para usarlo creamos una carpeta "context" y dentro el archivo ThemContext.js , envia informacion o estados de un componente a otro. Para usarlo, necesitamos crear una variable ThemeContext y es igual a React.createContext(null) y la exportamos default.

Luego importamos ThemeContext y lo usamos como una etiqueta para encapsular al componente que le queremos enviar informacion. </ThemeContext.Provide> y este lleva un propiedad 'value' donde ponemos lo que queremos enviar.

En este caso:
<ThemeContext.Provider value={{ theme, setTheme }}>

Acá estamos enviando el estado de useState que creamos:

const [theme, setTheme] = useState("lightmode");

De esta manera en Header.jsx podemos usar el estado creado en App.js destructurando el estado de App.js de la siguiente manera:

const { theme, setTheme } = useContext(ThemeContext);

Y podemos cambiar el background-color con la funcion handleClick() manejando el estado de App.js gracias a useContext(ThemeContext):

const handleClick = () => {
setDarkMode(!darkMode);
theme === "lightmode" ? setTheme("darkmode") : setTheme("lightmode");
};

Nota: useContext se usa con la etiqueta HTML y con la propiedad useContext en el componente que quiere usar los datos compartidos => useContext(ThemeContext);

---
