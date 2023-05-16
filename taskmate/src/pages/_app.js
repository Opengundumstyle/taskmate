import "@/styles/globals.css";
import Footer from "../components/Footer";



export default function App({ Component, pageProps }) {
  return (
      <div>
          <div className={`mb-auto w-full mx-auto`}>
           <Component {...pageProps} />
         </div>
         <Footer/>
       </div>
  )
  
     
}
